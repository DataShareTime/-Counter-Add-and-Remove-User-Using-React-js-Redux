import React,{useRef} from "react";
import "./App.css";
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement,reset,addUser,removeUser} from "./actions"

function App() {
  //accessing the the states from index.js/reducers
  const count = useSelector(state => state.counterReducer);
  const users = useSelector(state => state.userReducer);

const dispatch = useDispatch();
const userRef = useRef(null);
const handleSubmit = e =>{
  e.preventDefault();
  dispatch(addUser(userRef.current.value))
  userRef.current.value = '';
}
  return (
    <>
    <div>
    <div className="text-center">
      <h2 className="p-4">Counter</h2>
      <button className="btn btn-info" type='button' onClick={()=>dispatch(increment())}>+</button>
      <span className="p-4">
      {count}
      </span>
      <button className="btn btn-info" type='button' onClick={()=>dispatch(decrement())}>-</button><br/>
      <button className="btn btn-danger mt-4" type='button' onClick={()=>dispatch(reset())}>Reset</button>
      <h2 className="p-4">User</h2>
      <form onSubmit={handleSubmit}>
        <input className="text-success rounded-pill p-1" type="text" placeholder="Username" ref={userRef} />
      </form>
      <ul className="bg-lime">
        {users.map((user,index)=>(
          <li className="mr-5 mt-3" key={index}>{user.name}
          <button className="btn btn-danger ml-4" onClick={()=>dispatch(removeUser(index))}>Delete🗑</button>
          </li>
          
        )
          
        )}
      </ul>
      </div>
      </div>
    </>
  );
}

export default App;
