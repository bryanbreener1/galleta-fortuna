import React from 'react'
import randomElement from '../utils/randomElement'

const Button = ({setPhrase, data, setBackground, backgroundArray, phrase}) => {
    let newPhrase = randomElement(data)
    const newBackground = randomElement(backgroundArray)

    const handlePhrase = () =>{
        if(newPhrase!=phrase){
            setPhrase(newPhrase)
        }else{
            newPhrase = randomElement(data)
        }
        setBackground(newBackground)
    }
  return (
    <button onClick={handlePhrase}>Ver otro</button>
  )
}

export default Button