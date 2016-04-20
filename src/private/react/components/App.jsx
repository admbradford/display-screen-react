import React  from 'react';
import reactTools from 'react-tools';
import Img from './Img.jsx';

window.Img = Img;

export default class App extends React.Component {

    state = {
        content: null
    };

    componentDidMount() {
        
        // Enable pusher logging - don't include this in production
        Pusher.log = function(message) {
            if (window.console && window.console.log) {
                window.console.log(message);
            }
        };

        var pusher = new Pusher('25f5dee7cef7f2d3e85a', {});

        var channel = pusher.subscribe('display_screen');

        this.setState({
            content: localStorage.getItem('cached_content') || null
        });

        channel.bind('push_content', (data) => {
            
            this.setState({
                content: data.message
            });

            localStorage.setItem('cached_content', data.message);

        });
    }

    render() {
        if (this.state.content) {
            return <div>{eval(reactTools.transform(this.state.content))}</div>;
        }
        return <h1>Waiting for content to be pushed.</h1>
	}
}