import './App.scss';
import {Header} from "../components/Header/Header";
import {Switch, Redirect, Route} from 'react-router-dom'
import {Cv} from "../components/Cv/Cv";

function App() {
    return (
        <div className="appWrapper">
            <Header/>
            <Switch>
                <Route exact path='/lang/:lang' component={Cv}/>
                <Redirect from='/' to='/lang/pl'/>
            </Switch>
        </div>
    );
}

export default App;
