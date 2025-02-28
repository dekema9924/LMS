import React, { use } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import PersonIcon from '@mui/icons-material/Person';
import Borrowedbooks from './Borrowedbooks';


function Profile() {
  const user = useSelector((state: RootState) => state.user.value)
  return (
    <>
      <div className='flex items-center flex-col md:flex-row gap-10 justify-between'>
        {/* <div className='border-2 h-80 rounded-md relative w-96 md:ml-10  '>
          <div className='border-2 bg-white text-black h-24 rounded-md p-4'>
            <h1 className='text-2xl font-bold'>Fables & Foolies</h1>
            <p>Library Card</p>
          </div>
          <span className='border-2 w-24 h-24 rounded-full left-34 top-14 z-20 bg-black block absolute'><PersonIcon style={{ fontSize: '70px' }} className='absolute left-2.5 top-1  ' /></span>
          <div className='p-4 mt-14'>
            <p className='text-2xl font-bold capitalize '>name: {user.name}</p>
            <p className='my-2'>username:@ {user.username}</p>
            <p>Email:{user.email}</p>
          </div>

        </div> */}
        <div>
          <Borrowedbooks />
        </div>
      </div>
    </>
  )
}

export default Profile