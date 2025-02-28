import React from 'react'
import { useAuth } from '../../contexts/authContext'

const Home = () => {
    const { currentUser } = useAuth()
    return (
        <div></div>
    )
}
    
export default Home