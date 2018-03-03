
import * as React from 'react';
// import { Question, Answer, ResponseType, ParaId } from '../../types';
import * as Types from '../../types';
// import * as React from 'react';
import * as $ from 'jquery';
import { apiURL } from '../../globals';
// import Balloon from 'react-balloon';

interface Props {
    keyNum: number;
    value: Types.Question;
    paraId: Types.ParaId;
    onQuestionSelected: ((data: Types.ResponseType) => void);
    offlined: () => void;
}
interface State {
    answer: string;
}

class QuestionNode extends React.Component<Props, State> {
    private ClassStr = 'created-element' + this.props.keyNum;
    constructor(props: Props) {
        super(props);
        this.state = {
            answer: 'yes',
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e: Event) {  // list click hander
        let target = $(e.target);
        if (target.hasClass(this.ClassStr)) {

            if (target.attr("type")) {
                this.setState(
                    { answer: target.val() as string }
                );
            } else {
                const self = this;
                const query = {
                    paraId: self.props.paraId,
                    paraContent: this.state.answer
                };
                
                this.setState(
                    { answer: 'yes' }
                );
                fetch(apiURL, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(query),
                }).then(response => {
                    response.json().then(data => {
                        $(".mbBalloonClose").click();
                        self.props.onQuestionSelected(data);
                    });
                }).catch(function (ex: Error, ) {
                    $(".mbBalloonClose").click();
                    self.props.offlined();
                });
            }
        }
    }
    componentDidMount() {
        window.addEventListener('mousedown', this.handleClick, false);
    }

    render() {
        let idStr = 'domContent' + this.props.keyNum;
        let dataBalloonStr = '{element} #' + idStr;

        let options = this.props.value.answers.map((item: Types.Answer, i: number) => {
            let checked = (this.state.answer === item.option) ? "true" : "false";
            return (
                <div key={i}>
                    <input type='radio' className={this.ClassStr} name={idStr} value={item.option} checked-value={checked} />
                    {item.note}
                    <br />
                </div>
            );
        });

        return (
            <div className="search-result">
                <div className="search-list-body">
                    <div>
                        <p className="opener box search-list-title" data-balloon={dataBalloonStr} data-position="up"
                            data-addclose="true" data-bgcolor="#f0f0f0" data-bordercolor="#999" data-textcolor="#333"
                        >
                            - {this.props.value.question}
                        </p>

                        <div id={idStr} data-contentforballoon="true" >
                            <div className="created-div">
                                {options}
                                <button className={this.ClassStr}>
                                    Click Me!
                                </button>
                            </div>
                        </div>
                    </div>
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
export default QuestionNode;