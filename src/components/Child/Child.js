import React from 'react';
import './status.css'
import {NavLink} from "react-router-dom";
import {makeStatus} from "../../utils/makeComponents";

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.props.onRender(6);
    }

    timer = setInterval(() => {
        this.props.getLocation(6)
    }, 5000);


    render() {
        const {name, longitude, latitude, isFetching} = this.props;
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 text-right'>
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe width="600px" height='600px' frameBorder="0"
                                        src={'https://www.google.com/maps/embed/v1/place?q=' + latitude + '%20' + longitude + '&key=AIzaSyDKSJg0qUj9t1n0kq8pSGfsNOjL4hHSFFc'}
                                        allowFullScreen/>
                            </div>
                        </div>
                    </div>
                    <div className='col-5 text-left'>
                        <div className="status container">
                            {isFetching && <p>Загружается...</p>}
                            {!isFetching && makeStatus(name)}
                        </div>
                    </div>
                    <div className='col-1'/>
                </div>
            </div>
        )
    }
}