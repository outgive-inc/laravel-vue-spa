<template>
  <div>
    <form @submit="onSubmit" class="my-3">
      <div class="row mb-2">
        <div class="form-group col">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Name">
        </div>
      </div>
      <div class="row mb-2">
        <div class="form-group col-md-5">
          <label for="address1">Address 1</label>
          <input type="text" class="form-control" id="address1" placeholder="Address 1">
        </div>
        <div class="form-group col-md-5">
          <label for="address2">Address 2</label>
          <input type="text" class="form-control" id="address2" placeholder="Address 2">
        </div>
        <div class="form-group col-md-2">
          <label for="region_code">Region</label>
          <select class="form-control" id="region_code" name="region_code">
            <option value="BC">BC</option>
            <option value="ON">ON</option>
          </select>
        </div>
      </div>
      <div class="row mb-2">
        <div class="form-group col-md-3">
          <label for="city">City</label>
          <input type="text" class="form-control" id="city" placeholder="City">
        </div>
        <div class="form-group col-md-3">
          <label for="province_code">Province</label>
          <input type="text" class="form-control" id="province_code" placeholder="Province">
        </div>
        <div class="form-group col-md-3">
          <label for="postal_code">Postal Code</label>
          <input type="text" class="form-control" id="postal_code" placeholder="Postal Code">
        </div>
        <div class="form-group col-md-3">
          <label for="country_code">Country</label>
          <input type="text" class="form-control" id="country_code" placeholder="Country">
        </div>
      </div>
      <div class="row mb-2">
        <div class="form-group col-md-2">
          <label for="weight">Weight</label>
          <input type="text" class="form-control" id="weight" placeholder="Weight">
        </div>
        <div class="form-group col-md-2">
          <label for="weight_unit">Unit</label>
          <select class="form-control" id="weight_unit">
            <option value="lbs">lbs</option>
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="oz">oz</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="length">Length</label>
          <input type="text" class="form-control" id="length" name="length" placeholder="Length">
        </div>
        <div class="form-group col-md-2">
          <label for="width">Width</label>
          <input type="text" class="form-control" id="width" name="width" placeholder="Width">
        </div>
        <div class="form-group col-md-2">
          <label for="height">Height</label>
          <input type="text" class="form-control" id="height" name="height" placeholder="Height">
        </div>
        <div class="form-group col-md-2">
          <label for="size_unit">Unit</label>
          <select class="form-control" id="size_unit" name="size_unit">
            <option value="cm">cm</option>
            <option value="in">in</option>
          </select>
        </div>
      </div>
      <div class="row mb-2">
        <div class="form-group col-md-8">
          <label for="package_contents">Package Contents</label>
          <input type="text" class="form-control" id="package_contents" placeholder="Package Contents">
        </div>

        <div class="form-group col-md-4">
          <label for="value">Value</label>
          <input type="text" class="form-control" id="value" name="value" placeholder="Value">
        </div>
      </div>
      <div class="row mb-2">
        <div class="form-group col-md-3">
          <label for="currency">Currency</label>
          <select class="form-control" id="currency" name="currency">
            <option value="CAD">CAD</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="package_type">Package Type</label>
          <select class="form-control" id="package_type" name="package_type">
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
        <input type="checkbox" class="custom-control-input" id="signature_confirmation">
        <label class="custom-control-label" for="signature_confirmation">Signature Confirmation</label>
      </div>
      </div>
      <div class="row mb-2">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" class="custom-control-input" id="purchase_label">
        <label class="custom-control-label" for="purchase_label">Purchase Label</label>
      </div>
      </div>
      <div class="row mb-3">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" class="custom-control-input" id="insured">
        <label class="custom-control-label" for="insured">Insured</label>
      </div>
      </div>

      <input type="submit" class="btn btn-primary" value="Get Rates" />
      <input type="button" @click="clearForm()" class="btn btn-danger" value="Cancel" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RatesForm",
  data() {
    return {
      "name": "",
      "address1": "",
      "address2": "",
      "city": "",
      "province_code": "",
      "postal_code": "",
      "country_code": "",
      "weight_unit": "",
      "weight": 0,
      "length": 0,
      "width": 0,
      "height": 0,
      "size_unit": "",
      "package_contents": "",
      "value": 0,
      "currency": "",
      "package_type": "",
      "signature_confirmation": true,
      "purchase_label": true,
      "insured": true,
      "region": ""
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
    }
  },
};
</script>
