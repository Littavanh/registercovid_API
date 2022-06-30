'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('vaccinationsites',
      [
        // 1. ນະຄອນຫຼວງວຽງຈັນ
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '01 MVS Vientiane C (01 MVS Vientiane C)'}, // 1
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝສ ມະໂຫສົດ (ໂຮງໝໍສູນກາງ)'}, // 2
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝສ ມິດຕະພາບ (ໂຮງໝໍສູນກາງ)'}, // 3
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝສ ແມ່ ແລະ ເດັກ (ໂຮງໝໍສູນກາງ)'}, // 4
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ວັດຈີນ ດົງປ່າແຫລບ (MVS)'}, // 5
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0103 MVS Xaisettha'}, // 6
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ນະຄອນຫຼວງ ວຽງຈັນ  (ໂຮງໝໍທະຫານ)'}, // 7
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ສູນການຄ້າ ລ່າວ-ໄອເຕັກ(ITECC)'}, // 8
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝສ ເຊດຖາທີຣາດ (ໂຮງໝໍສູນກາງ)'}, // 9
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ໂຮງໝໍເດັກ (ບ້ານໂພນສະຫວ່າງ, ເມືອງຈັນທະບູລີ, ແຂວງນະຄອນຫຼວງວຍງຈັນ (ຂ້າງໂຮງໝໍມິດຕະພາບ 150 ຕຽງ))'}, // 6
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ສູນການແພດຟື້ນຟູໜ້າທີ່ການ (ໂຮງໝໍສູນກາງ)'}, // 7
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ 103 (ໂຮງໝໍທະຫານ)'}, // 8
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຕ 5 ເມສາ (ໂຮງໝໍຕຳຫຼວດ)'}, // 9
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຈັນທະບູລີ (ໂຮງໝໍຊຸມຊົນ)'}, // 6
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0102 MVS Sikhottabong'}, // 7
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ສີໂຄດຕະບອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 8
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໄຊເສດຖາ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0104 MVS Sisattanak'}, // 6
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ສີສັກຕະນາກ (ໂຮງໝໍຊຸມຊົນ)'}, // 7
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0105 MVS Naxaythong'}, // 8
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ນາຊາຍທອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0106 MVS Xaithani'}, // 7
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໄຊທານີ (ໂຮງໝໍຊຸມຊົນ)'}, // 8
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0107 MVS Hatsayfong'}, // 9
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຫາດຊາຍຟອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 6
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0108 MVS Sangthong'}, // 7
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ສັງທອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 8
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0109 MVS Pakgum'}, // 9
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ  ປາກງືມ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: ''}, // 9
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: ''}, // 9
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: ''}, // 9
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: ''}, // 9
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: ''}, // 9
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: ''}, // 9
        { provinceId: 1, districtId:1, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: ''}, // 9
        // 2. ຜົ້ງສາລີ
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '02 MVS Phongsali'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ຜົ້ງສາລິ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ຜົ້ງສາລິ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຜົ້ງສາລິ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0202 MVS Mai'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໃໝ່ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0203 MVS Khoua'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຂວາ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0204 MVS Samphan'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ສຳພັນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0205 MVS Bounnua'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ສບມ ບຸນເໜືອ (ສູນບໍລະການເມືອງ)'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0206 MVS Nyot-ou'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຍອດອູ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0207 MVS Bountai'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ບຸນໃຕ້ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 2, districtId:2, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '02021 MVS Phongsaili'}, // 9
        // 3. ຫຼວງນໍ້າທາ
        { provinceId: 3, districtId:3, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '03 MVS Louangnamtha'}, // 9
        { provinceId: 3, districtId:3, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຕ ຫຼວງນ້ຳທາ (ໂຮງໝໍຕຳຫຼວດ)'}, // 9
        { provinceId: 3, districtId:3, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ຫຼວງນ້ຳທາ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 3, districtId:3, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ຫຼວງນ້ຳທາ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 3, districtId:3, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0301 MVS Namtha'}, // 9
        { provinceId: 3, districtId:3, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0302 MVS Sing'}, // 9
        { provinceId: 3, districtId:3, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ສີງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 3, districtId:3, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0303 MVS Long'}, // 9
        { provinceId: 3, districtId:3, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ລອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 3, districtId:3, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0304 MVs Viangphoukha'}, // 9
        { provinceId: 3, districtId:3, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ວຽງພູຄາ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 3, districtId:3, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0305 MVS Naleh'}, // 9
        { provinceId: 3, districtId:3, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ນາແລ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        // 4. ອຸດົມໄຊ
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '04 MVS Oudomxai'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຕ ອຸດົມໄຊ (ໂຮງໝໍຕຳຫຼວດ)'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ອຸດົມໄຊ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0401 MVS Xai'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ສບມ ໄຊ (ສູນບໍລິການເມືອງ)'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0402 MVS La'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0403 MVS Namoh'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ອຸດົມໄຊ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຫຼາ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ນາໝໍ້ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0404 MVS Nga'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ງາ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0405 MVS Beng'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ແບງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0406 MVS Houn'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0407 MVS Pakbeng'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ກອງພົນທີ 3 (ອຸດົມໄຊ) (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຮຸນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 4, districtId:4, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ປາກແບງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        // 5. ບໍ່ແກ້ວ
        { provinceId: 5, districtId:5, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '05 MVS Bokeo'}, // 9
        { provinceId: 5, districtId:5, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ບໍ່ແກ້ວ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 5, districtId:5, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0501 MVS Houayxay'}, // 9
        { provinceId: 5, districtId:5, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຫ້ວບ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 5, districtId:5, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0502 MVS Tonpheung'}, // 9
        { provinceId: 5, districtId:5, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຕົ້ນເຜີ້ງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 5, districtId:5, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0503 MVS Meung'}, // 9
        { provinceId: 5, districtId:5, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ເມິງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 5, districtId:5, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0504 MVS Pha-oudom'}, // 9
        { provinceId: 5, districtId:5, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ບໍ່ແກ້ວ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 5, districtId:5, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຜາອຸດົມ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 5, districtId:5, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0505 MVS Paktha'}, // 9
        { provinceId: 5, districtId:5, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ປາກທາ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        // 6. ຫຼວງພະບາງ
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ພະແນກສາທາແຂວງ (ຕືກສົ້ງ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0604 MVS Pak-ou'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0606 MVS Ngoy'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຫ້ອງການສາທາເມືອງ ຈອມເພັດ'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຫ້ອງການສາທາເມືອງ ຊຽງເງີນ'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຫ້ອງການສາທາເມືອງ ນານ'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຫ້ອງການສາທາ ນະຄອນຫຼວງພະບາງ'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຫ້ອງການສາທາເມືອງ ພູຄູນ'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ຫຼວງພະບາງ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ຫຼວງພະບາງ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຫຼວງພະບາງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຊຽງເງີນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ນານ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ປາກອູ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0605 MVS Nambak'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ນ້ຳບາກ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ງອຍ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0607 MVS Pakxeng'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ປາກແຊງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໂພນໄຊ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຈອມເພັດ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຈອມເພັດ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '06010 MVS Viangkham'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ວຽງຄຳ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ພູຄູນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '06012 MVS Phongthong'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໂພນທອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 6, districtId:6, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຫ້ອງການສາທາເມືອງ ໂພນໄຊ'}, // 9
        // 7. ຫົວພັນ
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ຫົວພັນ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '07 MVS Houaphan'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ຫົວພັນ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0701 MVS Xamnua'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0702 MVS Xiangkhoh'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0703 MVS Hiam'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຮ້ຽມ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0704 MVS Viangxai'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ວຽງໄຊ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0705 MVS Houamuang'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຫົວເມືອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0706 MVS Xamtai'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຊຳໃຕ້ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0707 MVS Sopbao'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ສົບເບົາ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0708 MVS Et'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ແອດ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0709 MVS Xon'}, // 9
        { provinceId: 7, districtId:7, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຊອນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        // 8. ໄຊຍະບູລີ
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '08 MVS Xaiyabouli'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ໄຊຍະບູລີ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0801 MVS Xaiyabouli'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ສບມ ໄຊຍະບູລີ (ສູນບໍລິການ)'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0802 MVS Khop'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຄອບ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0803 MVS Hongsa'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຫົງສາ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0804 MVS Ngeun'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ເງີນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0805 MVS Xianghon'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຊຽງຮອນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0806 MVS Phiang'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ພຽງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0807 MVS Paklay'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ປາກລາຍ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0808 MVS Kenthao'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ແກນທ້າວ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0809 MVS Boten'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ບໍ່ແຕນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '08010 MVS thongmixai'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ກອງພົນທີ່ 2 (ໄຊຍະບູລີ) (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ທົ່ງມີໄຊ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0811 MVS Xaisathan'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: ' ຮໝຊ ໄຊສະຖານ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ໄຊຍະບູລີ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 8, districtId:8, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: ''}, // 9
        // 9. ຊຽງຂວາງ
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ 101 (ຊຽງຂວາງ) (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '09 MVS Xiangkhouang'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ຊຽງຂວາງ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0901 MVS Pek'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ສບມ ແປກ (ສູນບໍລິການເມືອງ)'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0902 MVS Kham'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຄຳ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0903 MVS Nonghet'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໜອງແຮດ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0904 MVS Khoun'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຄູນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0905 MVS Mok'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໝອກ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0906 MVS Phoukout'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '0907 MVS Phaxai'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ຊຽງຂວາງ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ພູກູດ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 9, districtId:9, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຜາໄຊ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        // 10. ວຽງຈັນ
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '10 MVS Vientiane'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ວຽງຈັນ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1001 MVS Phonhong'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1002 MVS Thoulakhom'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1003 MVS Keo-oudom'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1005 MVS Vangviang'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1009 MVS Viangkham'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ວຽງຈັນ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໂພນໂຮງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ທຸລະຄົມ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ແກ້ວອຸດົມ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1004 MVS Kasi'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ກາສີ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ວັງວຽງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1006 MVS Fuang'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ເຟືອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1007 MVS Xanakham'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຊະນະຄາມ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1008 MVS Met'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ແມດ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ວຽງຄຳ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1010 MVS Hinheup'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ເຫີນເຫີບ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1011 MVS Mun'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໝືນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 10, districtId:10, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: ''}, // 9
        // 11. ບໍລິຄໍາໄຊ
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '11 MVS Bolikhamxai'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ບໍລິຄຳໄຊ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1101 MVS Pakxan'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ສບມ ປາກຊັນ (ສູນບໍລິການເມືອງ)'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1102 MVS Thaphabat'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ບໍລິຄໍາໄຊ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ທາພະບາດ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1103 MVS Pakkading'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ປາກກະດິງ (ໂຮງໝໍຊຸມຊົນ )'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1104 MVS Bolikhan'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຣອຊ ບໍລິຄັນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1105 MVS Khamkeut'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຄຳເກີດ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1106 MVS Viangthong'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝາ ວຽງທອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1107 MVS Xaichamphon'}, // 9
        { provinceId: 11, districtId:11, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໄຊພອນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        // 12. ຄໍາມ່ວນ
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ຄຳມ່ວນ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝດ ຄຳມ່ວນ (ໂຮງໝໍຕຳຫຼວດ)'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '12 MVS Khammouan'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ຄຳມ່ວນ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1201 MVS Thakhek'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ສບມ ທ່າແຂກ (ສູນບໍລິການເມືອງ)'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1202 MVS Mahaxai'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ມະຫາໄຊ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1203 MVS Nongbok'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໜອງບົກ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1204 MVS Hinboun'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮຜຊ ຫີນບູນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1205 MVS Nyommalat'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຍົມມະລາດ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1206 MVS Boualapha'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ບົວລະພາ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1207 MVS Nakay'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ນາກາຍ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1208 MVS Xebangfai'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ເຊບັ້ງໄຟ (ໂຮງໝໍຊຸມຊົນ) '}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1209 MVS Xaibouathong'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໄຊບົວທອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1210 MVS Khounkham'}, // 9
        { provinceId: 12, districtId:12, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຄູນຄຳ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        // 13. ສະຫວັນນະເຂດ
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ 109 (ສະຫວັນນະເຂດ) (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '13 MVS Savannakhet'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ສະຫວັນນະເຂດ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1301 MVS Kaysone'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1302 MVS Outhoumphon'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ອຸທຸມພອນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1303 MVS Atsaphangthong'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮບຊ ອາດສະພັງທອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1304 MVS Phin'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ພື້ນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1305 MVS Xepon'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ເຊໂປນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1306 MVS Nong'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ນອງ (ໂຮງໝໍຊມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1307 MVS Thapangthong'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1308 MVS Songkhon'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1310 MVS Xonbouli'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1315 MVS Phalaxai'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຕ ສະຫວັນນະເຂດ (6 ມິຖຸນາ) (ໂຮງໝໍຕຳຫຼວດ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໄກສອນພົມວິຫານ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ທາປາງທອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ສອງຄອນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1309 MVS Champhon'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຈຳພອນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຊົນບູລີ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1311 MVS Xaibouli'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໄຊບູລີ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1312 MVS Vilabouli'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ວິລະບູລີ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1313 MVS Atsaphon'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ອາດສະພອນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1314 MVS Xaiphouthong'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ສະຫວັນນະເຂດ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໄຊພູທອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ພະລານໄຊ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 13, districtId:13, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: ''}, // 9
        // 14. ສາລະວັນ
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '14 MVS Salavan'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ສາລະວັນ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1401 MVS Salavan'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ສບມ ສາລະວັນ (ສູນບໍລິການເມືອງ)'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1402 MVS Ta-oy'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຕະໂອ້ຍ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1403 MVS!Toumlan'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຄຸ້ມລານ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1404 MVS Lakhonpheng'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ລະຄອນເພັງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1405 MVS Vapi'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ວາປີ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1406 MVS Khongxedon'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1407 MVS Lao-ngam'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1408 MVS Samouay'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຕ ສາລະວັນ (ໂຮງໝໍຕຳຫຼວດ)'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ສາລະວັນ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຄົງເຊໂດນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໜໝ ເຈົ້າງາມ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ສະມວຍ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 14, districtId:14, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: ''}, // 9
        // 15. ເຊກອງ
        { provinceId: 15, districtId:15, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '15 MVS Xekong,'}, // 9
        { provinceId: 15, districtId:15, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ເຊກອງ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 15, districtId:15, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1501 MVS Lamam '}, // 9
        { provinceId: 15, districtId:15, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ສບມ ລະມາມ (ສູນບໍລິການເມືອງ) '}, // 9
        { provinceId: 15, districtId:15, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1502 MVS Kalum'}, // 9
        { provinceId: 15, districtId:15, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ກະລືມ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 15, districtId:15, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1503 MVS Dakchung'}, // 9
        { provinceId: 15, districtId:15, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ດັກຈືງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 15, districtId:15, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1504 MVS Thateng'}, // 9
        { provinceId: 15, districtId:15, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ທ່າແຕງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 15, districtId:15, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ເຊກອງ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 15, districtId:15, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: ''}, // 9
        // 16. ຈໍາປາສັກ
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ 106 (ຈຳປາສັກ) (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '16 MVS Champasak'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ຈຳປາສັກ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1601 MVS Pakxe'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1602 MVS Xanasomboun'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຊະນະສົມບູນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1603 MVS Bachiangchaleunsouk'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ບາຈຽງຈະເລີນສຸກ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1604 MVS Pakxong'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ປາກຊ່ອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1605 MVS Pathoumphon'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ປະທຸມພອນ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1606 MVS Phonthong'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1607 MVS Champasak'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1608 MVS Soukhouma'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1609 MVS Mounlapamok'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1610 MVS Khong'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ກອງພົນທີ 5 (ຈຳປາສັກ) (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຕ ຈຳປາສັກ (ໂຮງໝໍຕໍາຫຼວດ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ຈຳປາສັກ (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ສບມ ປາກເຊ (ສູນບໍລິການເມືອງ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ມຸນລະປະໂມກ (ຈໍາປາສັກ) (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ວຽງໄຊ (ຈຳປາສັກ) (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໂພນທອງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮບຊ ຈຳປາສັກ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮພຊ ສຸຂຸມາ (ໂຮງມຊຸມຊົນ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຣໝຊ ມູນລະປະໂມກ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 16, districtId:16, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໂຂງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        // 17. ອັດຕະປື
        { provinceId: 17, districtId:17, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '17 MVS Attapu'}, // 9
        { provinceId: 17, districtId:17, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ອັດຕະປື (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 17, districtId:17, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1701 MVS Xaisettha'}, // 9
        { provinceId: 17, districtId:17, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ໄຊເສດຖາ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 17, districtId:17, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1702 MVS Samakhixai'}, // 9
        { provinceId: 17, districtId:17, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ສບມ ສາມະຄີໄຊ (ສູນບໍລິການເມືອງ)'}, // 9
        { provinceId: 17, districtId:17, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1703 MVS Sanamxai'}, // 9
        { provinceId: 17, districtId:17, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1704 MVS Sanxai'}, // 9
        { provinceId: 17, districtId:17, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1705 MVS Phouvong'}, // 9
        { provinceId: 17, districtId:17, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝທ ອັດຕະປື (ໂຮງໝໍທະຫານ)'}, // 9
        { provinceId: 17, districtId:17, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ສະໜາມໄຊ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 17, districtId:17, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ສານໄຊ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 17, districtId:17, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ພູວົງ (ໂຮງໝໍຊຸມຊົນ)'}, // 7
        // 18. ໄຊສົມບູນ
        { provinceId: 18, districtId:18, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '18 MVS Xaisomboun'}, // 9
        { provinceId: 18, districtId:18, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຂ ໄຊສົມບູນ (ໂຮງໝໍແຂວງ)'}, // 9
        { provinceId: 18, districtId:18, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1801 MVS Anouvong'}, // 9
        { provinceId: 18, districtId:18, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ສບມ ອະນຸວົງ (ສູນບໍລິການເມືອງ)'}, // 9
        { provinceId: 18, districtId:18, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1802 MVS Thathom'}, // 9
        { provinceId: 18, districtId:18, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ທ່າໂທມ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 18, districtId:18, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1803 MVS Longcheng'}, // 9
        { provinceId: 18, districtId:18, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ລ້ອງແຈ້ງ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 18, districtId:18, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1804 MVS Hom'}, // 9
        { provinceId: 18, districtId:18, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ຮົມ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
        { provinceId: 18, districtId:18, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: '1805 MVS Longxan'}, // 9
        { provinceId: 18, districtId:18, village: 'ດົງໂດກ', vaccsitestatus: 'ເປີດຫຼືປິດ', name: 'ຮໝຊ ລ້ອງຊານ (ໂຮງໝໍຊຸມຊົນ)'}, // 9
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('vaccinationsites', null, {});
  },
};

