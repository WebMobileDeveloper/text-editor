import keys from './ActionTypeKeys';

export interface ChangeTextAction {
    type: keys.CHANGE_TEXT;
    searchResult: Array<string>;
}
type ActionTypes =
    | ChangeTextAction;

export default ActionTypes;
