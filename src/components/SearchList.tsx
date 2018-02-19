
import * as React from 'react';

interface Props {
    key: number;
    value: string;
}
interface State {
}

class SearchList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <li key={this.props.key}>
                <span className="search-list-span">
                    {this.props.value}
                </span>
            </li >
        );
    }
}
export default SearchList;
