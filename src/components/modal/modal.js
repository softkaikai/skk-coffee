import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './modal.scss'

class Modal extends Component {
    constructor () {
        super();
    }
    UNSAFE_componentWillReceiveProps (nextProp) {
        if (nextProp.open && !this.props.open) {
            this.node = document.createElement('div');
            this.node.className = 'react-modal';
            let container = document.getElementById('react-app');
            container.appendChild(this.node);

            let modal = (
                <div className="modal">
                    {nextProp.children}
                </div>
            );
            let allClass = document.getElementsByClassName('react-modal');
            ReactDOM.render(modal, allClass[allClass.length - 1]);
        }
        if (!nextProp.open && this.props.open) {
            ReactDOM.unmountComponentAtNode(this.node);
        }
    }
    render () {
        return null;
    }
}
Modal.defaultProps = {
    open: false
}

export default Modal;
