

export default {
    state: {
        socket: null,
        opponent_username: "",
        opponent_photo: "",
        status: "matching",  //matching:表示匹配界面，playing表示对战界面
        gamemap: null,
    },
    getters: {
    },
    mutations: {
        updateGamemap(state, gamemap) {
            state.gamemap = gamemap;
        },
        updateSocket(state, socket) {
            state.socket = socket;
        },
        updateOpponent(state, opponent) {
            state.opponent_username = opponent.username;
            state.opponent_photo = opponent.photo;
        },
        updateStatus(state, status) {
            state.status = status;
        }
    },
    actions: {
    },
    modules: {
    }
}