import React, {Component} from 'react';

import './swiper.scss';


class Swiper extends Component {
    constructor () {
        super();
        this.state = {
            curImg: 0,
            isRunning: false,
            timer: null,
        };
        this.timeOut = null;
        this.startMove = this.startMove.bind(this);
    }
    startMove () {
        let slideLength = this.props.slides.length;
        let duration = 4000;
        if (this.props.duration > 4000) {
            duration = this.props.duration;
        }
        clearInterval(this.state.timer);
        let timer = setInterval(() => {
            if (this.state.isRunning) {
                this.timeOut = setTimeout(() => {
                    this.setState({isRunning: false});
                }, 1510);
                return false;
            }
            this.setState((pre, props) => {
                let curImg = pre.curImg + 1;
                curImg = curImg >= slideLength ? 0 : curImg;
                return {curImg, isRunning: true};
            });
            this.timeOut = setTimeout(() => {
                this.setState({isRunning: false});
            }, 1510);
        }, duration);
        this.setState({
            timer,
            isRunning: false
        })
    }
    componentDidMount () {
        this.startMove();
    }
    componentWillUnmount () {
        clearInterval(this.state.timer);
        clearTimeout(this.timeOut);
    }
    static getDerivedStateFromProps (nextProp, preState) {
        //if animation is running, prevent the state updating
        if (preState.isRunning) {
            return null;
        }
        let dir = nextProp.touch.moveDirection;
        // move to right
        let curImg = null;
        if (!dir.left && dir.right) {
            curImg = preState.curImg - 1;
            if (curImg < 0) {
                curImg = nextProp.slides.length - 1;
            }
        }
        // move to left
        if (dir.left && !dir.right) {
            curImg = preState.curImg + 1;
            if (curImg >= nextProp.slides.length) {
                curImg = 0;
            }
        }
        if (curImg != null) {
            return {curImg, isRunning: true};
        }
        return null;
    }
    render () {
        let slides = null;
        if (this.props.slides&&this.props.slides.length) {
            slides = this.props.slides.map((url, index) => {
                let className = 'swiper__img';
                if (index === this.state.curImg) {
                    className += ' swiper__img_active'
                }

                return <img src={url} alt="skk-coffee"
                            key={url+index}
                            className={className} />
            })
        }
        return (
            <div className={joinName(this.props.className, 'swiper')}>
                <div className="swiper__content">
                    {slides}
                </div>
            </div>
        )
    }
}


export default Swiper;