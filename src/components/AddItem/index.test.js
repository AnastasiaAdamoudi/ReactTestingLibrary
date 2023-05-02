// PLAN

import React from "react";
// Check if the user input appear in the input box on the browser
// Import stuff from jest.
import { test, expect } from "@jest/globals";
// Import stuff from React testing library
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // we need this to use the custom jest-dom matchers
import userEvent from "@testing-library/user-event";

// Import component that we're testing
//      AddItem
import AddItem from "./index.js";

//- Write a test that verifies that the `AddItem` component shows the user:
//- an input with an "Add item:" label
//- a button containing the value of the `buttonText` prop

test("Input should have 'Add item' label and a button with the 'buttonText' property", function () {
  // 3 As:
  // Arrange
  // declare constants for the input and button
  const mockAddToList = jest.fn(); // mock function to pass in as a prop to the AddItem component
  const buttonText = "Add To List"; // mock button text to pass in as a prop to the AddItem component

  //  render the component
  render(<AddItem addToList={mockAddToList} buttonText={buttonText} />);

  // screen.logTestingPlaygroundURL();
  // screen.debug();

  // Act
  //  Make variables to assign the input and the button text that we want to check
  const inputLabel = screen.getByText(/add item:/i);
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button", { name: buttonText });

    // Assert
  //  Compare actual and expected to check if the label of the input has value of 'AddItem:' and the button has the value of the 'buttonText' prop
  expect(inputLabel).toBeInTheDocument(); // check if the label is in the document
  expect(input).toBeInTheDocument(); // check if the input is in the document
  expect(button).toBeInTheDocument(); // check if the button is in the document
  expect(button).toHaveTextContent(buttonText); // check if the button has the text content of the buttonText prop
});