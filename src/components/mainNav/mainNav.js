import React, {Component} from 'react';

import './mainNav.scss';

class MainNav extends Component {
    constructor () {
        super();
        this.changeRouter = this.changeRouter.bind(this);
    }
    changeRouter (router) {
        this.props.history.push(router);
    }
    render () {
        console.log(this.props);
        let navs = [
            {name: '首页', className: 'nav-icon', router: '/'},
            {name: '菜单', className: 'nav-icon', router: '/menu'},
            {name: '订单', className: 'nav-icon', router: '/order'},
            {name: '购物车', className: 'nav-icon', router: '/shopCar'},
            {name: '我的', className: 'nav-icon', router: '/my'},
        ];
        let navDoms = navs.map((val, index) => {
            let iconClassName = `${val.className} ${val.className+(index+1)}`;
            let textClassName = 'mainNav__item-text';
            if (index === 0) {
                textClassName += ' color-blue';
                iconClassName += ` ${val.className+(index+1)}-active`;
            }
            return (
                <li className="mainNav__item" key={val.name}
                    onClick={(e) => this.changeRouter(val.router, e)}
                >
                    <div className="mainNav__item-icon">
                        <span className={iconClassName}> </span>
                    </div>
                    <p className={textClassName}>{val.name}</p>
                </li>
            )
        });
        return (
            <ul className="mainNav">
                {navDoms}
            </ul>
        )
    }
}

export default MainNav;
