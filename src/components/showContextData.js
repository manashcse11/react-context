import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const ShowContextData = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h3>
            Showing from context
            </h3>
            <strong>Name</strong>: {user.name}<br/>
            <strong>Profession</strong>: {user.profession}
        </div>
    );
};

export default ShowContextData;