const db = require("../../../models");
const { Post } = db;
const fs = require('fs');
const path = require("path");

module.exports = {

    getAllPost: async (req, res, next) => {

        try {
            
            let post = await Post.findAll(
                {
                    where: {
                        isDelete: "no"
                    }
                }
            );

            if (post) 
                res.status(200).json({ post });
            else 
                res.status(404).json({ message: "ບໍ່ພົບຂໍ້ມູນ" });

        } catch (error) {
            next(error);
        }

    },

    getPostById: async (req, res, next) => {

        try {
            
            let post = await Post.findOne(
                {
                    where: {
                        id: req.params.postId,
                        isDelete: "no"
                    }
                }
            );

            if (post) 
                res.status(200).json( post );
            else 
                res.status(404).json({ message: "ບໍ່ພົບຂໍ້ມູນ" });

        } catch (error) {
            next(error);
        }

    },

    createPost: async (req, res, next) => {

        const t = await db.sequelize.transaction()

        try {

            const { name, detail } = req.body;
            
            let img = req.file ? req.file.filename : null;

            let post = await Post.create(
                {
                    name,
                    image: img,
                    detail
                },
                {
                    transaction: t
                }
            );

            if(!post || post.length === 0){
                const error = new Error("ໃສ່ຂໍ້ມູນບໍ່ຄົບຖ້ວນ");
                error.status = 400;
                throw error;
            }

            await t.commit();

            res.status(201).json({
                message: "ເພີ່ມຂໍ້ມູນຂ່າວສານສໍາເລັດ"
            });

        } catch (error) {
            await t.rollback();
            next(error);
        }

    },

    updatePost: async (req, res, next) => {

        const t = await db.sequelize.transaction()

        try {

            const { postId, name, detail } = req.body;

            let post = await Post.findOne(
                {
                    where: {
                        id: postId,
                        isDelete: "no"
                    }
                },
                { 
                    transaction: t
                }
            );

            if(!post || post.length === 0){ 
                const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
                error.status = 400;
                throw error;
            }

            let img;

            if(req.file){

                img = req.file.filename;

                if(post.image !== null){

                    var filePath = path.join( __dirname + `../../../../uploads/images/` + post.image );
                
                    if(fs.existsSync(filePath)){
                        fs.unlinkSync(filePath);
                    }  

                }

            }else{

                img = post.image;

            }

            await post.update(
                {
                    name,
                    image:img,
                    detail
                },
                {
                    transaction: t
                }
            );

            await t.commit();

            res.status(200).json({
                message: "ແກ້ໄຂຂໍ້ມູນຂ່າວສານສໍາເລັດ"
            });
            
        } catch (error) {
            await t.rollback();
            next(error);
        }

    },

    deletePost: async (req, res, next) => {

        const t = await db.sequelize.transaction()

        try {

            const postId = req.params.postId;

            let post = await Post.findOne(
                {
                    where: {
                        id: postId,
                        isDelete: "no"
                    }
                },
                { 
                    transaction: t
                }
            );

            if(!post || post.length === 0){ 
                const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
                error.status = 400;
                throw error;
            }

            if(post.image !== null){

                let filePath = path.join( __dirname + `../../../../uploads/images/` + post.image );
            
                if(fs.existsSync(filePath)){
                    fs.unlinkSync(filePath);
                }  

            }

            await post.update(
                {
                    isDelete: "yes"
                },
                {
                    transaction: t
                }
            );

            await t.commit();

            res.status(200).json({
                message: "ລົບຂໍ້ມູນຂ່າວສານສໍາເລັດ"
            });
            
        } catch (error) {
            await t.rollback();
            next(error);
        }

    }

}