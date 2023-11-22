import React from 'react';
import './App.css'; // You can create this CSS file for styling

class App extends React.Component {
  // Function to handle the click event for the buttons
  handleClick = (position) => {
    alert(`Button in ${position} clicked!`);
  };

  render() {
    return (
      <div className="button-container">
        {/* Top right button */}
        <button
          className="button top-right"
          onClick={() => this.handleClick('top right')}
        >
          Top Right
        </button>

        {/* Bottom right button */}
        <button
          className="button bottom-right"
          onClick={() => this.handleClick('bottom right')}
        >
          Bottom Right
        </button>
      </div>
    );
  }
}

export default App;
    
