<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <h2>Get Shipment Rates</h2>
    </div>
  </div>
</template>

<script>

export default {
  middleware: 'auth',
  metaInfo () {
    return { title: this.$t('get_shipment_rates') }
  }
}
</script>
