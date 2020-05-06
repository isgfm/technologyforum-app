import BackStage from '@backstage/page/BackStage'
const backSatgeRouter = {
    path:'/manage',
    name:'BackStage',
    component:BackStage,
    children:[
        {
            path:'theme',
            component:r => require.ensure([], () => r(require('@backstage/components/themeManage/ThemeManage')), 'ThemeManage'),
            meta:{
                title:'主题管理'
            }
        },
        {
            path:'user',
            component:r => require.ensure([], () => r(require('@backstage/components/userManage/UserManage')), 'UserManage'),
            meta:{
                title:'用户管理'
            }
        }
    ]
}

export default backSatgeRouter;