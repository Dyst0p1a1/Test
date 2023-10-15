import React from "react";

const Footer = () => (
    <div class = "bottom">
    <div class = "bottom_t">
        <span>Контакты</span>
        <span>О компании</span>
        <span>Новости</span>
        <span>Турниры</span>
        <span>Франшиза</span>
    </div>
    <div class = "bottom_t2">
        <span>Пишите нам:
hiddenpoot@yandex.ru</span>
        <span>Адрес: Барнаул, ул.Челюскинце 65</span>
        <span>Бесплатно по БРН
8(913)263-93-30</span>
    </div>
    <div class="vk_tg_wats">
        <a href="https://vk.com/id263468538">
        <img style = {{width: 70, height:70}} src={"/home/tg.svg"}/>   
        </a>     
        <img style = {{width: 70, height:70}} src={"/home/watsap.svg"}/>
        <img style = {{width: 70, height:70}} src={"/home/vk.svg"}/>
    </div>
  </div>
);

export default Footer;