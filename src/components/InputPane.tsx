
import * as React from 'react';
import Draft, { htmlToDraft, draftToRaw } from 'react-wysiwyg-typescript';
import { EditorState } from 'draft-js';
import { ResponseType } from '../types';
interface Props {
    contents: string;
    onInputChanged: ((data: ResponseType) => void);
    offlined: () => void;
}
interface State {
    editorState: EditorState;
    paraId: number;
}

const EmptyResult: ResponseType = {
    paraId: 'Empty',
    excerpts: []
};
class InputPane extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editorState: htmlToDraft(props.contents), // or use an EmptyState
            paraId: 0,
        };
    }
    onContentStateChange = (editorState: EditorState) => {
        const raw = draftToRaw(editorState);
        const obj = JSON.parse(raw).blocks;
        // const lastLineArray = obj[obj.length - 1].text.split(' ');
        // const lastWord = lastLineArray[lastLineArray.length - 1];
        const lastLine = obj[obj.length - 1].text;

        this.setState({ editorState });
        if (lastLine === '') {
            this.props.onInputChanged(EmptyResult);
        } else {
            const self = this;
            const query = {
                paraId: 'paraId' + self.state.paraId,
                paraContent: lastLine
            };
            fetch('http://localhost:8080/excerpt', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(query),
            }).then(response => {
                console.log(response);
                response.json().then(data => {
                    console.log(data);
                    self.props.onInputChanged(data);
                });
            }).catch(function (ex: Error, ) {
                self.props.offlined();
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
