import logo from './logo.svg';
import './normal.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside className = "sidemenu">
        <div className = "side-menu-button">
          <span>+</span>
          New chat
        </div>
      </aside> 
      <section className = "chatbox">
        <div
          className = "chatbox-input-holder">
            <textarea 
              rows= "1"
              className = "chat-input-textarea"
              placeholder = "Type your message here" ></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
