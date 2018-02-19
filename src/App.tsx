import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import * as Actions from './actions';
import IStoreState from './store/IStoreState';
import './App.css';
import InputPane from './components/InputPane';
import OutputPane from './components/OutputPane';
import SearchList from './components/SearchList';
interface State {
  searchList: Array<string>;
}

function mapStateToProps(state: IStoreState) {
  return {
    InputPaneContent: state.InputPaneContent,
    OutputPaneContent: state.OutputPaneContent,
    searchResult: state.searchResult,
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    // ChangeTextAction: bindActionCreators(Actions.ChangeTextAction, dispatch)
  };
}

class App extends React.Component<IStoreState, State> {
  constructor(props: IStoreState) {
    super(props);
    this.state = {
      searchList: ['search result 1', 'search result 2', 'search result 3', 'search result 4', 'search result 5'],
    };
    
    console.log(this.props.OutputPaneContent);
  }
  render() {
    return (
      <div id="page">
        <div className="header" >
          Corrector
        </div>
        <div className="description" >
          <InputPane contents={''} />
        </div>
        <div className="summary">
          <OutputPane OutputPaneContent={''} />
        </div>
        <div className="search">
          <ul>
            {
              this.state.searchList.map(function (item: string, i: number) {
                return <SearchList key={i} value={item} />;
              })
            }
          </ul>
        </div>
        <div className="footer">
          Copyright '2018 Migamake
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
