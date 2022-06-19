# Plan

# Features

Layout of the page

- At the top:

1. Input field (to add new item to list)
2. Save button (when clicked need to save and render in the to do list)

- Body:

1. Rendering unordered lists of items
2. delete button next to each item

Nice to have bonus:

1. Mark items as done, and change rendering of item

## Step by Step

1. Creating react app

App folder

1. have the state for the to do list (handle selection of to do list item and process delete) ❌
2. handle add item and delete item (handles different logic passed via props) ❌
3. rendering of Input field and list of items ✅

Input folder

1. have state to handle text input (moved state logic to app) ✅
2. create component for input field ✅
3. create component for add button and delete button ✅

List folder

1. arrays of to do (UL) ✅
2. Delete function to remove all to do lists items ❌

List item folder

1. Render text ✅
2. delete button ❌
3. create dummy data array and manipulate/test around that ✅
