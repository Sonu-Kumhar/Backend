import React from 'react'

const App = () => {

  const notesData = [
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