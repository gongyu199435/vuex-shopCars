<template>
    <div>
        <el-table stripe :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="商品" width="180">
            </el-table-column>
            <el-table-column prop="counts" label="数量">
                <template slot-scope="scope">
                    <el-input-number size="mini" v-model="scope.row.counts" :min="1" @change="changenums(scope.row)">
                    </el-input-number>
                </template>
            </el-table-column>
            <el-table-column prop="price" label="单价">
            </el-table-column>
            <el-table-column prop="counts" label="总价">
                <template slot-scope="scope">
                    <span>{{scope.row.counts | totals(scope.row)}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="danger" @click="delShop(scope.row)" plain>删除商品</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div>总计: {{totalPrice}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [],
            }
        },
        methods: {
            delShop(row) {
                this.$store.dispatch('asyncdelShops',row.name)
                // this.$store.commit('delshops', row.name)
            },
            changenums(row) {
                this.$store.commit('getNums', row)
            }
        },
        created() {
            this.tableData = this.$store.state.shops
		console.log(123)
        },
        filters: {
            totals(val, row) {
                return val *= row.price
            }
        },
        computed: {
            totalPrice() {
                let totalPrices = null;
                this.$store.state.shops.forEach(item => {
                    totalPrices += item.counts * item.price
                })
                return totalPrices
                window.localStorage.setItem('carshops', JSON.stringify())

            }
        }

    }
</script>

<style>

</style>