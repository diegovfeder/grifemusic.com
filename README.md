# GRIFEMUSIC.COM

## Stack

Using:

- [React](https://reactjs.org)
- [Firebase](https://firebase.google.com/)
- [Yarn](https://yarnpkg.com/)


Ask for permissions if needed...

### Run Locally

```bash
# Clone Repository
$ git clone https://github.com/diegovfeder/grifemusic.com

# Go to folder
$ cd grifemusic.com

# Install Dependencies
$ yarn

# Run Aplication
$ yarn start


- Go to http://localhost:3000/ to see the result.
```

### Deploy

```bash

# Make sure you have the latest work built
$ yarn build

# Make sure firebase is updated
$ curl -sL https://firebase.tools | bash

# Login with firebase
$ firebase login

# Select project
$ firebase use grife-music

# Deploy
$ firebase deploy --only hosting


- Go to https://grife-music.web.app/ or https://grife-music.firebaseapp.com/
```

Reference: <https://firebase.google.com/docs/cli>

---
Made with ❤️ by Diego Feder
