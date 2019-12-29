<template>
    <div id="home">
        <el-table stripe :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="商品" width="180">
            </el-table-column>
            <el-table-column prop="price" label="单价">
            </el-table-column>
            <el-table-column prop="toCar" label="加入购物车">
                <template slot-scope="scope">
                    <el-button type="success" @click="toCar(scope.row)" plain>加入购物车</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                        name: '苹果',
                        price: 5,
                        counts: 1,
                        toCar: true
                    },
                    {
                        name: '葡萄',
                        counts: 1,
                        price: 10,
                        toCar: true
                    },
                    {
                        name: '西瓜',
                        counts: 1,
                        price: 40,
                        toCar: true
                    },
                    {
                        name: '西瓜',
                        counts: 1,
                        price: 20,
                        toCar: true
                    },
                ]
            }
        },
        methods: {
            toCar(scope) {
                if (this.$store.state.shops.length > 0) {
                    let flag = true
                    this.$store.state.shops.forEach(item => {
                        if (item.name == scope.name) {
                            flag = false
                        }
                    })
                    if (flag) {
                        this.$store.commit('getShops', scope)
                        this.$store.commit('getNums')

                    }
                } else {
                    this.$store.commit('getShops', scope)
                    this.$store.commit('getNums')

                }

            },
            handleChange(counts) {
                counts.total = counts.counts * counts.price
            }
        }

    }
</script>

<style lang="less" scoped>

</style>