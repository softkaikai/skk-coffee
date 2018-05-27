import React, {Component} from 'react';
import MainBox from 'component/mainBox/mainBox';
import SwiperTouch from 'component/swiperTouch/swiperTouch';
import SelectCoffee from 'component/selectCoffee/selectCoffee';
import Modal from 'component/modal/modal'

import "./menu.scss";

import slide1 from 'asset/swiper/slide1.png';
import slide2 from 'asset/swiper/slide2.png';
import slide3 from 'asset/swiper/slide3.png';


class Menu extends Component {
    constructor () {
        super();

        this.state = {
            open: false
        }
        setTimeout(() => {
            this.setState({
                open: true
            })
        }, 1000);
    }
    render () {
        return (
            <MainBox {...this.props}>
                <div className="menu">
                    <div className="menu__swiper">
                        <SwiperTouch slides={[slide1, slide2, slide3]} />
                    </div>
                    <div className="menu__content">
                        <div className="menu__side">
                            <ul>
                                <li className="menu__side-title menu__side-title_active">
                                    金鹰咖啡
                                </li>
                                <li className="menu__side-title">
                                    经典拿铁
                                </li>
                                <li className="menu__side-title">
                                    健康风味
                                </li>
                                <li className="menu__side-title">
                                    夏季特饮
                                </li>
                                <li className="menu__side-title">
                                    冬季特饮
                                </li>
                            </ul>
                        </div>
                        <div className="menu__scroll m-l-20">
                            <div>
                                <h3 className="menu__drink-title">
                                    金鹰咖啡
                                </h3>
                                <SelectCoffee />
                            </div>
                        </div>
                    </div>
                </div>

                <Modal open={this.state.open} >
                    <div className="menu__modal">
                        <div className="coffee-img">
                            <img src={slide1} alt="skk-coffee"/>
                        </div>

                        <div className="coffee-box ">
                            <div className="bd-b-1">
                                <div className="category">
                                    <span className="category-title">规格</span>
                                    <div className="category-fill">
                                        <span className="select-btn m-r-20">大</span>
                                        <span className="select-btn select-btn-active">小</span>
                                    </div>
                                </div>

                                <div className="category">
                                    <span className="category-title">温度</span>
                                    <div className="category-fill">
                                        <span className="select-btn">冰</span>
                                        <span className="select-btn">常温</span>
                                        <span className="select-btn select-btn-active">热</span>
                                    </div>
                                </div>

                                <div className="category">
                                    <span className="category-title">糖</span>
                                    <div className="category-fill">
                                        <span className="select-btn">无糖</span>
                                        <span className="select-btn">三分糖</span>
                                        <span className="select-btn select-btn-active">五分糖</span>
                                        <span className="select-btn">香草</span>
                                        <span className="select-btn">甑子</span>
                                    </div>
                                </div>

                                <div className="category">
                                    <span className="category-title">奶</span>
                                    <div className="category-fill">
                                        <span className="select-btn">无奶</span>
                                        <span className="select-btn">单份奶</span>
                                        <span className="select-btn">双份奶</span>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <h3 className="f-s-30 m-t-20 m-b-20">商品描述</h3>
                                <p className="l-h-normal">
                                    比标准美式更多一份Espresso，口感更加香醇浓郁，回味持久，清醒值upupup
                                </p>
                            </div>
                        </div>

                        <div className="coffee-price bd-t-1 bd-b-1">
                            <div className="w0 flex-1">
                                <p className="f-s-30 p-t-20 p-b-10">¥24</p>
                                <p>
                                    <span>加浓美式<span>¥24</span></span>+
                                    <span>无糖<span>¥0</span></span>+
                                    <span>无奶<span>¥0</span></span>
                                </p>
                            </div>
                            <div className="w150 p-t-35">
                                <span className="minus v-m"> </span>
                                <span className="m-l-20 m-r-20 p-b-20 v-m">1</span>
                                <span className="plus v-m"> </span>
                            </div>
                        </div>

                        <div className="operation">
                            <div className="btn-orange">
                                <span className="icon-wenhao v-m"></span>
                                <span className="v-m m-l-10">了解更多</span>
                            </div>
                            <div className="btn-gray m-r-20 m-l-20">
                                <span className="icon-love v-m"></span>
                                <span className="v-m m-l-10">收藏口味</span>
                            </div>
                            <div className="btn-blue">
                                <span className="icon-shopCar v-m"></span>
                                <span className="v-m m-l-10">加入购物车</span>
                            </div>
                        </div>

                    </div>
                </Modal>
            </MainBox>
        )
    }
}



export default Menu;