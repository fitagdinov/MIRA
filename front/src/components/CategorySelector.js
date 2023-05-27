import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { showByTypeEvents } from '../action/showEvents';

function CategorySelector() {
    const [radioValue, setRadioValue] = useState('1');
    const dispatch = useDispatch()
    const byEvent = useSelector(state => state.byTypeEvents)

    const radios = [
        { name: 'Для ума', value: '1' },
        { name: 'Для тела', value: '2' },
        { name: 'Для души', value: '3' },

    ];
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
                        onClick={() => dispatch(showByTypeEvents(radio.name))}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            </div>
    );
}

export default CategorySelector;