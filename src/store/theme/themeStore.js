import{getThemeListByTabId,getThemeListByNodeId} from '@api/theme/themeClassApi'
import * as R from 'ramda'

const themeClassStore={
    state:{
        themeList:[]
    },
    mutations:{
        setThemeList(state,themeList){
            state.themeList = themeList;
        }
    },
    actions:{
        getThemeList({commit}){
            return new Promise((resolve,reject)=>{
                getThemeListByTabId().then(data=>{
                    let result = data.data;
                    if(!R.isEmpty(result)){
                        commit('setThemeList',result.data);
                    }
                    resolve();
                }).catch(error=>{
                    reject(error);
                });
            })
        }
    }
}

export default themeClassStore;