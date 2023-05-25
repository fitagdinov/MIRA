import unittest
from dbService import get_request, addMemberScript, database


class TestCorrectPutRequest(unittest.TestCase):
    def test_adding_one_member(self):
        _right_answer = (-666, -325393200, 1551185529, 'NONE', 'NONE', 'W', 'город москва, константинова, дом 30')
        addMemberScript(
            grand_ma_mos_id=[-666],
            date_of_registration=['2019-02-26 15:52:09.000'],
            grand_SEX=['Женщина'],
            birth_date=['1959-09-10'],
            grand_address=['город москва, константинова, дом 30'],
        )

        test_grand = get_request(f"SELECT * FROM {database}.StaticMember WHERE EXTERNAL_ID_grand=-666")
        self.assertEqual(test_grand[1:], _right_answer)


if __name__ == '__main__':
    unittest.main()
