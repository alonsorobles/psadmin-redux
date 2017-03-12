import expect from "expect";
import React from "react";
import {shallow} from "enzyme";
import CourseForm from "./CourseForm";

function setup(saving) {
  const props = {
    course: {},
    saving: saving,
    errors: {},
    allAuthors: [],
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props}/>);
}

describe('CourseForm via Enzyme', () => {
  it('renders form and h1', ()=>{
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('Manage Course');
  });
});
