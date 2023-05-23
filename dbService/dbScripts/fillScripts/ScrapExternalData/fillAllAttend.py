from dbService import addAttendScript
import pandas as pd
from tqdm import tqdm
from numpy import any


# 4 sec for filling 52000 lines
if __name__ == '__main__':
    attend_df = pd.read_csv('../fileStorage/placeAttendFileHere/attend.csv')
    # Вычищаем свободное посещение. Потому что такого мероприятия не существует.
    attend_df = attend_df[~any([
        attend_df["направление 2"] == 'Свободное посещение',
        attend_df["направление 3"] == 'Свободное посещение'
    ], axis=0)]
    external_group_id = list(attend_df['уникальный номер группы'].values)
    external_grand_id = list(attend_df['уникальный номер участника'].values)
    attend_date = list(attend_df['дата занятия'].values)
    attend_score = [None for _ in range(len(attend_date))]
    attend_start_time = list(attend_df['время начала занятия'].values)
    attend_end_time = list(attend_df['время окончания занятия'].values)

    shape_of_one_req = 80000
    for i in tqdm(range(attend_df.shape[0] // shape_of_one_req)):
        addAttendScript(
            external_group_id=external_group_id[i * shape_of_one_req: (i+1) * shape_of_one_req],
            external_grand_id=external_grand_id[i * shape_of_one_req: (i+1) * shape_of_one_req],
            attend_date=attend_date[i * shape_of_one_req: (i+1) * shape_of_one_req],
            attend_score=attend_score[i * shape_of_one_req: (i+1) * shape_of_one_req],
            attend_start_time=attend_start_time[i * shape_of_one_req: (i+1) * shape_of_one_req],
            attend_end_time=attend_end_time[i * shape_of_one_req: (i+1) * shape_of_one_req],
        )

    i = attend_df.shape[0] // shape_of_one_req
    if len(external_group_id) > i:
        i = i - 1
        addAttendScript(
            external_group_id=external_group_id[(i+1) * shape_of_one_req:],
            external_grand_id=external_grand_id[(i+1) * shape_of_one_req:],
            attend_date=attend_date[(i+1) * shape_of_one_req:],
            attend_score=attend_score[(i+1) * shape_of_one_req:],
            attend_start_time=attend_start_time[(i+1) * shape_of_one_req:],
            attend_end_time=attend_end_time[(i+1) * shape_of_one_req:],
        )
