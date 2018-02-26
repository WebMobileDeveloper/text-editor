
import * as React from 'react';
// import * as React from 'react';

interface Props {
}
interface State {
}

class Balloon extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <p id="balloon1" className="opener box search-list-title" data-balloon="{element} #domContent" data-position="up"
                    data-addclose="true" data-bgcolor="#f0f0f0" data-bordercolor="#999" data-textcolor="#333">
                    - aaaa
                </p>
                <div id="domContent" data-contentforballoon="true">
                    <a href="http://google.com" target="_blank" >paragraph</a>
                    This content is from an DOM in-line element.
                </div>
            </div>
        );
    }
}
export default Balloon;
