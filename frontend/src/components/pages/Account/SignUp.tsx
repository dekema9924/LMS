import React from 'react'
import whitelogo from '../../../assets/images/whitelogo.png'
import blacklogo from '../../../assets/images/blacklogo.png'
import { Link } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { API_URL } from '../../../config/Config';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function SignUp() {
  interface UserInput {
    username: string;
    password: string;
    email: string;
    name: string
  }

  const navigate = useNavigate()
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [userInput, setUserInput] = React.useState<UserInput>({
    username: '',
    password: '',
    email: '',
    name: ''
  })

  const HandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(userInput => ({ ...userInput, [e.target.name]: e.target.value }))
  }

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

        //post user 
    try {
      await axios.post(`${API_URL}/signup`, {
        name: userInput.name,
        username: userInput.username,
        password: userInput.password,
        email: userInput.email,
      })
      .then((response) => {
        console.log(response)
        if (response) {
          toast.success(response.data.message)
          navigate('/')
        }
      })
    }
     catch (error: unknown) {
      if (error instanceof Error) {
        if ('response' in error && error.response && typeof error.response === 'object') {
            toast.error((error.response as any).data?.message || "An error occurred");
        } else {
            toast.error(error.message);
        }
    } else {
        toast.error("An unknown error occurred");
    }
    }

  }

  return (
    <>
      <div className='md:flex h-[100vh]'>

        <div className='animate__fadeIn hidden pb-6 w-full h-full  text-center md:flex flex-col items-center justify-center text-white bg-black rounded-r-4xl '>
          <img className='m-auto my-4' src={whitelogo} alt="logo" />
          <h1 className='font-bold text-[2.6em] font-mono'>Fables & Folios</h1>
          <p className='font-stretch-expanded font-semibold'>LIBRARY</p>

          <div className='mt-10'>
            <p className='text-sm my-2'>Already have an account? Sign IN now.</p>
            <Link className='w-42 m-auto pt-1.5 font-bold rounded-2xl text-sm block h-9 border-2 bg-black text-white' to={'/'}>SIGN IN</Link>
          </div>
        </div>


        <div className='w-full flex flex-col items-center justify-center pb-8 h-full'>

          <div className='flex items-center gap-6'>
            <img className='my-4' src={blacklogo} alt="logo" />
            <h1 className='font-bold text-[3em] font-mono '>Sign Up</h1>
          </div>
          <p className='text-gray-700 mb-8'>Provide your information to sign up</p>
          <form onSubmit={HandleSubmit} className='w-11/12' action="">
            <div className=' grid grid-cols-2 w-11/12 gap-4 relative'>
              <input required onChange={HandleInput} className='border-[1.7px] col-span-1 h-10 rounded-md pl-5 outline-none border-gray-700' type="text" placeholder='name' name='name' />
              <input required onChange={HandleInput} className='border-[1.7px] col-span-2   h-10 rounded-md pl-5 outline-none border-gray-700' type="text" name="email" placeholder='email' />
              <input required onChange={HandleInput} className='border-[1.7px]   h-10 rounded-md pl-5 outline-none border-gray-700' type="text" placeholder='username' name='username' />
              <div className='relative flex items-center '>
                <input required onChange={HandleInput} className='border-[1.7px] w-full h-10 rounded-md pl-5 outline-none border-gray-700' type={passwordShown ? 'password' : 'text'} name="password" placeholder='password' />
                {passwordShown ? <VisibilityOffIcon className='absolute right-2 cursor-pointer p-[3px]' onClick={() => setPasswordShown(!passwordShown)} /> : <RemoveRedEyeIcon className='absolute right-2 cursor-pointer p-[3px]' onClick={() => setPasswordShown(!passwordShown)} />}
              </div>
            </div>
            <button className='w-42 m-auto my-7 font-bold rounded-2xl text-sm block h-9 border-2 bg-black text-white text-center'>SIGN UP</button>

          </form>
          <div className='mt-2 md:hidden'>
            <p className='text-sm my-2'>Already Have An Account? <Link className='font-bold cursor-pointer' to={'/'}>Log In now</Link></p>
          </div>
        </div>

      </div>
    </>
  )
}

export default SignUp