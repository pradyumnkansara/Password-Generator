import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, UC, NC, SC } from './Password';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';


function App() {
  let [uppercase, setuppercase] = useState(false)
  let [lowercase, setlowercase] = useState(false)
  let [numbers, setnumbers] = useState(false)
  let [symbols, setsymbols] = useState(false)
  let [randompass, setrandompass] = useState('')
  let [txtlength, setTxtlength] = useState(10)

  let passwordcreate = () => {
    let passChar = '';
    if ((uppercase) || (lowercase) || (numbers) || (symbols)) {
      if (uppercase) {
        passChar += UC;
      }
      if (lowercase) {
        passChar += LC
      }
      if (numbers) {
        passChar += NC
      }
      if (symbols) {
        passChar += SC
      }
      // console.log(passChar)
      let t = passChar.length
      let randompass1 = ''
      for (let i = 0; i < txtlength; i++) {
        randompass1 += passChar.charAt(Math.floor(Math.random() * t))
      }
      // console.log(randompass1)
      setrandompass(randompass1)
      NotificationManager.success('Password Generaed');
    }
    else {
      NotificationManager.error('character not selected');
    }
  }

  let copypassword = () => {
    if (randompass.length > 0) {
      navigator.clipboard.writeText(randompass)
      NotificationManager.success('Copied Succesful');
    }
    else{
      NotificationManager.error('character not found');
    }
  }
  return (
    <>
      <div class="container">
        <h2>Password Generator</h2>
        <div class="result-container">
          <span>{randompass}</span>
          <button class="btn" id="clipboard" onClick={copypassword}>
            cpy
          </button>
        </div>
        <div class="settings">
          <div class="setting">
            <label>Password length</label>
            <input type="number" onChange={(event) => setTxtlength(event.target.value)} id="length" min='4' max='20' value={txtlength} />
          </div>
          <div class="setting">
            <label>Include uppercase letters</label>
            <input type="checkbox" id="uppercase" name='uppercase' onChange={() => setuppercase(!uppercase)} checked={uppercase} />
          </div>
          <div class="setting">
            <label>Include lowercase letters</label>
            <input type="checkbox" id="lowercase" checked={lowercase} name='lowercase' onChange={() => setlowercase(!lowercase)} />
          </div>
          <div class="setting">
            <label>Include numbers</label>
            <input type="checkbox" id="numbers" checked={numbers} name='numbers' onChange={() => setnumbers(!numbers)} />
          </div>
          <div class="setting">
            <label>Include symbols</label>
            <input type="checkbox" id="symbols" checked={symbols} onChange={() => setsymbols(!symbols)} />
          </div>
        </div>
        <button class="btn btn-large" id="generate" onClick={passwordcreate}>
          Generate password
        </button>
      </div>
      <div class="social-panel-container">
        <div class="social-panel">
          <p>Created with <i class="fa fa-heart"></i> by
            <a target="_blank" href="https://florin-pop.com">Florin Pop</a></p>
          <button class="close-btn"><i class="fas fa-times"></i></button>
          <h4>Get in touch on</h4>
          <ul>
            <li>
              <a href="https://www.patreon.com/florinpop17" target="_blank">
                <i class="fab fa-discord"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/florinpop1705" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/florinpop17" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/florinpop17" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/florinpop17" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <NotificationContainer />
    </>
  );
}

export default App;
