import React from 'react';
import Paper from 'material-ui/Paper';

export default class IntroSlide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            height: 500,
            width: 500,
            margin: 'auto',
            textAlign: 'center',
            background: '#3f51b5',
            color: '#ffffff',
            display: 'block'
        };

        const circleStyle = {
            padding: 100

        };

        return (
            <div>
                <Paper style={style} zDepth={2} >
                    <h4 style={circleStyle}>Presentation covering React and Redux Javascript libraries</h4>
                    <p style={circleStyle}>Alex Moser</p>
                </Paper>
            </div>
        );
    }
}
IntroSlide.displayName = 'IntroSlide';

IntroSlide.propTypes = {
};
