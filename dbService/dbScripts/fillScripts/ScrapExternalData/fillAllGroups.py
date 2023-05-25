from dbService.dbScripts import addGroupScript
import pandas as pd
from numpy import any
from tqdm import tqdm
from ZeroMallocFix import validate_memory_location

if __name__ == '__main__':
    df = pd.read_csv('../fileStorage/groups.csv')
    df["shorten_name"] = df["направление 2"] + '_' + df["направление 3"]
    # df["shorten_name"] = [_.replace('ё', 'е').replace('-', '') for _ in df["shorten_name"].values]
    map_online = any(
        [
            ['ОНЛАЙН' in _ for _ in df["направление 2"].values],
            ['ОНЛАЙН' in _ for _ in df["направление 1"].values],
            ['ОНЛАЙН' in _ for _ in df["направление 3"].values]
        ],
        axis=0
    )
    df["online_status"] = map_online
    for line in tqdm(range(0, df.shape[0])):
        validate_memory_location()
        _tmp = df.iloc[line]
        _rasp = 'Активные:' + str(_tmp['расписание в активных периодах']) + '[-]Закрытые:' + str(_tmp['расписание в закрытых периодах']) + '[-]Плановые:' + str(_tmp['расписание в плановом периоде'])
        addGroupScript(
            external_id_group=_tmp["уникальный номер"],
            group_short_name=_tmp["shorten_name"],
            online_status=_tmp["online_status"],
            group_address=_tmp["адрес площадки"],
            group_geo=_tmp["округ площадки"],
            group_area=_tmp["район площадки"],
            group_schedule=_rasp
        )
