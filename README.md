## Overview

The goal is to create a simple web application which makes a request to an API, parses the response, and displays the result in the UI. The app will consist of **two major components** - one **search** component and one **results** component. 

## Detail

### Search Component

This component should contain two elements:

- Text field for entering an 'Login' String Value
- 'Submit' Button for initiating a request to 
`https://api.github.com/search/users?q={login} in:login`, where {login} is the input value

```bash
# Example curl GET request to search for for login `foo`
curl --request GET '[https://api.github.com/search/users?q=foo in:login](https://api.github.com/search/users?q=foo%20in:login)'
```

### Results Component

This component should contain a single element:

- Results Table for displaying the results of the User search

The results table has the following requirements:

- Display three columns from the response:
    - `avatar_url`
    - `login`
    - `type`
- Uses [Pagination](https://docs.github.com/en/rest/guides/traversing-with-pagination#basics-of-pagination), with 9 items displayed Per_Page
- Allow Sorting, with the `login` column being sorted by default

## UI

The UI should appear modern and simple while following best practices around HTML + CSS/SCSS. Creativity is encouraged, so feel free design the UI in any way you wish. However, the app must be functionally complete. 

## Use-Case

- After the app is launched, the **Search** component is displayed
- The user enters a random String value into to the 'Login' field and clicks the `Submit` button
- The app sends a https request to `https://api.github.com/search/users?q={login} in:login`, where {login} is the String value entered by the user
- The app then parses the response from the server. If data is returned, the **Results** component should display the fetched values. If there is an issue with the request, then an error message should be displayed.

## Requirements

- The app has to compile and run without issue. It should be stable and reasonably fool-proof, handling all obvious **test** cases.

## Deliverables

- The final deliverable should be a fully-functioning Angular/ReactJS project that compiles and runs without issue.
- A public GitHub repository is the preferred delivery method for code.
- A public URL is the preferred delivery method for the application. Feel free to use [Netlify](https://www.netlify.com/), [StackBlitz](https://stackblitz.com/), [Glitz](https://glitch.com/), or any other simple deployment mechanism.
