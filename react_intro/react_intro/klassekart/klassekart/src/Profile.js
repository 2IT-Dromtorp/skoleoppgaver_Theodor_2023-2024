import { useNavigate } from 'react-router-dom';
export default function Profile() {
    const navigate = useNavigate();
    return(
        <>
        <h1>dette er profilen til eleven </h1>
        <button onClick={() => navigate(-1)}>back to home</button>
        </>
    )
}