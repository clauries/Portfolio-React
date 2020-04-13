![Issues](https://img.shields.io/github/issues/clauries/Portfolio-React)  ![Forks](https://img.shields.io/github/forks/clauries/Portfolio-React)  ![Stars](https://img.shields.io/github/stars/clauries/Portfolio-React)  ![License](https://img.shields.io/github/license/clauries/Portfolio-React)  [![Twitter](https://img.shields.io/twitter/url?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fclauries%2FPortfolio-React)

# Portfolio-React
Developing a React version of my portfolio

<img src="client\public\assets\imgs\portfolio.png"/>

#### [Deployed App](https://young-citadel-93602.herokuapp.com/)

## Concept
As a developer, I want to showcase my React knowledge by building a portfolio with React so that my skill level can be seen by prospective employers.

## Local Installation and Usage
1. Install the required modules by typing "npm install" or "npm i" using your code editor terminal; must be at the same level as the package.json.
    * Should you want to seed the app with a few books, at the root of the app, use command "npm run seed".
2. Run the app by typing "npm start", "node server.js", or "node server."
3. The console log will display "Server listening on: http://localhost:3000 ."
4. React should automatically open a webpage on your default browser. Should this not happen, you can hold control and click on the address to go directly to the app. App will open to the search page.
5. Using the app: 
    * Upon opening, you will be on the landing page; click "Explore Site" to enter.
    * Menu is located in the top left corner. When clicked, it will open a drawer with navigation options.
    * Currently the contact form does not send emails (see future development).

## Tech Utilized
* React
* HTML
* CSS
* Javascript
* jQuery
* Material-UI
* Node
* NPM
* Express
* FS

## Future Development
Notes are included on each page for next updates. Some highlights:
* Contact Page - email functionality
    * I will be using Send Grid. I am currently learning how to use it and will implement it mid to late April.
* Landing page - animation
    * I am learning about particle.js and am excited to implement some animation on my landing page using this library. 
* Experience page
    * This website was converted from a non-React portfolio. The Experience page did not convert well. Currently it is excluded from the build. When I update it/redo the page, I will add it back in. In the meantime, I created a temporary Resume component to take it's place. 
* Deployment to my actual website.


## Credits 
* Material-UI - utilized many of their components. 
* Although I have changed a lot with this React converstion, my original website was adapted from a youtube tutorial by Julio Codes over 2 videos. Check out [video 1](https://youtu.be/T7PnWnTgusc) for layout and [video 2](https://youtu.be/inCl01EJkts) for AOS animation.
* The color palette was curated by [Color Palettes](https://colorpalettes.net/color-palette-971/).


## License

MIT License

Copyright (c) 2020 Laurie J Schroeder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.