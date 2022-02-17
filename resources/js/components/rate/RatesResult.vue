<!-- <template>
    <el-table
            :data="tableData"
            stripe
            style="width: 100%">
        <el-table-column
            prop="postage_type"
            label="Postage Type"
            width="180">
        </el-table-column>
        <el-table-column
            prop="package_type"
            label="Package Type"
            width="180">
        </el-table-column>
        <el-table-column
            prop="total"
            label="Total Rate">
        </el-table-column>
        <el-table-column
            prop="return_address"
            label="Return Address">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.address1 }}</span>
            </template>
        </el-table-column>
    </el-table>
</template> -->

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      label="Postage Type"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.postage_type }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Package Type"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.package_type }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Rate"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.rate}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Tax"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.tax}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Total Rate"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.total + scope.row.currency}}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      label="return_address"
      width='250'
      >
    <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.return_address.address1}}</span>
        <br>
        <span style="margin-left: 10px">{{ scope.row.return_address.address2}}</span>
        <br>
        <span style="margin-left: 10px">{{ scope.row.return_address.city}}</span>
        <span style="margin-left: 10px">{{ scope.row.return_address.province_code}}</span>
        <span style="margin-left: 10px">{{ scope.row.return_address.postal_code}}</span>
        <br>
        <span style="margin-left: 10px">{{ scope.row.return_address.country_code}}</span>
        <br>
        <span style="margin-left: 10px">{{ 'Phone: ' + scope.row.return_address.phone}}</span>
    </template>
    </el-table-column>

  </el-table>
</template>

<script>
export default {
    name:"RatesResult",
    props:['rates'],
    data () {
        return {
            tableData:this.rates
        }
    },
    watch: {
        rates: {
            handler(value) {
                this.tableData = value
                console.log(this.tableData)
            }
        }
    }
    
}
</script>

<style scoped>
    /*header*/
    
    .todo-header {
        margin-bottom: 20px;
    }

    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header textarea {
        width: 560px;
        height: 100px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>