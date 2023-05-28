import {Button, Form, FormGroup, InputGroup, ToggleButtonGroup} from "react-bootstrap";
import React, {useState}from 'react'
import ToggleButton from "react-bootstrap/ToggleButton";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';


const SearchSelector = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    let categories1 = ["игры", "языки"];
    // let categories2 = [["игры", "языки"], ["игры", "языки"]]
    let places = ['Строгино', 'Патриаршие пруды', 'Замоскворечье', 'Хамовники']
    function toDict(item) {
        return {value: item, label: item}
    }

    const placesDict = places.map(toDict)
    const animatedComponents = makeAnimated();


    return (

        <Form size={'lg'} show={show} onHide={handleClose}>
                        <div className={'text-center'}>
                <Button variant="success" size={'lg'}>
                    Поиск
                </Button>
                <Button style={{margin: '10px'}} type='submit' variant="danger" size={'lg'}>
                    Cброс
                </Button>
            </div>

            <Form.Label>
                <h4> Сортировка </h4>
            </Form.Label>

            <Form.Select style={{width: '100%'}} aria-label="Сортировать">
                <option>по релевантности</option>
                <option>по названию</option>
                <option value="1">по дате</option>
            </Form.Select>
            <br/>

                <Form.Label >
                    <h4> Формат </h4>
                </Form.Label>

                <Form.Group>
                <ToggleButtonGroup size={'lg'} type="checkbox" className="mb-2">
                    <ToggleButton variant={'outline-success'} id="tbg-check-1" value={1}>
                        Очно
                    </ToggleButton>
                    <ToggleButton variant={'outline-success'} id="tbg-check-2" value={2}>
                        Онлайн
                    </ToggleButton>
                </ToggleButtonGroup>
                </Form.Group>
            <br/>

            <Form.Label>
                <h4>Категории</h4>
            </Form.Label>
                <Form.Group>
                    {categories1.map((cat1) => (
                            <Form.Check
                                label={cat1}
                                name={cat1}
                                type='checkbox'
                                id={cat1}
                                style={{fontSize: '18px'}}
                            />
                    ))}
                </Form.Group>

            <br/>

            <Form.Label>
                <h4>Район</h4>
            </Form.Label>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={placesDict}
            />


            <br/>

            <Form.Label>
                <h4>День</h4>
            </Form.Label>
            <Form.Group>
                {['понедельник', 'вторник', "среда", "четверг",
                    "пятница", "суббота", "воскресенье"].map((option) => (
                    <div className="mb-1">
                        <Form.Check
                            label={option}
                            name="group1"
                            type='checkbox'
                            id={option}
                            style={{fontSize: '18px'}}
                        />
                    </div>
                ))}
            </Form.Group>
            <br/>


            <Form.Label><h4>Время</h4></Form.Label>
            <InputGroup className="mb-1" controlId="formBasicEmail">
                <FormGroup>
                    <Form.Label className="text-muted">
                        От
                    </Form.Label>
                    <Form.Control type="" placeholder="00:00" />
                </FormGroup>
                <FormGroup>
                    <Form.Label className="text-muted">
                        До
                    </Form.Label>
                    <Form.Control type='time-range' placeholder="23:59" />
                </FormGroup>
            </InputGroup>

        </Form>
    )
}

export default SearchSelector;