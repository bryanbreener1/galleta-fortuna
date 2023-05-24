import React from 'react'

const GalletaInfo = ({phrase}) => {

  return (
    <div className='galleta'>
        <p>GALLETAS DE LA FORTUNA</p>
        <div>{phrase.phrase}</div>
    </div>
  )
}

export default GalletaInfo