import React, {Component} from 'react';
import MainNav from 'component/mainNav/mainNav'

import './mainBox.scss';

class MainBox extends Component {
    render () {
        return (
            <div className="mainBox">
                <div className="mainBox__top">
                    {this.props.children}
                </div>
                <MainNav />
            </div>
        )
    }
}

export default MainBox;
