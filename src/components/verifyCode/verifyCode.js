import React, {Component} from 'react';

import './verifyCode.scss';

class VerifyCode extends Component {
    constructor () {
        super();
        this.state = {
            count: 60,
            countText: '获取验证码',
            timer: null,
        };
        this.startCount = this.startCount.bind(this);
    }
    startCount () {
        // prevent multiply calling startCount
        if (this.state.timer) {
            return false;
        }
        clearInterval(this.state.timer);

        let timer = setInterval(() => {
            this.setState((prev, props) => {
                let count = prev.count - 1;
                let countText = count + 's';
                let timer = prev.timer;
                if (count <= 0) {
                    // stop timer and reset the state.count to 60s
                    clearInterval(timer);
                    timer = null;
                    countText = '获取验证码';
                    count = 60;
                }
                console.log(countText);
                return {
                    timer,
                    count,
                    countText
                }
            })
        }, 1000);
        this.setState({timer,countText:'60s'})
    }
    componentWillUnmount () {
        clearInterval(this.state.timer);
    }
    render () {
        return (
            <div className="vc" onClick={this.startCount}>
                <span>{this.state.countText}</span>
            </div>
        )
    }
}

export default VerifyCode;

