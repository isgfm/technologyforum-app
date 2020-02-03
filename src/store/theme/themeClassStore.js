import{getHomeThemeClass} from '@api/theme/themeClassApi'
import * as R from 'ramda'

const themeClassStore={
    state:{
        themeClass_tabs:[],
        parentIdMap:[],
        activeTab:''
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
        }
    },
    actions:{
        getThemeClass({commit}){
            return new Promise((resolve,reject)=>{
                getHomeThemeClass().then(data=>{
                    let result = data.data;
                    if(!R.isEmpty(result)){
                        commit('setThemeClass_tabs',result.data.tabs);
                        commit('setparentIdMap',result.data.parentIdMap);
                        commit('setActiveTab',result.data.tabs[0].nId);
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

export default themeClassStore;