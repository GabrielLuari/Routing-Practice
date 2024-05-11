import { useParams } from 'react-router-dom'
import React from 'react'



function Welcome() {
  const {param, textColor, BGcolor} = useParams()

  const styles = {
    backgroundColor: BGcolor,
    color: textColor
  }

  return (
    <div>
      {param === 'home'? <h1 style={styles}>Welcome</h1> : isNaN(param)? <h1 style={styles}>The word is: {param}</h1>:<h1 style={styles}>The Number is: {param}</h1> }
    </div>
  )
}


export default Welcome