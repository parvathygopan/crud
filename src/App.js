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
   <button onClick={() => {
    Firebase.firestore().collection('students').doc('32oFcY5mF9b1FkGA0jUp').delete().then(() => {
      console.log("deleted successfully")
    })
   }}>add</button>
  </div>
  );
}

export default App;
  