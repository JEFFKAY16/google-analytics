import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Contact Us Page</div>
      <button onClick={() => navigate('/')}>Back To Home</button>
    </>
  )
}

export default Contact