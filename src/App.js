import './App.css';
import firebase from './firebase';
import { useState, useEffect } from 'react';
import Header from './Header';
import {getDatabase, ref, onValue, push, remove} from 'firebase/database'

function App() {

  const [journalEntry, setJournalEntry] = useState([]);

  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {

    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const database = getDatabase(firebase);
    const dbRef = ref(database);

    push(dbRef, userInput);

    setUserInput('');

  }

  const removeEntry = (entryId) => {

    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${entryId}`);
    remove(dbRef);

  }

  useEffect( ()=>{

    const database = getDatabase(firebase);
    const dbRef = ref(database);

    onValue(dbRef, (response)=>{

      const data = response.val();
      const newState = [];

      for (let key in data) {

        newState.push(
          {
            key: key,
            entry: data[key]
          }
        )
      }

      setJournalEntry(newState);
      
    });

  }, []);


  return (
    <div className="App">

      <Header />
      <form action="submit" onSubmit={handleSubmit}>

        <label htmlFor="newEntry">Add something you are thankful for🙏</label>
        <div className='inputContainer'>
          <input type="text" id="newEntry"
          onChange={handleChange}
          value={userInput} required/>

          <button>Click to add your entry and to recite</button>
        </div>

      </form>


        {
          journalEntry.map((journal)=>{
            return (
              <div className="journalContainer" key={journal.key}>
                <h2>I am thankful for {journal.entry}</h2>
                <button onClick={()=>{removeEntry(journal.key)}}>Done Reciting</button>
              </div>
            )
          })

        }


    </div>
  );
}

export default App;
