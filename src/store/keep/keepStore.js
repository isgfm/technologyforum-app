
const keepStore={
    state:{
        keepNodeCount: 0,
        keepThemeCount: 0,
        attentionCount: 0,
        notifyCount: 0,

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
        },
        setNotifyCount(state,notifyCount){
            state.notifyCount = notifyCount;
        },
        setAttentionCount(state,attentionCount){
            state.attentionCount = attentionCount;
        }
    },
    actions:{
        addKeepNodeCount({commit},keepNodeCount){
            commit('addKeepNodeCount',keepNodeCount);
        },
        addKeepThemeCount({commit},keepThemeCount){
            commit('addKeepThemeCount',keepThemeCount);
        },
        initCount({commit},{keepNodeCount,keepThemeCount,notifyCount,attentionCount}){
            commit('setKeepNodeCount',keepNodeCount);
            commit('setKeepThemeCount',keepThemeCount);
            commit('setNotifyCount',notifyCount);
            commit('setAttentionCount',attentionCount);
        },
        changeNotifyCount({commit},notifyCount){
            commit('setNotifyCount',notifyCount);
        }
    }
}

export default keepStore;