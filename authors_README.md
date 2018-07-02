# Async workshop 

## Getting started

1. Fork this repo so you can push your changes when you finish
2. Make sure you have installed node `v7.8.0`
3. Perform a `npm i` in the project folder.
4. Code

## Exercises

### Refactor Callbacks

Edit `callback.js`:

1. Refactor the solution using named functions. We'll need at least an `uploadFile` function for the following exercises.

### Callbacks to Promises

1. Copy the contents of `callbacks.js` into `promises.js` 
2. Change the `uploadFile` function so it returns a Promise
3. We have installed `fs-promise`, a library that wraps fs and make it work with promises. Refactor the upload of the file with a chained promise.
4. Change the way of waiting until all the files have been uploaded. Instead of a queue, we can now use `Promise.all`.

### Promises to async/await

1. Copy the contents of `promises.js` into `async.js` 
2. Refactor all the functions you can to the new `async / await` syntax and make sure the tests are passing.
3. Try to figure out how to run the uploads in a serialized way instead of parallelized.

