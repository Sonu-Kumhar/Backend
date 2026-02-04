import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios"

const App = () => {
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

  useEffect(() => {

    axios.get("http://localhost:3000/api/notes")
      .then(res => {
        // console.log(res.data.notes)
        setnotesData(res.data.notes)
      })

  }, [])



  return (
    <div className='all-notes'>
      {
        notesData.map(note => {
          return <div className='note'>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
          </div>
        })
      }
    </div>
  )
}

export default App