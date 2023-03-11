import './App.css';
import { Firebase } from './Service/config';

function App() {
  return (
    <div className="App">
   <button onClick={() => {
    Firebase.firestore().collection('students').get().then(snapshot => {
      snapshot.forEach((obj)=>{
        console.log(obj.data())
      })
    })
   }}>clickhere</button>
  </div>
  );
}

export default App;
  