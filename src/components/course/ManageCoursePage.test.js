import expect from "expect";
import {describe, it} from "mocha";
import React from "react";
import {mount} from "enzyme";
import {ManageCoursePage} from "./ManageCoursePage";

function setup() {
  const props = {
    course: {id: '', watchRef: '', title: '', authorId: '', length: '', category: ''},
    authors: [],
    // Mock redux actions that were bound by bindActionCreators in mapDispatchToProps
    actions: {
      saveCourse: () => {
        return Promise.resolve();
      }
    }
  };

  // Approach for testing redux connected code like mapStateToProps or mapDispatchToProps
  // return mount(<Provider store={store}><ManageCoursePage/></Provider>);
  return mount(<ManageCoursePage {...props}/>);
}

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const wrapper = setup();
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
