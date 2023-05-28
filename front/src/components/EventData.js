import {Button, Col, Container, Image, Row} from "react-bootstrap";
import babka from '../image/images.jpeg';

export default function EventData (){
    // const dispatch = useDispatch()
    // const events = useSelector( state => state.events )
    // useEffect(() => {
    //     dispatch(showEvents(1));
    //   }, []);
//////////////    НЕТ ДАННЫХ, АНДРЕЙ ЗАЕБАЛ
    return (
    <Container>
        <br/>
        <h1> Длиииииииииииииииииннооооооооооое Название </h1>
        <h5> (Мероприятие / Группа) </h5>

        <Row>
            <Col md={7}>
                <Image width={'90%'} src={babka} fluid={true} className="rounded" alt="image" />
            </Col>
            <Col>
                {/* TODO: сделать кнопку, зависящей от количества мест и статуса записи */}

                <br/>
                <Button variant={'success'} size={"lg"}>Записаться</Button>
                <h6>Осталось мест: 10 из 15</h6>
                <br/>

                <h5>Время: 15:00
                </h5>
                <h5>Длительность: 3 часа</h5>
                <h5> Адрес: Тверь, могила Круга</h5>
                <h5> Метро: Беговая</h5>

                <br/>
                <h3>Формат: онлайн / очно </h3>
                <h2>КОД: кот52 </h2>

            </Col>
        </Row>

        <br/>
        <a>
            Мы делим описание мероприятия на две части: техническую и мотивирующую.
            Большинство организаторов повторяют одну и ту же ошибку: дают в описании только
            стандартную техническую информацию. Да, она совершенно обязательна, но при этом уже
            недостаточна в любой конкурентной нише. Большинство мероприятий предлагаются
            холодной аудитории, которая о вас ничего не знает. Им мало просто знать, где и когда.
            Им надо понимать — зачем.
        </a>
    </Container>
    );
};