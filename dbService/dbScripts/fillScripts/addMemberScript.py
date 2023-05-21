from dbService.dbConfiguration import get_request, put_request, database


def addMemberScript(grand_ma_mos_id, date_of_registration, grand_SEX, birth_date, grand_address):
    """
    Функция добавления нового пользователя в таблицу
    :param grand_ma_mos_id:
    :param date_of_registration:
    :param grand_SEX:
    :param birth_date:
    :param grand_address:
    :return:
    """
    insert_query = \
        """
    INSERT INTO NoOldMen.memberStatic (grand_birth_date, grand_registration_date, grand_name, grand_surname, grand_sex,
                                   grand_address_raw)
    VALUES (1, 2, '3', '4', '5', '6');
        """

