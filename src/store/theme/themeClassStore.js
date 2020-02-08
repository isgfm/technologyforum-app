import{getHomeThemeClass} from '@api/theme/themeClassApi'
import * as R from 'ramda'

const themeClassStore={
    state:{
        themeClass_tabs:[],
        parentIdMap:[],
        activeTab:'',
        themeClassList:[]
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