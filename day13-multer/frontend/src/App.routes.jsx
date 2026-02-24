import {createBrowserRouter} from "react-router"
import Home from "./pages/Home"
import Gallery from "./features/gallery/pages/Gallery"

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/gallery",
        element: <Gallery/>
    }
])