import{getThemeListByTabRouter,getThemeListByNodeRouter} from '@api/theme/themeApi'
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
        getTabThemeList({commit},{tabRouter,page,pageSize}){
            return new Promise((resolve,reject)=>{
                getThemeListByTabRouter(tabRouter,page,pageSize).then(data=>{
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
        getNodeThemeList({commit},{nodeRouter,page,pageSize}){
            return new Promise((resolve,reject)=>{
                getThemeListByNodeRouter(nodeRouter,page,pageSize).then(data=>{
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