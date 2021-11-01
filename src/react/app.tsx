import {Component, ReactNode} from "react";
import './app.scss';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

export class App extends Component {
    render(): ReactNode {
        return (
            <div>
                <Helmet>
                    <title>Hello World!</title>
                </Helmet>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Test</Link></li>
                            <li><Link to='/another'>Another Sample</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}