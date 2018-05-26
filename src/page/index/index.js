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
                    <div className="p-l-40 p-r-40">
                        <div className="indexPage__list bd-b-1">
                            <div className="indexPage__list-l">
                                <p className="f-s-36 m-t-30">现在下单</p>
                                <p className="m-t-20 c-999">ORDER NOW</p>
                            </div>
                            <div className="indexPage__list-r p-r-20">
                                <span className="indexPage__icon_order m-t-30"></span>
                            </div>
                        </div>
                        <div className="indexPage__list bd-b-1">
                            <div className="indexPage__list-l">
                                <p className="f-s-36 m-t-30">咖啡钱包</p>
                                <p className="m-t-20 c-999">COFFEE WALLET</p>
                            </div>
                            <div className="indexPage__list-r p-r-20">
                                <span className="indexPage__icon_callback m-t-30"></span>
                            </div>
                        </div>
                        <div className="indexPage__list bd-b-1">
                            <div className="indexPage__list-l">
                                <p className="f-s-36 m-t-30">个人账户</p>
                                <p className="m-t-20 c-999">PERSONAL ACCOUNT</p>
                            </div>
                            <div className="indexPage__list-r p-r-20">
                                <span className="indexPage__icon_person m-t-30"></span>
                            </div>
                        </div>

                        <div className="indexPage__poi m-t-40 d-flex">
                            <div className="indexPage__list-l p-l-20">
                                <p className="f-s-36 m-t-30">发现skk-coffee</p>
                                <p className="m-t-20 c-999">周围有27家skk门店在您身边</p>
                            </div>
                            <div className="indexPage__list-r p-r-20">
                                <span className="indexPage__icon_poi m-t-30"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </MainBox>
        )
    }
}


export default Index;