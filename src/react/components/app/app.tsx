import {Component, ReactNode} from "react";
import './app.scss';
import {Helmet} from "react-helmet";

export class App extends Component {
    render(): ReactNode {
        return (
            <div>
                <Helmet>
                    <title>Hello World!</title>
                </Helmet>
                <h2 className={'red-background'}>hi</h2>
            </div>
        );
    }
}