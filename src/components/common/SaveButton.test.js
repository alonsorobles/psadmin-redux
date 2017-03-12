import expect from "expect";
import React from "react";
import {shallow} from "enzyme";
import SaveButton from "./SaveButton";

function setup(saving) {
  const props = {
    saving: saving,
    onSave: () => {}
  };

  return shallow(<SaveButton {...props}/>);
}

describe('Save Button', () => {
  it ('is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it ('is labeled "Saving..." when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
