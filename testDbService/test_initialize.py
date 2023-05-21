import unittest
from dbService import get_request

TABLES_NEED_TO_BE = {('memberEmbedding',), ('EventGroupMap',), ('StaticEvent',), ('StaticMember',), ('StaticGroup',), ('EventEmbedding',), ('AttendanceGroup',), ('DynamicGroup',), ('StaticCiteEventID',)}


class TestCorrectInitialize(unittest.TestCase):
    def test_AllTablesExist(self):
        tables_in_db = set(get_request("SHOW TABLES", execute_many=True))
        self.assertTrue(tables_in_db == TABLES_NEED_TO_BE)


if __name__ == '__main__':
    unittest.main()
