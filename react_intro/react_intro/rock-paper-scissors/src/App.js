
/* import logo from './logo.svg';
import './App.css';
import { FaHandRock } from 'react-icons/fa';
import { FaHandScissors } from 'react-icons/fa';
import { FaHandPaper } from 'react-icons/fa';

function player({name ="player", score="0" }) {
  return 
    <div className='player'>
     <div className='score'>{'${name}: ${score}'}</div>
    <div className='action'>
      <ActionIcon Action={}
    </div>                 
  </div>
  function ActionIcon({Action, ...props}){
    const icons = {
      rock: FaHandRock,
      scissors: FaHandScissors,
      Paper: FaHandPaper,
        };
        const icon = icons[Action]
        return (<icon {...props}/>);
  }
  
}
//alt under skal bli lagt til i functions hadde ikke nok tid sist gang
function App() {
  return (
    <div className='center'>
      <h1>rock paper scissors</h1>
       <div>
        <div className='container'>
         <div className='player'>
           <div className='score'>player2: 0</div>
           <div className='action'><FaHandRock size={60}/></div>              
          </div>
        </div>
        <div>
        <button className='button-round'><FaHandRock size={30}/></button>
        <button className='button-round'><FaHandPaper size={30}/></button>
        <button className='button-round'><FaHandScissors size={30}/></button>
        </div>
        <h2>player1 wins</h2>
      </div>
    </div>
  );
}

export default App; */
