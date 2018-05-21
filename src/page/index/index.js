import React, {Component} from 'react';
import MainBox from 'component/mainBox/mainBox';
import SwiperTouch from 'component/swiperTouch/swiperTouch';
import TouchMove from 'component/touchMove/touchMove';

import "./index.scss";

import slide1 from 'asset/swiper/slide1.png';
import slide2 from 'asset/swiper/slide2.png';
import slide3 from 'asset/swiper/slide3.png';

class Index extends Component {
    constructor () {
        super();
    }
    render () {
        return (
            <MainBox>
                <div>
                    <SwiperTouch slides={[slide1, slide2, slide3]} />
                </div>
            </MainBox>
        )
    }
}


export default Index;