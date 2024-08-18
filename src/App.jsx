import "./index.css"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Order from "./Pages/Order"
import Cart from "./Pages/Cart"
import Contact from "./Pages/Contact"
import Header from './components/generic/Header'
import { Route, Routes} from 'react-router-dom'
import Contact from "./Pages/Contact"

function App() {

return (
  <div className="w-11/12 m-auto mt-6 font- text-2xl text-white" >
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Order" element={<Order/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      
  </div>
)
}

export default App
