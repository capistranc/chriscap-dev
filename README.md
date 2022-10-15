Bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Initialize repo with `./init.sh`

This is an opinionated Boilerplate that comes built in with

- Typescript
- ChakraUI
- Framer Motion
- Next-Seo

as well as a few default components and folder structures.

# Components vs Layouts

There is delineation between components and layouts and pages.

### Components

are very basic and contain no data and non-theme specific styling. (i.e. colors)

### Layouts

contain no data and are collections of multiple components that include styling between components and may include default themes for styling.
Generally this avoids using any hard coded values, and relies heavily on the themes.util for determining foreground and background colors of each component.

### Pages

contain or get Data to pass into components and layouts, have page specific themes and styling, as well as the bulk of the SEO meta tags.

# Important files

### pages/\_document

This is the highest level component - i.e. the DOM. - [Next-JS/\_document](https://nextjs.org/docs/advanced-features/custom-document)

Here is where Google Analytics and Chakra's ColorModeScript are hooked up.

### pages/\_app

This is the second highest level component - [Next-JS/\_app](https://nextjs.org/docs/advanced-features/custom-app)

Here is where ChakrUI, Framer Motion, and NextJS all get glued together with global stylings.

### theme/\*

Before development begins a color pallete for the website should be chosen and stored here.
Recommended: to use [Canva](https://www.canva.com/colors/color-palette-generator/) to find colors
and [Smart Swatch](https://smart-swatch.netlify.app/) for the JS Swatch object.

toHex()

This util is used to add chakra defined colors to default components(custom SVG) and Framer Motion Components -
because Framer Motion cannot annimate between strings and Hex values for colors: (i.e. gray.700 - #000000)

### next-config.js

This is where the environment variables are set
