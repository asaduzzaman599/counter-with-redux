import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, decrementWithNumber, increment, incrementWithNumber } from './redux/counterslice';
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleincrementForm = (e) => {
    e.preventDefault()
    const value = +e.target.number.value
    if (value < 0) {
      return
    }
    dispatch(incrementWithNumber(value || 0))
  }

  const handleDecrementForm = (e) => {
    e.preventDefault()
    const value = +e.target.number.value
    if (value < 0) {
      return
    }
    dispatch(decrementWithNumber(value || 0))
  }
  return (
    <div className="App">
      <div style={{ marginTop: "50px" }}>
        <div>
          <h1>{count}</h1>
        </div>
        <div>
          <button style={{ padding: "6px 16px", border: "none", backgroundColor: "green", color: "white", fontWeight: "600" }} onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())} style={{ padding: "6px 16px", border: "none", backgroundColor: "red", color: "white", fontWeight: "600" }}>-</button>
        </div>
        <form onSubmit={handleincrementForm}>
          <input type="number" name='number' />
          <input type='submit' value="Add" />
        </form>
        <form onSubmit={handleDecrementForm}>
          <input type="number" name='number' />
          <input type='submit' value="Remove" />
        </form>
      </div>
    </div>
  );
}

export default App;
