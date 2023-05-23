from dbService.dbConfiguration import get_request, put_request, database
from ciso8601 import parse_datetime
from typing import List


def addMemberScript(grand_ma_mos_id: List[int], date_of_registration: List[str], grand_SEX: List[str], birth_date: List[str], grand_address: List[str],
                    grand_name: List[str] = ['NONE'], grand_surname: List[str] = ['NONE']):
    """
    Функция добавления нового пользователя в таблицу
    :param grand_ma_mos_id: ID бабушки на mos.ru
    :param date_of_registration: Дата регистрации на mos.ru
    :param grand_SEX: Мужчина | Женщина
    :param birth_date: Дата рождения бабушки
    :param grand_address: Адрес бабушки
    :param grand_name: Имя бабушки
    :param grand_surname: Фамилия бабушки
    :return:
    """
    '101391104,2019-02-26 15:52:09.000,Женщина,1959-09-10,"город москва, константинова, дом 30"'
    _registration = tuple([int(parse_datetime(_).timestamp()) for _ in date_of_registration])
    _birth = tuple([int(parse_datetime(_).timestamp()) for _ in birth_date])
    if len(grand_name) != len(_birth):
        raise KeyError('Unmatched length of names')

    _sex = []
    for _ in grand_SEX:
        if _ == "Женщина":
            _sex.append('W')
        elif _ == "Мужчина":
            _sex.append('M')
        else:
            _sex.append('N')

    grand_ma_mos_id = tuple(grand_ma_mos_id)
    _sex = tuple(_sex)
    grand_name = tuple(grand_name)
    grand_surname = tuple(grand_surname)
    grand_address = tuple(grand_address)
    insert_query = \
        f"""
        INSERT INTO NoOldMen.StaticMember (EXTERNAL_ID_grand, grand_birth_date, grand_registration_date, grand_name,
                                   grand_surname, grand_sex, grand_address_raw)
        VALUES
        """
    for i in range(len(grand_name)):
        insert_query += f"({grand_ma_mos_id[i]}, {_birth[i]}, {_registration[i]}, '{grand_name[i]}', '{grand_surname[i]}', '{_sex[i]}', '{grand_address[i]}'),"
    insert_query = insert_query[:-1]
    insert_query += ";"
    put_request(query=insert_query)


if __name__ == '__main__':
    addMemberScript(
        grand_ma_mos_id=[101391104],
        date_of_registration=['2019-02-26 15:52:09.000'],
        grand_SEX=['Женщина'],
        birth_date=['1959-09-10'],
        grand_address=['город москва, константинова, дом 30'],
    )
