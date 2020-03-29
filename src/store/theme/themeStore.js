import{getThemeListByTabRouter,getThemeListByNodeRouter} from '@api/theme/themeApi'
import * as R from 'ramda'

const themeStore={
    state:{
        themeList:[],
        tabRouter:''
    },
    mutations:{
        setThemeList(state,themeList){
            state.themeList = themeList;
        },
        setTabRouter(state,tabRouter){
            state.tabRouter = tabRouter;
        }
    },
    actions:{
        getTabThemeList({commit},{tabRouter,page,pageSize}){
            commit('setTabRouter',tabRouter);
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