import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
import Default from './components/Default'
import Projects from './components/contents/Projects'
import Progress from './components/contents/Projects-Progress'
import Plan from './components/contents/Projects-Plan'
import Detail from './components/contents/Project-Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: Login
  }, {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: 'default',
      name: 'default',
      component: Default
    }, {
      path: 'projects',
      name: 'projects',
      component: Projects
    }, {
      path: 'progress',
      name: 'progress',
      component: Progress
    }, {
      path: 'plan',
      name: 'plan',
      component: Plan
    }, {
      path: 'detail/:id',
      name: 'detail',
      component: Detail
    }, {
      path: '',
      component: Default
    }]
  }]
})