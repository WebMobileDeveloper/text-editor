
import * as React from 'react';
import { Excerpt } from '../types';

interface Props {
    value: Excerpt;
    onListClicked: ((title: string, fillIn: string) => void);
}
interface State {
    fill_in: string;
}
class SearchList extends React.Component<Props, State> {
    private fillInDiv: HTMLDivElement | null;
    constructor(props: Props) {
        super(props);
        this.state = {
            fill_in: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick = () => {  // list click hander
        if (this.fillInDiv !== null) {
            this.props.onListClicked(this.props.value.toInsert, this.fillInDiv.innerHTML);
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
                    <p className="search-list-title" onClick={((e) => this.handleClick())}>
                        - {this.props.value.toString}
                    </p>
                    <div className="fill-in-fragment" contentEditable={true} data-text="Fill in your text here..." ref={(ref) => this.fillInDiv = ref} />
                        
                    {/* <p className="search-list-ref" >
                            {this.props.value.toRef}
                        </p>
                        <p className="search-list-markup">
                            {this.props.value.toInsert}
                        </p> */}
                </div>
            </div>
        );
    }
}
export default SearchList;