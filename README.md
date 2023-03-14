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

## Queries

getPosts()
This function retrieves the posts saved in the localStorage (simulating a db) and returns them as an object. If no posts have been saved, an empty object is returned.

Example:

`const posts = getPosts(); // { post1: {...}, post2: {...}, ... }`

getUsers()
This function retrieves the users saved in the localStorage and returns them as an object. If no users have been saved, an empty object is returned.

Example:

`const users = getUsers(); // { user1: {...}, user2: {...}, ... }`

## State

AppProvider(props: any)
This is a React component that provides a global state for the application using the useReducer hook from React. It receives the initial state as initialState and a reducer function to update the state based on dispatched actions.

The state contains three properties:

modal: a boolean that represents the status of the modal
input: an object containing data for input fields in the modal
refresh: a boolean that is used to force a refresh of the component that is listening to it.
The dispatch function is used to update the state based on actions, which are objects with a type property and an optional payload.

Example:

```
function MyApp() {
  return (
    <AppProvider>
      <MyComponent />
    </AppProvider>
  )
}
```

`handleOpen(dispatch: any)`
This function dispatches an action to open the modal by setting modal to true.

```
const { dispatch } = useContext(AppContext);
handleOpen(dispatch);
```

`handleClose(dispatch: any)`
This function dispatches an action to close the modal by setting modal to false.

Example:

```
const { dispatch } = useContext(AppContext);
handleClose(dispatch);
```

`setInput(dispatch: any, input: IPostInput | any)`
This function dispatches an action to update the input state with the given input object.

Example:

```
const { dispatch } = useContext(AppContext);
setInput(dispatch, { quote: true, quoteId: '1234' });

```

`refresh(dispatch: any, payload: boolean)`
This function dispatches an action to force a refresh of the component that is listening to the refresh property by setting it to true.

Example:

```
const { dispatch } = useContext(AppContext);
refresh(dispatch, true);
```

## Data

Data
The app uses two data structures: Posts and Users. The Posts object contains an array of post objects, each with a unique postId. The Users object contains an array of user objects, each with a unique userId.

Posts
Each post object in the Posts array has the following properties:

postId: a unique identifier for the post<br />
title: the title of the post<br />
repost: a boolean indicating whether the post is a repost of another post<br />
repostId: if repost is true, this is the postId of the original post<br />
quote: a boolean indicating whether the post is a quote of another post<br />
quoteId: if quote is true, this is the postId of the original post<br />
body: the body text of the post<br />
comments: an array of comment objects (see below)<br />
likes: an array of user ids representing the users who have liked the post<br />
shares: an array of user ids representing the users who have shared the post<br />
quotes: an array of user ids representing the users who have quoted the post<br />
author: the name of the user who created the post<br />
authorId: the id of the user who created the post<br />
date: the timestamp (in seconds since the Unix epoch) when the post was created<br />
Each comment object in the comments array has the following properties:<br />

author: the name of the user who created the comment<br />
authorId: the id of the user who created the comment<br />
content: the text of the comment<br />
date: the timestamp (in seconds since the Unix epoch) when the comment was created<br />
Users<br />
Each user object in the Users array has the following properties:<br />

id: a unique identifier for the user<br />
name: the user's name<br />
email: the user's email address<br />
password: the user's password (stored in plain text for simplicity)<br />
followers: an array of user ids representing the users who follow this user<br />
following: an array of user ids representing the users whom this user follows<br />
date: the timestamp (in seconds since the Unix epoch) when the user account was created<br />
Functions<br />
The app includes the following functions:<br />

`getPostById(id: number): Post`<br />
Returns the post object with the specified postId, or undefined if no such post exists.<br />

`getUserById(id: number): User`<br />
Returns the user object with the specified userId, or undefined if no such user exists.<br />

`getPostsByAuthor(authorId: number): Post[]`<br />
Returns an array of post objects created by the user with the specified authorId, sorted by date in descending order.

`getPostsLikedByUser(userId: number): Post[]`<br />
Returns an array of post objects that have been liked by the user with the specified userId, sorted by date in descending order.

`getPostsByFollowedUsers(userId: number): Post[]`<br />
Returns an array of post objects created by users followed by the user with the specified userId, sorted by date in descending order.

`createPost(post: Post): void`
Adds the specified post object to the Posts array.

`createComment(comment: Comment, postId: number): void`
Adds the specified comment object to the `

# Main grig

The component defines several states to manage the current state of the component:<br />

posts: an array of objects with post data (IPosts interface)<br />
post: an object with the data of the current post being displayed (IPosts interface)<br />
users: an array of objects with user data<br />
user: a number representing the ID of the current user being displayed<br />
data: an object containing the data of the modal being displayed<br />
comment: an object containing the data of the comment being added to a post<br />
The component also uses some hooks:<br />

`useLocation` hook from react-router-dom library to access the current location<br />
`useParams` hook from react-router-dom library to access the parameters of the current URL<br />
`useContext` hook to access the context object of the parent component<br />
`useState` hook to manage the states<br />
The component also defines several functions:<br />

`handleRepost`: a function that adds a new post with the same body as the current post being reposted<br />
`handleQuote`: a function that sets the input state to quote mode and sets the quoteId to the current post ID<br />
`handleLike`: a function that adds the current user ID to the likes array of the current post being liked<br />
`postFormat`: a function that formats the post according to its type (normal, quote or repost)<br />
`handleSubmit`: a function that adds the comment to the comments array of the current post<br />
The component also defines two useEffect hooks:<br />

The first useEffect hook sets the posts and users states to the data stored in the local storage
The second useEffect hook sets the user state and the data state based on the ID parameter of the URL and the user data stored in the users state.

## Interfaces

### IPosts:
This interface defines the shape of each post in the list. It has the following properties:

`postId` (number): the unique identifier for the post.<br />
`title` (string): the title of the post.<br />
`body` (string): the content of the post.<br />
`quote` (boolean): whether the post is a quote of another post.<br />
`repost` (boolean): whether the post is a repost of another post.<br />
`quoteId` (number | null): the id of the post that was quoted, if applicable.<br />
`repostId` (number | null): the id of the post that was reposted, if applicable.<br />
`comments` (array of objects): an array of comments on the post. Each comment has an author (string) and content (string).<br />
`likes` (array of numbers): an array of user ids that have liked the post.<br />
`author` (string): the name of the post author.<br />
`quotes` (array): an array of quotes of the post.<br />
`shares` (array): an array of shares of the post.<br />
`authorId` (number): the id of the post author.<br />
`date` (number): the timestamp of when the post was created.<br />

### IModal<br />

This interface defines the shape of the modal component that can be used to create or edit a post. It has the following properties:<br />

`info` (string | undefined): an optional message to display in the modal.<br />
`user` (number | undefined): the id of the current user.v<br />
`id` (number | undefined): the id of the post being edited, if applicable.<br />
`body` (string | undefined): the content of the post being edited, if applicable.<br />
`email` (string | undefined): the email address of the user being edited, if applicable.<br />
`password` (string | undefined): the password of the user being edited, if applicable.<br />
`followers` (array of numbers | undefined): an array of follower user ids, if applicable.<br />
`following` (array of numbers | undefined): an array of following user ids, if applicable.<br />
`posts` (array of strings | undefined): an array of post ids, if applicable.<br />
`comments` (array of strings | undefined): an array of comment ids, if applicable.<br />
`date` (number | undefined): the timestamp of when the post was created, if applicable.<br />
name (string | undefined): the name of the user being edited, if applicable.<br />

### IUser:
This interface defines the shape of a user object. It has the following properties:

`id` (number): the unique identifier for the user.<br />
`name` (string): the name of the user.<br />
`email` (string): the email address of the user.<br />
`followers` (array of numbers): an array of user ids that are following the user.<br />
`following` (array of numbers): an array of user ids that the user is following.<br />
`date` (number): the timestamp of when the user was created.<br />

### IComments
The IComments interface is used to define the shape of comment objects. It contains the following properties:

`author`: a string representing the author of the comment.<br />
`authorId`: a number representing the unique identifier of the author.<br />
`content`: a string representing the content of the comment.<br />
`date`: a number representing the timestamp of when the comment was created.<br />
This interface is used to ensure consistency in the shape of comment objects throughout the application.<br />

### IPostInput
The IPostInput interface is used to define the shape of objects used as inputs for creating new posts. It contains the following optional properties:

`repost`: a boolean indicating whether the post is a repost.<br />
`quote`: a boolean indicating whether the post is a quote.<br />
`quoteId`: a number representing the unique identifier of the post being quoted, if applicable.<br />
`repostId`: a number representing the unique identifier of the post being reposted, if applicable.<br />
This interface is used to ensure consistency in the shape of post input objects throughout the application.<br />


