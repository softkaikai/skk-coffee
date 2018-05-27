import React, {Component} from 'react';


import "./selectCoffee.scss"

import coffeeImg from 'asset/coffee.png'

class SelectCoffee extends Component {
    constructor () {
        super();
    }
    render () {
        return (
            <div className="coffee bd-b-1">
                <div className="coffee__content">
                    <div className="coffee__img">
                        <img src={coffeeImg} alt="skk-coffee"/>
                    </div>
                    <div className="coffee__des m-l-20">
                        <h3 className="f-s-30 f-w m-t-5">标准美式</h3>
                        <p className="c-ccc m-t-5">Americano</p>
                        <p className="c-ccc m-t-5 t-ellipsis">默认：大，无糖，无奶，热</p>
                        <p className="f-s-28 f-w m-t-35">
                            <span>¥21</span>
                            <span className="coffee__plus f-r m-r-20 "></span>
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default SelectCoffee;
