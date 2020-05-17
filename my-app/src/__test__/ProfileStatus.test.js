import React from 'react';
import { create } from "react-test-renderer";
import ProfileStatus from "../components/Profile/ProfileInfo/ProfileStatus";

describe("profileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="test status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test status");
    });
    test("after creation <span> with status should be displayed", () => {
        const component = create(<ProfileStatus status="test status" />);
        const root = component.root;
        const span = root.findByType("span");
        // expect(span.children.length).toBe(1);
        expect(span).not.toBeNull();
    });

    test("after creation <span> with status should be correct displayed", () => {
        const component = create(<ProfileStatus status="test status" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("test status");
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="test status" />);
        const root = component.root;
        expect(()=>{
            const input = root.findByType("input");
        }).toThrow();
    });
    test("<input> should be displayed in editMode instead of <span>", () => {
        const component = create(<ProfileStatus status="test status" />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("test status");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();

        const component = create(<ProfileStatus status="test status" updateStatus={ mockCallback }/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });


});