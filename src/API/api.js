import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.balldontlie.io/api/v1/'
})

export const teamsAPI = {
    getTeams() {
        return instance.get(`teams`)
                       .then(response => response.data);
    },
}

export const playersAPI = {
    getPlayers() {
        return instance.get(`players`)
                       .then(response => response.data);
    },
}

