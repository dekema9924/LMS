import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Account/Login'
import SignUp from './components/pages/Account/SignUp'
import { Toaster } from 'react-hot-toast';
import Home from './components/pages/UserPlatform/Home';
import { ProtectiveRoute } from './protectedroutes/protectroutes';
import { LocalRoutes } from './protectedroutes/protectroutes';
import Header from './components/Header';
import './styles/styles.css'
import Search from './components/pages/UserPlatform/Search';
import BookInfo from './components/pages/UserPlatform/BookInfo';
import Profile from './components/pages/UserPlatform/Profile';
import Allbooks from './components/Allbooks';




function App() {

  return (
    <>
      <div className='p-7'>
        {/* <Header/> */}
        <Toaster />
        <Routes>

          {/* login routes */}
          <Route element={<LocalRoutes />}>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* user routes */}
          <Route element={<ProtectiveRoute />}>
            <Route path="/home"
              element={
                <>
                  <Header />
                  <Home />
                </>
              } />
            <Route path="/search"
              element={
                <>
                  <Header />
                  <Allbooks />
                </>
              } />


            <Route path="/bookinfo/:id"
              element={
                <>
                  <Header />
                  <BookInfo />
                </>
              } />
            <Route path="/profile"
              element={
                <>
                  <Header />
                  <Profile />
                </>
              } />
          </Route>


        </Routes>
      </div >
    </>
  )
}

export default App
