import dynamic from '../utils/dynamic';

// 管理页面
const IndexLayout = dynamic(import('../layout/IndexLayout'));
const NotFound = dynamic(import('../components/not-found/NotFound'));

const routes = [
  {
    path: '/',
    component: IndexLayout,
    routes: [
      {
        path: '/index',
        exact: true,
        component: dynamic(import('../pages/index/index'))
      },
      {
        path: '/about',
        exact: true,
        component: dynamic(import('../pages/about/index'))
      },
      { path: '*', component: NotFound }
    ]
  },
];

export default routes;
