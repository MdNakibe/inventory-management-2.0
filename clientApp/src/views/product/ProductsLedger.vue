<template>
    <main>
        <div class="mb-5 text-2xl text-slate-700 font-bold">Products Ledger</div>
        <div
            class="grid justify-between grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-28 items-end bg-white p-5 rounded-lg shadow">
            <div class="grid w-full gap-2 col-span-1">
                <label for="">Product Ledger</label>
                <model-list-select :list="$store.getters['product/stockProducts']"
                                    option-value="id" 
                                    option-text="product_name"
                                    placeholder="Select a product"
                                    v-model="product"
                                     />
            </div>

            <div class="flex items-end gap-5 col-span-2">
                <div class="grid w-full gap-2">
                    <label for="">Date From </label>
                    <input type="date"  v-model="productinfo.dateFrom" class="" autofocus="true">
                </div>
                <div class="grid w-full gap-2">
                    <label for="">Date To</label>
                    <input type="date" class="" v-model="productinfo.curent_date" autofocus="true">
                </div>
                <Button @click="getProductLedger" class="min-w-[150px]">Search</Button>
            </div>

            <div class="grid col-span-1">
                <Button class="bg-orange-500">Print</Button>
            </div>
        </div>


        <div class="bg-white mt-5 rounded-lg p-5">
            <table class="w-full">
                <tr>
                    <vth>Date</vth>
                    <vth>Particulars</vth>
                    <vth>Stock In</vth>
                    <vth>Stock Out</vth>
                    <vth>Balance Stock</vth>
                </tr>
                <tr class="full hover:bg-slate-100 group">
                    <vtd class="text-center"></vtd>
                    <vth colspan="3" class="bg-white group-hover:bg-slate-100 text-left">Opening Balance</vth>
                    <vtd class="text-center">{{ $store.getters['product/openingStock'] }}</vtd>
                </tr>
                <tr v-for="(product, ind) in $store.getters['product/ledgers']" :key="ind" class="hover:bg-slate-100">
                <vtd class="text-center">{{ product.created_at }}</vtd>
                    <vtd>{{ product.invoice }} * {{ product.name }}</vtd>
                    <vtd class="text-center">{{ product.stock_in }}</vtd>
                    <vtd class="text-center">{{ product.stock_out }}</vtd>
                    <vtd class="text-center">{{ product.stock }}</vtd>
                </tr>
                <!-- <tr class="full hover:bg-slate-100 group">
                    <vtd class="text-center">31-10-2023</vtd>
                    <vth colspan="3" class="bg-white group-hover:bg-slate-100 text-left">Closing Balance </vth>
                    <vtd class="text-right">1,273</vtd>
                </tr> -->
            </table>
        </div>
    </main>
</template>

<script>
import Button from '@/components/global/Button.vue';
export default{
    components:{
        Button
    },
    data: () => ({
    product:{},
    productinfo: {
        productId: '',
        product_name: '',
        dateFrom: '',
        curent_date: '',
    },
    loading: false,
    show: false,
}),

    watch: {
        product(product) {
            if(product == undefined) return;
            this.productinfo.productId = product.id;
            this.productinfo.product_name = product.product_name;
            this.getProductLedger();
        },
    },
    async created() {
        await this.$store.dispatch('product/stockProducts');
    },
methods: {
    async getProductLedger() {
            if(this.product.id == null) {
                this.$store.dispatch("notification/error", "Select a product");
                return;
            }
            const nextDay = new Date(this.productinfo.curent_date);
            nextDay.setDate(nextDay.getDate() + 1);
            let filter = {
                productId: this.productinfo.productId, 
                dateTo: nextDay,
                dateFrom: this.productinfo.dateFrom, 
            }
            await this.$store.dispatch('product/getProductLedger', filter)
        },
    }
}

</script>