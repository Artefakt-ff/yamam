import React from 'react'
import {NavLink} from "react-router-dom";
import './navbar.css'
import {makeNavItem} from "../../utils/makeComponents";

export default class Navbar extends React.Component {


    render() {
        return (
            <nav
                className="navbar order-1 fixed-top navbar-expand-lg navbar-light bg-passive text-uppercase shadow-sm ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse w-100">
                    <ul className="navbar-nav mx-auto order-0">
                        {makeNavItem('Дети', '/')}
                        {makeNavItem('Лагерь', '/camp')}
                        {makeNavItem('Отряд', '#')}
                        {makeNavItem('Расписание', '#')}
                        {makeNavItem('Проживание', '#')}
                        {makeNavItem('Контакты', '#')}
                    </ul>
                </div>
                <div className="navbar-collapse collapse order-2 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#"><i
                                className="fas fa-user-alt text-active"/></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}