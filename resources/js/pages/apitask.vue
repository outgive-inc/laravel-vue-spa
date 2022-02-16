<template>
  <div class="row-cols-auto">
    <h3>Fetching API Task 2</h3>
    <h4>Checkout rates in Stallion Express</h4>
    <div class="user-form" style="padding: 10px">
      <form @submit.prevent="getData" method="post">
      <input
        type="text"
        name="name"
        v-model="name"
        placeholder="Enter Name"
        required
      />
      <input
        type="text"
        name="address1"
        v-model="address1"
        placeholder="Enter Address1"
        required
      />
      <input
        type="text"
        name="city"
        v-model="city"
        placeholder="Enter City"
        required
      />
      <input
        type="text"
        name="province_code"
        v-model="province_code"
        placeholder="Enter Provice Code"
        required
      />
      <input
        type="text"
        name="postal_code"
        v-model="postal_code"
        placeholder="Enter Postal Code"
        required
      />
      <input
        type="text"
        name="country_code"
        v-model="country_code"
        placeholder="Enter Country Code"
        required
      />
      <input
        type="text"
        name="weight_unit"
        v-model="weight_unit"
        placeholder="Enter Weight Unit"
        required
      />
      <input
        type="text"
        name="weight"
        v-model="weight"
        placeholder="Enter Weight"
        required
      />
      <input
        type="text"
        name="length"
        v-model="length"
        placeholder="Enter Length"
        required
      />
      <input
        type="text"
        name="width"
        v-model="width"
        placeholder="Enter Width"
        required
      />
      <input
        type="text"
        name="height"
        v-model="height"
        placeholder="Enter Height"
        required
      />
      <input
        type="text"
        name="size_unit"
        v-model="size_unit"
        placeholder="Enter Size Unit"
        required
      />
      <input
        type="text"
        name="package_contents"
        v-model="package_contents"
        placeholder="Enter Package Contents"
        required
      />
      <input
        type="text"
        name="value"
        v-model="value"
        placeholder="Enter Value"
        required
      />
      <input
        type="text"
        name="currency"
        v-model="currency"
        placeholder="Enter Currency"
        required
      />
      <input
        type="text"
        name="package_type"
        v-model="package_type"
        placeholder="Enter Package Type"
        required
      />
      <input
        type="text"
        name="signature_confirmation"
        v-model="signature_confirmation"
        placeholder="Enter Signature Confirmation"
        required
      />
      <input
        type="text"
        name="purchase_label"
        v-model="purchase_label"
        placeholder="Enter Purchase Label"
        required
      />
      <input
        type="text"
        name="insured"
        v-model="insured"
        placeholder="Enter Insured or Not"
        required
      />

      <input
        type="text"
        name="region"
        v-model="region"
        placeholder="Enter Region"
        required
      />
      <br />
      <input type="submit" name="submit" class="btn-primary" value="Search"/>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Button from "../components/Button.vue";
  let headers = {
  "Authorization": `${process.env.MIX_VUE_BEARER_TOKEN}`
};
export default {
  components: { Button },


  data:function() {
    return {
        results: [],
        name: "",
      address1: "",
      city: "",
      province_code: "",
      postal_code: "",
      country_code: "",
      weight_unit: "",
      weight: "",
      length: "",
      width: "",
      height: "",
      size_unit: "",
      package_contents: "",
      value: "",
      currency: "",
      package_type: "",
      signature_confirmation: "",
      purchase_label: "",
      insured: "",
      region:"",
    };
  },
  methods: {

     getData() {


        let result =  axios.post('https://sandbox.stallionexpress.ca/api/v3/rates?',{
        headers,
        name: this.name,
        address1: this.address1,
        city: this.city,
        province_code: this.province_code,
        postal_code: this.postal_code,
        country_code:this.country_code,
        weight_unit:this.weight_unit,
        weight:this.weight,
        length:this.length,
        width:this.width,
        height:this.height,
        size_unit:this.size_unit,
        package_content:this.package_contents,
        value:this.value,
        currency:this.currency,
        package_type:this.package_type,
        signature_confirmation:this.signature_confirmation,
        purchase_label:this.purchase_label,
        insured:this.insured,
        region:this.region,
        },
      ).then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })

    }
  }
};
</script>
<style>
input[type="text"] {
  border-radius: 10px 20px;
  border: none;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
input[type="button"] {
  width: 200px;
  border-radius: 20px;
  margin: 10px;
}
</style>
