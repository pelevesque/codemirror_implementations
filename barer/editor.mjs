import { EditorState } from "@codemirror/state"
import { EditorView } from "@codemirror/view"

let startState = EditorState.create({
  doc: "Hello World"
})

let view = new EditorView({
  state: startState,
  parent: document.body
})
