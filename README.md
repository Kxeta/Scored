# About the project

This is a MVP of a Match Results website using React, Redux and Typescript. The API used to load the data was [SportDataAPI](https://app.sportdataapi.com/documentation).

## Features

Within this app, you'll be able to see matches results based on: Country, League and Season, you are also able to filter by Team.
The initial list has just some informations from the match, but if you want to know more, just click on it and it will expand, showing a summary of the match's events.

Also, you can switch between dark and light themes =)

## Things to improve
### Features

1 - The API provides lots and lots of info about the matches, including statistics and lineups, live results, and others, so we could add a lot more features and informations using just this API

2 - There were matches which the API would bring team_ids for match_events that were neither home_team id nor away_team id. This might cause some issues when showing the summary of the match's events.

### Code

1 - I got carried over with the code that I used all my time and did not wrote many unit tests... This is something that definitelly would be the next step before doing anything else.

2 - I noticed that a lot of information that is provided by the API could be flattened. For example, teams objects contains country data, that would already be fetched by the country endpoint. For that, we could use something like [normalizr](https://github.com/paularmstrong/normalizr) to create a more smart store for redux.

3 - The way we get information from the Redux Store could also be improved with [Reselect](https://github.com/reduxjs/reselect) and/or [Rereselect](https://github.com/toomuchdesign/re-reselect) to add memoization and a cache for getting data from the store.

3 - There are some places that we could improve the usage of TS.

4 - I didn't wrote proper error handling... All API calls are pretty tighted with the code, not having any manual input from the users, but we could still have failures from the API.

### UI/UX

1 - Responsiviness for mobile was not a priority for this project, so there are definitelly a lot of room to improve in this area

2 - I tried to keep the HTML in a good shape for accessibility, but there might be some room for improvements as well.

3 - Add a feature to the dropdowns for searching a value. Sometimes it's super hard to find the one you want, for example, when selecting Country as `World` and trying to select the Team as `Brazil`

4 - Pagination for the matches list would be a good, also the possibility of filtering by date


# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In order to run this project run the following commands:

`npm ci` - This will install the npm packages with the versions set on 'package-lock.json'
`npm start` - More details bellow about this command

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
