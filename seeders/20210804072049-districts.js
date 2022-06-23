"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('districts',
      [
        // 1. ນະຄອນຫຼວງວຽງຈັນ
        { provinceId: 1, name: 'ຈັນທະບູລີ'}, // 1
        { provinceId: 1, name: 'ສີໂຄດຕະບອງ'}, // 2
        { provinceId: 1, name: 'ໄຊເສດຖາ'}, // 3
        { provinceId: 1, name: 'ສີສັດຕະນາກ'}, // 4
        { provinceId: 1, name: 'ນາຊາຍທອງ'}, // 5
        { provinceId: 1, name: 'ໄຊທານີ'}, // 6
        { provinceId: 1, name: 'ຫາດຊາຍຟອງ'}, // 7
        { provinceId: 1, name: 'ສັງທອງ'}, // 8
        { provinceId: 1, name: 'ປາກງື່ມ'}, // 9
        // 2. ຜົ້ງສາລີ
        { provinceId: 2, name: 'ຜົ້ງສາລີ'}, // 1
        { provinceId: 2, name: 'ໃໝ່'}, // 2
        { provinceId: 2, name: 'ຂວາ'}, // 3
        { provinceId: 2, name: 'ສໍາພັນ'}, // 4
        { provinceId: 2, name: 'ບຸນເໜືອ'}, // 5
        { provinceId: 2, name: 'ຍອດອູ'}, // 6
        { provinceId: 2, name: 'ບຸນໃຕ້'}, // 7
        // 3. ຫຼວງນໍ້າທາ
        { provinceId: 3, name: 'ຫຼວງນໍ້າທາ'}, // 1
        { provinceId: 3, name: 'ສິງ'}, // 2
        { provinceId: 3, name: 'ລອງ'}, // 3
        { provinceId: 3, name: 'ວຽງພູຄໍາ'}, // 4
        { provinceId: 3, name: 'ນາແລ'}, // 5
        // 4. ອຸດົມໄຊ
        { provinceId: 4, name: 'ໄຊ'}, // 1
        { provinceId: 4, name: 'ຫຼາ'}, // 2
        { provinceId: 4, name: 'ນາໝໍ້'}, //3
        { provinceId: 4, name: 'ງາ'}, // 4
        { provinceId: 4, name: 'ແບງ'}, // 5
        { provinceId: 4, name: 'ຮຸນ'}, // 6
        { provinceId: 4, name: 'ປາກແບ່ງ'}, // 7
        // 5. ບໍ່ແກ້ວ
        { provinceId: 5, name: 'ຫ້ວຍຊາຍ'}, // 1
        { provinceId: 5, name: 'ຕົ້ນເຜິ້ງ'}, // 2
        { provinceId: 5, name: 'ເມິງ'}, // 3
        { provinceId: 5, name: 'ຜາອຸດົມ'}, // 4
        { provinceId: 5, name: 'ປາກທາ'}, // 5
        // 6. ຫຼວງພະບາງ
        { provinceId: 6, name: 'ນະຄອນຫຼວງພະບາງ'}, // 1
        { provinceId: 6, name: 'ຊຽງເງິນ'}, // 2
        { provinceId: 6, name: 'ນານ'}, // 3
        { provinceId: 6, name: 'ປາກອູ'}, // 4
        { provinceId: 6, name: 'ນໍ້າບາກ'}, // 5
        { provinceId: 6, name: 'ງອຍ'}, // 6
        { provinceId: 6, name: 'ປາກແຊງ'}, // 7
        { provinceId: 6, name: 'ໂພນໄຊ'}, // 8
        { provinceId: 6, name: 'ຈອມເພັດ'}, // 9
        { provinceId: 6, name: 'ວຽງຄໍາ'}, // 10
        { provinceId: 6, name: 'ພູຄູນ'}, // 11
        { provinceId: 6, name: 'ໂພນທອງ'}, // 12
        // 7. ຫົວພັນ
        { provinceId: 7, name: 'ຊໍາເໜືອ'}, // 1
        { provinceId: 7, name: 'ຊຽງຄໍ້'}, // 2
        { provinceId: 7, name: 'ຮ້ຽມ'}, // 3
        { provinceId: 7, name: 'ວຽງໄຊ'}, // 4
        { provinceId: 7, name: 'ຫົວເມືອງ'}, // 5
        { provinceId: 7, name: 'ຊໍາໃຕ້'}, // 6
        { provinceId: 7, name: 'ສົບເບົາ'}, // 7
        { provinceId: 7, name: 'ແອດ'}, // 8
        { provinceId: 7, name: 'ກວັນ'}, // 9
        { provinceId: 7, name: 'ຊ່ອນ'}, // 10
        // 8. ໄຊຍະບູລີ
        { provinceId: 8, name: 'ໄຊຍະບູລີ'}, // 1
        { provinceId: 8, name: 'ຄອບ'}, // 2
        { provinceId: 8, name: 'ຫົງສາ'}, // 3
        { provinceId: 8, name: 'ເງິນ'}, // 4
        { provinceId: 8, name: 'ຊຽງຮ່ອນ'}, // 5
        { provinceId: 8, name: 'ພຽງ'}, // 6
        { provinceId: 8, name: 'ປາກອອກ'}, // 7
        { provinceId: 8, name: 'ແກ່ນທ້າວ'},// 8
        { provinceId: 8, name: 'ບໍ່ແຕນ'}, // 9
        { provinceId: 8, name: 'ທົ່ງມີໄຊ'}, // 10
        { provinceId: 8, name: 'ໄຊສະຖານ'}, // 11
        // 9. ຊຽງຂວາງ
        { provinceId: 9, name: 'ແປກ (ໂພນສະຫວັນ)'}, // 1
        { provinceId: 9, name: 'ຄໍາ'}, // 2
        { provinceId: 9, name: 'ໜອງແຮດ'}, // 3
        { provinceId: 9, name: 'ຄູນ'}, // 4
        { provinceId: 9, name: 'ໝອກໃໝ່'}, // 5
        { provinceId: 9, name: 'ພູກູດ'}, // 6
        { provinceId: 9, name: 'ຜາໄຊ'}, // 7
        // 10. ວຽງຈັນ
        { provinceId: 10, name: 'ໂພນໂຮງ'}, // 1
        { provinceId: 10, name: 'ທຸລະຄົມ'}, // 2
        { provinceId: 10, name: 'ແກ້ວອຸດົມ'}, // 3
        { provinceId: 10, name: 'ກາສີ'}, // 4
        { provinceId: 10, name: 'ວັງວຽງ'}, // 5
        { provinceId: 10, name: 'ເຟືອງ'}, // 6
        { provinceId: 10, name: 'ຊະນະຄາມ'}, // 7
        { provinceId: 10, name: 'ແມດ'}, // 8
        { provinceId: 10, name: 'ຫີນເຫີບ'}, // 9
        { provinceId: 10, name: 'ວຽງຄໍາ'}, // 10
        { provinceId: 10, name: 'ໝື່ນ'}, // 11
        // 11. ບໍລິຄໍາໄຊ
        { provinceId: 11, name: 'ປາກຊັນ'}, // 1
        { provinceId: 11, name: 'ທ່າພະບາດ'}, // 2
        { provinceId: 11, name: 'ປາກກະດິງ'}, // 3
        { provinceId: 11, name: 'ບໍລິຄັນ'}, // 4
        { provinceId: 11, name: 'ຄໍາເກີດ (ຫຼັກ 20)'}, // 5
        { provinceId: 11, name: 'ວຽງທອງ'}, // 6
        { provinceId: 11, name: 'ໄຊຈໍາພອນ'}, // 7
        // 12. ຄໍາມ່ວນ
        { provinceId: 12, name: 'ທ່າແຂກ'}, // 1
        { provinceId: 12, name: 'ມະຫາໄຊ'}, // 2
        { provinceId: 12, name: 'ໜອງບົກ'}, // 3
        { provinceId: 12, name: 'ຫີນບູນ'}, // 4
        { provinceId: 12, name: 'ຍົມມະລາດ'}, // 5
        { provinceId: 12, name: 'ບົວລະພາ'}, // 6
        { provinceId: 12, name: 'ນາກາຍ'}, // 7
        { provinceId: 12, name: 'ເຊບັ້ງໄຟ'}, // 8
        { provinceId: 12, name: 'ໄຊບົວທອງ'}, // 9
        { provinceId: 12, name: 'ຄູນຄໍາ'}, // 10
        // 13. ສະຫວັນນະເຂດ
        { provinceId: 13, name: 'ນະຄອນໄກສອນ ພົມວິຫານ'}, // 1
        { provinceId: 13, name: 'ອຸທົມພອນ'}, // 2
        { provinceId: 13, name: 'ອາດສະພັງທອງ'}, // 3
        { provinceId: 13, name: 'ພິນ'}, // 4
        { provinceId: 13, name: 'ເຊໂປນ'}, // 5
        { provinceId: 13, name: 'ນອງ'}, // 6
        { provinceId: 13, name: 'ທ່າປາງທອງ'}, // 7
        { provinceId: 13, name: 'ສອງຄອນ'}, // 8
        { provinceId: 13, name: 'ຈໍາພອນ'}, // 9
        { provinceId: 13, name: 'ຊົນນະບູລີ'}, // 10
        { provinceId: 13, name: 'ໄຊບູລີ'}, // 11
        { provinceId: 13, name: 'ວິລະບູລີ'}, // 12
        { provinceId: 13, name: 'ອາດສະພອນ'}, // 13
        { provinceId: 13, name: 'ໄຊພູທອງ'}, // 14
        { provinceId: 13, name: 'ພະລານໄຊ'}, // 15
        // 14. ສາລະວັນ
        { provinceId: 14, name: 'ສາລະວັນ'}, // 1
        { provinceId: 14, name: 'ຕະໂອ້ຍ'}, // 2
        { provinceId: 14, name: 'ຕຸ້ມລານ'}, // 3
        { provinceId: 14, name: 'ລະຄອນເພັງ'}, // 4
        { provinceId: 14, name: 'ວາປີ'}, // 5
        { provinceId: 14, name: 'ຄົງເຊໂດນ'}, // 6
        { provinceId: 14, name: 'ເລົ່າງາມ'}, // 7
        { provinceId: 14, name: 'ສະໝ້ວຍ'}, // 8
        // 15. ເຊກອງ
        { provinceId: 15, name: 'ລະມາມ'}, // 1
        { provinceId: 15, name: 'ກະລຶມ'}, // 2
        { provinceId: 15, name: 'ດາກຈຶງ'}, // 3
        { provinceId: 15, name: 'ທ່າແຕງ'}, // 4
        // 16. ຈໍາປາສັກ
        { provinceId: 16, name: 'ນະຄອນປາກເຊ'}, // 1
        { provinceId: 16, name: 'ຊະນະສົມບູນ'}, // 2
        { provinceId: 16, name: 'ບາຈຽງຈະເລີນສຸກ'}, // 3
        { provinceId: 16, name: 'ປາກຊ່ອງ'}, // 4
        { provinceId: 16, name: 'ປະທຸມພອນ'}, // 5
        { provinceId: 16, name: 'ໂພນທອງ'}, // 6
        { provinceId: 16, name: 'ຈໍາປາສັກ'}, // 7
        { provinceId: 16, name: 'ສຸຂຸມາ'}, // 8
        { provinceId: 16, name: 'ມູນລະປະໂມກ'}, // 9
        { provinceId: 16, name: 'ໂຂງ'}, // 10
        // 17. ອັດຕະປື
        { provinceId: 17, name: 'ໄຊເສດຖາ'}, // 1
        { provinceId: 17, name: 'ສາມັກຄີໄຊ'}, // 2
        { provinceId: 17, name: 'ສະໜາມໄຊ'}, // 3
        { provinceId: 17, name: 'ຊານໄຊ'}, // 4
        { provinceId: 17, name: 'ພູວົງ'}, // 5
        // 18. ໄຊສົມບູນ
        { provinceId: 18, name: 'ອະນຸວົງ'}, // 1
        { provinceId: 18, name: 'ລ້ອງແຈ້ງ'}, // 2
        { provinceId: 18, name: 'ລ້ອງຊານ'}, // 3
        { provinceId: 18, name: 'ຮົ່ມ'}, // 4
        { provinceId: 18, name: 'ທ່າໂທມ'}, // 5
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('districts', null, {});
  },
};
