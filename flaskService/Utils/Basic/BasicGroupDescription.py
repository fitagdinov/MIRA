from marshmallow import Schema, fields


class BasicGroupDescription(Schema):
    sys_group_id = fields.Integer(required=True, default=None, description="Системный ID Группы")
    extend_group_id = fields.Integer(required=True, default=None, description="mos.ru ID Группы")
    short_event_name = fields.String(required=True, default=None, desciption='Краткое название Группы')
    parent_event_sys_id = fields.Integer(required=True, default=None, description='Системный ID родителеьского иваента')
    description_group = fields.String(required=True, default=None, desciption='Описание Группы')
    beauty_code_group = fields.String(required=True, default=None, desciption='Красивый код для ввода бабушками')
    online_status_group = fields.Boolean(required=True, default=None, description='Онлайн статус группы')
    address_group = fields.String(required=True, default=None, description='Адрес группы')
    geo_group = fields.String(required=True, default=None, description='Округ группы')
    area_group = fields.String(required=True, default=None, description='Площадка группы')

    @classmethod
    def constructor(cls, sys_group_id, extend_group_id, short_event_name, parent_event_sys_id, description_group,
                    beauty_code_group, online_status_group, address_group, geo_group, area_group):
        return {
            "sys_group_id": sys_group_id,
            "extend_group_id": extend_group_id,
            "short_event_name": short_event_name,
            "parent_event_sys_id": parent_event_sys_id,
            "description_group": description_group,
            "beauty_code_group": beauty_code_group,
            "online_status_group": online_status_group,
            "address_group": address_group,
            "geo_group": geo_group,
            "area_group": area_group
        }
