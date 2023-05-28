import {Card, ListGroup, ToggleButton} from "react-bootstrap";
import {useState} from "react";

// TODO: добавить POST на бэк для обновления записей
// TODO: не показывать плашку с записью неавторизованным

this.props = undefined;



function ScheduleElement() {
    const [checked, setChecked] = useState(false);

    return (
        <Card style={{ width: '18rem', marginTop: '20px' }}>
            <ListGroup variant="flush">
                <ListGroup.Item>23 мая 20:00
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-success"
                        checked={checked}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                        value={1}>
                        Запись </ToggleButton>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default ScheduleElement;