import * as React from 'react';
import InputPane from './InputPane';
import OutputPane from './OutputPane';
import SearchList from './SearchList';
import { ResponseType } from '../types';

interface Props {
}
interface State {
  outputString: string;
  appendString: string;
  searchResults: Array<ResponseType>;
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      outputString: '',
      appendString: '',
      searchResults: [],
    };
    this.listClicked = this.listClicked.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
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
      searchResults: (data.toString === '') ? [] : [data],
    });
    return;
  }

  render() {
    return (
      <div id="page">
        <div className="header" >
          Corrector
        </div>
        <div className="description" >
          <InputPane contents={''} onInputChanged={this.inputChanged} />
        </div>
        <div className="search">
          <div>
            <ul>
              {
                this.state.searchResults.map((item: ResponseType, i: number) => {
                  return <SearchList key={i} value={item} onListClicked={this.listClicked} />;
                })
              }
            </ul>
          </div>
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