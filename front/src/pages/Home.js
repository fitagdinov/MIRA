import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { showAllEvents } from '../action/showEvents';
import RecomendationCard from '../components/RecomendationCard';
import babka from '../image/images.jpeg'
import { CardGroup,} from 'react-bootstrap';
import { authUser } from '../action/auth'

const Home = () => {
    const dispatch = useDispatch() 
    const allEvents = useSelector(state => state.allEvents.linked_groups)
    const auth = useSelector(state => state.authTest)
    const [fio, setFio] = useState(localStorage.getItem('fio'))
    const [birthDate, setBirthDate] = useState(localStorage.getItem('birthDate'))
    
    useEffect(() => {
        dispatch(showAllEvents());
        dispatch(authUser(fio, birthDate))
      }, []);

        return (
            <>
                <h1>{allEvents.map((event, k) =>
                    <div key={k}>
                            <CardGroup className='card-group mt-3'>
                                <RecomendationCard title={event.short_event_name}
                                                description={event.description_event}
                                                sys_event_id={event.sys_event_id}
                                                // image={babka}
                                                link={`/event/${event.sys_event_id}`            
                                            }
                                />
                            </CardGroup>
                    </div>)
                }</h1>

            </>
        );
};

export default Home;