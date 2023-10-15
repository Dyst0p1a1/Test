import React from 'react'
import './style_contacts.scss'
import { Link } from 'react-router-dom'
import { YMaps, Map } from '@pbe/react-yandex-maps';

const Contact = () => {

  return (
    <div className = 'Contact_str'>
        <div className ="kontakt">
        <span>Контакты</span>
        </div>
        <div className='inf'>
            <a href="#">
                <img src={"/contacts/kaknas.svg"}/>   
                </a>           
                <YMaps>
                <div className='map' >
                <Map  width='700px' height='580px' defaultState={{ center: [53.327805, 83.759043], zoom: 17 }} />
                </div>
                </YMaps>
        </div>

        <div className='picture1'>       
                <img src={"/contacts/pic1.svg"}/>        
        </div>

        <div className='picture2'>
                <img src={"/contacts/pic2.svg"}/>               
        </div>

        

    </div>
  )
}

export default Contact