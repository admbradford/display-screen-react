import React from 'react';

export default class Img extends React.Component {

    static propTypes = {
        src: React.PropTypes.string.isRequired
    };

    render() {
        return (
            <img style={{
                padding: 10,
                margin: 20,
                backgroundColor: '#fff',
                textAlign: 'center',
                boxShadow: 'rgb(0, 0, 0) 0px 0px 6px 3px'
            }} src={this.props.src} width="200px" />
        );
	}
}