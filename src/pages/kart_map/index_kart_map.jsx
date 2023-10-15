import React from 'react'
import './style_kart_map.scss'
import { Link } from 'react-router-dom'

const Karta = () => {

  return (
    <div className='kart_str'>

        <div className ="kart_T">
        <span>Карта клуба</span>
        </div>

        <div className='pic_kart'>       
                <img src={"/map.svg"}/>        
        </div>
        

    </div>
  )
}

export default Karta