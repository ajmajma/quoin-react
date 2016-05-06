import testHelpers from '../test-helpers';

import namespace from './namespace';

const expect = testHelpers.expect;

describe('generic-platform/namespace', () => {
    it('should export string', () => {
        expect(namespace).to.be.a('string');
    });
});
