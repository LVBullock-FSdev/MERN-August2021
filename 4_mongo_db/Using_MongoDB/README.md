Using MongoDB Assignment - https://login.codingdojo.com/m/146/6940/50159

As you create the documents for this assignment, be sure to include students who have:

home_state of California or Washington
lucky_number ranging from 1 to 15
If you read through all tasks, you will understand these requirements better

To complete this assignment, copy your console text from the MongoDB shell in to a text document and upload it to the platform

Create a database called 'my_first_db'.

Create students collection.

Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})

Create 5 students with the appropriate info.

Get all students.

Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).

Get all students whose lucky number is greater than 3

Get all students whose lucky number is less than or equal to 10

Get all students whose lucky number is between 1 and 9 (inclusive)

Add a field named 'interests' to all student documents in the collection. The field should be an array and contain the following entries: 'coding', 'brunch', MongoDB'. Add this field to all documents using a single command.

Add some unique interests for each particular student into each of their interest arrays.

Add the interest 'taxes' into someone's interest array.

Remove the 'taxes' interest you just added.

Remove all students who are from California.

Remove a student by name.

Remove a student whose lucky number is greater than 5 (JUST ONE)

Add a field to each student collection called 'number_of_belts' and set it to 0.

Increment this field by 1 for all students in Washington (Seattle Dojo).

Rename the 'number_of_belts' field to 'belts_earned'

Remove the 'lucky_number' field.

Add a 'updated_on' field, and set the value as the current date.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
