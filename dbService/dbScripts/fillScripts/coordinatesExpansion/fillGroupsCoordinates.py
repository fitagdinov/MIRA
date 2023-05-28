import json

import numpy as np
import requests
from dbService import get_request, put_request
import aiohttp
import asyncio
from tqdm import tqdm

BASIC_URL = ''


def make_request_string(address_string: str):
    final = 'http://87.242.95.93/coord/?q='
    parsed = address_string.split(',')
    house_number = list(filter(lambda x: 'дом' in x, parsed))
    if len(house_number) == 0:
        return None
    if not 'москва' in parsed[0].lower():
        return None

    house_number = house_number[0]
    house_number = house_number.split(' ')[-1]
    house_number = house_number.split('/')[0]
    final += f'{house_number}+'
    street = parsed[1]
    while street[0] == ' ':
        street = street[1:]
    final += '+'.join(street.split(' '))
    final += ',+'
    final += 'москва'
    final += '&addressdetails=1/'
    return final


def scrap_coords(_in):
    if type(_in) == list:
        _in = _in[0]
    if ('lat' in _in) and ('lon' in _in):
        _out = {"lat": _in["lat"], "lon": _in["lon"]}
    else:
        _out = None

    return _out


if __name__ == '__main__':
    all_grans = get_request(query=f"SELECT * FROM StaticMember", execute_many=True)
    get_strings = list(map(lambda x: make_request_string(x[-1]), all_grans))
    results = []
    async def main():
        async with aiohttp.ClientSession() as session:
            for number in tqdm(range(len(get_strings))):
                try:
                    grad_sys = all_grans[number]
                    pokemon_url = get_strings[number]
                    async with session.get(pokemon_url) as resp:
                        pokemon = await resp.json()
                    results.append([grad_sys, pokemon])
                except TypeError:
                    results.append([grad_sys, None])

    asyncio.run(main())
    # print(len(np.unique([_[0] for _ in results])))
    grand_ids = [_[0][0] for _ in results]
    coords = [scrap_coords(_[1]) for _ in results]
    coords = [f'{str(json.dumps(_))}' for _ in coords]
    # query=f'INSERT INTO StaticMemberCoordinates (SYS_ID_grand, coordinates) VALUES ({tuple(grand_ids)}, {tuple(coords)});', commit=True)
    insert_query = \
        f"""
        INSERT INTO NoOldMen.StaticMemberCoordinates (SYS_ID_grand, coordinates)
        VALUES
        """

    for i, grand_ids in enumerate(grand_ids):
        insert_query += f"({grand_ids}, '{coords[i]}'),"
    insert_query = insert_query[:-1]
    insert_query += ";"
    put_request(query=insert_query, commit=True)


