from dbService import addAttendScript, get_request, put_request
import pandas as pd
from tqdm import tqdm
import numpy as np
import os
import mysql
import time


if __name__ == '__main__':
    if os.name == 'nt':
        attend_df = pd.read_csv('..\\fileStorage\\user_random_names.csv')
    else:
        attend_df = pd.read_csv('../fileStorage/user_random_names.csv')

    available_grans = get_request(query=f"SELECT * FROM StaticMember", execute_many=True)
    shape_of_grans = len(available_grans)
    random_names = attend_df.values.flatten()
    grand_names = np.random.choice(random_names, size=shape_of_grans)
    grand_surnames = np.random.choice(random_names, size=shape_of_grans)
    for i in tqdm(range(shape_of_grans)):
        successStatus = False
        while not successStatus:
            try:
                put_request(query= \
                                f"""
                                UPDATE NoOldMen.StaticMember t
                                SET t.grand_name = '{grand_names[i]}',
                                t.grand_surname = '{grand_surnames[i]}'
                                WHERE t.SYS_ID_grand = {available_grans[i][0]};
                                """, commit=True)
                successStatus = True
            except mysql.connector.Error as e:
                if e.errno == 2003:
                    time.sleep(1)