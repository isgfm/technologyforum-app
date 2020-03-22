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
        }
    ]
};

export default frontdeskRouter;