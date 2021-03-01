import { actions, mutations, modules_names } from "../storeConstants"
import { log } from "../../../utils"
import api from "../../../services/api"


const {
	auth: { SET_ACCESS_TOKEN, SET_REFRESH_TOKEN },
	general: { TOGGLE_LOADER }
} = mutations
const { logIn, saveTokens, loadTokens } = actions.auth
const { general_module } = modules_names
const storage_keys = {
	  access_token: 'zoneSmartAccessToken',
	  refresh_token: 'zoneSmartRefreshToken'
}

export default {
	  namespaced: true,
	  state: () => ({
		    access_token: null,
		    refresh_token: null
	  }),
  	mutations: {
	    	[SET_ACCESS_TOKEN](state, token) {
	    		  state.access_token = token
		    },
		    [SET_REFRESH_TOKEN](state, token) {
	    		  state.refresh_token = token
		    }
	  },
	  actions: {
	  	  [saveTokens](context, tokens) {
			      log('Записываем токены в хранилище')
			      localStorage.setItem(storage_keys.access_token, tokens.access_token)
			      localStorage.setItem(storage_keys.refresh_token, tokens.refresh_token)
			      log('Токены записаны')
		    },
		    async [logIn]({ commit, dispatch }, { email, password }) {
			      commit(`${general_module}/${TOGGLE_LOADER}`, null, { root: true })
			      log('Запрашиваем токены для пользователя')
			      try {
				        const tokens = await api.getAuthTokens(email, password)
				        log('Получен набор токенов')
				        log(tokens)
				        dispatch(saveTokens, tokens)
			      } catch (e) {
				        log(`Ошибка при получении токенов: [${e.message}]`)
			      } finally {
				        commit(`${general_module}/${TOGGLE_LOADER}`, null, { root: true })
			      }
		    	  
		    },
		    [loadTokens]({ commit }) {
  			    log('Загружаем токены из хранилища')
	  		    const access_token = localStorage.getItem(storage_keys.access_token)
			      const refresh_token = localStorage.getItem(storage_keys.refresh_token)
			      commit(SET_ACCESS_TOKEN, access_token)
	          commit(SET_REFRESH_TOKEN, refresh_token)
			      // TODO: если токены загружены - редирект на страницу таблицы, иначе - на модалку
			      commit(`${general_module}/${TOGGLE_LOADER}`, null, { root: true })
		    }
	  }
}
