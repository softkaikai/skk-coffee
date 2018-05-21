import React, {Component} from 'react';

class TouchMove extends Component {
    constructor () {
        super();
        this.state = {
            touch: {
                startPoint: null,
                endPoint: null,
                moveDirection: {
                    left: false,
                    top: false,
                    right: false,
                    bottom: false,
                }
            }
        };
        this.touchObj = {moveDirection: {}};
        this.touchStart = this.touchStart.bind(this);
        this.touchMove = this.touchMove.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
    }
    touchStart (e) {
        // touches targetTouches changedTouches
        this.touchObj.startPoint = e.touches[0];
    }
    touchMove (e) {
        // console.log(e.touches);
    }
    touchEnd (e) {
        this.touchObj.endPoint = e.changedTouches[0];
        if (this.touchObj.endPoint.pageX > this.touchObj.startPoint.pageX) {
            this.touchObj.moveDirection.right = true;
            this.touchObj.moveDirection.left = false;
        } else {
            this.touchObj.moveDirection.right = false;
            this.touchObj.moveDirection.left = true;
        }
        if (this.touchObj.endPoint.pageY > this.touchObj.startPoint.pageY) {
            this.touchObj.moveDirection.bottom = true;
            this.touchObj.moveDirection.top = false;
        } else {
            this.touchObj.moveDirection.bottom = false;
            this.touchObj.moveDirection.top = true;
        }
        this.setState({touch: this.touchObj});
    }
    render () {
        let components = null;
        if (Array.isArray(this.props.components)) {
            components = this.props.components.map((Kid) => {
                return <Kid touch={this.state.touch} {...this.props} key={Kid.toString()} />
            })
        } else if (this.props.components) {
            let Kid = this.props.components;
            components = <Kid touch={this.state.touch} {...this.props} />
        }

        return (
            <div onTouchStart={this.touchStart}
                 onTouchMove={this.touchMove}
                 onTouchEnd={this.touchEnd}
                 className={this.props.className}
            >
                {components}
            </div>
        )
    }
}

export default TouchMove;
