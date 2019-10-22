import {NavLink} from "react-router-dom";
import React from 'react'

export const makeNavItem = (title, to) => {
    return (
        <li className="nav-item">
            <NavLink
                style={{textDecoration: "none"}} activeClassName={''} className="nav-link"
                to={to}>{title}</NavLink>
        </li>
    )
};

// items: [{item: описание}, {item: Вожатые}, {item: Галерея, sub-items: ['Фотографии', 'Достижения']}]
// export const makeMenu = (items) => {
//     let result = '';
//     items.forEach(function (item) {
//         result += '<div className="menu__item menu__item_active">' + item.title + '</div>';
//     });
//     return result;
// };

// export const makeMenuItem = (item) => {
//     return (
//         <div className="menu__item"> {item.title} </div>
//     )
// };

export const makeStatus = (name) => {
    return (
        <React.Fragment>
            <img alt={name} className="status__image"
                 src="https://files.adme.ru/files/news/part_165/1658265/8881565-8-0-1514194890-1514194898-650-fd8a7b9d44-1514279441.jpg"/>
            <div className="text-title">{name}</div>
            <div className="text-gray">Ел: <span className="text-active">2 часа назад</span></div>
            <div className="text-gray">Спал: <span className="text-active">4 часа назад</span></div>
            <div className="text-gray">Статус: <span className="text-active">здоров</span></div>
            <div className="space"/>
            <div className="text-gray">Сейчас по <NavLink to="/schedule">расписанию</NavLink>:</div>
            <div className="text-active line">Театральная постановка <i
                className="fas fa-broadcast-tower text-active" data-container="body"
                data-toggle="popover"
                data-placement="bottom"
                data-content="посмотреть трансляцию"/>
            </div>
        </React.Fragment>
    )
};
