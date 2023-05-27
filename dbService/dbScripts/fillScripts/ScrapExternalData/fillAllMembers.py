from dbService.dbScripts import addMemberScript
import pandas as pd
from tqdm import tqdm
import os

# 4 sec for filling 52000 lines
if __name__ == '__main__':
    if os.name == 'nt':
        members_df = pd.read_csv('..\\fileStorage\\users.csv')
    else:
        members_df = pd.read_csv('../fileStorage/users.csv')
    print(members_df)
    print(members_df.columns)
    _grand_name = ['NONE' for _ in range(members_df.shape[0])]
    _grand_surname = ['NONE' for _ in range(members_df.shape[0])]

    grand_ma_mos_id = list(members_df['уникальный номер'].values)
    date_of_registration = list(members_df['дата создание личного дела'].values)
    grand_SEX = list(members_df['пол'].values)
    birth_date = list(members_df['дата рождения'].values)
    grand_address = list(members_df['адрес проживания'].values)
    grand_name = _grand_name
    grand_surname = _grand_surname
    shape_of_one_req = 100
    for i in tqdm(range(members_df.shape[0] // shape_of_one_req)):
        # validate_memory_location()
        addMemberScript(
            grand_ma_mos_id=grand_ma_mos_id[i * shape_of_one_req: (i+1) * shape_of_one_req],
            date_of_registration=date_of_registration[i * shape_of_one_req: (i+1) * shape_of_one_req],
            grand_SEX=grand_SEX[i * shape_of_one_req: (i+1) * shape_of_one_req],
            birth_date=birth_date[i * shape_of_one_req: (i+1) * shape_of_one_req],
            grand_address=grand_address[i * shape_of_one_req: (i+1) * shape_of_one_req],
            grand_name=_grand_name[i * shape_of_one_req: (i+1) * shape_of_one_req],
            grand_surname=_grand_surname[i * shape_of_one_req: (i+1) * shape_of_one_req]
        )
    i = members_df.shape[0] // shape_of_one_req
    if len(grand_ma_mos_id) > i:
        i = i - 1
        addMemberScript(
            grand_ma_mos_id=grand_ma_mos_id[(i + 1) * shape_of_one_req:],
            date_of_registration=date_of_registration[(i + 1) * shape_of_one_req:],
            grand_SEX=grand_SEX[(i + 1) * shape_of_one_req:],
            birth_date=birth_date[(i + 1) * shape_of_one_req:],
            grand_address=grand_address[(i + 1) * shape_of_one_req:],
            grand_name=_grand_name[(i + 1) * shape_of_one_req:],
            grand_surname=_grand_surname[(i + 1) * shape_of_one_req:]
        )
