import data from './data.json'
import './App.css';
import NoteList from './components/NoteList';
import { useState } from 'react';
;

function App() {

  const [list, setList] = useState(data)

  const delHandler = (note) => {
    setList(list.filter(el => el.id !== note))

  }

  return (
    <div className="App">
      <ul>
        {list.map(item => {
          return (
            <li>
              {<div><button onClick={() => delHandler(item.id)} className="button">Del</button> </div>}
              <NoteList title={item.title} time={item.time} body={item.body} />

            </li>
          )

        })}
      </ul>
    </div>
  )
}

export default App;
