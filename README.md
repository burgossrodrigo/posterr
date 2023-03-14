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

postId: a unique identifier for the post
title: the title of the post
repost: a boolean indicating whether the post is a repost of another post
repostId: if repost is true, this is the postId of the original post
quote: a boolean indicating whether the post is a quote of another post
quoteId: if quote is true, this is the postId of the original post
body: the body text of the post
comments: an array of comment objects (see below)
likes: an array of user ids representing the users who have liked the post
shares: an array of user ids representing the users who have shared the post
quotes: an array of user ids representing the users who have quoted the post
author: the name of the user who created the post
authorId: the id of the user who created the post
date: the timestamp (in seconds since the Unix epoch) when the post was created
Each comment object in the comments array has the following properties:

author: the name of the user who created the comment
authorId: the id of the user who created the comment
content: the text of the comment
date: the timestamp (in seconds since the Unix epoch) when the comment was created
Users
Each user object in the Users array has the following properties:

id: a unique identifier for the user
name: the user's name
email: the user's email address
password: the user's password (stored in plain text for simplicity)
followers: an array of user ids representing the users who follow this user
following: an array of user ids representing the users whom this user follows
date: the timestamp (in seconds since the Unix epoch) when the user account was created
Functions
The app includes the following functions:

getPostById(id: number): Post
Returns the post object with the specified postId, or undefined if no such post exists.

getUserById(id: number): User
Returns the user object with the specified userId, or undefined if no such user exists.

getPostsByAuthor(authorId: number): Post[]
Returns an array of post objects created by the user with the specified authorId, sorted by date in descending order.

getPostsLikedByUser(userId: number): Post[]
Returns an array of post objects that have been liked by the user with the specified userId, sorted by date in descending order.

getPostsByFollowedUsers(userId: number): Post[]
Returns an array of post objects created by users followed by the user with the specified userId, sorted by date in descending order.

createPost(post: Post): void
Adds the specified post object to the Posts array.

createComment(comment: Comment, postId: number): void
Adds the specified comment object to the `

# Main grig

The component defines several states to manage the current state of the component:

posts: an array of objects with post data (IPosts interface)
post: an object with the data of the current post being displayed (IPosts interface)
users: an array of objects with user data
user: a number representing the ID of the current user being displayed
data: an object containing the data of the modal being displayed
comment: an object containing the data of the comment being added to a post
The component also uses some hooks:

`useLocation` hook from react-router-dom library to access the current location
`useParams` hook from react-router-dom library to access the parameters of the current URL
`useContext` hook to access the context object of the parent component
`useState` hook to manage the states
The component also defines several functions:

`handleRepost`: a function that adds a new post with the same body as the current post being reposted
`handleQuote`: a function that sets the input state to quote mode and sets the quoteId to the current post ID
`handleLike`: a function that adds the current user ID to the likes array of the current post being liked
`postFormat`: a function that formats the post according to its type (normal, quote or repost)
`handleSubmit`: a function that adds the comment to the comments array of the current post
The component also defines two useEffect hooks:

The first useEffect hook sets the posts and users states to the data stored in the local storage
The second useEffect hook sets the user state and the data state based on the ID parameter of the URL and the user data stored in the users state.

## Interfaces

### IPosts:
This interface defines the shape of each post in the list. It has the following properties:

`postId` (number): the unique identifier for the post.
`title` (string): the title of the post.
`body` (string): the content of the post.
`quote` (boolean): whether the post is a quote of another post.
`repost` (boolean): whether the post is a repost of another post.
`quoteId` (number | null): the id of the post that was quoted, if applicable.
`repostId` (number | null): the id of the post that was reposted, if applicable.
`comments` (array of objects): an array of comments on the post. Each comment has an author (string) and content (string).
`likes` (array of numbers): an array of user ids that have liked the post.
`author` (string): the name of the post author.
`quotes` (array): an array of quotes of the post.
`shares` (array): an array of shares of the post.
`authorId` (number): the id of the post author.
`date` (number): the timestamp of when the post was created.
`IModal`:

This interface defines the shape of the modal component that can be used to create or edit a post. It has the following properties:

`info` (string | undefined): an optional message to display in the modal.
`user` (number | undefined): the id of the current user.
`id` (number | undefined): the id of the post being edited, if applicable.
`body` (string | undefined): the content of the post being edited, if applicable.
`email` (string | undefined): the email address of the user being edited, if applicable.
`password` (string | undefined): the password of the user being edited, if applicable.
`followers` (array of numbers | undefined): an array of follower user ids, if applicable.
`following` (array of numbers | undefined): an array of following user ids, if applicable.
`posts` (array of strings | undefined): an array of post ids, if applicable.
`comments` (array of strings | undefined): an array of comment ids, if applicable.
`date` (number | undefined): the timestamp of when the post was created, if applicable.
name (string | undefined): the name of the user being edited, if applicable.

### IUser:
This interface defines the shape of a user object. It has the following properties:

`id` (number): the unique identifier for the user.
`name` (string): the name of the user.
`email` (string): the email address of the user.
`followers` (array of numbers): an array of user ids that are following the user.
`following` (array of numbers): an array of user ids that the user is following.
`date` (number): the timestamp of when the user was created.

### IComments
The IComments interface is used to define the shape of comment objects. It contains the following properties:

`author`: a string representing the author of the comment.
`authorId`: a number representing the unique identifier of the author.
`content`: a string representing the content of the comment.
`date`: a number representing the timestamp of when the comment was created.
This interface is used to ensure consistency in the shape of comment objects throughout the application.

### IPostInput
The IPostInput interface is used to define the shape of objects used as inputs for creating new posts. It contains the following optional properties:

`repost`: a boolean indicating whether the post is a repost.
`quote`: a boolean indicating whether the post is a quote.
`quoteId`: a number representing the unique identifier of the post being quoted, if applicable.
`repostId`: a number representing the unique identifier of the post being reposted, if applicable.
This interface is used to ensure consistency in the shape of post input objects throughout the application.


