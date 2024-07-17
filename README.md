# Testing Code Mirror

Testing various implementations of Code Mirror.

## Installation

Make sure you have node and npm installed. Then do:

```bash
git clone git@github.com:pelevesque/testing_code-mirror.git
cd testing_code-mirror
```

Every implementation is in a named folder. To try one,
cd into that folder and run npm install and npm start.

Below is an example of installing the ```basicSetup``` implementation.

```bash
cd basicSetup
npm install
npm start # Build the editor.bundle.js file from editor.mjs
```

Now you can open basicSetup/index.html in a browser.

## Editing

You can modify a Code Mirror implementation by editing its
editor.mjs file and then building its editor.bundle.js by running:

```bash
npm start
```
