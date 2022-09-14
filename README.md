# My House of Games interface

Solo project for the Frontend section of the Northcoders software Development bootcamp.

Hosted
A hosted version of this project can be found here https://super-cool-site-by-lauren135.netlify.app

The Project

This project provides an interface to interact with an API that was developed during the Backend section of the bootcamp. The API provides a number of endpoints for GET, POST and PATCH requests, all of which are utilised by this project.

Users can view a list of all available game reviews, choose the way they're displayed through categories and sorting by number of votes or comments and continue on to read the full review on it's own separate page. Here, the user will be able to upvote or downvote a review, they will also find a form to comment on the review, along with a list of all previous comments.

Cloning

Fork and clone this repo, and then:

Run npm install to install the required dependencies

Run npm start in order to run the project. A new browser tab/window will open.

Once any changes have been made and it's ready for deployment, run npm run build

You can now deploy this app, providing ./build as the deployment directory

Stack

This repo uses React for rendering, alongside react-router-dom in order to manage routing. All http requests are made using axios.

All styling was done using vanilla CSS.
