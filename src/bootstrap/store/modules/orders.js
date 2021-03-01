import { mutations, actions, getters, modules_names } from "../storeConstants"
import api from "../../../services/api"


const { orders: { obtainData } } = actions
const {
	  orders: { SET_DATA },
	  general: { TOGGLE_LOADER }
} = mutations
const { auth_module, general_module } = modules_names
const { current_page_orders } = getters


export default {
	  namespaced: true,
	  state: () => ({
		    orders: [],
		    current_page: 0
	  }),
	  mutations: {
	      [SET_DATA](state, data) {
	      	  // order_id, items, create_date, status, is_paid, is_shipped, buyer, shipping_method, total_price
	      	  state.orders = data
	      }
	  },
	  actions: {
	  	  async [obtainData]({ commit, dispatch, rootState }, options) {
	  	  	  let data
			      commit(`${general_module}/${TOGGLE_LOADER}`, null, { root: true })
	  	  	  try {
	  	  	  	  data = await api.getOrders(options, rootState[auth_module].access_token)
			      } catch (e) {
				        await api.refreshAccessToken(rootState[auth_module].refresh_token)
				        data = await api.getOrders(options, rootState[auth_module].access_token)
			      } finally {
				        commit(SET_DATA, data)
				        commit(`${general_module}/${TOGGLE_LOADER}`, null, { root: true })
			      }
		    }
	  },
	  getters: {
	  	  [current_page_orders](state) {
	  	  	  // TODO: написать геттер
	  	  	  return []
		    },
	  }
}
