import React from 'react';
import './Camp.css'

export default class Camp extends React.Component {
    render() {
        return (

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 text-right'>
                        <div className="menu">
                            <div className="menu__item menu__item_active">Описание</div>
                            <div className="menu__item">Вожатые</div>
                            <div className="menu__item">Галерея</div>
                            <div className="menu__item-sub menu__item-sub_active">Фотографии</div>
                            <div className="menu__item-sub">Видео</div>
                            <div className="menu__item">Достижения</div>
                        </div>
                    </div>
                    <div className='col-9'/>
                </div>
            </div>
        )
    }
}