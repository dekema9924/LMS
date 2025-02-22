import React from 'react'
import whitelogo from '../../../assets/images/whitelogo.png'
import blacklogo from '../../../assets/images/blacklogo.png'
import { Link } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login() {
    interface UserInput {
        username: string;
        password: string;
    }


    const [passwordShown, setPasswordShown] = React.useState(false);
    const [userInput, setUserInput] = React.useState<UserInput>()

    const HandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(prev => ({ ...prev, username: e.target.value, password: e.target.value }))
    }

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(userInput)
    }

    return (
        <>
            <div className='md:flex h-[100vh]'>
                <div className='w-full flex flex-col items-center justify-center pb-8 h-full '>
                    <img className='my-4' src={blacklogo} alt="logo" />
                    <h1 className='font-bold text-[3em] font-mono '>Welcome</h1>
                    <p className='text-gray-700 mb-8'>Enter your credentials to log in</p>


                    <form onSubmit={HandleSubmit} className='flex gap-1 flex-col'>
                        <p className=' text-white text-center  capitalize p-2 mb-2 bg-red-900 text-xs font-bold'>Invalid Username or Password</p>

                        <input onChange={HandleInput} className='border-[1.7px]  w-80 h-10 rounded-md pl-5 outline-none border-gray-700' type="text" placeholder="Username" name='username' />
                        <div className='relative flex items-center'>
                            <input onChange={HandleInput} className='border-[1.7px]  w-80 h-10 rounded-md pl-5 outline-none border-gray-700' type={passwordShown ? 'password' : 'text'} placeholder="Password" />
                            {passwordShown ? <VisibilityOffIcon className='absolute right-2 cursor-pointer p-[3px]' onClick={() => setPasswordShown(!passwordShown)} /> : <RemoveRedEyeIcon className='absolute right-2 cursor-pointer p-[3px]' onClick={() => setPasswordShown(!passwordShown)} />}
                        </div>
                        <Link to={'/resetpassword'} className='text-sm text-red-700 cursor-pointer'>Forgot password?</Link>
                        <button className=' w-80 mt-6 border-2 h-10 rounded-lg bg-black text-white text-sm cursor-pointer uppercase font-bold'>Login</button>
                    </form>
                    <div className='mt-2 md:hidden'>
                        <p className='text-sm my-2'>New to our platform? <Link className='font-bold cursor-pointer' to={'/signup'}>Sign up now</Link></p>
                    </div>
                </div>


                <div className='animate_fadeIn hidden pb-6 w-full h-full  text-center md:flex flex-col items-center justify-center text-white bg-black rounded-l-4xl '>
                    <img className='m-auto my-4' src={whitelogo} alt="logo" />
                    <h1 className='font-bold text-[2.6em] font-mono'>Fables & Folios</h1>
                    <p className='font-stretch-expanded font-semibold'>LIBRARY</p>

                    <div className='mt-10'>
                        <p className='text-sm my-2'>New to our platform? Sign Up now.</p>
                        <Link className='w-42 m-auto pt-1.5 font-bold rounded-2xl text-sm block h-9 border-2 bg-black text-white' to={'/signup'}>SIGN UP</Link>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Login
