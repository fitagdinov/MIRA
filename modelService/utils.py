from dbService.dbConfiguration import get_request, put_request
import pandas as pd
import numpy as np
from .getInitialEmbedding import getInitialEmbedding
from datetime import date, timedelta
def cos_dist(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))


def get_event_embedding(sys_id_event: int) -> np.array:
    emb = get_request(
        query=f"""SELECT * FROM NoOldMen.EventEmbedding 
                  WHERE SYS_ID_event={sys_id_event}""",
        execute_many=False)
    return np.array(emb[1:])


def get_grand_embedding(sys_id_grand: int) -> np.array:
    emb = get_request(
        query=f"""SELECT * FROM NoOldMen.memberEmbedding 
                  WHERE SYS_ID_grand={sys_id_grand}""",
        execute_many=False)
    return np.array(emb[1:])


def get_grand_meetings_info(sys_id_grand: int) -> pd.DataFrame:
    events = get_request(
        query=f"""
            SELECT 
            c.SYS_ID_group, 
            c.SYS_ID_event,
            e.event_short_name,
            c.group_address, 
            c.group_online_status
             FROM NoOldMen.AttendanceGroup b
             JOIN NoOldMen.StaticGroup c
               ON b.SYS_ID_group = c.SYS_ID_group
             JOIN NoOldMen.StaticEvent e
               ON c.SYS_ID_event = e.SYS_ID_event
            WHERE b.SYS_ID_grand = {sys_id_grand};
            """,
        execute_many=True
    )
    data = pd.DataFrame(events, columns=["SYS_ID_group",
                                         "SYS_ID_event",
                                         "event_short_name",
                                         "group_address",
                                         "group_online_status"])
    return data


def get_group_info(sys_id_group: int) -> dict:
    group = get_request(
        query=f"""
                SELECT 
                c.SYS_ID_event,
                b.SYS_ID_grand,
                e.event_short_name,
                c.group_address, 
                c.group_online_status, 
                a.group_schedule_raw
                 FROM NoOldMen.AttendanceGroup b
                 JOIN NoOldMen.DynamicGroup a 
                   ON b.SYS_ID_group = a.SYS_ID_group
                 JOIN NoOldMen.StaticGroup c
                   ON b.SYS_ID_group = c.SYS_ID_group
                 JOIN NoOldMen.StaticEvent e
                   ON c.SYS_ID_event = e.SYS_ID_event
                WHERE b.SYS_ID_group = {sys_id_group};
                """,
        execute_many=True
    )
    data = dict()
    data["SYS_ID_event"] = group[0][0]
    data["SYS_IDs_grand"] = [group[i][1] for i in range(len(group))]
    data["event_short_name"] = group[0][2]
    data["group_address"] = group[0][3]
    data["group_online_status"] = group[0][4]
    data["group_schedule_raw"] = group[0][4]
    return data


def get_top_n_events_for_grand(sys_id_grand: int,
                               top_n=10):
    query = f"""
            SELECT * FROM NoOldMen.EventEmbedding 
            """

    events = get_request(
        query=query,
        execute_many=True)

    grand_emb = get_grand_embedding(sys_id_grand) + 0.1 * getInitialEmbedding(sys_id_grand)
    # print(events)
    idx = np.argsort([cos_dist(grand_emb,
                               np.array(event[1:])) for event in events])[::-1]
    return [int(el[0]) for el in np.array(events)[(idx[:top_n])]]


if __name__ == '__main__':
    print(get_top_n_events_for_grand(59999))

# [894, 838, 854, 695, 689, 895, 73, 899, 228, 194]
# [73, 894, 695, 689, 727, 228, 751, 688, 706, 37]
