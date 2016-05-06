import _ from 'lodash';

import testHelpers from '../test-helpers';

import index from './index';

const expect = testHelpers.expect;

describe("generic-platform/index", () => {
    it("should have a known export.", () => {
        expect(index).to.be.an('object');

        const clone = _.clone(index);

        expect(clone).to.have.property('actions').to.be.an('object');
        delete clone.actions;

        expect(clone).to.have.property('actionCreators').to.be.an('object');
        delete clone.actionCreators;

        expect(clone).to.have.property('combinedReducers').to.be.a('object');
        delete clone.combinedReducers;

        expect(clone).to.have.property('Component').to.be.a('function');
        delete clone.Component;

        expect(clone).to.have.property('container').to.be.a('function');
        delete clone.container;

        expect(clone).to.have.property('Container').to.be.a('function');
        delete clone.Container;

        expect(clone).to.deep.equal({});
    });
});
