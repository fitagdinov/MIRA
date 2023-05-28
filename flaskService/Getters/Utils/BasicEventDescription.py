from marshmallow import Schema, fields

class BasicEventDescription(Schema):
    sys_event_id = fields.Integer(required=True, default=None, description="Системный ID Ивента")
    extend_event_id = fields.Integer(required=True, default=None, description="mos.ru ID Ивента")
    short_event_name = fields.String(required=True, default=None, desciption='Краткое название Ивента')
    description_event = fields.String(required=True, default=None, desciption='Описание Ивента')
    beauty_code_event = fields.String(required=True, default=None, desciption='Красивый код для ввода бабушками')
    level1_event = fields.String(required=True, default=None, description='Уровень 1 мероприятия')
    level2_event = fields.String(required=True, default=None, description='Уровень 2 мероприятия')
    level3_event = fields.String(required=True, default=None, description='Уровень 3 мероприятия')
