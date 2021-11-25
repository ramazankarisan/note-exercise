import data from './data.json'
import './App.css';
import NoteList from './components/NoteList';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [list, setList] = useState(data)
  const [text, setText] = useState({ title: "", body: "", id: "" })

  const changeHandler = (e) => {
    setText({ title: e.target.value, id: uuidv4() })
  }
  const addHandler = (e) => {
    e.preventDefault();
    // to prevent adding one note more than one time
    if (list.filter(item => item.id === text.id).length > 0) {
      return
    }
    setList(list => [text, ...list])
    console.log(list.filter(item => item.id === text.id));
  }

  const delHandler = (note) => {
    setList(list.filter(el => el.id !== note))

  }

  return (
    <div className="App">

      <form onSubmit={addHandler} >
        <input onChange={changeHandler} type="text" name="text" value={text.title} />
        <button type="submit">Add to List</button>
      </form>

      <ul>
        {list.map(item => {
          return (
            <li >
              <div className="flexDiv">
                <button onClick={() => delHandler(item.id)} className="button"><i class="fas fa-trash-alt"></i></button>
                <NoteList key={item.id} title={item.title} time={item.time} body={item.body} />
              </div>


            </li>
          )

        })}
      </ul>
    </div>
  )
}

export default App;
