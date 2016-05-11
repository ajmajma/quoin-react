import React from 'react';

import { Card, CardActions, CardHeader, CardMedia } from 'material-ui/Card';

export default class IntroSlide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title="An overview of react and redux"
                    subtitle="Alex Moser"
                    avatar="images/react.jpg"
                    />
                <CardMedia>
                  <img src="images/react.jpg" />
                </CardMedia>
                <CardActions>
                </CardActions>
            </Card>
        );
    }
}
IntroSlide.displayName = 'IntroSlide';

IntroSlide.propTypes = {
};
