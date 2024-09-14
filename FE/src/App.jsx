import { useState, useEffect } from 'react'
import icon from './assets/images/icon.png'
import './App.css'
import Note from './components/Note'
import 'https://kit.fontawesome.com/4a24fc7d8b.js'

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('notes'))
    console.log(999);
    if (item)
      setNotes(item)
  }, [])

  const generateId = () => {
    if (notes.length === 0) return 1
    let maxId = 0
    notes.map(note => {
      if (maxId < note.id){
        maxId = note.id
        console.log(9);
      }
    });
    return maxId + 1
  }

  const addTask = (event) => {
    console.log(notes);
    if(newNote === ''){
      alert("You must write something!");
      return
    }
    event.preventDefault()
    const tmpMessage = newNote
    const tmpNote = {id: generateId(), message: tmpMessage, state: false}
    setNewNote('')
    localStorage.setItem('notes', JSON.stringify(notes.concat(tmpNote)))
    console.log(notes.concat(tmpNote));
    setNotes(notes.concat(tmpNote))
  }

  const deleting = (id) => {
    console.log(notes);
    setNotes(notes.filter(note => note.id !== id))
  }

  const changeState = (id) => {
    let newNotes = notes.map(note => note.id === id?{...note, state: !note.state} : note)
    localStorage.setItem('notes', JSON.stringify(newNotes))
    console.log(newNotes);
    setNotes(newNotes)
  }

  const handleChange = (event) => {
    event.preventDefault()
    setNewNote(event.target.value)
  }

  return (
      <div className="container">
        <div className="todo-app">
            <h2>
                To-Do List
                <img src={icon} alt=""></img>
            </h2>
            <div className="row">
                <input type="text" id="input-box" placeholder="Add your text" value={newNote} onChange={handleChange}></input>
                <button onClick={addTask}>Add</button>
            </div>
            <ul id="list-container" >
                {notes.map(note => <Note key= {note.id} message = {note.message} state = {note.state}  deleting = {() => {deleting(note.id)}} changeState = {() => {changeState(note.id)}}/>)}
            </ul>
        </div>
    </div>

  )
}

export default App
