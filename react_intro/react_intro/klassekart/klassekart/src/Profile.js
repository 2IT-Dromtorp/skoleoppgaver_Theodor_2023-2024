import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import json from './profiles';

export default function Profile() {

    const navigate = useNavigate();
    let profileParams = useParams();

    const [profile, setProfile] = useState({
        "navn" : null,
        "alder" : null,
        "email" : null,
        "Tlf" : null,
        "image": null,
    });

    useEffect(() => {
        const matchedItem = json.elever.find(item => item.navn.toLowerCase() === profileParams.Profile.toLowerCase());

        if (matchedItem) {
            setProfile(matchedItem);
        }

    }, [profileParams.Profile]);

    return (
        <>
        <div className='profile-container'>
            <div className='profile-box'> 
                <h1>dette er profilen til {profileParams.Profile} </h1>
                <p>Navn: {profile.navn}</p>
                <p>Alder: {profile.alder}</p>
                <p>Email: {profile.email}</p>
                <p>Telefon: {profile.Tlf}</p>
                <p>har ikke bilder</p>
                <button onClick={() => navigate('/')}>back to home</button>
            </div>
        </div>
        </>
    );
}