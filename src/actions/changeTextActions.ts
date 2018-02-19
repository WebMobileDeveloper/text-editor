import keys from './ActionTypeKeys';
import ActionTypes from './ActionTypes';

let searchResult = [
    ['search result 1-1', 'search result 1-2', 'search result 1-3', 'search result 1-4'],
    ['search result 2-1', 'search result 2-2', 'search result 2-3', 'search result 2-4']
];


export const ChangeTextAction = (text: string): ActionTypes => {
    return {
        type: keys.CHANGE_TEXT,
        searchResult: searchResult[0],        
    };
};