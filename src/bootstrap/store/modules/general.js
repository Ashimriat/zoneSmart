import { mutations } from "../actionsMutationsGetters"
import { log } from "../../../utils"


const { TOGGLE_LOADER } = mutations.general

export default {
	  state: () => ({
		    isLoading: false
	  }),
		mutations: {
	      [TOGGLE_LOADER](state) {
	      	  log(`Осуществляем переключение лоадера, новое состояние показа: [${!state.isLoading}]`);
	      	  state.isLoading = !state.isLoading
	      }
		}
}
