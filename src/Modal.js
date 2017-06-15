/**
 * Created by DCA on 14/06/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
    static propTypes = {
        date: PropTypes.object.isRequired,
        isVisible: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        };
    }

    handleClick() {
        this.setState({
            isVisible: false
        })
    }

    render() {
        const date = this.props.date;
        const isVisible = this.props.isVisible;
        const classesModal = (isVisible) ? "modal in" : "modal";
        console.log(classesModal);
        return (
            <div className={classesModal}>
                <div className="modal-dialog" role="document">
                    <div className="modal-header">
                        { date.format('dddd DD MMMM YYYY') }
                        <button type="button" className="close" onClick={() => this.handleClick() }>&times;</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;