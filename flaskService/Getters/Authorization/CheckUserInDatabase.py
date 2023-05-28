from dbService import get_request
from flaskService import TAGS

from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, use_kwargs, doc
from flask_restful import Resource
from ciso8601 import parse_datetime

from marshmallow import Schema, fields
import pytz

class RequestGrandAuthorizationValidation(Schema):
    grand_external_id = fields.Integer(required=True, description="ID бабушки в формате mos.ru. Аналогично логину")
    # TODO: change required to True
    grand_birth_date = fields.String(required=False, description='Дата рождения бабушки. Аналогично паролю')
    _test_grand_birth_date = fields.Integer(required=False, description='Техническая дата рождения в инте')


class ResponseGrandAuthorizationValidation(Schema):
    grand_exist = fields.Boolean(required=True, desciption='Содержится ли бабушка в базе данных')

    # Optional Fields
    grand_sys_id = fields.Integer(required=False, desciption='Системный ID бабушки')
    grand_name = fields.String(required=False, default='None', description='Имя бабушки')
    grand_surname = fields.String(required=False, default='None', description='Фамилия бабушки')
    grand_sex = fields.String(required=False, description='Пол бабушки')
    grand_address = fields.String(required=False, description='Адрес бабушки')
    grand_poll_status = fields.Boolean(required=False, description='Проходила ли бабушка опрос')


@doc(tags=[TAGS.auth_tag])
class GetGrandAuthorizationValidation(MethodResource, Resource):
    @marshal_with(ResponseGrandAuthorizationValidation)
    @use_kwargs(RequestGrandAuthorizationValidation, location='query')
    def get(self, grand_external_id, **kwargs):
        grand_birth_date = '1970-01-01' if 'grand_birth_date' not in kwargs else kwargs['grand_birth_date']
        _test_grand_birth_date = None if '_test_grand_birth_date' not in kwargs else kwargs['_test_grand_birth_date']
        if not _test_grand_birth_date:
            grand_obj = get_request(f"""SELECT * FROM StaticMember WHERE EXTERNAL_ID_grand={grand_external_id} 
            AND grand_birth_date={int(parse_datetime(grand_birth_date).replace(tzinfo=pytz.timezone('Europe/Moscow')).timestamp())};""")
        else:
            grand_obj = get_request(f"""SELECT * FROM StaticMember WHERE EXTERNAL_ID_grand={grand_external_id}
             AND grand_birth_date={_test_grand_birth_date}""")
        if grand_obj is not None:
            grand_exist = True
            grand_in_sys, grand_name, grand_surname, grand_sex, grand_address = \
                grand_obj[0], grand_obj[4], grand_obj[5], grand_obj[6], grand_obj[7]

            grand_poll_status = get_request(query=f"SELECT PollWasPassed FROM DynamicPollMember WHERE SYS_ID_grand={grand_in_sys}")[0]
            return {"grand_exist": grand_exist,
                    "grand_sys_id": grand_in_sys,
                    "grand_name": grand_name,
                    "grand_surname": grand_surname,
                    "grand_sex": grand_sex,
                    "grand_address": grand_address,
                    "grand_poll_status": grand_poll_status}, 200
        else:
            grand_exist = False
            return {"grand_exist": grand_exist}, 200
