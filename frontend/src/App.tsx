import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Account/Login'
import SignUp from './components/pages/Account/SignUp'


function App() {
  return (
    <>
      <Routes>  
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
