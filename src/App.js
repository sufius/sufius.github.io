import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>Selfmade Events</div>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="FHMQ5GYCK9UPA"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donate_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Spenden mit dem PayPal-Button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/de_DE/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
      </header>
    </div>
  );
}

export default App;
