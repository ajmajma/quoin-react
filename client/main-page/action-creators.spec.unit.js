import _ from 'lodash';

import testHelpers from './../test-helpers';

import * as actions from './actions';
import * as actionCreators from './action-creators';

const expect = testHelpers.expect;


describe("generic-platform/action-creators", () => {
    let dispatch;

    beforeEach(() => {
        dispatch = testHelpers.spy();
        testHelpers.nock.cleanAll();
    });

    it("should be an object.", () => {
        expect(actionCreators).to.be.an('object');
    });

    it("should expose known functions.", () => {
        const clone = _.clone(actionCreators);

        expect(clone).to.have.property('nameChanged');
        delete clone.nameChanged;

        expect(clone).to.have.property('initPlatform');
        delete clone.initPlatform;

        expect(clone).to.have.property('firstBuilderChanged');
        delete clone.firstBuilderChanged;

        expect(clone).to.have.property('launch');
        delete clone.launch;

        expect(clone).to.have.property('unloadBuilder');
        delete clone.unloadBuilder;

        expect(clone).to.deep.equal({});
    });

    describe("nameChanged()", () => {
        it("should be a function.", () => {
            expect(actionCreators.nameChanged).to.be.a('function');
        });

        it("should dispatch toggleSetting action", () => {
            const name = "test";

            actionCreators.nameChanged(dispatch, name);

            expect(dispatch).to.have.callCount(1);
            expect(dispatch.firstCall.args[0]).to.deep.equal({
                type: actions.NAME_CHANGED,
                name
            });
        });
    });

    describe("initPlatform()", () => {
        it("should be a function.", () => {
            expect(actionCreators.initPlatform).to.be.a('function');
        });

        it("should create the init state", () => {
            const data = { vegetable: "test" };
            const action = actionCreators.initPlatform(data);
            const expected = {
                type: actions.INITIALIZE_PLATFORM,
                data
            };

            expect(action).to.deep.equal(expected);
        });
    });

    describe("unloadBuilder()", () => {
        it("should be a function.", () => {
            expect(actionCreators.unloadBuilder).to.be.a('function');
        });

        it("should remove the builder based on the index passed to it", () => {
            const index = 0;

            actionCreators.unloadBuilder(dispatch, index);

            expect(dispatch).to.have.callCount(1);
            expect(dispatch.firstCall.args[0]).to.deep.equal({
                type: actions.UNLOAD_BUILDER,
                index
            });
        });
    });

    describe("launch()", () => {
        it("should be a function.", () => {
            expect(actionCreators.launch).to.be.a('function');
        });

        it("should launch the first builder", () => {
            const builder = 'first-builder';
            const props = {};
            const done = function() {};

            actionCreators.launch(dispatch, builder, props, done);

            expect(dispatch).to.have.callCount(1);
            expect(dispatch.firstCall.args[0]).to.deep.equal({
                type: actions.LAUNCH,
                builder,
                props,
                done
            });
        });
    });

    describe("firstBuilderChanged()", () => {
        it("should be a function.", () => {
            expect(actionCreators.firstBuilderChanged).to.be.a('function');
        });

        it("should use the data passed back by the first builder", () => {
            const value = {
                data: {
                    firstBuilder: true
                }
            };

            actionCreators.firstBuilderChanged(dispatch, value);

            expect(dispatch).to.have.callCount(1);
            expect(dispatch.firstCall.args[0]).to.deep.equal({
                type: actions.FIRST_BUILDER_CHANGED,
                value: "First Builder has been modified"
            });
        });

        it("should use the data passed back by the first builder if it is false", () => {
            const value = {
                data: {
                    firstBuilder: false
                }
            };

            actionCreators.firstBuilderChanged(dispatch, value);

            expect(dispatch).to.have.callCount(1);
            expect(dispatch.firstCall.args[0]).to.deep.equal({
                type: actions.FIRST_BUILDER_CHANGED,
                value: "First Builder has NOT been modified"
            });
        });
    });
});
