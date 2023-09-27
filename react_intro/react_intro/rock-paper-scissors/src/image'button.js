import React from 'react';

class ImageButton extends React.Component {
  handleClick = () => {
    // Add your click event code here
    alert('Button clicked!');
  };

  render() {
    // Replace 'image-url.jpg' with your image URL
    const imageUrl = 'image-url.jpg';

    return (
      <button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={this.handleClick}
      >
        
        
      </button>
    );
  }
}

export default ImageButton;