import { useNavigate } from "react-router-dom";

export default function Kroppsøving(){
    const navigate = useNavigate();
    return( 
    <div>
        <button onClick={() => navigate('/courses')} className="top-right-button-courses">tilbake til gå tilbake til kursvalg</button>
        <h1>Norsk</h1>
    </div>
        
        
    );
};