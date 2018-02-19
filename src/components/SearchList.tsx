
import * as React from 'react';
import { ResponseType } from '../types';

interface Props {
    value: ResponseType;
    onListClicked: ((data: string) => void);
}
interface State {
}

class SearchList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }
    handleClick = () => {  // list click hander
        this.props.onListClicked(this.props.value.toString);
    }
    render() {
        return (
            <li >
                <div className="search-result">
                    <div className="search-list-score">
                       <p>1.</p>   {/* {this.props.value.score} */}
                    </div>
                    <div className="search-list-body">
                        <p className="search-list-title" onClick={((e) => this.handleClick())}>
                            {this.props.value.toString}
                        </p>
                        <p className="search-list-ref" >
                            {this.props.value.toRef}
                        </p>
                        <p className="search-list-markup">
                            {this.props.value.toInsert}
                        </p>
                    </div>
                </div>
            </li>
        );
    }
}
export default SearchList;