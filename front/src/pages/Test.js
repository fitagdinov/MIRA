import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from 'react-redux';
import {
    Button,
    ButtonToolbar, Card, CardGroup, Col,
    Form,
    InputGroup,
    Row,
    ToggleButton,
    ToggleButtonGroup
} from "react-bootstrap";
import {FaSearch} from "react-icons/fa";
import {showEvents} from "../action/showEvents";

const homeIvan = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <Nav defaultActiveKey='/' as='ul'>
                <Nav.Item as='li'>
                    <Nav.Link href='/opros/1'>Opros</Nav.Link>
                    <h1>{localStorage.getItem('isAuth')}</h1>
                </Nav.Item>
            </Nav>

            <hr className={'mt-4'} width="100%" size="2" color="#ff0000" />
            <div className={''} style={{marginLeft: '10%', width: '80%',fontSize: 22}}>
                <i> Служба рекомендаций культурных мероприятий - это платформа,
                    призванная помочь участинкам программы "Московское доголетие"
                    найти занятие по душе. Основываясь на Ваших предпочтениях,
                    мы порекомендуем интересные мероприятия и поможем записаться на них.
                    Чтобы получить весь спектр возможностей - пройдите авторизацию (кнопка в верхнем правом углу).
                </i>
                <br/>
                <br/>
                <i>
                    Вы можете легко пригласить знакомых составить вам компанию.
                    Благодаря быстрому поиску по кодовому слову
                    им будет очень легко найти нужное мероприятие среди тысяч других.
                </i>
            </div>
            <hr className={'mt-4'} width="100%" size="2" color="#ff0000" />
            <Row>
                <InputGroup className={'mt-1'} style={{marginLeft: '25%', width: '50%'}} size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg"><FaSearch/></InputGroup.Text>
                    <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder={'Введите код мероприятия'}
                    />
                    <div className={'input-group-append'}><Button variant='success' size={"lg"}>Искать</Button> </div>
                    <div className={'input-group-append'}>
                        <Button variant={'success'}
                                size={"lg"}
                                onClick={() => {dispatch(showEvents(2))}}
                            // TODO: add dispatch function in onClick
                        >тест мероприятия</Button>
                    </div>
                </InputGroup>
            </Row>
            <br/>

            <div className={'text-center'}>
                <h2> Направления занятий </h2>
            </div>

            <Row className={ 'text-center'}>
                <Col sm={1}/>
                <Col sm={10}>
                    <CardGroup className='card-group'>
                        <Card style={{width: "18rem"}}>
                            <Card.Body className={'text-center'}>
                                <div className={'item-margin-sm'}>
                                    <Button size={'lg'} variant='outline-success'
                                            href={'/template'}
                                    > <b>Для ума</b>
                                    </Button>
                                </div>

                                <Card.Text>
                                    <i style={{fontSize: 18}}>
                                        Интеллектуальные игры и образовательные мероприятия.
                                        Они предназначены для расширения знаний и взаимопонимания отдельных лиц в различных областях.
                                    </i>
                                </Card.Text>
                            </Card.Body>
                        </Card>


                        <Card style={{width: "18rem"}}>
                            <Card.Body className={'text-center'}>
                                <div className={'item-margin-sm'}>
                                    <Button size={'lg'} variant='outline-success'
                                            href={'/template'}
                                    ><b> Для тела</b>
                                    </Button>
                                </div>

                                <Card.Text>
                                    <i style={{fontSize: 18}}>
                                        Групповые занятия фитнесом и приключения на свежем воздухе.
                                        Эти мероприятия направлены на продвижение здорового образа жизни и улучшение физического самочувствия.
                                    </i>
                                </Card.Text>
                            </Card.Body>
                        </Card>


                        <Card style={{width: "18rem"}}>
                            <Card.Body className={'text-center'}>
                                <div className={'item-margin-sm'}>
                                    <Button size={'lg'} variant='outline-success'
                                            href={'/template'}
                                    > <b>Для души</b>
                                    </Button>
                                </div>

                                <Card.Text>
                                    <i style={{fontSize: 18}}>
                                        Медитация, творчество и семинары по осознанности.
                                        Эти мероприятия направлены на духовный и эмоциональный рост, а также достижение внутреннего покоя.
                                    </i>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
                <Col sm={1}/>
            </Row>

            <br/>


            {/*    <br/>*/}
            {/*// TODO: плохо рескейлится при малых ширинах экрана*/}

            {/*    <div className={'text-center'} style={{width: '80%', marginLeft: '10%'}}>*/}

            {/*        <ToggleButtonGroup size={'lg'}  type='radio'  name="options" justified className={'d-flex'}>*/}
            {/*            <ToggleButton className={'w-100'} variant='outline-primary' value={1}>Для ума</ToggleButton>*/}
            {/*            <ToggleButton className={'w-100'} variant='outline-primary' value={2}>Для тела</ToggleButton>*/}
            {/*            <ToggleButton className={'w-100'} variant='outline-primary' value={3}>Для души</ToggleButton>*/}
            {/*        </ToggleButtonGroup>*/}
            {/*    </div>*/}
        </div>
    );
};

export default homeIvan;