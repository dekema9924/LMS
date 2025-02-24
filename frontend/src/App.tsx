import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Account/Login'
import SignUp from './components/pages/Account/SignUp'
import  { Toaster } from 'react-hot-toast';
import Home from './components/pages/UserPlatform/Home';
import { ProtectiveRoute } from './protectedroutes/protectroutes';
import { LocalRoutes } from './protectedroutes/protectroutes';





function App() {

  return (
    <>
    

      <Toaster/>
      <Routes>  
          <Route element={<LocalRoutes/>}>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          <Route element={<ProtectiveRoute/>}>
              <Route path='/home' element={<Home/>}/>
          </Route>
          
      </Routes>
    </>
  )
}

export default App
