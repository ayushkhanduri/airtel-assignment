import React, {Component} from 'react';
import { TopNavigationUIComponent } from '../presentational/TopNavigationUI.component';

export class TopNavigationComponent extends Component {
    render() {
        const routes: Array<SharedTypes.Routes> = [
            {
                url: '/',
                name: 'Home'
            }
        ]
        return <TopNavigationUIComponent routes={ routes }/>
    }
}
