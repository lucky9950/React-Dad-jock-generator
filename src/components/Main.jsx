import React from 'react'
import { useGlobleContext } from '../context/useContext'

const Main = () => {
    const{data,loading}= useGlobleContext()
    const{joke} = data
  return (
    <div>
       <h1 className="heading"> Dad Joke Generator</h1>
        <p className="joke" id="joke">{loading ? "Updating..." : joke}</p>
    </div>
  )
}

export default Main
