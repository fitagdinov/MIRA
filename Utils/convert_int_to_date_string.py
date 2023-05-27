import datetime
import pytz
from typing import List


def database_convert_int_to_string(int_list: List[int], with_time=True):
    converted = int_list.copy()
    for i, I in enumerate(int_list):
        if with_time:
            converted[i] = datetime.datetime.fromtimestamp(I, tz=pytz.timezone('Europe/Moscow')).strftime('%Y-%m-%d %H:%M:%S')
        else:
            converted[i] = datetime.datetime.fromtimestamp(I, tz=pytz.timezone('Europe/Moscow')).strftime('%Y-%m-%d')
    print(converted)

if __name__ == '__main__':
    database_convert_int_to_string([-325391400], False)