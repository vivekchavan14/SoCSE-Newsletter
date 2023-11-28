import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const currentUser = useSelector(state => state.user)
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
           
    <div className='text-red-600'>
    <Link to="/">
       <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'> <span className='text-slate-500'>SoCSE-</span> <span className='text-slate-700'>Newsletter</span> </h1>
    </Link>
    </div>
    <form className='bg-slate-100 p-3 rounded-lg flex item-center'>
        <input type='text' placeholder='Search' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-slate-500'/>
    </form>
    <ul className='flex gap-4'>
       <Link to='/home'> <li className='text-slate-800 hover:underline hidden sm:inline' >Home</li> </Link>
       <Link to="/about"> <li className='text-slate-800 hover:underline hidden sm:inline'>About</li> </Link>
       <Link to="/profile"> 
       {currentUser ? (<img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile'/>) : (<li className='text-slate-800 hover:underline '> {' '} Sign In</li>)}
       </Link>
    </ul>
    </div>
    </header>
  )
}

export default Header
