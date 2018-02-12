
import * as React from 'react';
import Draft, { htmlToDraft } from 'react-wysiwyg-typescript';
import { EditorState } from 'draft-js';



class Description extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editorState: htmlToDraft(props.contents), // or use an EmptyState
        };
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
export default Description;

interface Props {
    contents: string;
}
interface State {
    editorState: EditorState;
}