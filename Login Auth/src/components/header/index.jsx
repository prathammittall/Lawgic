import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'


const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center' style={{ backgroundColor: '#f3eee5' }}>
            {
                userLoggedIn
                    ?
                    <>                        
                        <button onClick={() => { doSignOut().then(() => { navigate("/Login") }) }} className='text-sm text-blue-600 underline'>logout</button>

                    </>
                    :
                    <>
                        <Link className='text-md font-bold mx-5' to={'/login'}>Login</Link>
                        <Link className='text-m font-bold mx-5' to={'/register'}>Register</Link>
                    </>
            }

        </nav>
    )
}

export default Header