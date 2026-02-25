import "../style/gallery.scss"
import { useState, useRef } from "react"

const Gallery = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const postImageInputFieldRef = useRef(null)


    function handleSubmit(e){
        e.preventDefault()

        const file = postImageInputFieldRef.current.files[0]
    }

    return (
        <main>
            <div className="gallery-container">
                <form onSubmit={handleSubmit} enctype="multipart/form-data">

                    <input
                        ref={postImageInputFieldRef}
                        className="file"
                        type="file"
                        placeholder='Choose an image of your choice'
                        name='avatar'
                    />

                    <input
                        onInput={e => { setTitle(e.target.value) }}
                        className="inp"
                        type="text"
                        placeholder='Enter title'
                        value={title}
                        name='title'
                    />

                    <input
                        onInput={e => { setDescription(e.target.value) }}
                        className="inp"
                        type="text"
                        placeholder='Enter description'
                        value={description}
                        name='description'
                    />

                </form>
            </div>
        </main>
    )
}

export default Gallery