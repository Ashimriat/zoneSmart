import Vuex from "vuex"
import { modules_names } from "./storeConstants"
import auth from "./modules/auth"


const { auth_module, general_module } = modules_names

export default new Vuex({
    modules: {
    	  [auth_module]: auth
    }
})
