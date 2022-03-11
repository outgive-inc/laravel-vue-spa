<template>
    <section class="mb-5 col-lg-10 m-auto">
        <div class="card mt-4">
          <h5 class="card-header">Shipping Rates</h5>
        </div>

        <div class="container"> 
            <div class="row"> 
                <div class="col">
                    <!-- Rates form -->
                    <form class="row g-3 mt-4" @submit.prevent="getRates">
                        <div class="col-12">
                            <label for="name" class="form-label">Name</label>
                            <input v-model="rates.name" type="text" class="form-control" id="name">
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input v-model="rates.address1" type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input v-model="rates.address2" type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                        </div>
                        <!--  -->
                        <div class="col-md-3">
                            <label for="countryCode" class="form-label">Country Code</label>
                            <select v-model="rates.country_code" id="countryCode" class="form-select">
                                <option value="US">US</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="inputCity" class="form-label">City</label>
                            <input v-model="rates.city" type="text" class="form-control" id="inputCity">
                        </div>
                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Province Code</label>
                            <select v-model="rates.province_code" id="inputState" class="form-select">
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="postalCode" class="form-label">Postal Code</label>
                            <input v-model="rates.postal_code" type="text" class="form-control" id="postalCode">
                        </div>

                        <!--  -->                       
                        <div class="col-md-4">
                            <label for="region" class="form-label">Region</label>
                            <select v-model="rates.region" id="region" class="form-select">
                                <option value="ON">ON</option>
                                <option value="BC">BC</option>
                            </select>
                        </div>

                        <div class="col-8">
                            <label for="packageContents" class="form-label">Package Contents</label>
                            <input v-model="rates.package_contents" type="text" class="form-control" id="packageContents" placeholder="Two pair of socks">
                        </div>
                        

                        
                        <!--  -->

                        <div class="col-md-4">
                            <label for="weight" class="form-label">Weight</label>
                            <input v-model="rates.weight" type="number" step="0.1" min="0" max="1000" class="form-control" id="weight">
                        </div>
                        <div class="col-md-4">
                            <label for="weight_unit" class="form-label">Weight Unit </label>
                            <select v-model="rates.weight_unit" id="weight_unit" class="form-select">
                                <option value="lbs">lbs</option>
                                <option value="oz">oz</option>
                                <option value="kg">kg</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label for="length" class="form-label">Length</label>
                            <input v-model="rates.length" type="number" min="0" max="1000" class="form-control" id="length">
                        </div>

                        <!--  -->
                        <div class="col-md-4">
                            <label for="value" class="form-label">Value</label>
                            <input v-model="rates.value" type="number" min="0" max="1000" class="form-control" id="value">
                        </div>
                        <div class="col-md-4">
                            <label for="currency" class="form-label">Currency</label>
                            <select v-model="rates.currency" id="currency" class="form-select">
                                <option value="CAD">CAD</option>
                            </select>
                        </div>

                        <div class="col-md-4">
                            <label for="package_type" class="form-label">Package Type</label>
                            <select v-model="rates.package_type" id="package_type" class="form-select">
                                <option value="Parcel">Parcel</option>
                            </select>
                        </div>

                        <!--  -->
                        <div class="col-md-4">
                            <label for="width" class="form-label">Width</label>
                            <input v-model="rates.width" type="number" min="0" max="1000" class="form-control" id="width">
                        </div>

                        <div class="col-md-4">
                            <label for="height" class="form-label">height</label>
                            <input v-model="rates.height" type="number" min="0" max="1000" class="form-control" id="height">
                        </div>

                        <div class="col-md-4">
                            <label for="size_unit" class="form-label">size Unit </label>
                            <select v-model="rates.size_unit" id="size_unit" class="form-select">
                                <option value="cm">cm</option>
                            </select>
                        </div>

                        <!--  -->
                        <div class="col-4">
                            <div class="form-check">
                                <input v-model="rates.insured" class="form-check-input" type="checkbox" id="insured">
                                <label class="form-check-label" for="insured">  Isured </label>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="form-check">
                                <input v-model="rates.signature_confirmation" class="form-check-input" type="checkbox" id="signature_confirmation">
                                <label class="form-check-label" for="signature_confirmation">  Signature Confirmation </label>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="form-check">
                                <input v-model="rates.purchase_label" class="form-check-input" type="checkbox" id="purchase_label">
                                <label class="form-check-label" for="purchase_label">  Purchase Label </label>
                            </div>
                        </div>
                        
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
            
        </div>



    </section>
</template>

<script>
export default {
    name: "rates",

    data(){
        return{
            rates:{
                name: "",
                address1: "",
                address2: "",
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
                signature_confirmation: true,
                purchase_label: true,
                insured: true,
                region: ""
            },

            formFilled: false
        }
    },
    
    methods:{
        getRates(){
            console.log(this.rates);

        }
    }
    
}
</script>