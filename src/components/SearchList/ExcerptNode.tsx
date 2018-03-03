
import * as React from 'react';
import { Excerpt } from '../../types';
// import * as React from 'react';
interface Props {
    keyNum: number;
    value: Excerpt;
    onListClicked: ((title: string, fillIn: string) => void);
}
interface State {
    fill_in: string;
}

class ExcerptNode extends React.Component<Props, State> {
    private fillInDiv: HTMLDivElement | null;
    constructor(props: Props) {
        super(props);
        this.state = {
            fill_in: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {  // list click hander
        if (this.fillInDiv !== null) {
            this.props.onListClicked(this.props.value.insert, this.fillInDiv.innerHTML);
        }
    }
    handleChange = () => {
        if (this.fillInDiv !== null) {
            this.setState({ fill_in: this.fillInDiv.innerHTML });
        }
    }
    render() {
        return (
            <div className="search-result">
                <div className="search-list-body">
                    <p className="search-list-title" onClick={this.handleClick}>
                        - {this.props.value.description}
                    </p>
                    <div className="fill-in-fragment" contentEditable={true} data-text="Fill in your text here..." ref={(ref) => this.fillInDiv = ref} />
                    {/* <p className="search-list-ref" >
                            {this.props.value.toRef}
                        </p>
                        <p className="search-list-markup">
                            {this.props.value.toInsert}
                        </p> */}
                </div>
            </div >
        );
    }
}
export default ExcerptNode;