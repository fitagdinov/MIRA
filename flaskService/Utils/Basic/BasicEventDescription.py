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

    @classmethod
    def constructor(cls, sys_event_id,
    extend_event_id,
    short_event_name,
    description_event,
    beauty_code_event,
    level1_event,
    level2_event,
    level3_event):
        return {
        "sys_event_id": sys_event_id,
        "extend_event_id": extend_event_id,
        "short_event_name": short_event_name,
        "description_event": description_event,
        "beauty_code_event": beauty_code_event,
        "level1_event": level1_event,
        "level2_event": level2_event,
        "level3_event": level3_event
        }
