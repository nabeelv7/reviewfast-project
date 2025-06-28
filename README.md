# ReviewFast

- users can sign up
- users can create a project
- users will get a link for the project
- they can share this link, and anyone who goes to this link can leave a review for the user
- user will also get an api link
- they can fetch the api and get all the "approved" reviews
- approved reviews are the reviews that the user has approved (no shit, sherlock), but it's to prevent any bad reviews from getting on the visitor's site
- users will get prebuilt components for multiple frameworks, which they can copy paste, fundamentally, these components are just fetching data from the api and styling it

## pages

- landing page
- dashboard page (for the user's dashboard, where they can see all the reviews approve, unapprove them, and also set the theme for their review page)
- review page for each project
- docs (for the multiple framework components)

## api

- api route for each project that returns all the approved reviews
  options:
  - [ ] ?limit= (limit the amount of reviews that are fetched)
  - [ ] ?order= (ordet the reviews by time)
