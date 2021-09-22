import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ListPosts from "./components/post/Post";
import Airline from "./components/airline/Airline";
import {useSelector} from "react-redux";

export default function AppRoute(){
    const page = useSelector(state => state.common.page)

    return <Router>
        <div>
            <nav>
                <ul>
                    <li
                        className={page === 'home' ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        className={page === 'airline' ? 'active' : ''}>
                        <Link to="/airline">Airline</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact>
                    <ListPosts />
                </Route>
                <Route path="/airline">
                    <Airline />
                </Route>
            </Switch>
        </div>
    </Router>
}