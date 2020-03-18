import * as R from 'ramda'

const themeReplyStore={
    state:{
        replyContent:'',
        replyUserIdList:[],
        isSticky:false
    },
    mutations:{
        setReplyContent(state,replyContent){
            state.replyContent = replyContent;
        },
        setReplyUserIdList(state,replyUserIdList){
            state.replyUserIdList = replyUserIdList;
        },
        setisSticky(state,isSticky){
            state.isSticky = isSticky;
        }
    },
    actions:{
        replyOne({commit},{userId,username}){
            commit('setisSticky',true);
        },
        change_isSticky({commit},isSticky){
            commit('setisSticky',isSticky);
        }
    }
}

export default themeReplyStore;