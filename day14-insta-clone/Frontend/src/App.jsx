import {router} from "./AppRoutes"
import { RouterProvider } from "react-router"
import "./features/shared/global.scss"
import { AuthProvider } from "./features/auth/auth.context"

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App


/**
 * UI layer
 *   |
 * Hooks layer
 *    |
 * State layer
 *    |
 * API layer
 */