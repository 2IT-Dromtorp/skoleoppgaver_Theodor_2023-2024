import * as react from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

function App() {
    const [isExploding, setIsExploding] = React.useState(false);
    return <>{isExploding && <ConfettiExplosion />}</>;
  }