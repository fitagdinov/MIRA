from datetime import date, timedelta
def weekday(rus:str) -> int:
    rus_week=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"]
    for i in range(7):
        if rus == rus_week[i]:
            return i
def check_time( time : str) -> bool:
    time=time.replace(' ','')
    res=False
    t2=time.split('-')
    if len(t2)==2:
        if ':' in t2[0] and ':' in t2[1]:
            try:
                int(t2[0].replace(':',''))+int(t2[1].replace(':',''))
                res=True
            except ValueError:
                res=False
    return res
def parsing_timetable(timetable_str: str):
    rus_week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

    data=timetable_str.split('[-]')[0].replace('Активные:','')
    if data =='nan':
        return []
    else:
        list_data=data.split(',')
        st_date,fin_date=list_data[0].replace('c ','').split('по ')
        st_date=[int(i) for i in st_date.split('.')[::-1]]
        fin_date=[int(i) for i in fin_date.split('.')[::-1]]

        start_date= date(st_date[0],st_date[1],st_date[2])
        end_date= date(fin_date[0],fin_date[1],fin_date[2])

        days_time='.'.join(list_data[1:-1]).replace('..','.').split('.')
        days_time=[i.replace(' ','') for i in days_time]
        week=[]
        days_without_time=[]
        for i in days_time:
            if i in rus_week:
                days_without_time.append(weekday(i))
            elif check_time(i):
                #find time
                for d in days_without_time:
                    week.append([d,i])
                days_without_time=[]
        week=dict(week)
        delta = end_date - start_date
        all_days=[]
        for i in range(delta.days + 1):
            day = start_date + timedelta(days=i)
            if day.weekday() in week.keys():
                res=str(day) +' '+ week[day.weekday()]+ ' ' + rus_week[day.weekday()]
                all_days.append(res)
        return all_days