import React from 'react'
import Child from "../components/Child/Child";
import {connect} from "react-redux";
import {getChildInfo, getLocation} from "../actions/ChildActions";

class ChildContainer extends React.Component {
    render() {
        const {name, latitude, longitude, precision, timestamp} = this.props.child;
        return (
            <React.Fragment>
                <Child onRender={this.props.onRender}
                       name={name}
                       latitude={latitude}
                       longitude={longitude}
                       precision={precision}
                       timestamp={timestamp}
                       getLocation={this.props.getLocation}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => {
    return {
        child: store.child,
    }
};

const mapDispatchToProps = dispatch => ({
    onRender: id => {
        dispatch(getChildInfo(id));
        dispatch(getLocation(id));
    },
    getLocation: id => dispatch(getLocation(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ChildContainer)
