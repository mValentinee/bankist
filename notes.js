{
  "name": "forkify",
  "version": "1.0.0",
  "description": "Recipe application",
  "default": "index.html",
  "browserslist": "> 0.5%, last 2 versions, not dead",
  "targets": {
    "main": false
  },
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html --dist-dir ./dist"
  },
  "author": "Jonas Schedtmann",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-private-methods": "^7.17.12",
    "@parcel/transformer-sass": "^2.2.1",
    "parcel": "^2.2.1"
  },
  "dependencies": {
    "fracty": "^1.0.11"
  }
}