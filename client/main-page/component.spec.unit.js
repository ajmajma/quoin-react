import React from 'react';

import testHelpers from '../test-helpers';

import GenericPlatformComponent from './component';

const expect = testHelpers.expect;
const spy = testHelpers.spy;

describe("generic-platform/component", () => {
    let launch;
    let unloadBuilder;
    let nameChanged;
    let firstBuilderChanged;
    let platform;
    let firstBuilderModified;

    beforeEach(() => {
        launch = spy();
        unloadBuilder = spy();
        firstBuilderModified = spy();
        nameChanged = spy();
        platform = {};
    });

    it("should be a function.", () => {
        expect(GenericPlatformComponent).to.be.a('function');
    });

    it("should render a DOM component.", () => {
        const instance = testHelpers.returnShallowRender(
            <GenericPlatformComponent
                launch={launch}
                unloadBuilder={unloadBuilder}
                nameChanged={nameChanged}
                platform={platform}
                firstBuilderModified={firstBuilderModified}
                firstBuilderChanged={firstBuilderChanged}
                />
        );

        testHelpers.expectToBeDOMComponent(instance);
    });

    it("should fire launch when Add Course Builder button is clicked", () => {
        const instance = testHelpers.returnShallowRender(
            <GenericPlatformComponent
                launch={launch}
                unloadBuilder={unloadBuilder}
                nameChanged={nameChanged}
                platform={platform}
                firstBuilderModified={firstBuilderModified}
                firstBuilderChanged={firstBuilderChanged}
                />
        );
        const button = testHelpers.findByTag(instance, 'button');

        button[0].props.onClick();

        expect(launch).to.have.been.called();
    });
});
