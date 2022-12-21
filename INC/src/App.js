import "./App.css";
import {useSelector, useDispatch} from "react-redux";
import {incrementNumber,decrimentNumber} from "./actions/index";

function App() {
  const myState= useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch();
  return (
    <div className="App">
      Increment / decriment React js tutuorial
      <div className="quantity">
        <button className="quantity__increment" title="increment" onClick={()=>{dispatch(incrementNumber(5))}}>
          +
        </button>
        <input type="number" name="quantity" value={myState}/>
        <button className="quantity__decrement" title="decriment" onClick={()=>{dispatch(decrimentNumber())}}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
