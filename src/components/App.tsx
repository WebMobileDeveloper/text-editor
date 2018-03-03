import * as React from 'react';
import InputPane from './InputPane';
import OutputPane from './OutputPane';
import ExcerptNode from './SearchList/ExcerptNode';
// import CategoryNode from './SearchList/CategoryNode';
import QuestionNode from './SearchList/QuestionNode';
import * as Types from '../types';
import { apiURL } from '../globals';

interface Props {
}
interface State {
  appendTitle: string;
  appendFillIn: string;
  apiResults: Types.ResponseType | null;
  connectionStatus: string;
  paraId: Types.ParaId;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      appendTitle: '',
      appendFillIn: '',
      apiResults: null,
      connectionStatus: 'online',
      paraId: '',
    };
    this.listClicked = this.listClicked.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
    this.offlined = this.offlined.bind(this);
  }

  listClicked(title: string, fillIn: string): void {
    this.setState({ appendTitle: title, appendFillIn: fillIn, }, () => { this.setState({ appendTitle: '', appendFillIn: '', }); });
    return;
  }

  inputChanged(data: Types.ResponseType): void {
    if (data.paraId === 'Empty') {
      this.setState({
        apiResults: null,
        paraId: '',
      });
    } else {
      this.setState({
        paraId: data.paraId,
        apiResults: data,
        connectionStatus: 'online',
      });
    }

    return;
  }
  offlined(): void {
    this.setState({ connectionStatus: 'offline' });
    return;
  }

  checkConnection = () => {
    const self = this;
    fetch(apiURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status === 200) {
        self.setState({ connectionStatus: 'online' });
      } else {
        self.setState({ connectionStatus: 'offline' });
      }
    }).catch(function (ex: Error, ) {
      self.setState({ connectionStatus: 'offline' });
    });
  }

  componentDidMount() {
    this.checkConnection();
    setInterval(this.checkConnection, 60000);
  }
  render() {
    let searchResults = null;
    if (this.state.apiResults === null) {
      searchResults = <div className={'placeholder-div'}>Relevant law</div>;
    } else {
      searchResults = (
        this.state.apiResults.excerpts.map((item: Types.Feedback, i: number) => {
          switch (item.ftype) {
            case Types.FeedbackType.excerpt:
              return <ExcerptNode key={i} value={item as Types.Excerpt} onListClicked={this.listClicked} keyNum={i} />;
            case Types.FeedbackType.question:
              return (
                <QuestionNode key={i} value={item as Types.Question} keyNum={i} onQuestionSelected={this.inputChanged} offlined={this.offlined} paraId={this.state.paraId} />
              );
            // case FeedbackType.excerpt:
            //   return <ExcerptNode key={i} value={item as Excerpt} onListClicked={this.listClicked} keyNum={i} />;
            default:
              return null;
          }

        })
      );
    }

    return (
      <div id="page" >
        <div className="header" >
          <span>LeSearch</span>
          <img className={'offlineIcon ' + this.state.connectionStatus} alt={this.state.connectionStatus} title={this.state.connectionStatus + '\n' + apiURL} />
        </div>
        <div className="description" >
          <InputPane contents={''} onInputChanged={this.inputChanged} offlined={this.offlined} />
        </div>
        <div className="search">
          {searchResults}
        </div>
        <div className="summary">
          <OutputPane appendTitle={this.state.appendTitle} appendFillIn={this.state.appendFillIn} />
        </div>
        <div className="footer">
          Copyright '2018 Migamake
        </div>
      </div>
    );
  }
}
export default App;