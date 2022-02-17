import { playersAPI } from "../API/api";

const SET_PLAYERS = "SET_PLAYERS";
const SET_PAGE_DATA = "SET_PAGE_DATA";
const SET_TOTAL_PLAYERS_COUNT = "SET_TOTAL_PLAYERS_COUNT"

let initialState = {
    players: [],
    meta: {},
    totalPlayersCount: 0
}

const playersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PLAYERS: {
            return { ...state, players: action.players}
        }
        case SET_PAGE_DATA: {
          
          return {...state, meta: action.meta}
        }
       case SET_TOTAL_PLAYERS_COUNT: {
         return {...state, totalPlayersCount: action.totalPlayersCount}
       }
        default: 
            return state;
    }
  
};

export const setPlayers = (players) => ({type: SET_PLAYERS, players})
export const setPageData = (meta) => ({type: SET_PAGE_DATA, meta})
export const setTotalPlayersCount = (totalPlayersCount) => ({type: SET_TOTAL_PLAYERS_COUNT, totalPlayersCount})

export const getPlayersThunkCreator = () => {
    return (dispatch) => {
        playersAPI.getPlayers().then((data) => {
            dispatch(setPlayers(data.data));
            dispatch(setPageData(data.meta))
            dispatch(setTotalPlayersCount(data.meta.total_count))
        })
    }
}

export default playersReducer;
