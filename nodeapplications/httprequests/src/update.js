import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function UpdateUserForm() {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = `http://localhost:3000/updateuser/${encodeURIComponent(newHobby)}/${encodeURIComponent(selectedUserId)}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                alert('User updated successfully!');
                console.log(data);
            })
            .catch(error => {
                console.error('There was an error updating the user!', error);
            });
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
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdateUserForm;
