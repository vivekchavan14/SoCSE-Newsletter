
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <div>
        <BrowserRouter>
        <Header />
           <Routes>
               <Route path="/home" element={<Home />}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/signin" element={<SignIn/>}/>
               <Route path="/signup" element={<SignUp/>}/>
               <Route element={<PrivateRoute/>}>
                   <Route path="/profile" element={<Profile/>}/>
               </Route>
           </Routes>
        </BrowserRouter>
  </div>
  )
}

export default App
