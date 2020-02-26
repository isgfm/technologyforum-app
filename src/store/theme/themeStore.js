import{getThemeListByTabId,getThemeListByNodeId} from '@api/theme/themeApi'
import * as R from 'ramda'

const themeStore={
    state:{
        themeList:[]
    },
    mutations:{
        setThemeList(state,themeList){
            state.themeList = themeList;
        }
    },
    actions:{
        getTabThemeList({commit},{tabRouter,offset,pageSize}){
            return new Promise((resolve,reject)=>{
                getThemeListByTabId(tabRouter,offset,pageSize).then(data=>{
                    let result = data;
                    if(!R.isEmpty(result)){
                        commit('setThemeList',result.data);
                    }
                    resolve();
                }).catch(error=>{
                    reject(error);
                });
            })
        },
        getNodeThemeList({commit},{nodeId,offset,pageSize}){
            return new Promise((resolve,reject)=>{
                getThemeListByNodeId(nodeId,offset,pageSize).then(data=>{
                    let result = data;
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

export default themeStore;