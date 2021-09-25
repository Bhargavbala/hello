
import { Route, Switch, Redirect } from "react-router";
import clickme from "./Component/Component";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";



const RouteHandle = () =>{
    return( <div className = "route-container">
    <div className = "Nav-bar">
        <NavBar/>
    </div>
    <Switch>
    
    <Route path = '/' exact component = {Home}/>
    <Route path='/home' render = {()=> <Redirect to = "/"/>}/>
    <Route path='/click-me'  component = {clickme}/>
    </Switch>
    
        </div>
    )
}

export default RouteHandle;