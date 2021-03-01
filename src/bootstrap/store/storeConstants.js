export const modules_names = {
	  general_module: 'general',
	  auth_module: 'auth',
	  orders_module: 'orders'
}

export const mutations = {
	  general: {
		    TOGGLE_LOADER: 'TOGGLE_LOADER'
	  },
	  auth: {
		    SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN',
		    SET_REFRESH_TOKEN: 'SET_REFRESH_TOKEN'
	  },
	  orders: {
	  	  SET_DATA: 'SET_DATA'
	  }
}

export const actions = {
	  auth: {
		    logIn: 'logIn',
		    saveTokens: 'saveTokens',
		    loadTokens: 'loadTokens'
	  },
	  orders: {
	  	  obtainData: 'obtainData'
	  }
}

export const getters = {
	  orders: {
	  	  current_page_orders: 'current_page_orders',
	  }
}
