import React from 'react';
import './App.css';
import Navbar from "../Navbar/Navbar";
import {Route} from "react-router"
import ChildContainer from "../../containers/ChildContainer";
import Camp from "../Camp/Camp";

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Navbar/>
                <main style={{marginTop: "100px"}}>
                    <Route exact path="/" component={ChildContainer}/>
                    <Route exact path="/camp" component={Camp}/>
                    <Route exact path="/tmp"/>
                    <Route exact path="/tmp"/>
                    <Route exact path="/tmp"/>
                </main>
            </div>
        )
    }
}

export default App;
