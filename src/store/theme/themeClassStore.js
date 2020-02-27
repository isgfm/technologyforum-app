import{getHomeThemeClass,getThemeClassTabs,getNodesByTabRouter} from '@api/theme/themeClassApi'
import * as R from 'ramda'
import {offset,pageSize} from '@constant/themeConstant'
const themeClassStore={
    state:{
        themeClass_tabs:[],
        parentIdMap:[],
        activeTab:'',
        themeClassList:[],
        themeClass_nodes:[]
    },
    mutations:{
        setThemeClass_tabs(state,themeClass_tabs){
            state.themeClass_tabs = themeClass_tabs;
        },
        setparentIdMap(state,parentIdMap){
            state.parentIdMap = parentIdMap;
        },
        setActiveTab(state,activeTab){
            state.activeTab = activeTab;
        },
        setThemeClassList(state,themeClassList){
            state.themeClassList = themeClassList;
        },
        setThemeClass_nodes(state,themeClass_nodes){
            state.themeClass_nodes = themeClass_nodes;
        }
    },
    actions:{
        getThemeClass({commit}){
            return new Promise((resolve,reject)=>{
                getHomeThemeClass().then(data=>{
                    let result = data.data;
                    
                    if(!R.isEmpty(result)){
                        commit('setThemeClass_tabs',result.tabs);
                        commit('setparentIdMap',result.parentIdMap);
                        commit('setActiveTab',result.tabs[0].nId);
                        commit('setThemeClassList',concat(result.parentIdMap));
                    }
                    resolve();
                }).catch(error=>{
                    reject(error);
                });
            })
        },
        getThemeClassTabs(context){
            return new Promise((resolve,reject)=>{
                getThemeClassTabs().then(data=>{
                    let tabRouter = context.state.activeTab;
                    context.commit('setThemeClass_tabs',data.data);
                    if(context.state.activeTab===''){
                        tabRouter = (data.data)[0].cRouter;
                        context.commit('setActiveTab',tabRouter);
                    }
                    context.dispatch('getNodes', tabRouter) ;
                    context.dispatch('getTabThemeList', {tabRouter,offset,pageSize}) ;
                    resolve();
                }).catch(error=>{
                    reject(error);
                });
            })
        },
        getNodes(context,tabRouter){
            getNodesByTabRouter(tabRouter).then(data=>{
                context.commit('setThemeClass_nodes',data.data);
            });
        },
        setActiveTab({commit},activeTab){
            
            commit('setActiveTab',activeTab);
        }
    }
}

function concat(parentIdMap){
    let parentId;
    let result = [];
    for(parentId in parentIdMap){
        result = result.concat(parentIdMap[parentId]);
    }
    return result;
}
export default themeClassStore;