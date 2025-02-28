import logo from '../assets/images/whitelogo.png'
import { Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userslice';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';



function Header() {
  const dispatch = useDispatch()
  const user = useSelector((state:RootState)=> state.user.value)

  const logoffUser = () => {
    Cookies.remove('token')
    console.log(Cookies.get('token'))
    dispatch(logout())
    
  }
  return (
    <>
      <header className=' text-white flex items-center justify-between h-10 mb-24'>
        <div className='flex items-center gap-4' >
          <img className='size-10' src={logo} alt="logo" />
          <h1 className='font-bold text-2xl font-mono'>F<span className='text-xs'>ables</span> & F<span className='text-xs'>olios</span></h1>

        </div>
        <div className=' flex gap-8 items-center'>
          <Link className='hover:text-amber-100' to={'/home'}>Home</Link>
          <Link className='hover:text-amber-100' to={'/search'}>Search</Link>
          <Link to={'/profile'} className='flex gap-1 items-center'>
            <span className=' size-8 relative rounded-full text-sm text-center pt-1.5 font-bold uppercase bg-blue-100
             text-black before:content-[""] before:absolute before:w-full before:h-full before:border-3 
              before:top-0 before:left-0 before:rounded-full before:border-green-600
            '>{user.name?.slice(0,2)}</span>
            <p className='capitalize'>{user.name}</p>
          </Link>
          <LogoutIcon onClick={logoffUser} className='text-red-600 cursor-pointer' />
        </div>
      </header>
    </>
  )
}

export default Header