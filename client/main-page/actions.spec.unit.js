import _ from 'lodash';

import testHelpers from '../test-helpers';

import * as actions from './actions';

const expect = testHelpers.expect;

describe('irc/actions', () => {
    it("has known properties", () => {
        const clone = _.clone(actions);

        expect(clone).to.have.property('NAME_CHANGED').to.be.a('string');
        delete clone.NAME_CHANGED;

        expect(clone).to.have.property('INITIALIZE_PLATFORM').to.be.a('string');
        delete clone.INITIALIZE_PLATFORM;

        expect(clone).to.have.property('UNLOAD_BUILDER').to.be.a('string');
        delete clone.UNLOAD_BUILDER;

        expect(clone).to.have.property('LAUNCH').to.be.a('string');
        delete clone.LAUNCH;

        expect(clone).to.have.property('FIRST_BUILDER_CHANGED').to.be.a('string');
        delete clone.FIRST_BUILDER_CHANGED;

        expect(clone, "No more exports.").to.deep.equal({});
    });
});
