# React Component Testing Workshop

Use the React Testing Library to test each of the components in the shopping list app according to the requirements below. The more your tests resemble the way your software is used, the more confidence they can give you.

Run the app and spend a few minutes playing around with it to figure out how each component works before you start the tasks below.

Have a look through the `index.js` file in each of the component folders so you understand how each component works:

- The `<ListDisplay />` component takes in `list` (array) and `tickItem` (function) as props.
- The `<ListItem />` component takes in `name` (string), `completed` (boolean) and `tickItem` (function) as props.
- The `<AddItem />` component takes in a `addToList` function and `buttonText` string as props.
- The `<ClearList />` component takes in a `clearList` function and `buttonText` string as props.

⚠️ Remember, Jest is already included as part of the React app. Don't install it separately! ⚠️

You can use the following resources to guide you:

- [React Testing Library docs](https://testing-library.com/docs/react-testing-library/intro/)
- [React Testing Library cheatsheet with different query options](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Full list of jest-dom matchers](https://github.com/testing-library/jest-dom)

## Task 1

- Create a file named `AddItem.test.js` within the `AddItem` component folder.
- Write a test that verifies that the `AddItem` component shows the user:
  - an input with an "Add item:" label
  - a button containing the value of the `buttonText` prop
- If you're unsure of what value to provide for the `addToList` prop (within the test), you can use `jest.fn()` (https://jestjs.io/docs/mock-function-api), which produces a special function from Jest.

## Task 2

- Create a file named `ClearList.test.js` within the `ClearList` component folder.
- Write a test that verifies that the `ClearList` component shows the user a button containing the value of the `buttonText` prop.
- If you're unsure of what value to provide for the `clearList` prop (within the test), you can use `jest.fn()` (https://jestjs.io/docs/mock-function-api), which produces a special function from Jest.

## Task 3

- Create a file named `ListDisplay.test.js` within the `ListDisplay` component folder.
- Write a test that verifies that the `ListDisplay` component shows the user an ordered list that reflects the value for the `list` prop that was provided in the test. For example, if you provided an empty array as the `list` prop, the ordered list should be empty. If you provided an array with one item, the ordered list should contain one list item.
- Hints:
  - Both an ordered list and list item both have implicit ARIA/accesibility roles
  - React Testing Library provides a `getAllByRole` query (for grabbing multiple elements matching a given role).
- If you're unsure of what value to provide for the `tickItem` prop (within the test), you can use `jest.fn()` (https://jestjs.io/docs/mock-function-api), which produces a special function from Jest.

## Task 4

- Create a file named `ListItem.test.js` within the `ListItem` component folder.
- Write a test that verifies that the `ListItem` component shows the user a list item containing the value of the `name` prop.
- If you're unsure of what value to provide for the `tickItem` prop (within the test), you can use `jest.fn()` (https://jestjs.io/docs/mock-function-api), which produces a special function from Jest.

## Task 5

- Create a file named `App.test.js` within the `App` component folder.
- Write a test that verifies that the `App` component allows the user to:
  - Type something into the input
  - Then click on the "Add To List" button to clear the input and now add the item to the list
  - Click on the "Clear List" button to empty the list

## Task 6

- For each component, think of a scenario that isn't currently tested but would be useful to. Then write a test to verify that the component still works under that scenario. Try to come up with your own scenarios, but to help you get started:
  - Verify that the `AddItem` component lets the user add items even when the item's name contains spaces, numbers or symbols
  - Verify that the `ListItem` component shows the user a crossed out item when the `completed` prop is `true` and a non-crossed out item when the `completed` prop is `false`.
  - And so forth.

## Optional bonus: Task 7

Complete the below in any order you and your team prefer:

⭐ Have a look at the existing code within the components. If you can see a simpler/nicer/alternative way to write the existing code (so that it still does the same thing), try to rewrite it as you please. After you've made your changes, you can rerun the tests to check things still work as expected (and nothing's unexpectedly broken).

⭐ Research and use 'jest-axe' to test the app for accessibility: https://www.npmjs.com/package/jest-axe.

⭐ Extend the application by adding new features. For each feature that you add, write one or more tests to verify that the new feature works as expected.

⭐ Sometimes you'll need to test React code that involves fetch/network requests (like calling an API). Have a read through this article https://kentcdodds.com/blog/stop-mocking-fetch and look at the code examples to understand how we might go about testing such code.
