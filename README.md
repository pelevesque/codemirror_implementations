# Code Mirror Implementations

A collection of Code Mirror implementations.

## Installation

Make sure you have node and npm installed. Then do:

```bash
git clone git@github.com:pelevesque/codemirror_implementations.git
cd codemirror-implementations
```

Every implementation is in a named folder. To try one, cd into that
folder and run ```npm install``` then ```npm run build```.

Below is an example of installing the ```basicSetup``` implementation.

```bash
cd basicSetup
npm install
npm run build # Build the editor.bundle.js file from editor.mjs.
```

Now you can open basicSetup/index.html in a browser.

## Editing

You can modify a Code Mirror implementation by editing its
editor.mjs file and then rebuilding its editor.bundle.js by running:

```bash
npm run build
```
