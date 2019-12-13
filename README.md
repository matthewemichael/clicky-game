# Clicky Game
### [Check out the App](https://friendly-haibt-cc734f.netlify.com/)  


## Overview
In this assignment, I created a memory game with React. My application manages component state and responds to user events.

## How It Works
- The application renders different images to the screen. Each image listens for click events
- The application keeps track of the user's score. The user's score is incremented when clicking an image for the first time. The user's score is reset to 0 if they click the same image more than once.
- Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.
- Once the user's score is reset after an incorrect guess the game restarts.
- If the user selects all twelve images correctly the game restarts.

![clicky-demo](/public/img/clicky-demo.gif)


## Technologies Used
- HTML
- CSS
- Bootstrap
- React