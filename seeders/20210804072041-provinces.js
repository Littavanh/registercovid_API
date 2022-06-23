"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('provinces', [
       { name: 'ນະຄອນຫຼວງວຽງຈັນ', section: 'center'}, // 1
       { name: 'ຜົ້ງສາລີ', section: 'north'}, // 2
       { name: 'ຫຼວງນ້ຳທາ', section: 'north'}, // 3
       { name: 'ອຸດົມໄຊ', section: 'north'}, // 4
       { name: 'ບໍ່ແກ້ວ', section: 'north'}, // 5
       { name: 'ຫຼວງພະບາງ', section: 'north'}, // 6
       { name: 'ຫົວພັນ', section: 'north'}, // 7
       { name: 'ໄຊຍະບູລີ', section: 'north'}, // 8
       { name: 'ຊຽງຂວາງ', section: 'north'}, // 9
       { name: 'ວຽງຈັນ', section: 'center'}, // 10
       { name: 'ບໍລິຄຳໄຊ', section: 'center'}, // 11
       { name: 'ຄຳມ່ວນ', section: 'center'}, // 12
       { name: 'ສະຫວັນນະເຂດ', section: 'center'}, // 13
       { name: 'ສາລະວັນ', section: 'south'}, // 14
       { name: 'ເຊກອງ', section: 'south'}, // 15
       { name: 'ຈຳປາສັກ', section: 'south'}, // 16
       { name: 'ອັດຕະປື', section: 'south'}, // 17
       { name: 'ໄຊສົມບູນ', section: 'center'}, // 18
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('provinces', null, {});
  },
};
