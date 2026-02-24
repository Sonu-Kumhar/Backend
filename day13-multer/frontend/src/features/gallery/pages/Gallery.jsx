import "../style/gallery.scss"
import { useState } from "react"

const Gallery = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <main>
            <div className="gallery-container">
                <form enctype="multipart/form-data">

                    <input
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
                        onInput={e => { setTitle(e.target.value) }}
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