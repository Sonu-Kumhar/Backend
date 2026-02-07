import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios"

const App = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const notesData1 = [
    {
      title: "Introduction",
      description: "This section gives an overview of the topic."
    },
    {
      title: "Concept",
      description: "Explains the core idea in simple terms."
    },
    {
      title: "Example",
      description: "Provides a practical example for better understanding."
    },
    {
      title: "Summary",
      description: "Quick revision of all important points."
    }
  ];
  const [notesData, setnotesData] = useState(notesData1)

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
    console.log(title, description)
    axios.post("http://localhost:3000/api/notes", {
      title, description
    })
    .then((res)=>{
      console.log(res.data)
      getAllData();
    })

    setTitle("")
    setDescription("")
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


        <button>Add Note</button>

      </form>

      <div className='all-notes'>
        {
          notesData.map((note, index) => {
            return <div key={index} className='note'>
              <h2>{note.title}</h2>
              <p>{note.description}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App