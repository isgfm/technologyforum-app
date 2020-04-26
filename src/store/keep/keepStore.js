
const keepStore={
    state:{
        keepNodeCount: 0,
        keepThemeCount: 0
    },
    mutations:{
        addKeepNodeCount(state,keepNodeCount){
            state.keepNodeCount += keepNodeCount;
        },
        addKeepThemeCount(state,keepThemeCount){
            state.keepThemeCount += keepThemeCount;
        },
        setKeepNodeCount(state,keepNodeCount){
            state.keepNodeCount = keepNodeCount;
        },
        setKeepThemeCount(state,keepThemeCount){
            state.keepThemeCount = keepThemeCount;
        }
    },
    actions:{
        addKeepNodeCount({commit},keepNodeCount){
            commit('addKeepNodeCount',keepNodeCount);
        },
        addKeepThemeCount({commit},keepThemeCount){
            commit('addKeepThemeCount',keepThemeCount);
        },
        initKeepCount({commit},{keepNodeCount,keepThemeCount}){
            commit('setKeepNodeCount',keepNodeCount);
            commit('setKeepThemeCount',keepThemeCount);
        }
    }
}

export default keepStore;