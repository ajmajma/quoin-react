import immutable from 'immutable';

import testHelpers from '../test-helpers';

import * as actions from './actions';
import reducers from './reducers';

const expect = testHelpers.expect;


describe('generic-platform/reducers', () => {
    let initState;

    beforeEach(() => {
        initState = immutable.fromJS({
            vegetable: "potatoe",
            listItems: {
                one: {
                    num: 1,
                    name: "one",
                    value: false
                },
                two: {
                    num: 2,
                    name: "two",
                    value: false
                },
                three: {
                    num: 3,
                    name: "three",
                    value: false
                },
                four: {
                    num: 4,
                    name: "four",
                    value: false
                }
            }
        });
    });

    it('should define and empty map if called with initial state', () => {
        const expectedResult = initState;
        const newState = reducers(initState);

        expect(newState).to.equal(expectedResult);
    });

    it('should return state if passed and unrecognized action', () => {
        const expectedResult = initState;
        const actionForCall = {
            type: "fakeAction"
        };
        const mapToJSForCheck = reducers(initState, actionForCall);

        expect(mapToJSForCheck).to.equal(expectedResult);
    });

    it('should return empty map if not passed anything', () => {
        const expectedResult = immutable.fromJS({});
        const mapToJSForCheck = reducers();

        expect(mapToJSForCheck).to.equal(expectedResult);
    });

    describe('NAME_CHANGED', () => {
        it('should handle NAME_CHANGED ', () => {
            const name = "apple";
            const expectedResult = immutable.fromJS({
                vegetable: "apple",
                listItems: {
                    one: {
                        num: 1,
                        name: "one",
                        value: false
                    },
                    two: {
                        num: 2,
                        name: "two",
                        value: false
                    },
                    three: {
                        num: 3,
                        name: "three",
                        value: false
                    },
                    four: {
                        num: 4,
                        name: "four",
                        value: false
                    }
                }
            });
            const actionForCall = {
                name,
                type: actions.NAME_CHANGED
            };
            const mapToJSForCheck = reducers(initState, actionForCall);

            expect(mapToJSForCheck).to.equal(expectedResult);
        });
    });

    describe('FIRST_BUILDER_CHANGED', () => {
        it('should handle FIRST_BUILDER_CHANGED ', () => {
            const value = "First Builder has been modified";
            const expectedResult = immutable.Map({ firstBuilderModified: "First Builder has been modified" });
            const actionForCall = {
                value,
                type: actions.FIRST_BUILDER_CHANGED
            };
            const mapToJSForCheck = reducers(immutable.Map(), actionForCall);

            expect(mapToJSForCheck).to.equal(expectedResult);
        });
    });

    describe('INITIALIZE_PLATFORM', () => {
        it('should handle INITIALIZE_PLATFORM ', () => {
            const data = { vegetable: "test" };
            const expectedResult = immutable.fromJS({ vegetable: "test" });
            const actionForCall = {
                data,
                type: actions.INITIALIZE_PLATFORM
            };
            const mapToJSForCheck = reducers(immutable.Map(), actionForCall);

            expect(mapToJSForCheck).to.equal(expectedResult);
        });
    });

    describe.skip('LAUNCH', () => {
        it('should handle LAUNCH ', () => {
            const builder = 'first-builder';
            const props = {};
            const done = function() {};
            const list = immutable.List().push({ builder, props, done });

            const expectedResult = immutable.Map({ "platform": immutable.Map({ "launcher": list }) });
            const actionForCall = {
                builder,
                props,
                done,
                type: actions.LAUNCH
            };
            const mapToJSForCheck = reducers(immutable.Map(), actionForCall);

            expect(mapToJSForCheck).to.deep.equal(expectedResult);
        });
    });

    describe('UNLOAD_BUILDER', () => {
        it('should handle UNLOAD_BUILDER ', () => {
            const index = 0;

            const expectedResult = immutable.Map({});
            const actionForCall = {
                index,
                type: actions.UNLOAD_BUILDER
            };
            const mapToJSForCheck = reducers(immutable.Map(), actionForCall);

            expect(mapToJSForCheck).to.deep.equal(expectedResult);
        });
    });
});
