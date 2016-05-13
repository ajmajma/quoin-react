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
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { indigo300 } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Build from 'material-ui/svg-icons/action/build';
import Code from 'material-ui/svg-icons/action/code';
import Settings from 'material-ui/svg-icons/action/tab';

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
                    <List>
                        <Subheader>React is a javasript library for rendering views.</Subheader>
                        <ListItem
                        leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={indigo300} />}
                        secondaryTextLines={2}
                        primaryText="React.js is a JavaScript library for building user interfaces, built by engineers at Facebook."
                        secondaryText="React is an open-source JavaScript library providing a view for data rendered as HTML. React views are typically rendered using components that contain additional components specified as custom HTML tags. React promises programmers a model in which subcomponents cannot directly affect enclosing components (data flows down); efficient updating of the HTML document when data changes; and a clean separation between components on a modern single-page application."
                        />
                         <Divider />
                        <ListItem
                        leftAvatar={<Avatar icon={<Code />} backgroundColor={indigo300} />}
                        secondaryTextLines={2}
                        primaryText="It's aim is to be simple, declarative, composable, and easy to get up and running with"
                        secondaryText="It is fairly straight forward to create a general react component, however the architecture (redux in our case) tends to add some complexity"
                        />
                         <Divider />
                        <ListItem
                        leftAvatar={<Avatar icon={<Build />} backgroundColor={indigo300} />}
                        secondaryTextLines={2}
                        primaryText="React is very fast because it never talks to the DOM directly. React maintains a fast in-memory representation of the DOM. render() methods actually return a description of the DOM, and React can compare this description with the in-memory representation to compute the fastest way to update the browser."
                        secondaryText="The the virtual DOM as React’s local and simplified copy of the HTML DOM. It allows React to do its computations within this abstract world and skip the “real” DOM operations, often slow and browser-specific."
                        />
                         <Divider />
                        <ListItem
                        leftAvatar={<Avatar icon={<Settings />} backgroundColor={indigo300} />}
                        primaryText="We use ES6 currently for react and extend the class : export default class ReactSlide extends React.Component. React also uses JSX, although you are not forced to use any of these if you do not want."
                        secondaryText="JSX has some limitations but is handy in that it lets you keep your react component simple and clean."
                        />
                    </List>
                  {this.renderStepActions(0)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>A look at react</StepLabel>
                <StepContent>
                    <img src="images/basic-component.png" />
                    <p> Using jsx inside the render() function, as well as es6 </p>
                    <Divider />
                    <p> We can break these components down into easily re-usable components (like a button or loading icon) </p>
                    <Divider />
                    <img src="images/inline-style.png" style={{ display: 'block' }}/>
                    <p> Can delcare css styles in javascript, although this is not perfect yet </p>
                    <Divider />
                  {this.renderStepActions(1)}
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
                  <p> If you are looking for a complete and complex app solution, Angular 2 would be good. If are looking for fast rendering with a lightweight view library, React is better.</p>
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
