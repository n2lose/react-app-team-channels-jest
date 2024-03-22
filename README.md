# React: Teams and Channels List Application

Complete a partially completed React teams and channel list application. Certain core React functionalities have already been implemented. Complete the application as shown below in order to pass all the unit tests.

![](https://hrcdn.net/s3_pub/istreet-assets/u0qgNojkcOna3LQygHy6Iw/teams-and-channels.gif)

The application has 2 components:

*   The TeamList component, which presents a list of teams and an input to add a new team.
*   The Team component, which displays a list of channels for each team and an input to add a new channel.

The application has the following functionalities:

*   For the TeamList component:
    *   Each team in the teams array has the following keys:

        *   name: The name of the team. (String)

        *   channels: The list of channels belonging to a team. (Channel Array)

    *   Initially, the "Add Team" button is disabled.
    *   It becomes enabled only when a **unique**, valid team name having at least one character is entered in the input.
    *   Upon clicking the enabled "Add Team" button, the team is added to the Teams List.
*   For the Team component:
    *   Each channel in a team has the following keys:

        *   name: The name of the channel. (String)

        *   id: The unique ID for the channel. (Integer)

    *   Initially, the "Add Channel" button is disabled.
    *   It becomes enabled only when a **unique**, valid channel name having at least one character is entered in the input.
    *   Upon clicking the enabled "Add Channel" button, the channel is added to the Team component.
    *   While adding a new channel, a new unique incremental ID property has to be provided.
    *   Clicking the _delete_ button on any channel removes it from the list.

The following data-testid attributes are required in the component for the tests to pass:

*   The div with the list of teams should have the data-testid attribute 'team-list'.
*   The lists of channels for each team should have the data-testid attributes 'channel-list-0', 'channel-list-1', and so on.
*   The 'Add Team' button should have the data-testid attribute 'add-team-btn'.
*   Each 'Add Channel' button should have the data-testid attribute 'add-channel-btn-0', 'add-channel-btn-1', and so on.
*   The 'Enter Team Name' input should have the data-testid attribute 'team-name-input'.
*   Each 'Enter Channel Name' input should have the data-testid attribute 'channel-name-input-0', 'channel-name-input-1', and so on.
*   Each _delete_ button should have the data-testid attribute 'remove-channel-button-00', 'remove-channel-button-01', and so on, denoting first the team id and then the channel id.

Please note that component has the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

## Environment 

- React Version: 16.13.1
- Node Version: 14(LTS)
- Default Port: 8000

## Project Specifications 

**Read-Only Files**
- `src/App.test.js`

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
