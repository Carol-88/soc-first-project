# Ironhack Mid Term Project

First project for frontend course of Ironhack and SOC.

## Deploy Link
[![Logo](public/logos/circle.svg)](https://circle-carolina-midterm.netlify.app/)
## Presentation Link
[Presentation](https://www.canva.com/design/DAGDbieilZs/Md8ARO3S1jAWZh_B-Nwvzw/edit?utm_content=DAGDbieilZs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
## Tech Stack

**Client:** HTML, CSS, JavaScript, Git, GitHub, Netlify, VSCode, URL endpoint

## Features

- Hamburger Menu Toggle
- Footer Button Toggle
- Responsive
- Transitions

## FAQ

#### How is the form validated?

My form collects the values of each input, checks that all fields are covered, validates if the phone has 9 numbers and if the email has the correct syntax. If something is not correct, an alert is triggered for the user.

#### Responsive

I have used flex and media queries with three endpoints, for mobile, tablet, and laptop sizes.

#### How do you fetch the data from the back?

I use the JavaScript fetch() function, I have used .then to receive the responses from the endpoint and by selecting by ID I have painted the content on the page.

*Window: load event*

"The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading."

[MDN DOC](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)

## Optimizations

- *Improved responsiveness*
- *fetch() with async/await*
- *Code refactor, applying KISS and DRY*

## Author

- [@Carolina Romero Cotán](https://www.github.com/Carol-88)
