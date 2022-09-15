import Simpsons from "./components/Simpsons";
import './App.css';

function App() {

  return (
    <div className="App">
      <Simpsons/>
    </div>
  );
}

export default App;

//
// import './App.css';
// import {simpsons} from "./components/SimpsonComponents";
// import {simpsons} from "./data"
//
// function App() {
//
//     return (<div>
//         <h1>Simpson Family</h1>
//         {
//             simpsons.map(simpson => (<div>
//                <h2>{simpson.id}---{simpson.name}</h2>
//                <p>{simpson.email}---{simpson.phone}<br/>{simpson.website}</p>
//             </div>))
//         }
//
//     </div>)
// }
//             export default App;