import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED} from './constants.js'

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    
}