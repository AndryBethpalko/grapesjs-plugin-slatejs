export default (editor, options) => {
  new SlateForGrapesJs(editor, options);
}

class SlateForGrapesJs {

  constructor(editor, options) {
    this._SlateForGrapesJsData = {
      editor: editor,
    };

    // Append slate editor
    editor.setCustomRte(
      {
        enable: this.enable.bind(this),
        disable: this.disable.bind(this)
      }
    );
  }

  get editor() {
    return this._SlateForGrapesJsData.editor
  }

  enable(el, rte) {

  }

  getContent() {
  }

  disable(el, rte) {

  }

}