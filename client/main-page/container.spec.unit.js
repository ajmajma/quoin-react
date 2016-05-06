import testHelpers from '../test-helpers';

import container from './container';

const expect = testHelpers.expect;

describe('generic-platform/container', () => {
    it('should export function', () => {
        expect(container).to.be.a('function');
    });
});
