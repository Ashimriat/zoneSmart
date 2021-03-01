import VueRouter from "vue-router"
import Login from "../components/Login";
import OrdersTable from "../components/OrdersTable";


const routes = [
	  {
	  	  path: '/auth',
		    name: 'auth',
	      component: Login
	  },
	  {
	  	  path: '/orders',
		    name: 'orders',
	      component: OrdersTable
	  }
]

export default new VueRouter({ routes })
