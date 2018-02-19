import * as React from 'react';
import Draft, { htmlToDraft } from 'react-wysiwyg-typescript';
import { stateToHTML } from 'draft-js-export-html';
import { EditorState } from 'draft-js';

interface Props {
    OutputPaneContent: string;
}
interface State {
    editorState: EditorState;
}
class OutputPane extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editorState: htmlToDraft(''), // or use an EmptyState
        };
    }
    componentWillReceiveProps(nextProps: Props) {  // when got new list it will be must appended 
        if (nextProps.OutputPaneContent) {   // if exist the list will append 
            let currentHTML = stateToHTML(this.state.editorState.getCurrentContent()).replace(/<br>/g, '');
            // append new list
            currentHTML = currentHTML + ' <span style="color:blue;">' + nextProps.OutputPaneContent + '</span>&nbsp;';
            let contentState = htmlToDraft(currentHTML);
            this.setState({ editorState: contentState }); 
        }
    }
    render() {
        return (
            <Draft
                editorState={this.state.editorState}
                onEditorStateChange={(editorState) => { this.setState({ editorState }); }}
            />
        );
    }
}
export default OutputPane;
