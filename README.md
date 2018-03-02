# CLOUDWAN API Documentation

Built using the starter Gatsby project, and adding features for Markdown and Netlify Identity.

## Develop

Type `npm run develop` on the command line to start a hot-reloading development server on localhost:5000.

## Build

Type `npm run build` on the command line to create a deployable copy of the website in the `public` folder.

## Deploy

Commit and push changes to see them updated on the Netlify site.

## Differences from a Typical Gatsby Site

This site places all of Gatsby output in a sub-folder of the public folder called `docs`.
The point of doing this is so that visitor access can be controlled using the
Netlify Identity Widget.  The top-level folder of the website contains the login capabilities
and once authentication is complete, the user will be able to proceed into the `docs` sub-folder
and run the Gatsby SPA that serves up all the Markdown.

