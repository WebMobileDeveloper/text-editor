
import * as React from 'react';
import Draft, { htmlToDraft, draftToRaw } from 'react-wysiwyg-typescript';
import { EditorState } from 'draft-js';
import { ResponseType } from '../types';

interface Props {
    contents: string;
    onInputChanged: ((data: ResponseType) => void);
}
interface State {
    editorState: EditorState;
}

class InputPane extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editorState: htmlToDraft(props.contents), // or use an EmptyState
        };
    }
    onContentStateChange = (editorState: EditorState) => {
        const raw = draftToRaw(editorState);
        const obj = JSON.parse(raw).blocks;
        // const lastLineArray = obj[obj.length - 1].text.split(' ');
        // const lastWord = lastLineArray[lastLineArray.length - 1];

        const lastLine = obj[obj.length - 1].text;
        if (lastLine === '') {
            this.setState({ editorState }, () => { this.props.onInputChanged({ score: 0, toString: '', toRef: '', toInsert: '' }); });
        } else {
            const self = this;
            fetch('http://localhost:8080/excerpt', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: lastLine }),
            }).then(response => {
                response.json().then(data => {
                    this.setState({ editorState }, () => { this.props.onInputChanged(data); });
                });
            }).catch(function (ex: Error, ) {
                self.setState({ editorState });
            });
        }

    }
    render() {
        return (
            <Draft
                placeholder={'Describe your case ...'}
                editorState={this.state.editorState}
                onEditorStateChange={this.onContentStateChange}
            />
        );
    }
}
export default InputPane;
