import datetime

from dbService.dbConfiguration import get_request, put_request, database
from pandas import read_csv
from typing import List, Optional
from ciso8601 import parse_datetime

import pytz

# TODO: it is possible to create multiple insert pipeline. but it is hard
def addAttendScript(external_group_id: List[int],
                    external_grand_id: List[int],
                    attend_date: List[str],
                    attend_score: List[Optional[str]],
                    attend_start_time: List[str],
                    attend_end_time: List[str]):
    """
    Функция добавляющая запись/записи о посещении бабушками мероприятий (конкретно групп)
    :param external_group_id: id группы с mos.ru
    :param external_grand_id: id бабушки с mos.ru
    :param attend_date:
    :param attend_score:
    :param attend_start_time:
    :param attend_end_time:
    :return:
    """
    grand_map_dict = {}
    group_map_dict = {}
    scrap_all_grand_sys_id = get_request(query=f"SELECT * FROM StaticMember where EXTERNAL_ID_grand in {tuple(external_grand_id)}", execute_many=True)
    for grand in scrap_all_grand_sys_id:
        _sys_id = grand[0]
        _ext_id = grand[1]
        grand_map_dict[_ext_id] = _sys_id
    scrap_all_group_sys_id = get_request(query=f"SELECT * FROM StaticGroup where EXTERNAL_ID_group in {tuple(external_group_id)}", execute_many=True)
    for group in scrap_all_group_sys_id:
        _sys_id = group[0]
        _ext_id = group[2]
        group_map_dict[_ext_id] = _sys_id

    for i in range(len(attend_date)):
        attend_start_time[i] = int(parse_datetime(attend_date[i] + ' ' + attend_start_time[i]).replace(tzinfo=pytz.timezone('Europe/Moscow')).timestamp())
        attend_end_time[i] = int(parse_datetime(attend_date[i] + ' ' + attend_end_time[i]).replace(tzinfo=pytz.timezone('Europe/Moscow')).timestamp())

    sys_group_id = tuple([group_map_dict[ext_id] for ext_id in external_group_id])
    sys_grand_id = tuple([grand_map_dict[ext_id] for ext_id in external_grand_id])
    attend_date = [int(parse_datetime(_).replace(tzinfo=pytz.timezone('Europe/Moscow')).timestamp()) for _ in attend_date]
    attend_start_time = tuple(attend_start_time)
    attend_end_time = tuple(attend_end_time)
    attend_score = tuple(attend_score)

    insert_query = \
        f"""
        INSERT IGNORE INTO NoOldMen.AttendanceGroup (SYS_ID_group, SYS_ID_grand, attendance_date, attendance_score, attendance_start_time, attendance_end_time)
        VALUES
        """
    for i in range(len(sys_group_id)):
        insert_query += f"({sys_group_id[i]}, {sys_grand_id[i]}, {attend_date[i]}, '{attend_score[i]}', '{attend_start_time[i]}', '{attend_end_time[i]}'),"
    insert_query = insert_query[:-1]
    insert_query += ";"
    put_request(query=insert_query)

if __name__ == '__main__':
    addAttendScript(external_group_id=[801346550, 801346550, 801346550],
                    external_grand_id=[101352023, 101385462, 101421897],
                    attend_date=['2022-08-01', '2022-08-01', '2022-08-01'],
                    attend_score=[None, None, None],
                    attend_start_time=['09:00:00', '09:00:00', '09:00:00'],
                    attend_end_time=['10:00:00', '10:00:00', '10:00:00'])
