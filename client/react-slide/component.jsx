import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent
} from 'material-ui/Stepper';
import Divider from 'material-ui/Divider';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class ReactSlide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            finished: false,
            stepIndex: 0
        };

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.renderStepActions = this.renderStepActions.bind(this);
    }


    handleNext() {
        const { stepIndex } = this.state;

        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2
        });
    }

    handlePrev() {
        const { stepIndex } = this.state;

        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    }

    renderStepActions(step) {
        const { stepIndex } = this.state;

        return (
          <div style={{ margin: '12px 0' }}>
            <RaisedButton
                label={stepIndex === 2 ? 'Finish' : 'Next'}
                disableTouchRipple={true}
                disableFocusRipple={true}
                primary={true}
                onTouchTap={this.handleNext}
                style={{ marginRight: 12 }}
                />
            {step > 0 && (
            <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                disableTouchRipple={true}
                disableFocusRipple={true}
                onTouchTap={this.handlePrev}
                />
            )}
          </div>
        );
    }

    render() {
        const { finished, stepIndex } = this.state;

        return (
            <div style={{ margin: 'auto' }}>
            <Stepper activeStep={stepIndex} orientation="vertical">
              <Step>
                <StepLabel>What is React?</StepLabel>
                <StepContent>
                  <p>
                    React.js is a JavaScript library for building user interfaces, built by engineers at Facebook.
                  </p>
                  <Divider />
                  <p>
                    React is an open-source JavaScript library providing a view for data rendered as HTML. React views are typically rendered using components that contain additional components specified as custom HTML tags. React promises programmers a model in which subcomponents cannot directly affect enclosing components ("data flows down"); efficient updating of the HTML document when data changes; and a clean separation between components on a modern single-page application.
                    </p>
                    <Divider />
                    <p>
                    React is very fast because it never talks to the DOM directly. React maintains a fast in-memory representation of the DOM. render() methods actually return a description of the DOM, and React can compare this description with the in-memory representation to compute the fastest way to update the browser.
                    </p>
                    <Divider />
                    <p>
                    Can think of it as the V part of the application
                    </p>
                  {this.renderStepActions(0)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>How Does React Compare?</StepLabel>
                <StepContent>
                   <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHeaderColumn>Angular 2</TableHeaderColumn>
                        <TableHeaderColumn>React</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableRowColumn>764k minified</TableRowColumn>
                        <TableRowColumn><b>151k minified (with Redux)</b></TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn><b>complete solution out of the box</b></TableRowColumn>
                        <TableRowColumn>simple view library</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>a lot of Angular-specific syntax</TableRowColumn>
                        <TableRowColumn><b>just know JavaScript</b></TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn><b>great consistency (and TypeScript)</b></TableRowColumn>
                        <TableRowColumn>initial confusion and decision overload</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>wiring HTML and JS together</TableRowColumn>
                        <TableRowColumn><b>JSX – one file for component</b></TableRowColumn>
                      </TableRow>
                       <TableRow>
                        <TableRowColumn><b>mature, comprehensive framework</b></TableRowColumn>
                        <TableRowColumn>a bunch of fast-moving, open-source libs</TableRowColumn>
                      </TableRow>
                       <TableRow>
                        <TableRowColumn>fails quietly at run time</TableRowColumn>
                        <TableRowColumn><b>JSX – compile-time check -> fail fast</b></TableRowColumn>
                      </TableRow>
                       <TableRow>
                        <TableRowColumn><b>web components friendly</b></TableRowColumn>
                        <TableRowColumn>web components maybe</TableRowColumn>
                      </TableRow>
                       <TableRow>
                        <TableRowColumn>manual debugging, lack of completion support</TableRowColumn>
                        <TableRowColumn><b>JSX – excellent development experience</b></TableRowColumn>
                      </TableRow>
                    </TableBody>
                  </Table>
                  {this.renderStepActions(1)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>A look at react</StepLabel>
                <StepContent>
                    <img src="images/basic-component.png" />
                    <p> Using jsx inside the render() function, as well as es6 </p>
                    <Divider />
                    <p> It's Declarative </p>
                    <img src="images/inline-style.png" style={{ display: 'block' }}/>
                    <p> Can delcare css styles in javascript, although this is not perfect yet </p>
                    <Divider />
                  {this.renderStepActions(2)}
                </StepContent>
              </Step>
            </Stepper>
            {finished && (
            <p style={{ margin: '20px 0', textAlign: 'center' }}>
                <a
                    href="#"
                    onClick={(event) => {
                        event.preventDefault();
                        this.setState({ stepIndex: 0, finished: false });
                    }}
                    >
                  Redux
                </a>
            </p>
            )}
          </div>
        );
    }
}
ReactSlide.displayName = 'ReactSlide';

ReactSlide.propTypes = {
};
