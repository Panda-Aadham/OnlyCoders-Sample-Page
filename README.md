Navbar:

Main component Navbar.tsx - first attempted integration of Bootstraps custom styles for responsive column sizing. Created a seperate component for the 3 buttons: Home, Features, and More called NavButtons.tsx. The Features and More use another component DropdownMenu.tsx which displays the dropdowns for both respectively. The items for the dropdown, including the titles and redirect paths are passed as props into <DropdownMenu/>. There is also a seperate component for the searchbar, Searchbar.tsx.

Home page:

The home page, Home.tsx, has two main sections - the toolbar which is on the left margin of the screen with several buttons. This can be found in Toolbar.tsx. And the newsfeed which is the main body and content of the page. Can be found in Newsfeed.tsx.

Toolbar:

Displays like the example on a large window, when in mobile view, it will be on the bottom margin of the screen. There is a seperate component to display the buttons called ToolbarIcons.tsx, this returns the Material UI icon component as well as the redirect path when clicked on the button.

Newsfeed:

In the Newsfeed, Newsfeed.tsx, we utilise a Bootstrap grid for responsive columns and rows. The first row is the Newsfeed image, the second row contains the main
body of the feed, which is split into 3 different components, NewUsers.tsx, Posts.tsx, and Groups.tsx. Displaying the newest memebers, posts, and popular groups respectively. Note: 25 sample user and 15 sample group data were generated for this example. 

In the <NewUsers/> component, we sort the user data by registration date and retrive the first 5 as an array, mapping it and passing their data into another component <Profile/> or User.tsx which displays the user icon, name and username. The profile component makes use of a component Icon.tsx (reused in Post.tsx and Group.tsx) as well as UserDetails.tsx, which displays the users name and if they have them, the verification badge and pro member badge (reused in Post.tsx). See also the interface User in User.tsx

In the <Posts/> component, we have a head section at the top containing a dropdown in the form of an MUI autocomplete to easily match the styling. We then map the posts and display them in the component <Post/> or Post.tsx. Here we display the User icon and details, as well as the post tile, post date, body and response/reactions. See also the interface PostType in Post.tsx.

In the <Groups/> component, we follow a similar structure to <NewUsers/> sorting the group data by member count and returning the first 5 as an array and displaying them in a seperate component, <GroupDisplay/> or Group.tsx. Here we display the group icon, name and member count, and an icon to show wether it is a publicly available group or if it's private. See also the interface Group in Group.tsx.
