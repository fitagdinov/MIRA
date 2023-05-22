import unittest
from dbService import addGroupScript, addEventScript, dropEvent, get_request, database
from numpy import unique

class CodeModulesTest(unittest.TestCase):
    def test_code_generation(self):
        _test_event, _external_id = 'testEventOne', -100
        _test_event2, _external_id2 = 'testEventTwo', -200

        dropEvent(event_short_name=_test_event)
        dropEvent(event_short_name=_test_event2)

        addEventScript(external_id_event=_external_id,
                       event_short_name=_test_event,
                       event_detailed_info='',
                       event_level_1='',
                       event_level_2='',
                       event_level_3='')

        addGroupScript(external_id_group=0,
                       group_short_name=_test_event,
                       online_status=False,
                       group_address='',
                       group_geo='',
                       group_area='',
                       group_schedule='')

        addEventScript(external_id_event=_external_id2,
                       event_short_name=_test_event2,
                       event_detailed_info='',
                       event_level_1='',
                       event_level_2='',
                       event_level_3='')

        addGroupScript(external_id_group=1,
                       group_short_name=_test_event2,
                       online_status=False,
                       group_address='',
                       group_geo='',
                       group_area='',
                       group_schedule='')


        event_1_sys_id = get_request(query=f"SELECT * FROM StaticEvent WHERE event_short_name='{_test_event}'")[0]
        event_2_sys_id = get_request(query=f"SELECT * FROM StaticEvent WHERE event_short_name='{_test_event2}'")[0]

        groups1 = get_request(query=f"SELECT * FROM StaticGroup WHERE SYS_ID_event={event_1_sys_id}", execute_many=True)
        groups2 = get_request(query=f"SELECT * FROM StaticGroup WHERE SYS_ID_event={event_2_sys_id}", execute_many=True)

        cond = len(unique([get_request(query=f"SELECT * FROM StaticCiteEventID WHERE CITE_ID_event={_[1]}")[2] for _ in groups1])) <= 1
        self.assertEqual(cond, True, msg="Check first test group code equality")
        cond = len(unique([get_request(query=f"SELECT * FROM StaticCiteEventID WHERE CITE_ID_event={_[1]}")[2] for _ in groups2])) <= 1
        self.assertEqual(cond, True, msg="Check second test group code equality")

        addGroupScript(external_id_group=-60,
                       group_short_name=_test_event2,
                       online_status=False,
                       group_address='',
                       group_geo='',
                       group_area='',
                       group_schedule='')

        addGroupScript(external_id_group=-40,
                       group_short_name=_test_event2,
                       online_status=False,
                       group_address='',
                       group_geo='',
                       group_area='',
                       group_schedule='')

        groups2 = get_request(query=f"SELECT * FROM StaticGroup WHERE SYS_ID_event={event_2_sys_id}", execute_many=True)
        cond = len(unique([get_request(query=f"SELECT * FROM StaticCiteEventID WHERE CITE_ID_event={_[1]}")[2] for _ in
                           groups2])) <= 1
        self.assertEqual(cond, True, msg="Check second test group (sec stage) code equality")


if __name__ == '__main__':
    unittest.main()
