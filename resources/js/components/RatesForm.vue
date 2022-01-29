<template>
  <div ref="rates_container">
    <form @submit="onSubmit" class="my-3" ref="input_rates" id="rates_form">
      <div class="row mb-2">
        <div class="form-group col">
          <label for="name">Name</label>
          <input type="text" class="form-control" v-model="rates_input.name" id="name" placeholder="Name">
        </div>
      </div>
      <div class="row mb-2">
        <div class="form-group col-md-5">
          <label for="address1">Address 1</label>
          <input type="text" class="form-control" v-model="rates_input.address1" id="address1" placeholder="Address 1">
        </div>
        <div class="form-group col-md-5">
          <label for="address2">Address 2</label>
          <input type="text" class="form-control" v-model="rates_input.address2" id="address2" placeholder="Address 2">
        </div>
        <div class="form-group col-md-2">
          <label for="region_code">Region</label>
          <select class="form-control" v-model="rates_input.region_code" id="region_code" name="region_code">
            <option value="BC">BC</option>
            <option value="ON">ON</option>
          </select>
        </div>
      </div>
      <div class="row mb-2">
        <div class="form-group col-md-3">
          <label for="city">City</label>
          <input type="text" class="form-control" v-model="rates_input.city" id="city" placeholder="City">
        </div>
        <div class="form-group col-md-3">
          <label for="province_code">Province</label>
          <input type="text" class="form-control" v-model="rates_input.province_code" id="province_code" placeholder="Province">
        </div>
        <div class="form-group col-md-3">
          <label for="postal_code">Postal Code</label>
          <input type="text" class="form-control" v-model="rates_input.postal_code" id="postal_code" placeholder="Postal Code">
        </div>
        <div class="form-group col-md-3">
          <label for="country_code">Country</label>
          <input type="text" class="form-control" v-model="rates_input.country_code" id="country_code" placeholder="Country">
        </div>
      </div>
      <div class="row mb-2">
        <div class="form-group col-md-2">
          <label for="weight">Weight</label>
          <input type="text" class="form-control" v-model="rates_input.weight" id="weight" placeholder="Weight">
        </div>
        <div class="form-group col-md-2">
          <label for="weight_unit">Unit</label>
          <select class="form-control" v-model="rates_input.weight_unit" id="weight_unit">
            <option value="lbs">lbs</option>
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="oz">oz</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="length">Length</label>
          <input type="text" class="form-control" v-model="rates_input.length" id="length" name="length" placeholder="Length">
        </div>
        <div class="form-group col-md-2">
          <label for="width">Width</label>
          <input type="text" class="form-control" v-model="rates_input.width" id="width" name="width" placeholder="Width">
        </div>
        <div class="form-group col-md-2">
          <label for="height">Height</label>
          <input type="text" class="form-control" v-model="rates_input.height" id="height" name="height" placeholder="Height">
        </div>
        <div class="form-group col-md-2">
          <label for="size_unit">Unit</label>
          <select class="form-control" v-model="rates_input.size_unit" id="size_unit" name="size_unit">
            <option value="cm">cm</option>
            <option value="in">in</option>
          </select>
        </div>
      </div>
      <div class="row mb-2">
        <div class="form-group col-md-8">
          <label for="package_contents">Package Contents</label>
          <input type="text" class="form-control" v-model="rates_input.package_contents" id="package_contents" placeholder="Package Contents">
        </div>

        <div class="form-group col-md-4">
          <label for="value">Value</label>
          <input type="text" class="form-control" v-model="rates_input.value" id="value" name="value" placeholder="Value">
        </div>
      </div>
      <div class="row mb-2">
        <div class="form-group col-md-3">
          <label for="currency">Currency</label>
          <select class="form-control" v-model="rates_input.currency" id="currency" name="currency">
            <option value="CAD">CAD</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="package_type">Package Type</label>
          <select class="form-control" v-model="rates_input.package_type" id="package_type" name="package_type">
            <option value="parcel">parcel</option>
            <option value="legal_flat_rate_envelope">legal_flat_rate_envelope</option>
            <option value="flat_rate_padded_envelope">flat_rate_padded_envelope</option>
            <option value="small_flat_rate_box">small_flat_rate_box</option>
            <option value="medium_flat_rate_box_1">medium_flat_rate_box_1</option>
            <option value="medium_flat_rate_box_2">medium_flat_rate_box_2</option>
            <option value="large_flat_rate_box">large_flat_rate_box</option>
            <option value="regional_rate_box_a1">regional_rate_box_a1</option>
            <option value="regional_rate_box_a2">regional_rate_box_a2</option>
            <option value="regional_rate_box_b1">regional_rate_box_b1</option>
            <option value="regional_rate_box_b2">regional_rate_box_b2</option>
            <option value="letter">letter</option>
            <option value="large_envelope_or_flat">large_envelope_or_flat</option>
            <option value="thick_envelope">thick_envelope</option>
          </select>
        </div>
      </div>

      <div class="row mb-2">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" v-model="rates_input.signature_confirmation" class="custom-control-input" id="signature_confirmation">
        <label class="custom-control-label" for="signature_confirmation">Signature Confirmation</label>
      </div>
      </div>
      <div class="row mb-2">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" v-model="rates_input.purchase_label" class="custom-control-input" id="purchase_label">
        <label class="custom-control-label" for="purchase_label">Purchase Label</label>
      </div>
      </div>
      <div class="row mb-3">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" v-model="rates_input.insured" class="custom-control-input" id="insured">
        <label class="custom-control-label" for="insured">Insured</label>
      </div>
      </div>

      <input type="submit" class="btn btn-primary" value="Get Rates" />
      <input type="button" @click="clearForm()" class="btn btn-danger" value="Cancel" />
    </form>
    <table class="table" id="rates_table" ref="show_rates">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Postage Type</th>
          <th scope="col">Package Type</th>
          <th scope="col">Total Rate</th>
          <th scope="col">Delivery Days</th>
          <th scope="col">Addons</th>
          <th scope="col">Return Address</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(rate, index) in rates"
          :key="index"
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ rate.postage_type }}</td>
          <td>{{ rate.package_type }}</td>
          <td>{{ rate.rate + " + " + rate.tax }} <br /> <b>{{ rate.total + " " + rate.currency }}</b></td>
          <td>{{ rate.delivery_days }}</td>
          <td>
            <div
              v-for="(add_on, index) in rate.add_ons"
              :key="index"
            >
              <div>
                <h6>{{ add_on.name }}</h6>
                <p>{{ add_on.type }}</p>
                <p>{{ add_on.cost + " " + add_on.currency }}</p>
              </div>
              <hr />
            </div>
          </td>
          <td>
            <div>
              <h6>{{ rate.return_address.name }}</h6>
              <p>{{ rate.return_address.address1 + " " + rate.return_address.address2 }}</p>
              <p>{{ rate.return_address.city + ", " + rate.return_address.postal_code }}</p>
              <p>{{ rate.return_address.province_code + ", " + rate.return_address.country_code }}</p>
              <p>{{ "Contact: " + rate.return_address.phone }}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

function initialState (){
  return {
    rates_input: {
      "name": "",
      "address1": "",
      "address2": "",
      "city": "",
      "province_code": "",
      "postal_code": "",
      "country_code": "",
      "weight_unit": "lbs",
      "weight": 0,
      "length": 0,
      "width": 0,
      "height": 0,
      "size_unit": "cm",
      "package_contents": "",
      "value": 0,
      "currency": "CAD",
      "package_type": "",
      "signature_confirmation": true,
      "purchase_label": true,
      "insured": true,
      "region": "BC"
    },
    rates: []
  }
}

export default {
  name: "RatesForm",
  data() {
    return initialState()
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      axios.post(
        '/api/rates',
        { ...this.rates_input }
      )
        .then(response => {
          console.log(response.data);
          if(response.data.success) {
            this.rates = response.data.rates;
          }
        })
        .catch(err => console.log(err));
    },
    clearForm() {
      Object.assign(this.$data, initialState());
    },
  },
};
</script>
