import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios"

const App = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  // const notesData1 = [
  //   {
  //     title: "Introduction",
  //     description: "This section gives an overview of the topic."
  //   },
  //   {
  //     title: "Concept",
  //     description: "Explains the core idea in simple terms."
  //   },
  //   {
  //     title: "Example",
  //     description: "Provides a practical example for better understanding."
  //   },
  //   {
  //     title: "Summary",
  //     description: "Quick revision of all important points."
  //   }
  // ];
  const [notesData, setnotesData] = useState([])

  function getAllData() {
    axios.get("http://localhost:3000/api/notes")
      .then(res => {
        // console.log(res.data.notes)
        setnotesData(res.data.notes)
      })

  }

  useEffect(() => {
    getAllData();
  }, [])

  function submitHandler(e) {
    e.preventDefault();
    // console.log("add clicked")
    // console.log(title, description)

    if (editId === null) {
      axios.post("http://localhost:3000/api/notes", {
        title, description
      })
        .then((res) => {
          console.log(res.data)
          getAllData();
        })
    }
    else if (editId !== null) {
      axios.patch(`http://localhost:3000/api/notes/${editId}`, {
        description
      })
        .then((res) => {
          console.log(res.data)
          getAllData();
          setEditId(null)
          setIsEdit(false)
        })
    }

    setTitle("")
    setDescription("")
  }

  function deleteNote(id) {
    console.log("note deleted with id", id)

    axios.delete(`http://localhost:3000/api/notes/${id}`)
      .then((res) => {
        console.log(res.data);
        getAllData();
      })
  }

  function updateNote(e, id) {
    e.preventDefault();
    // console.log("note updated with id ", id)

    console.log("updated clicked!!!")
    let currentNote = notesData.filter(note => note._id === id)

    console.log(currentNote)
    setTitle(currentNote[0].title)
    setDescription(currentNote[0].description)
  }


  return (
    <div className='main'>

      <form onSubmit={submitHandler}>

        <input
          type="text"
          placeholder='Enter title'
          className='title'
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <input
          type="text"
          placeholder='Enter description'
          className='description'
          value={description}
          required
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />


        <button>{isEdit ? "Update Note" : "Add Note"}</button>

      </form>

      <div className='all-notes'>
        {
          notesData.map((note, index) => {
            return <div key={index} className='note'>
              <h2>{note.title}</h2>
              <p>{note.description}</p>

              <button
                onClick={() => { deleteNote(note._id) }}
                className='delete'
              >Delete
              </button>

              <button
                onClick={(e) => {
                  updateNote(e, note._id)
                  setIsEdit(true)
                  setEditId(note._id)
                }}
                className='edit'
              >
                Edit
              </button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App