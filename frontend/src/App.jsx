import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'

import Login from './Pages/Login'

function App() {
  

  return (
    <Router>
      <Routes>

        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />


      </Routes>
    </Router>
  )
}


export default App
