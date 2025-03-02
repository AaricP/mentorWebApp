# Project:
I transformed Bootstrap's static HTML website, Mentor, into a dynamic Express.js web app using MVC architecture by:
- Developing [models](./models/), using sequelize, and storing that data on database server.

- Converting html files to EJS [views](./views/).

- Creating [controllers](./controllers/) to get and post data and render it to the views.

- Defining [routes](./routes/) to render the views

- Building an [app.js](./app.js) for important functionality like mounting middleware.

- Setting up a [util folder](./util/) to create a sequelize database instance, send that data to the database, and store pre-written dummy data in JSON files to be used by the web app.
    >NOTE: The Sequelize instance is created in the [database.js](./util/database.js) file. For security reasons, I have removed the database, username, password, and host details, so the app will not run without them.

    ## Adding a New Feature: Kudos

    I added my own feature to Bootstrap's Mentor web app by creating a page where clients can submit their own testimonial (kudos) to be shown on the website.

    ## Steps:
    ### 1. Created [Kudos View](/Q3-10_mentor/views/kudos.ejs)
    - Created a Kudos view for a client to write their own testimonial.
    ### 2. Edited [About View](/Q3-10_mentor/views/about.ejs)
    - Added a button to send kudos on the About Us page, under the Testimonials Section.
    ### 3. Created [Kudos Controller](/Q3-10_mentor/controllers/kudos-controller.js)
    - Created a get request to render the kudos view.
    - Created a post request to send the client's testimonial submission to the database.
    ### 4. Created [Kudos Route](/Q3-10_mentor//routes/kudos-route.js)
    - Made endpoints for the get and post requests in the kudos-route.js file.
    ### 5. Edited [app.js](/Q3-10_mentor/app.js)
    - Mounted the kudos middleware to app.js