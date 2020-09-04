import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const UpdateContextData = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h3>Update context data</h3>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={user.name} onChange={e => user.setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Profession</label>
                <input type="text" className="form-control" value={user.profession} onChange={e => user.setProfession(e.target.value)} />
            </div>
        </div>
    );
};

export default UpdateContextData;