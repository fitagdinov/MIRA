import React, { useState, useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {showByTypeEvents, showEvents, showREcommendationEvents} from '../action/showEvents';
import {authUser} from "../action/auth";

function CategorySelectorRec() {
    const [radioValue, setRadioValue] = useState('1');

    const dispatch = useDispatch()
    const user = useSelector(state => state.authTest)
    const radios = [
        { name: 'Для ума', value: '1' },
        { name: 'Для тела', value: '2' },
        { name: 'Для души', value: '3' },

    ];
   useEffect(() => { //при обновлении строницы загружаем инфу по карточке  зависимости от номера
        dispatch(authUser(localStorage.getItem('fio'), localStorage.getItem('birthDate'))) // хард код для авторизации
      }, []);

    const typeGilter = () => {
        
    }
    return (
        <div className={'text-center'} style={{width: '80%', marginLeft: '10%'}}>
            <ButtonGroup size={'lg'} className={'d-flex'}>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={'outline-success'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                        justified
                        className={'w-100'}

                        onClick={() => dispatch(showREcommendationEvents(user.grand_sys_id, radio.name))}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            </div>
    );
}

export default CategorySelectorRec;