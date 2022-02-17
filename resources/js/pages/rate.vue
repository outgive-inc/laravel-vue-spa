<template>
    <div id="root">
        <el-form ref="form"  :model="ratesForm"  :rules="rules" label-width="80px" label-position="top" >
            <el-form-item label="Name" prop='name'>
                    <el-col :span='10'>
                        <el-input v-model="ratesForm.name"></el-input>
                    </el-col>
            </el-form-item>
            <el-form-item label="Address:" prop='address'>
                <el-row :gutter='10'>
                    <el-col :span='5'>
                        <el-form-item label="Line 1" prop='address1'>
                            <el-input v-model="ratesForm.address1" placeholder="Line 1"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span='5'>
                        <el-form-item label="Line 2" prop='address2'>
                                <el-input v-model="ratesForm.address2" placeholder="Line 2"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span='5'>
                        <el-form-item label="City" prop='city'>
                            <el-input v-model="ratesForm.city"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form-item>
            
            <el-form-item>
                <el-row :gutter="10">
                    <el-col :span='5'>
                        <el-form-item label="Province Code" prop='province_code'> 
                            <el-input v-model="ratesForm.province_code"></el-input>  
                        </el-form-item>
                    </el-col>
                    <el-col :span='5'>
                        <el-form-item label="Postal Code" prop='postal_code'>
                            <el-input v-model="ratesForm.postal_code"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span='5'>
                        <el-form-item label="Country Code" prop='country_code'>
                            <el-input v-model="ratesForm.country_code"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="Weight:">
                <el-row :gutter="10">
                    <el-col :span='5'>
                        <el-form-item label="Value" prop='weight'> 
                            <el-input v-model="ratesForm.weight"></el-input>  
                        </el-form-item>
                    </el-col>
                    <el-col :span='2'>
                        <el-form-item label="Unit" prop='weight_unit'> 
                            <el-select v-model="ratesForm.weight_unit" placeholder="Please choose a Unit">
                                <el-option
                                    v-for="item in weightUnit"
                                    :key="item"
                                    :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="Package Size:">
                <el-row :gutter="10">
                    <el-col :span='2'>
                        <el-form-item label="Length" prop='length'> 
                            <el-input v-model="ratesForm.length"></el-input>  
                        </el-form-item>
                    </el-col>
                    <el-col :span='2'>
                        <el-form-item label=" Width" prop='width'>
                            <el-input v-model="ratesForm.width"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span='2'>
                        <el-form-item label="Height" prop='height'>
                            <el-input v-model="ratesForm.height"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span='2'>
                        <el-form-item label="Unit" prop='size_unit'> 
                            <el-select v-model="ratesForm.size_unit" placeholder="Please choose a Unit">
                                <el-option
                                    v-for="item in sizeUnit"
                                    :key="item"
                                    :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-row :gutter="10">
                    <el-col :span='5'>
                        <el-form-item label="Package Contents" prop='package_contents'>
                            <el-input v-model="ratesForm.package_contents"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span='2'>
                        <el-form-item label="value" prop='value'> 
                            <el-input v-model="ratesForm.value"></el-input>  
                        </el-form-item>
                    </el-col>
                    <el-col :span='2'>
                        <el-form-item label="currency" prop='currency'>
                            <el-select v-model="ratesForm.currency" placeholder="Please choose a currency">
                                <el-option
                                    v-for="item in currency"
                                    :key="item"
                                    :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-row :gutter="10">
                    <el-col :span='5'>
                        <el-form-item label="Package Type" prop='package_type'>
                            <el-select v-model="ratesForm.package_type" placeholder="Please choose a package_type">
                                <el-option
                                    v-for="item in packageType"
                                    :key="item"
                                    :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span='2'>
                        <el-form-item label="Region" prop='region'> 
                            <el-input v-model="ratesForm.region"></el-input>  
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="ratesForm.signature_confirmation" border>Signature Confirmation</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="ratesForm.purchase_label" border>Purchase Label</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="ratesForm.insured" border>Insured</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" v-on:click="getRates">Get Rates</el-button>
                <el-button v-on:click="clearForm">Cancel</el-button>
            </el-form-item>
        </el-form>
        <div class="rates-container">
            Rates
            <RatesResult :rates="rates"/>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import RatesResult from '../components/rate/RatesResult.vue'

export default {
  middleware: 'auth',

  metaInfo () {
    return { title: this.$t('rate') }
  },
  name:'Rate',
  components:{RatesResult},
  data() {
    return {
        // rates:JSON.parse(localStorage.getItem('notes')) || []
        ratesForm: {
            "name": "",
            "address1": "",
            "address2": "",
            "city": "",
            "province_code": "",
            "postal_code": "",
            "country_code": "",
            "weight_unit": "",
            "weight": undefined,
            "length": undefined,
            "width": undefined,
            "height": undefined,
            "size_unit": "",
            "package_contents": "",
            "value": undefined,
            "currency": "",
            "package_type": "",
            "signature_confirmation": false,
            "purchase_label": false,
            "insured": false,
            "region": ""
        },
        rules: {
          name: [
            { required: true, message: 'Please input name', trigger: 'blur' },
          ],
          address1: [
            { required: true, message: 'Please input address line 1', trigger: 'change' }
          ],
          city: [
            { required: true, message: 'Please input city', trigger: 'change' }
          ],
          province_code: [
            { required: true, message: 'Please input Province Code', trigger: 'change' }
          ],
          postal_code: [
            { required: true, message: 'Please input Postal Code', trigger: 'change' }
          ],
          country_code: [
            { required: true, message: 'Please input Contry Code', trigger: 'change' }
          ],
          weight_unit: [
            { required: true, message: 'Please choose a weight Unit', trigger: 'change' }
          ],
          weight: [
            { required: true, message: 'Please input weight value', trigger: 'change' }
          ],
          size_unit: [
            { required: true, message: 'Please choose a Size Unit', trigger: 'change' }
          ],
          package_contents: [
            { required: true, message: 'Please ipnut Package Contents', trigger: 'change' }
          ],
          value: [
            { required: true, message: 'Please ipnut Package Contents', trigger: 'change' }
          ],
          currency: [
            { required: true, message: 'Please ipnut Package Contents', trigger: 'change' }
          ],
          package_type: [
            { required: true, message: 'Please choose a Package Type', trigger: 'change' }
          ],
        },
        weightUnit: [ 'lbs', 'kg', 'g', 'oz' ],
        sizeUnit:[ 'cm', 'in' ],
        currency:[ 'CAD', 'USD' ],
        packageType: [ 'parcel', 
            'legal_flat_rate_envelope', 
            'flat_rate_padded_envelope', 
            'small_flat_rate_box', 
            'medium_flat_rate_box_1', 
            'medium_flat_rate_box_2', 
            'large_flat_rate_box', 
            'regional_rate_box_a1', 
            'regional_rate_box_a2', 
            'regional_rate_box_b1', 
            'regional_rate_box_b2', 
            'letter', 
            'large_envelope_or_flat', 
            'thick_envelope' 
        ],
        regions:['BC', 'ON'],
        rates:[],
    }
  },
  methods:{
    // method to add a note
    getRates() {
    //   console.log(this.ratesForm)
        const token = 'YDchLhos8bDsSrdCn23jmjya08azjdaJ56Shu6tywNjb7ATFwRr8Zm8viM7S';
        axios.post(
            "https://ship.stallionexpress.ca/api/v3/rates",
            {...this.ratesForm},
            { 
                headers: { 
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json' 
                },  
            },
        )
        .then( response => {
            // console.log(response.data)
            //GET the rates array from api
            this.rates = response.data.rates
            // console.log(this.rates)
        })
        .catch( err => {
            console.log(err)
        })
    },
    clearForm() {
      this.ratesForm = {
            "name": "",
            "address1": "",
            "address2": "",
            "city": "",
            "province_code": "",
            "postal_code": "",
            "country_code": "",
            "weight_unit": "",
            "weight": undefined,
            "length": undefined,
            "width": undefined,
            "height": undefined,
            "size_unit": "",
            "package_contents": "",
            "value": undefined,
            "currency": "",
            "package_type": "",
            "signature_confirmation": false,
            "purchase_label": false,
            "insured": false,
            "region": ""
        }
    },
  },
}
</script>

