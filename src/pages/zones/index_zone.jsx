import React from 'react'
import './style_zone.scss'
import { Link } from 'react-router-dom'

const Zone = () => {

  return (
    <div className='zone_str'>

        <div className ="zone_standart">
        <span>Зона стандарт</span>
        </div>

        <div className ="characters">
        <span>Характеристики</span>
        </div>

        <div className='char_stand'>
          <img src = {"/zones/char.svg"} height="300" width="1300"/>
        </div>

        <div className ="characters">
        <span>ТАРИФЫ И ЦЕНЫ</span>
        </div>

        <div className='char_stand'>
          <img src = {"/zones/tarif.svg"} height="300" width="1300"/>
        </div>


        <div className ="zone_standart_plus">
        <span>Зона стандарт+</span>
        </div>

        <div className ="characters">
        <span>Характеристики</span>
        </div>

        <div className='char_stand'>
          <img src = {"/zones/char_plus.svg"} height="300" width="1300"/>
        </div>

        <div className ="characters">
        <span>ТАРИФЫ И ЦЕНЫ</span>
        </div>

        <div className='char_stand'>
          <img src = {"/zones/tarif_plus.svg"} height="300" width="1300"/>
        </div>


        <div className ="zone_boot_camp">
        <span>Зона BOOT CAMP</span>
        </div>

        <div className ="characters">
        <span>Характеристики</span>
        </div>

        <div className='char_stand'>
          <img src = {"/zones/char_boot.svg"} height="300" width="1300"/>
        </div>

        <div className ="characters">
        <span>ТАРИФЫ И ЦЕНЫ</span>
        </div>

        <div className='char_stand'>
          <img src = {"/zones/tarif_boot.svg"} height="300" width="1300"/>
        </div>


        <div className ="zone_ps5">
        <span>Зона PS5</span>
        </div>

        <div className ="characters">
        <span>ТАРИФЫ И ЦЕНЫ</span>
        </div>

        <div className='char_stand'>
          <img src = {"/zones/tarif_ps.svg"} height="300" width="1300"/>
        </div>

    </div>
  )
  }

  export default Zone