import React from 'react';
import './styles.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Video Streaming Site</h1>
      </header>
      <main>
        {/* Video player component */}
        <div className="video-player">
          {
            <video width="700px" height="400px" controls>

              <source src="https://d1fvn2022cjrhu.cloudfront.net/RenderMe.mp4" type="video/mp4"/>

            </video>
          }
        </div>
        {/* Video list component */}
        <div className="video-list">
          {/* Your video list code goes here */}
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Video Streaming Site. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
