<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <h2>Get Shipment Rates</h2>
      <RatesForm />
    </div>
  </div>
</template>

<script>

import RatesForm from "../components/RatesForm.vue";
export default {
  middleware: 'auth',
  components: {
    RatesForm
  },
  metaInfo () {
    return { title: this.$t('get_shipment_rates') }
  }
}
</script>
