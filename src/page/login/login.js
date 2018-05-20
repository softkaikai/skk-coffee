import React, {Component} from 'react';
import VerifyCode from 'component/verifyCode/verifyCode';

import './login.scss';

class Login extends Component {
    constructor () {
        super();
        this.state = {
            phone: '',
            password: '',
        };
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange (field, e) {
        this.setState({
            [field]: e.target.value
        })
    }
    render() {
        let btnClassName = 'login__btn m-t-40';
        if (this.state.phone && this.state.password) {
            btnClassName += ' login__btn_active';
        }
        return (
            <div className="login">
                <header className="t-m p-t-80">
                    <span className="login__logo "> </span>
                    <p className="f-s-40 p-t-40">skk-coffee</p>
                </header>

                <div className="bd-b-1 m-t-70">
                    <input type="text"
                           className="login__input flex-1"
                           value={this.state.phone}
                           onChange={(e) => this.inputChange('phone', e)}
                           placeholder="请输入手机号"
                    />
                </div>
                <div className="bd-b-1 d-flex">
                    <input type="text"
                           className="login__input flex-1"
                           value={this.state.password}
                           onChange={(e) => this.inputChange('password', e)}
                           placeholder="请输入密码"
                    />
                    <VerifyCode />
                </div>

                <div className={btnClassName}>
                    登陆
                </div>
                <p className="t-m m-t-20">
                    点击确认，表示同意
                    <span className="color-blue">《skk-coffee协议》</span>
                </p>

                <div className="login__c m-t-60 p-b-40">
                    <span className="login__c-title">
                        合作伙伴
                    </span>
                    <div className="d-flex" style={{marginTop: -20}}>
                        <span className="flex-1 bank1"> </span>
                        <span className="flex-1 bank2"> </span>
                        <span className="flex-1 bank3"> </span>
                    </div>
                    <div className="d-flex m-t-40">
                        <span className="flex-1 bank4"> </span>
                        <span className="flex-1 bank5"> </span>
                        <span className="flex-1 bank6"> </span>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login;