import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>About Us Page</div>
      <button onClick={() => navigate('/')}>Back To Home</button>
    </>
  )
}

export default About