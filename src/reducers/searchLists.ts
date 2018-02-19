import * as ActionTypes from '../actions/ActionTypes';
import ActionTypeKeys from '../actions/ActionTypeKeys';
import * as Actions from '../actions';
import IStoreState from '../store/IStoreState';
interface InitialStoreState {
    searchResult: Array<string>;
    InputPaneContent: string;
    OutputPaneContent: string;
}
const initialState: InitialStoreState = {
    searchResult: [],
    InputPaneContent: '',
    OutputPaneContent: '',
};

export default function searchResults(state: InitialStoreState = initialState, action: ActionTypes.ChangeTextAction): IStoreState {
    switch (action.type) {
        case ActionTypeKeys.CHANGE_TEXT:
            return Object.assign({}, state, {
                searchResult: Actions.ChangeTextAction,
            });
        default:
            return state;
    }
}

