import math

def calc_dist(point1,point2):
    ''' выдает в метрах получает точки координат. см чтроку ниже
    '''
    lat1,lon1=point1
    lat2,lon2=point2
    ecvator_long=40075696 # meters
    lon_dist=math.cos(lat1)*ecvator_long/360*math.fabs(lon2-lon1)
    lat_dist=ecvator_long/360*math.fabs(lat2-lat1)
    return (lon_dist + lat_dist)
def calc_time(dist,speed=5):
    '''  скорость в км в час. расстояние в метрах. ретерн секунды'''
    speed_m_m=speed*1000/60
    return(dist/speed_m_m)