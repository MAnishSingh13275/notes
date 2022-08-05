import React from "react";
import "./Notes.css";
function Notes({ element, addNote, setAddNote, setEditId }) {
  const removeHandler = (id) => {
    const newNotes = addNote.filter((elm) => {
      if (elm.id !== id) {
        return elm;
      }
    });
    setAddNote(newNotes);
    
  };
  const editHandler = (id) => {
    setEditId(id);
    addNote.filter((elem)=>{
        if(elem.id===id){
            document.getElementById("editTitle").value=elem.title;
            document.getElementById("editDescription").value=elem.desc;
        }
    })
    
  };
  return (
    <div className="notesBody">
      <div className="card m-3">
        <div className="card-header text-capitalize">{element.title}</div>
        <div className="card-body text-capitalize">
          <p className="card-text">{element.desc}</p>
          <div className="button">
            <button
              type="button"
              className="btn btn-primary mx-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => {
                editHandler(element.id);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger mx-1"
              onClick={() => {
                removeHandler(element.id);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
