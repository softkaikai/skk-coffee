import React, {Component} from 'react';
import MainBox from 'component/mainBox/mainBox';

import "./index.scss";

class Index extends Component {
    constructor () {
        super();
    }
    render () {
        return (
            <MainBox>
                <div>
                    <div className="indexPage__swiper">

                    </div>
                </div>
            </MainBox>
        )
    }
}


export default Index;