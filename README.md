# CLOUDWAN API Documentation

Most of this site is built using Gatsby, with added features for Markdown and Netlify Identity.

## Add Documentation

Add new Markdown pages for API documentation under `src/markdown`. There should be a new folder for each article.

## Develop

Type `npm run develop` on the command line to start a hot-reloading development server on localhost:5000.

All the files you may change within the Gatsby site are under the `src` folder.
In a build for deployment, everything there will end up under `public/docs`.

Everything that lives outside the Gatsby site, like the pages that are used
for login and authentication, are stored in the `outside` folder,
and copied into the top-level folder of the built site under the `public` folder.

Note: nothing under the `public` folder should ever be under source code control,
it's a temporary output folder.

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
