import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function UpdateUserForm() {
    const [users, setUsers] = useState([]); 
    const [newHobby, setNewHobby] = useState('');
    const [selectedUserId, setSelectedUserId] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/");
                setUsers(response.data);
                if (response.data.length > 0) {
                    setSelectedUserId(response.data[0].ElevID);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/updateuser`, {
                newhobby: newHobby,
                id: selectedUserId
            });
            alert('User updated successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('There was an error updating the user!', error);
        }
    };

    return (
        <div>
            <h2>Update User Hobby</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    New Hobby:
                    <input 
                        type="text" 
                        value={newHobby} 
                        onChange={(e) => setNewHobby(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    User ID:
                    <select 
                        value={selectedUserId} 
                        onChange={(e) => setSelectedUserId(e.target.value)}
                    >
                        {users.map(user => (
                            <option key={user.ElevID} value={user.ElevID}>
                                {user.Fornavn} {user.Etternavn} (ID: {user.ElevID})
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <button type="submit" id='updatebutton'>Update</button>
            </form>
        </div>
    );
}
