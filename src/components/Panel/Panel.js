import React from 'react';
// import PropTypes from 'prop-types';

export default class Panel extends React.Component {
    // static propTypes = {
    //     value: React.PropTypes.string,
    //     onInput: React.PropTypes.func,
    //     onChange: React.PropTypes.func,
    //     placeholder: React.PropTypes.string
    // };
    //
    // static defaultProps = {
    //     value: "",
    //     placeholder: "Search corporate directory"
    // };
    constructor(props, context) {
        super(props, context);
    }
    render() {
        // const {value, placeholder} = this.props;
        // console.log(value, placeholder);
        return (
            <div className="panel-default">
                <div className="rc-logo">
                </div>
                <div className="rc-search">
                    <div className="rc-search-lens-shape">
                        <div className="rc-search-lens"></div>
                    </div>
                    <div className="rc-search-corporate-dir">
                        <input type="text" />
                    </div>
                </div>
            </div>
        );
    }
}