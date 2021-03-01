import axios from "axios"


class Api {
		#instance
    #paths = {
		    auth: '/auth/jwt/create/',
	      refresh: '/auth/jwt/refresh/',
	      order: '/zonesmart/order/'
    }
    
    setup() {
    	  if (!this.#instance) {
		        this.#instance = axios.create({
			          baseURL: 'https://zonesmart.su/api/v1',
			          timeout: 1000
		        })
	      }
    }
    
    async getAuthTokens(email, password) {
    	  return await this.#instance.post(this.#paths.auth, { email, password })
    }
    
    async refreshAccessToken(refresh) {
    	  const data = await this.#instance.post(this.#paths.refresh, { refresh })
	      console.log(data)
    }
    
    async getOrders({ limit, offset, search }, token) {
        return await this.#instance.get(
        	  this.#paths.order,
	          { limit, offset, search },
	          { authorization: `JWT ${token}` }
        )
    }
}

export default new Api()
