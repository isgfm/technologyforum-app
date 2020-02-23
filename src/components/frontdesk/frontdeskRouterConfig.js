import FrontdeskHome from '@frontdesk/home/page/Home'
import HomeMain from '@frontdesk/home/page/HomeMain'
import HomeRight from '@frontdesk/home/page/HomeRight'
import LoginMain from '@frontdesk/login/page/LoginMain'
import LoginRight from '@frontdesk/login/page/LoginRight'
import SignupMain from '@frontdesk/signup/page/SignupMain'
import SignupRight from '@frontdesk/signup/page/SignupRight'
import CreateThemeMain from '@frontdesk/createTheme/page/CreateThemeMain'
import CreateThemeRight from '@frontdesk/createTheme/page/CreateThemeRight'

const frontdeskRouter = {
    path:'',
    name:'FrontdeskHome',
    component:FrontdeskHome,
    children:[
        {
            path:'/',
            components:{
                main:HomeMain,
                right:HomeRight
            } 
        },
        {
            path:'/login',
            components:{
                main:LoginMain,
                right:LoginRight
            }
            // meta:{
            //     requireLogin: true,
            //     requireAdmin:true
            // }
        },
        {
            path:'/signup',
            components:{
                main:SignupMain,
                right:SignupRight
            }
        },
        {
            path:'/new',
            components:{
                main:CreateThemeMain,
                right:CreateThemeRight
            },
            meta:{
                requireLogin: true
            }
        }
    ]

    
};

export default frontdeskRouter;