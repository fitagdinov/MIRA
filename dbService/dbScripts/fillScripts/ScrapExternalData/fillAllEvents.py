from dbService.dbScripts import addEventScript
import pandas as pd
from tqdm import tqdm
import os

# 10 sec for filling 900 values
if __name__ == '__main__':
    if os.name == 'nt':
        df = pd.read_csv('..\\fileStorage\\dict.csv').iloc[:, :-2]
    else:
        df = pd.read_csv('../fileStorage/dict.csv').iloc[:, :-2]

    df.loc[['Спецпроект' in _ for _ in df.level1.values], 'leve3'] = df.loc[['Спецпроект' in _ for _ in
                                                                             df.level1.values], 'leve3'] + ' СП'
    df.loc[:, 'leve3'] = df.loc[:, 'level2'] + '_' + df.loc[:, 'leve3']
    # TODO: i have seen duplicate in short name
    for line in tqdm(range(0, df.shape[0])):
        _tmp = df.iloc[line]
        addEventScript(
            external_id_event=int(f"{_tmp['id_level1']}{_tmp['id_level2']}{_tmp['id_level3']}"),
            event_short_name=_tmp["leve3"],
            event_detailed_info=_tmp["d_level1"],
            event_level_1=_tmp["level1"],
            event_level_2=_tmp["level2"],
            event_level_3=_tmp["Разметка"]
        )
