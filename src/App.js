import {useState} from 'react';
import { act } from 'react-dom/test-utils';

function App() {
  console.log('App is rendering');
  let [player1Counter, setPlayer1Counter] = useState(10);
  let [player2Counter, setPlayer2Counter] = useState(10);

  return (
    <div>
      <div>
          <div> Player1</div>
          <div>{player1Counter}</div>
          <button onClick = {() => {
           setPlayer1Counter((actual) => actual+1);
            }
          }>
              +
          </button>
      </div>
      <hr />
    <div>
        <div>Player 2</div>
        <div>{player2Counter}</div>
        <button onClick = {() => {
           setPlayer2Counter((actual) => actual+1);
            }
          }>
              +
          </button>
    </div>
    <hr />
    <button onClick = {() => {
      setPlayer1Counter((actual) => actual -1);
      setPlayer2Counter((actual) => actual -1);
    }}>-</button>

    <button onClick ={() => {
      setPlayer1Counter(10);
      setPlayer2Counter(10);
    }}>reset</button>
    </div>
  );
}

export default App;
