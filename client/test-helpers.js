import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import dirtyChai from 'dirty-chai';
import jsdom from 'jsdom-no-contextify';
import jsxChai from 'jsx-chai';
import nock from 'nock';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';


chai.use(dirtyChai); // Has to be the first!
chai.use(chaiImmutable);
chai.use(jsxChai);
chai.use(sinonChai);

const expect = chai.expect;

const TEST_HOST = 'http://fake.host';

// This is needed in order to simulate to be in a browser environment.
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

global.document = doc;
global.document.location.href = TEST_HOST;
global.window = doc.defaultView;


function expectedRejected(message, err) {
    expect(err).to.be.an.instanceOf(Error);
    if (message) {
        expect(err.message).to.equal(message);
    }
}


function expectedResolved(value, resolved) {
    expect(resolved).to.equal(value);
}


function expectedResolvedDeep(value, resolved) {
    expect(resolved).to.deep.equal(value);
}


function unexpectedRejected(err) {

    expect(err, err.message || err).to.be.undefined();
}


function unexpectedResolved(res) {
    throw new Error("Unexpected resolved.");
}

function expectToBeDOMComponent(component) {
    expect(ShallowTestUtils.isDOMComponent(component)).to.be.true();
}

function returnShallowRender(component) {
    const shallowRenderer = TestUtils.createRenderer();
    const instance = shallowRenderer.render(component);

    return shallowRenderer.getRenderOutput(instance);
}

function findByTag(component, tag) {
    return ShallowTestUtils.findAllWithType(component, tag);
}

function mockMiddlewareFramework() {
    return {
        next: sinon.spy(),
        store: {
            getState: sinon.spy(),
            dispatch: sinon.spy(),
            subscribe: sinon.spy(),
            replaceReducer: sinon.spy()
        }
    };
}

export default {
    TEST_HOST,
    scryRenderedDOMComponentsWithTag: TestUtils.scryRenderedDOMComponentsWithTag,
    expect,
    expectedRejected,
    expectedResolved,
    expectedResolvedDeep,
    expectToBeDOMComponent,
    findAllWithClass: ShallowTestUtils.findAllWithClass,
    findAllWithType: ShallowTestUtils.findAllWithType,
    findByTag,
    findRenderedDOMComponentWithTag: TestUtils.findRenderedDOMComponentWithTag,
    findWithClass: ShallowTestUtils.findWithClass,
    findWithType: ShallowTestUtils.findWithType,
    nock,
    renderIntoDocument: TestUtils.renderIntoDocument,
    returnShallowRender,
    mockMiddlewareFramework,
    scryRenderedDOMComponentsWithClass: TestUtils.scryRenderedDOMComponentsWithClass,
    simulateChange: TestUtils.Simulate.change,
    simulateClick: TestUtils.Simulate.click,
    spy: sinon.spy,
    stub: sinon.stub,
    unexpectedRejected,
    unexpectedResolved
};
