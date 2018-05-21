import React, {Component} from 'react';

import TouchMove from 'component/touchMove/touchMove';
import Swiper from 'component/swiper/swiper';


class SwiperTouch extends Component {
    constructor () {
        super();
    }
    render () {
        return <TouchMove components={Swiper} {...this.props} />
    }
}


export default SwiperTouch;