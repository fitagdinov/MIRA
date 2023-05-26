import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { showAllEvents } from '../action/showEvents';
import RecomendationCard from '../components/RecomendationCard';
import babka from '../image/images.jpeg'
import { CardGroup,} from 'react-bootstrap';

const Home = () => {
    const dispatch = useDispatch() 
    const allEvents = useSelector(state => state.allEvents.linked_groups)
        useEffect(() => {
        dispatch(showAllEvents());
      }, []);
    return (
        <>

            <h1>{allEvents.map(event =>
                 <div>
                        <CardGroup className='card-group mt-3'>
                            <RecomendationCard title={event.short_event_name}
                                            description={event.description_event}
                                            image={babka}
                                            link={'TEST_EVENT'}
                            />
                            <RecomendationCard title={event.short_event_name}
                                            description={'описание'}
                                            image={babka}
                                            link={'#'}
                            />

                            <RecomendationCard title={'третье мероприятие'}
                                            description={'описание'}
                                            image={babka}
                                            link={'#'}
                            />
                        </CardGroup>
                </div>)
            }</h1>

        </>
    );
};

export default Home;