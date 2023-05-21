creation_request = \
    """
create table NoOldMen.StaticEvent
(
    SYS_ID_event        int auto_increment
        primary key,
    EXTERNAL_ID_event   bigint not null,
    CITE_ID_event       text   null comment 'код мероприятия для ввода бабушками',
    event_short_name    text   null comment 'Короткое название event (DUPLICATE level3)',
    event_detailed_info text   null comment 'Подробное описание мероприятия',
    event_level_1       text   null,
    event_level_2       text   null,
    event_level_3       text   null,
    constraint StaticEvent_pk
        unique (EXTERNAL_ID_event)
)
    comment 'База данных о доступных мероприятиях';

create table NoOldMen.EventEmbedding
(
    SYS_ID_event           int  not null,
    event_embedding_vector json null comment 'Вектор описывающий мероприятие',
    constraint EventEmbedding_StaticEvent_null_fk
        foreign key (SYS_ID_event) references NoOldMen.StaticEvent (SYS_ID_event)
            on update cascade on delete cascade
)
    comment 'вектора для event';

create table NoOldMen.StaticGroup
(
    SYS_ID_group        int auto_increment comment 'системный id группы'
        primary key,
    CITE_ID_group       text                                          null comment 'строка (код) для ввода группы бабушками',
    EXTERNAL_ID_group   int                            default 0      not null comment 'id группы на mos.ru',
    SYS_ID_event        int                                           not null comment 'ссылка на id general активности',
    group_online_status enum ('TRUE', 'FALSE', 'null') default 'null' null,
    group_address       text                                          null comment 'Честный адрес',
    group_geolocation   text                                          null comment 'Округ',
    group_area          text                                          null comment 'район группы',
    constraint StaticGroup_pk
        unique (EXTERNAL_ID_group),
    constraint StaticGroup_StaticEvent_null_fk
        foreign key (SYS_ID_event) references NoOldMen.StaticEvent (SYS_ID_event)
            on update cascade on delete cascade
)
    comment 'База по доступным группам';

create table NoOldMen.DynamicGroup
(
    SYS_ID_group       int  not null
        primary key,
    group_schedule_raw text null comment 'сырой текст с расписанием',
    constraint DynamicGroup_StaticGroup_null_fk
        foreign key (SYS_ID_group) references NoOldMen.StaticGroup (SYS_ID_group)
            on update cascade on delete cascade
)
    comment 'база с изменяющимися полями группы';

create table NoOldMen.EventGroupMap
(
    SYS_ID_event int not null comment 'id мероприятия',
    SYS_ID_group int not null comment 'id группы',
    constraint EventGroupMap_StaticEvent_null_fk
        foreign key (SYS_ID_event) references NoOldMen.StaticEvent (SYS_ID_event)
            on update cascade on delete cascade,
    constraint EventGroupMap_StaticGroup_null_fk
        foreign key (SYS_ID_group) references NoOldMen.StaticGroup (SYS_ID_group)
            on update cascade on delete cascade
)
    comment 'Связь мероприятия с доступными группами';

create table NoOldMen.StaticMember
(
    SYS_ID_grand            int auto_increment comment 'SYS ID бабушки'
        primary key,
    EXTERNAL_ID_grand       bigint                           not null comment 'Id бабушки с mos.ru',
    grand_birth_date        bigint                           null comment 'id timestamp format',
    grand_registration_date bigint                           null comment 'Дата регистрации бабушки',
    grand_name              text                             null comment 'имя бабушки',
    grand_surname           text                             null comment 'фамилия бабушки',
    grand_sex               enum ('M', 'W', 'N') default 'N' null comment 'пол бабушки',
    grand_address_raw       text                             null comment 'Сырой адрес бабушки (дальше переводится в координаты).',
    constraint StaticMember_pk
        unique (EXTERNAL_ID_grand)
)
    comment 'База данных со статикой бабушек';

create table NoOldMen.AttendanceGroup
(
    SYS_ID_group             int                                           null comment 'SYS ID группы',
    SYS_ID_grand             int                                           null comment 'SYS ID бабушки',
    attendance_date          bigint                                        null comment 'Время занятия группы',
    attendance_score         int                                           null comment 'Оценка бабушкой мероприятия (если доступно)',
    attendance_start_time    bigint                                        null comment 'Время начала занятия',
    attendance_end_time      bigint                                        null comment 'Время окончания занятия',
    attendance_online_status enum ('true', 'false', 'null') default 'null' null comment 'Скорее всего не понадобится',
    constraint AttendanceGroup_StaticGroup_null_fk
        foreign key (SYS_ID_group) references NoOldMen.StaticGroup (SYS_ID_group)
            on update cascade on delete cascade,
    constraint AttendanceGroup_memberStatic_null_fk
        foreign key (SYS_ID_grand) references NoOldMen.StaticMember (SYS_ID_grand)
            on update cascade on delete cascade
)
    comment 'Таблица посещаемости групп бабушками';

create table NoOldMen.memberEmbedding
(
    SYS_ID_grand    int  null,
    grand_embedding json null comment 'вектор бабушки из опроса',
    constraint memberEmbedding_pk
        unique (SYS_ID_grand),
    constraint memberEmbedding_memberStatic_null_fk
        foreign key (SYS_ID_grand) references NoOldMen.StaticMember (SYS_ID_grand)
            on update cascade on delete cascade
)
    comment 'начальный вектор бабушки из опроса';


    """