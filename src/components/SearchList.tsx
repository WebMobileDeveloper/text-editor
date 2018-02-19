
import * as React from 'react';
interface Props {
    value: string;
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
        this.props.onListClicked(this.props.value);
    }
    render() {
        return (
            <li >
                <span className="search-list-span" onClick={((e) => this.handleClick())}>
                    {this.props.value}
                </span>
            </li>
        );
    }
}
export default SearchList;