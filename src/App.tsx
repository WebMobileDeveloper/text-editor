import * as React from 'react';
import './App.css';
const Editor = require('cl-editor');
const logo = require('./logo.svg');



const EditoreCustom = new Editor({
  // <HTMLElement> required
  target: document.getElementById('editor'),
  // optional
  data: {
      // <Array[string | Object]> string if overwriting, object if customizing/creating
      // available actions:
      // 'viewHtml', 'undo', 'redo', 'b', 'i', 'u', 'strike', 'sup', 'sub', 'h1', 'h2', 'p', 'blockquote', 
      // 'ol', 'ul', 'hr', 'left', 'right', 'center', 'justify', 'a', 'image', 'forecolor', 'backcolor', 'removeFormat'
      actions: [
          'b', 'i', 'u', 'strike', 'ul', 'ol',
          {
              name: 'copy', // required
              icon: '<b>C</b>', // string or html string (ex. <svg>...</svg>)
              title: 'Copy',
              result: () => {
                  // copy current selection or whole editor content
                  const selection = window.getSelection();
                  if (!selection.toString().length) {
                      const range = document.createRange();
                      range.selectNodeContents(EditoreCustom.refs.editor);
                      selection.removeAllRanges();
                      selection.addRange(range);
                  }
                  EditoreCustom.exec('copy');
              }
          },
          'h1', 'h2', 'p'
      ],
      // default 300px
      height: '300px',
      // initial html
      html: '',
      // remove format action clears formatting, but also removes some html tags.
      // you can specify which tags you want to be removed.
      removeFormatTags: ['h1', 'h2', 'blackquote'] // default
  }
});




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
     
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
