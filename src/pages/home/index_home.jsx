import React from 'react'
import './style_home.scss'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className = "home_cont">
        <div class = "game_zone">
          <span>Разные зоны с разными условиями</span>
        </div>

        <div className='zones'>
          <a href="#">
          <img src = {"/home/kart1.svg"}/>
          <img src = {"/home/kart2.svg"}/>
          <img src = {"/home/kart3.svg"}/>
          <img src = {"/home/kart4.svg"}/>
          </a>
        </div>

    <div class="sliderS">
      <div class="slideS-track">
        <div class="slideS">
          <img src="./home/zal1.svg" height="300" width="250" alt="" />
        </div>
        <div class="slideS">
          <img src="./home/zal2.svg" height="300" width="250" alt="" />
        </div>
        <div class="slideS">
          <img src="./home/zal3.svg" height="300" width="250" alt="" />
        </div>
        <div class="slideS">
          <img src="./home/zal1.svg" height="300" width="250" alt="" />
        </div>
        <div class="slideS">
          <img src="./home/zal2.svg" height="300" width="250" alt="" />
        </div>
        <div class="slideS">
          <img src="./home/zal3.svg" height="300" width="250" alt="" />
        </div>
        <div class="slideS">
          <img src="./home/zal1.svg" height="300" width="250" alt="" />
        </div>
        <div class="slideS">
          <img src="./home/zal2.svg" height="300" width="250" alt="" />
        </div>
        <div class="slideS">
          <img src="./home/zal3.svg" height="300" width="250" alt="" />
        </div>
        <div class="slideS">
          <img src="./home/zal1.svg" height="300" width="250" alt="" />
        </div>
        <div class="slideS">
          <img src="./home/zal2.svg" height="300" width="250" alt="" />
        </div>
        <div class="slideS">
          <img src="./home/zal3.svg" height="300" width="250" alt="" />
        </div>
        <div class="slideS">
          <img src="./home/zal1.svg" height="300" width="250" alt="" />
        </div>
        <div class="slideS">
          <img src="./home/zal2.svg" height="300" width="250" alt="" />
        </div>
      </div>
    </div>

        <div class = "sales">
          <span>АКЦИЙ И СКИДКИ НА СЕГОДНЯ</span>
        </div>

        <div className='first'>
          <a href="#">
          <img src = {"/home/f1.svg"} height="310" width="370"/>
          <img src = {"/home/f2.svg"} height="310" width="370"/>
          </a>
        </div>

        <div className='second'>
          <a href="#">
          <img src = {"/home/f3.svg"} height="310" width="370"/>
          <img src = {"/home/f4.svg"} height="310" width="370"/>
          </a>
        </div>

        <div className='third'>
          <a href="#">
          <img src = {"/home/f5.svg"} height="310" width="370"/>
          <img src = {"/home/f6.svg"} height="310" width="370"/>
          </a>
        </div>

        <div class = "name_T">
        <span>Ваше имя</span>
        </div>
        <div class="name">
        <input class="name__input" type="text" name="ФИО" id="ФИО" placeholder="ФИО"/>
        </div>

        <div class = "email_T">
        <span>E-mail</span>
        </div>
        <div class="email">
        <input class="phone__input" type="text" name="E-mail" id="E-mail" placeholder="E-mail"/>
        </div>

        <div class = "email_T">
        <span>Телефон</span>
        </div>

        <div class="email">
        <input class="email__input" type="text" name="Телефон" id="Телефон" placeholder="Телефон"/>
        </div>


        <div className='niz_button'>
              <div>
                <Link to={'/catalog'}>Забронировать!</Link>
              </div>
            </div>


    </div>
  )
}
export default Home