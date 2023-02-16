export const SET_SEARCH = 'SET_SEARCH' 
export const RESET_SEARCH = 'RESET_SEARCH'

export const setSearch = (data) => {
    return {
        type: SET_SEARCH,
        payload: data
    }
}

export const resetSearch = (data) => {
    return {
        type: RESET_SEARCH,
        payload: data
    }
}