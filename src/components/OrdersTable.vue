<template lang="pug">
    .OrdersTable
</template>

<script>
    import { mapGetters } from "vuex"
    import { getters } from "../bootstrap/store/storeConstants";


    const { orders: current_page_orders } = getters

    export default {
		    name: "OrdersTable",
        getters: {
		    	  ...mapGetters({ orders: current_page_orders })
        }
	  }
</script>

<style lang="sass">
    .OrdersTable
</style>
