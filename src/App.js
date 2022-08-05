import React, { useState } from 'react'
import Form from './Components/form/Form'
import "./App.css"
import Navbar from './Components/navbar/Navbar'
import Notes from './Components/notes/Notes'
import Modal from './Components/modal/Modal'
function App() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [editId, setEditId] = useState("")
  const [addNote, setAddNote] = useState(getNotesfromLs)


  localStorage.setItem("addNote", JSON.stringify(addNote))
  return (
    <div>
      <Modal editId={editId} addNote={addNote} setAddNote={setAddNote}  />
      <Navbar />
      <div className="d-flex">
        <div className="left">
          <Form  title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} addNote={addNote} setAddNote={setAddNote} />
          <div className="bar"></div>
        </div>
        <div className="right">
          <h1 className='mx-3 heading'>Your Notes</h1>
          <div className="notes">
            {
              addNote.length === 0 ?
                <h3 className='text-primary text-center'>No Notes Available</h3>
                : addNote.map((element) => {
                  return (
                    <Notes element={element} key={element.id} addNote={addNote} setAddNote={setAddNote} setEditId={setEditId} />
                  )
                })
            }
          </div>
        </div>
      </div>
    </div>
  )
  function getNotesfromLs() {
    const note = JSON.parse(localStorage.getItem("addNote"));
    if (note) {
      return note
    } else {
      return [];
    }
  }
}

export default App