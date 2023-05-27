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
import {FaHeart, FaSearch} from "react-icons/fa";
import {showEvents} from "../action/showEvents";
import CategorySelector from "../components/CategorySelector";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Test = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <br/><br/>
            <div className={'text-center'}>
                <h1> <FaHeart size={'20px'} style={{color: 'green', marginRight: '10px'}}/>
                    Здесь найдутся занятия по душе
                    <FaHeart size={'20px'} style={{color: 'green', marginLeft: '10px'}}/>
                </h1>
            </div>

            <br/>
            <div className={'text-center'} style={{marginLeft: '25%', width: '50%',fontSize: 22}}>
                <ButtonGroup>
                    <Button variant={'outline-success'} size={'lg'}>
                        <b>Авторизация</b>
                    </Button>
                </ButtonGroup>

                <br/>
                <br/>

                <h4 style={{color: '#363636'}}>
                    Авторизуйтесь, чтобы получить весь спектр возможностей
                    и воспользуйтесь личными рекомендациями
                </h4>
            </div>
            <br/>

            <hr className={'mt-4'} width="100%" size="2" color="#ff0000" />
            <div className={'text-center'} style={{marginLeft: '15%', width: '70%',fontSize: 22}}>
                <i> Основываясь на Ваших предпочтениях,
                    мы порекомендуем интересные мероприятия и поможем записаться на них.
                </i>

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
                </InputGroup>
            </Row>
            <br/>
            <br/>
            <div className={'text-center'}>
                <h2> Направления занятий </h2>
            </div>
            <br/>

            <CategorySelector/>

            {/*<Row className={ 'text-center'}>*/}
            {/*    <Col sm={1}/>*/}
            {/*    <Col sm={10}>*/}
            {/*        <CardGroup className='card-group'>*/}
            {/*            <Card style={{width: "18rem"}}>*/}
            {/*                <Card.Body className={'text-center'}>*/}
            {/*                    <div className={'item-margin-sm'}>*/}
            {/*                        <Button size={'lg'} variant='outline-success'*/}
            {/*                                href={'/template'}*/}
            {/*                        > <b>Для ума</b>*/}
            {/*                        </Button>*/}
            {/*                    </div>*/}

            {/*                    <Card.Text>*/}
            {/*                        <i style={{fontSize: 18}}>*/}
            {/*                            Интеллектуальные игры и образовательные мероприятия.*/}
            {/*                            Они предназначены для расширения знаний и взаимопонимания отдельных лиц в различных областях.*/}
            {/*                        </i>*/}
            {/*                    </Card.Text>*/}
            {/*                </Card.Body>*/}
            {/*            </Card>*/}


            {/*            <Card style={{width: "18rem"}}>*/}
            {/*                <Card.Body className={'text-center'}>*/}
            {/*                    <div className={'item-margin-sm'}>*/}
            {/*                        <Button size={'lg'} variant='outline-success'*/}
            {/*                                href={'/template'}*/}
            {/*                        ><b> Для тела</b>*/}
            {/*                        </Button>*/}
            {/*                    </div>*/}

            {/*                    <Card.Text>*/}
            {/*                        <i style={{fontSize: 18}}>*/}
            {/*                            Групповые занятия фитнесом и приключения на свежем воздухе.*/}
            {/*                            Эти мероприятия направлены на продвижение здорового образа жизни и улучшение физического самочувствия.*/}
            {/*                        </i>*/}
            {/*                    </Card.Text>*/}
            {/*                </Card.Body>*/}
            {/*            </Card>*/}


            {/*            <Card style={{width: "18rem"}}>*/}
            {/*                <Card.Body className={'text-center'}>*/}
            {/*                    <div className={'item-margin-sm'}>*/}
            {/*                        <Button size={'lg'} variant='outline-success'*/}
            {/*                                href={'/template'}*/}
            {/*                        > <b>Для души</b>*/}
            {/*                        </Button>*/}
            {/*                    </div>*/}

            {/*                    <Card.Text>*/}
            {/*                        <i style={{fontSize: 18}}>*/}
            {/*                            Медитация, творчество и семинары по осознанности.*/}
            {/*                            Эти мероприятия направлены на духовный и эмоциональный рост, а также достижение внутреннего покоя.*/}
            {/*                        </i>*/}
            {/*                    </Card.Text>*/}
            {/*                </Card.Body>*/}
            {/*            </Card>*/}
            {/*        </CardGroup>*/}
            {/*    </Col>*/}
            {/*    <Col sm={1}/>*/}
            {/*</Row>*/}

            <br/>


        </div>
    );
};

export default Test;