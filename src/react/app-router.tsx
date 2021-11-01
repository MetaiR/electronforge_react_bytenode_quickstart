import {Component, ReactNode} from "react";
import {Route, Switch} from "react-router-dom";
import {Test} from "./components/test/test";
import {Another} from "./components/another/another";

export class AppRouter extends Component {
    render(): ReactNode {
        return (
            <Switch>
                <Route exact path='/' component={Test} />
                <Route path='/another' component={Another} />
            </Switch>
        );
    }
}