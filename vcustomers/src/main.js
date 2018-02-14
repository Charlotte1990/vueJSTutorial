// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import Edit from './components/Edit'
import CustomerDetails from './components/CustomerDetails'


Vue.use(vueResource)
Vue.use(VueRouter)

const router = new  VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component: Customers},
    {path:'/about', component: About},
    {path:'/add', component: Add},
    {path:'/customer/:id', component: CustomerDetails},
    {path:'/edit/:id', component: Edit},
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
       <nav class="navbar navbar-default">
       <div class="container">
           <div class="navbar-header">
             <a class="navbar-brand" href="#">vCustomers</a>
             <button class="navbar-toggler collapse" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button>
           </div>
           <div class="collapse navbar-collapse" id="navbar">
             <ul class="nav navbar-nav">
               <li> <router-link to="/">Home</router-link></li>
               <li> <router-link to="/about">About</router-link></li>
             </ul>
             <ul class="nav navbar-nav navbar-right">
               <li> <router-link to="/add">Add Customer</router-link></li>
             </ul>
           </div>
         </div>
       </nav>
       <router-view></router-view>
    </div>
    `
}).$mount('#app')
