import {Button, Form, FormGroup, InputGroup, ToggleButtonGroup} from "react-bootstrap";
import React, {useState}from 'react'
import ToggleButton from "react-bootstrap/ToggleButton";


const SearchSelector = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    let categories1 = ["игры", "языки"];
    // let categories2 = [["игры", "языки"], ["игры", "языки"]]
    let places = ['Строгино', 'Патриаршие пруды', 'Замоскворечье', 'Хамовники']

    // function checkBox(list) {
    //     return (
    //         list.map((item) => (
    //                 <Form.Check
    //                     label={item}
    //                     name={item}
    //                     type='checkbox'
    //                     id={item}
    //                     style={{fontSize: '18px'}}
    //                 />
    //         ))
    //     );
    // }

    return (
        <Form size={'lg'} show={show} onHide={handleClose}>

            <Form.Label>
                <h4> Сортировка </h4>
            </Form.Label>

            <Form.Select style={{width: '100%'}} aria-label="Сортировать">
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
            <select className="selectpicker" data-live-search="true">
                {places.map((item) => (
                        <option datatokens> {item}</option>
                    ))}
            </select>

            <select className="selectpicker" data-live-search="true">
                <option data-tokens="ketchup mustard">Hot Dog, Fries and a Soda</option>
                <option data-tokens="mustard">Burger, Shake and a Smile</option>
                <option data-tokens="frosting">Sugar, Spice and all things nice</option>
            </select>


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

            <div className={'text-center'}>
                <Button variant="success" size={'lg'}>
                    Поиск
                </Button>
                <Button style={{margin: '10px'}} type='submit' variant="danger" size={'lg'}>
                    Cброс
                </Button>
            </div>
        </Form>
    )
}

export default SearchSelector;