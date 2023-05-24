import { useState } from 'react'
import './App.css'
import data from './utils/phrases.json'
import randomElement from './utils/randomElement'
import GalletaInfo from './components/GalletaInfo'
import Button from './components/Button'
import './index.css'

const backgroundArray = [1 ,2 ,3, 4]
function App() {
  const [background, setBackground] = useState(randomElement(backgroundArray))
  const [phrase, setPhrase] = useState(randomElement(data))
  console.log(phrase);
  const imgBackground = {
    backgroundImage: `url('/images/fondo${background}.jpg')`
  }

  return (
    <div style={imgBackground} className='app'>
      <GalletaInfo phrase={phrase}/>
      <Button setPhrase={setPhrase} setBackground={setBackground} data={data} backgroundArray={backgroundArray} phrase={phrase}/>
    </div>
  )
}

export default App
