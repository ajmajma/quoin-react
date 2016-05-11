import React from 'react';
import {
  Step,
  Stepper,
  StepLabel
} from 'material-ui/Stepper';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


export default class ReduxSlide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            finished: false,
            open: false,
            stepIndex: 0
        };

        this.dummyAsync = this.dummyAsync.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.renderContent = this.renderContent.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }


    dummyAsync(cb) {
        this.setState({ loading: true }, () => {
            this.asyncTimer = setTimeout(cb, 500);
        });
    }

    handleNext() {
        const { stepIndex } = this.state;

        if (!this.state.loading) {
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: stepIndex + 1,
                finished: stepIndex >= 2
            }));
        }
    }

    handlePrev() {
        const { stepIndex } = this.state;

        if (!this.state.loading) {
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: stepIndex - 1
            }));
        }
    }

    getStepContent(stepIndex) {
        const actions = [
            <FlatButton
                label="Done"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
                />
        ];

        const customContentStyle = {
            width: '100%',
            maxWidth: 'none'
        };

        switch (stepIndex) {
            case 0:
                return (
                    <div>
                      <List>
                        <Subheader>Redux is a javascript library set up to manage your application state</Subheader>
                        <ListItem
                        primaryText="Redux is a predictable state container for JavaScript apps."
                        secondaryText="Redux is an evolution of the ideas presented by Facebook's Flux, avoiding the complexity found in Flux by looking to how applications are built with the Elm language."
                        />
                         <Divider />
                        <ListItem
                        primaryText="Provides unidirectional dataflow for your application"
                        secondaryText="this forces developers to architect the state on bigger applications"
                        />
                         <Divider />
                        <ListItem
                        primaryText="You can think of it as the MV part of the application"
                        secondaryText="Controlling the data behind the view"
                        />
                         <Divider />
                        <ListItem
                        primaryText="In our react app, this is how we maintain our application state and actions (click, fetch, change page, etc) , react simply displays the state."
                        secondaryText="Your status is visible to everyone you use with"
                        />
                        </List>
                    </div>
                );
            case 1:
                return (
                    <div>
                     <List>
                        <Subheader>Redux enforces a uni directional data flow</Subheader>
                        <ListItem
                            primaryText="Action -> Store -> Reducer -> View "
                            secondaryText="Redux is an evolution of the ideas presented by Facebook's Flux, avoiding the complexity found in Flux by looking to how applications are built with the Elm language."
                            />
                         <Divider />
                        <ListItem
                            primaryText="Model = store (or state archicture)"
                            secondaryText="this forces developers to architect the state on bigger applications"
                            />
                         <Divider />
                        <ListItem
                            primaryText="User events, data modifications and their handlers look like : action creators -> action -> dispatcher -> callback "
                            secondaryText="Controlling the data behind the view"
                            />
                         <Divider />
                        <ListItem
                            primaryText="Set up Store on App level, connect to smart component with containers, where we hook in actions and statToProps"
                            secondaryText="Your status is visible to everyone you use with"
                            />
                        </List>
                        <RaisedButton label="Redux Flow" onTouchTap={this.handleOpen} />
                        <Dialog
                            title="Redux Flow"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            contentStyle={customContentStyle}
                            onRequestClose={this.handleClose}
                            >
                            <img src="images/redux-flow.png" style={{ margin: 'auto', display: 'block' }}/>
                        </Dialog>
                  </div>
                );
            case 2:
                return (
                    <div>
                        <List>
                        <Subheader>There are many alteratives to redux if you do not feel it meets your needs</Subheader>
                        <ListItem
                            primaryText="Facebook Initially released Flux to run the architecture behind React"
                            />
                         <Divider />
                        <ListItem
                            primaryText="There are many implementations and ideas behind running flux, Relay (facebook), Reflux, Alt, Redux, Flumonx, Fluxible, Fluxxor, Marty.js, Fynx, McFly, Delorean.js, fluxify..."
                            />
                         <Divider />
                        <ListItem
                            primaryText="Redux is most often chosen becasue it is the simplest solution - The motivation behind Flux is to simplify our application architecture, making it easier to reason about and maintain. And unless you have a really unusual use case, Redux is currently the best way to achieve this."
                            />
                         <Divider />
                        <ListItem
                            primaryText="In our react app, this is how we maintain our application state and actions (click, fetch, change page, etc) , react simply displays the state."
                            secondaryText=""
                            />
                        </List>
                  </div>
                );
            default:
                return '';
        }
    }

    renderContent() {
        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px', overflow: 'hidden' };

        if (finished) {
            return (
            <div style={contentStyle}>

            </div>
            );
        }

        return (
          <div style={contentStyle}>
            <div>{this.getStepContent(stepIndex)}</div>
            <div style={{ marginTop: 24, marginBottom: 12 }}>
                <FlatButton
                    label="Back"
                    disabled={stepIndex === 0}
                    onTouchTap={this.handlePrev}
                    style={{ marginRight: 12 }}
                    />
                <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    primary={true}
                    onTouchTap={this.handleNext}
                    />
            </div>
          </div>
        );
    }

    render() {
        const { loading, stepIndex } = this.state;

        return (
          <div style={{ margin: 'auto' }}>
            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel>What is Redux?</StepLabel>
              </Step>
              <Step>
                <StepLabel>The Redux "flow"</StepLabel>
              </Step>
              <Step>
                <StepLabel>Setup and alternatives</StepLabel>
              </Step>
            </Stepper>
            <ExpandTransition loading={loading} open={true}>
              {this.renderContent()}
            </ExpandTransition>
          </div>
        );
    }
}

ReduxSlide.displayName = 'ReduxSlide';

ReduxSlide.propTypes = {
};
