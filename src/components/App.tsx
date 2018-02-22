import * as React from 'react';
import InputPane from './InputPane';
import OutputPane from './OutputPane';
import SearchList from './SearchList';
import { Excerpt, ResponseType } from '../types';

interface Props {
}
interface State {
  outputString: string;
  appendString: string;
  searchResults: ResponseType | null;
  connectionStatus: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      outputString: '',
      appendString: '',
      searchResults: null,
      connectionStatus: 'online',
    };
    this.listClicked = this.listClicked.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
    this.offlined = this.offlined.bind(this);
  }

  listClicked(data: string): void {
    this.setState({ appendString: data }, () => { this.setState({ appendString: '' }); });
    return;
  }

  inputChanged(data: ResponseType): void {
    this.setState({
      // searchResults: (tostring === '') ? [] : fullResults.filter(function (item: string, i: number) {
      //   return item.toLowerCase().includes(tostring.toLowerCase());
      // })
      searchResults: (data.paraId === 'Empty') ? null : data,
      connectionStatus: 'online',
    });
    return;
  }
  offlined(): void {
    this.setState({ connectionStatus: 'offline' });
    return;
  }

  checkConnection = () => {
    const self = this;
    fetch('http://localhost:8080/excerpt', {
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
    if (this.state.searchResults === null) {
      searchResults = <div className={'placeholder-div'}>Relevant law</div>;
    } else {
      searchResults = (
        <div>
          <ul>
            {
              this.state.searchResults.excerpts.map((item: Excerpt, i: number) => {
                return <SearchList key={i} value={item} onListClicked={this.listClicked} />;
              })
            }
          </ul>
        </div>
      );
    }
    return (
      <div id="page" >
        <div className="header" >
          <span>LeSearch</span>
          <img className={'offlineIcon ' + this.state.connectionStatus} alt={this.state.connectionStatus} title={this.state.connectionStatus} />
        </div>
        <div className="description" >
          <InputPane contents={''} onInputChanged={this.inputChanged} offlined={this.offlined} />
        </div>
        <div className="search">
          {searchResults}
        </div>
        <div className="summary">
          <OutputPane OutputPaneContent={this.state.outputString + this.state.appendString} />
        </div>
        <div className="footer">
          Copyright '2018 Migamake
        </div>
      </div>
    );
  }
}
export default App;