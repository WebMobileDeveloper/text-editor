import * as React from 'react';
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

interface Props {
    OutputPaneContent: string;
}
interface State {
    outputHTML: string;
}
class OutputPane extends React.Component<Props, State> {

    private outputDiv: HTMLDivElement | null;
    constructor(props: Props) {
        super(props);
        this.state = {
            outputHTML: '',
        };
    }
    componentDidUpdate(prevProp: Props, prevState: State) {
        if (this.outputDiv !== null) {
            this.outputDiv.innerHTML = this.state.outputHTML;
        }
    }
    componentWillReceiveProps(nextProps: Props) {  // when got new list it will be must appended 
        if (nextProps.OutputPaneContent) {   // if exist the list will append 
            // append new list
            let currentHTML = this.state.outputHTML + '<p></p><p style="color:blue;">' + nextProps.OutputPaneContent + '</p>';
            this.setState({ outputHTML: currentHTML });
        }
    }
    render() {
        return (
            <div contentEditable={true} ref={(ref) => this.outputDiv = ref} />
        );
    }
}
export default OutputPane;