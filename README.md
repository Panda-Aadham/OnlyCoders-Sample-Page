Navbar:

Main component Navbar.tsx - first attempted integration of Bootstraps custom styles for responsive column sizing. Created a seperate component for the 3 buttons: Home, Features, and More called NavButtons.tsx.
The Features and More use another component DropdownMenu.tsx which displays the dropdowns for both respectively. The items for the dropdown, including the titles and redirect paths are passed as props into
<DropdownMenu/>. There is also a seperate component for the searchbar, Searchbar.tsx.

Home page:

The home page, Home.tsx, has two main sections - the toolbar which is on the left margin of the screen with several buttons. This can be found in Toolbar.tsx. And the newsfeed which is the main body and content of the page. Can be
found in Newsfeed.tsx.

Toolbar:
Displays like the example on a large window, when in mobile view, it will be on the bottom margin of the screen. There is a seperate component to display the buttons called ToolbarIcons.tsx, this returns the
Material UI icon component as well as the redirect path when clicked on the button.

Newsfeed:
