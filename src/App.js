import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./components/pages/Home";

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='*' component={Home}/>
                    {/*<Route path='/game' component={Game}/>
                    <Route path='/debug/playlist' component={PlayListGrabber}/>*/}
                </Switch>
            </div>
        );
    }
}

export default App;
