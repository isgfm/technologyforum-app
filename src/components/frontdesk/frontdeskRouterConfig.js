import FrontdeskHome from '@frontdesk/home/page/Home'
import HomeMain from '@frontdesk/home/page/HomeMain'
import HomeRight from '@frontdesk/home/page/HomeRight'
import LoginMain from '@frontdesk/login/page/LoginMain'
import LoginRight from '@frontdesk/login/page/LoginRight'
import SignupMain from '@frontdesk/signup/page/SignupMain'
import SignupRight from '@frontdesk/signup/page/SignupRight'
import CreateThemeMain from '@frontdesk/createTheme/page/CreateThemeMain'
import CreateThemeRight from '@frontdesk/createTheme/page/CreateThemeRight'
import ViewThemeMain from "@frontdesk/viewTheme/page/ViewThemeMain";
import ViewThemeRight from "@frontdesk/viewTheme/page/ViewThemeRight";
import ProfileSettingMain from "@frontdesk/profileSetting/page/ProfileSettingMain"
import ProfileSettingRight from "@frontdesk/profileSetting/page/ProfileSettingRight"
const frontdeskRouter = {
    path:'',
    name:'FrontdeskHome',
    component:FrontdeskHome,
    children:[
        {
            path:'',
            components:{
                main:HomeMain,
                right:HomeRight
            },
            meta:{
                title:'首页'
            }
        },
        {
            path:'/tab/:tabrouter',
            components:{
                main:HomeMain,
                right:HomeRight
            },
            props:{
                main:true,
                right:false
            },
            meta:{
                title:'首页'
            }
        },
        {
            path:'/login',
            components:{
                main:LoginMain,
                right:LoginRight
            },
            meta:{
                title:'登录'
            }
        },
        {
            path:'/signup',
            components:{
                main:SignupMain,
                right:SignupRight
            },
            meta:{
                title:'注册'
            }
        },
        {
            path:'/new',
            components:{
                main:CreateThemeMain,
                right:CreateThemeRight
            },
            meta:{
                title:'发布新主题',
                requireLogin: true
            }
        },
        {
            path:'/t/:themeId',
            components:{
                main:ViewThemeMain,
                right:ViewThemeRight
            },
            props:{
                main:true,
                right:false
            }
        },
        {
            path:'/go/:nodeRouter',
            components:{
                main:r => require.ensure([], () => r(require('@frontdesk/nodeThemeList/page/NodeThemeListMain')), 'NodeThemeListMain'),
                right:r => require.ensure([], () => r(require('@frontdesk/nodeThemeList/page/NodeThemeListRight')), 'NodeThemeListRight')
            },
            props:{
                main:true,
                right:false
            }
        },
        {
            path:'/setting',
            components:{
                main:ProfileSettingMain,
                right:ProfileSettingRight
            },
            meta:{
                title:'设置>个人资料',
                requireLogin: true
            }
        },
        {
            path:'/member/:userId',
            components:{
                main:r => require.ensure([], () => r(require('@frontdesk/member/page/MemberMain')), 'MemberMain'),
                right:r => require.ensure([], () => r(require('@frontdesk/member/page/MemberRight')), 'MemberRight')
            },
            props:{
                main:true,
                right:false
            },
            children:[
                {
                    path:'',
                    component:r => require.ensure([], () => r(require('@frontdesk/member/components/memberThemes/MemberThemes')), 'MemberThemes')
                },
                {
                    path:'profile',
                    component:r => require.ensure([], () => r(require('@frontdesk/member/components/memberProfile/MemberProfile')), 'MemberProfile')
                }
            ]
        },
        {
            path:'/my',
            components:{
                main:r => require.ensure([], () => r(require('@frontdesk/my/page/MyMain')), 'MyMain'),
                right:r => require.ensure([], () => r(require('@frontdesk/my/page/MyRight')), 'MyRight')
            },
            meta:{
                requireLogin: true
            },
            children:[
                {
                    path:'nodes',
                    component:r => require.ensure([], () => r(require('@frontdesk/my/components/myKeepNodes/MyKeepNodes')), 'MyKeepNodes')
                },
                {
                    path:'themes',
                    component:r => require.ensure([], () => r(require('@frontdesk/my/components/myKeepThemeList/MyKeepThemeList')), 'MyKeepThemes')
                },
                {
                    path:'attention',
                    component:r => require.ensure([], () => r(require('@frontdesk/my/components/attentionUsersThemeList/AttentionUsersThemeList')), 'AttentionUsersThemeList')
                }
            ]
        },
        {
            path:'/notifications',
            components:{
                main:r => require.ensure([], () => r(require('@frontdesk/notify/page/NotifyMain')), 'NotifyMain'),
                right:r => require.ensure([], () => r(require('@frontdesk/notify/page/NotifyRight')), 'NotifyRight')
            },
            meta:{
                title:'提醒',
                requireLogin: true
            }
        },
        {
            path:'/search/:searchContent',
            components:{
                main:r => require.ensure([], () => r(require('@frontdesk/searchResult/page/SearchResultMain')), 'SearchResultMain'),
                right:r => require.ensure([], () => r(require('@frontdesk/searchResult/page/SearchResultRight')), 'SearchResultRight')
            },
            props:{
                main:true,
                right:false
            },
            meta:{
                title:'搜索结果'
            }
        }
    ]
};

export default frontdeskRouter;