import {minimalSetup, EditorView} from "codemirror"

new EditorView({
  doc: "...",
  extensions: minimalSetup,
  parent: document.body
})
