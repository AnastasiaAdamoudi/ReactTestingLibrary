// PLAN

import React from "react";
// Check if the user input appear in the input box on the browser
// Import stuff from jest 
import { test, expect } from "@jest/globals";
// Import stuff from React testing library
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Import component that we're testing
//      AddItem
import AddItem from "./index.js";


//- Write a test that verifies that the `AddItem` component shows the user:
//- an input with an "Add item:" label
//- a button containing the value of the `buttonText` prop

test("Input should have 'Add item' label", function() {
// 3 As:
// Arrange
//  render the component
render(<AddItem />);

// screen.logTestingPlaygroundURL();
// screen.debug();


// Act 
//  Make a variable to assign the input that we want to check
const actual = screen.getByLabelText(/Add item:/i);
const expected = "Add item:";

// Assert
//  Compare actual and expected to check if the label of the input has value of 'AddItem:'
expect(actual).toHaveValue(expected);

})