import { useNavigate } from 'react-router-dom';
export default function(props){
    let name = props.name
    let path = props.name.toLowerCase();


    const navigate = useNavigate();
    return(
        <button className='elev' onClick={() => navigate(path)}> {name} </button>        
    )
}