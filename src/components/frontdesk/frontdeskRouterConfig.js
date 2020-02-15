import FrontdeskHome from '@frontdesk/home/page/Home'
import HomeMain from '@frontdesk/home/page/HomeMain'
import HomeRight from '@frontdesk/home/page/HomeRight'
import LoginMain from '@frontdesk/login/page/LoginMain'
import LoginRight from '@frontdesk/login/page/LoginRight'

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
        }
    ]

    
};

export default frontdeskRouter;