import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Modal from './Modal';

import { getMods } from './util';

const clsPrefix = 'rc-Day';

class Day extends Component {
    static propTypes = {
        date: PropTypes.object.isRequired,
        dayAgenda: PropTypes.bool,
        dayHeader: PropTypes.bool,
        dayHeaderFormat: PropTypes.string,
        dayFormat: PropTypes.string,
        mods: PropTypes.array
    };

    static defaultProps = {
        dayAgenda: false,
        dayHeader: false,
        dayHeaderFormat: 'MMM Do',
        dayFormat: 'D'
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isVisible: false,
            date: {}
        };
    }

    getInitialState() {
        return {
            isVisible: false,
        }
    }

    renderHeader(props) {
        if (!props.dayHeader) {
            return null;
        }

        return (
            <header className={`${clsPrefix}-Day-header`}>
                { this.props.date.format(this.props.dayHeaderFormat) }
            </header>
        );
    }

    renderAgenda(props) {
        if (!props.dayAgenda) {
            return null;
        }

        return (
            <div key="agenda" className={`${clsPrefix}-Day-agenda`}>
                { props.children }
            </div>
        );
    }

    handleClick(date) {
        this.setState({
            date: date,
            isVisible: true,
        });
    }

    render() {
        const isVisible = this.state.isVisible;
        const clsPrefix = 'rc-Day';
        const { date, mods, outside } = this.props;
        const modifiers = getMods(mods, date, clsPrefix, 'day');

        let clsMods, events;

        if (modifiers) {
            clsMods = modifiers.clsMods;
            events = modifiers.events;
        }

        const clsDay = classnames(clsPrefix, { 'rc-Day--outside': outside }, clsMods);
        const modal = (isVisible) ? <Modal date={this.state.date} isVisible={true} /> : "";

        return (
            <div className={ clsDay } { ...events } onClick={() => this.handleClick(date)} >
                { this.renderHeader(this.props) }
                { date.format(this.props.dayFormat) }
                { this.renderAgenda(this.props) }
                {modal}
            </div>
        );
    }
}

export default Day;
