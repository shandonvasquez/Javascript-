// Import necessary modules and resources
import React from 'react';
import logo from './logo.svg';
import './App.css';CC
import CanvasComponent from './CanvasComponent';

// Functional component for the main App
function App() {
  return (
    <div className="App">
      {/* Header section */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <div>
          {/* Render the CanvasComponent within the JSX */}
          <CanvasComponent />
          <h2>WELCOME</h2>
        </div>
        <div className='header'>
          <div>ABOUT ME</div>
          <div>PROJECTS</div>
          <div>CONTACTS</div>
        </div>
      </header><br/>

      {/* Main content section */}
      <div className="main-content">
        {/* Introduction section */}
        <div>
          <h2>WEB DEVELOPER</h2>
        </div>

        {/* Image section */}
        <div>
          <img src="/images/dell.jpg" alt="COMPUTER" className="webDeveloper" />
        </div>

        {/* Work experience section */}
        <div className='divAbout'>
          <p>
          Hello, I'm Sheldon V, a passionate technology enthusiast. My journey with technology began in high school, where my fascination for it took root. Since then, I've committed myself to becoming a versatile web developer. My adaptability and keen decision-making skills make me proficient in navigating the dynamic world of web development. Additionally, my experience as an IT support professional has equipped me with valuable insights into hardware-related challenges. I am enthusiastic about leveraging my skills to contribute to innovative and effective solutions in the ever-evolving tech landscape.
          </p>
        </div>
        <div className='divWorkExp'>
          <h4>WORK EXPERIENCE</h4>
          <p>In this example, I added a media query for smaller screens to stack header items vertically and adjusted the gap between them. The canvas height is set to 10% of the screen height, and its width is set to 100% for responsiveness. Feel free to adjust the values based on your design preferences.

</p>
        <p>contact</p>  
        <p>Ready to contact the insurance</p>
        </div>
        
      </div>
    </div>
  );
}

// Export the App component
export default App;
