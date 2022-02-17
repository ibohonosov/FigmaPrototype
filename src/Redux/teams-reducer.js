import { teamsAPI } from "../API/api";

const SET_TEAMS = "SET_TEAMS";
const SET_PAGE_DATA = "SET_PAGE_DATA";
const SET_TEAMS_COUNT = "SET_TEAMS_COUNT";
const SET_ADD_TEAMS = 'SET_ADD_TEAMS';

let initialState = {
  teams: [],
  meta: {},
  totalTeamsCount: 0,
  newTeam: [],
};

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAMS: {
      return { ...state, teams: action.teams };
    }
    case SET_ADD_TEAMS: {
      // debugger
      // let newTeam = [];
      return { ...state, newTeam: [action.newTeam, ...state.newTeam]};
    }
    case SET_PAGE_DATA: {
      return { ...state, meta: action.meta };
    }
    case SET_TEAMS_COUNT: {
      return { ...state, totalTeamsCount: action.totalTeamsCount };
    }
    default:
      return state;
  }
};

export const setTeams = (teams) => ({ type: SET_TEAMS, teams });
export const setTeamsData = (meta) => ({ type: SET_PAGE_DATA, meta });
export const setTeamsCount = (totalTeamsCount) => ({
  type: SET_TEAMS_COUNT,
  totalTeamsCount,
});
export const AddTeam = (newTeam) => ({ type: SET_ADD_TEAMS, newTeam });


export const getTeamsThunkCreator = () => {
  return (dispatch) => {
    teamsAPI.getTeams().then((data) => {
      dispatch(setTeams(data.data));
      dispatch(setTeamsData(data.meta))
      dispatch(setTeamsCount(data.meta.total_count))
    });
  };
};

export default teamsReducer;
