<template>
    <main>
        <div class="flex justify-between items-center mb-5">
            <div class="text-2xl text-slate-700 dark:text-white font-bold">Return</div>
            <Button @click="goBack" type="button" class="flex items-center justify-center w-1/2 px-5 py-3 text-sm whitespace-nowrap text-gray-700 dark:text-white hover:text-white transition-colors duration-200 bg-white dark:bg-slate-600 border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-600">
                <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Go back</span>
            </Button>
        </div>
        <div class="flex flex-wrap justify-between items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div>
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Return Invoice</label>
                    <input type="text" class="min-w-[250px] dark:bg-slate-800" readonly v-model="saleData.invoice" autofocus="true" placeholder="Invoice Number">
                </div>
            </div>
            <div>
                <div class="flex items-end gap-5 dark:text-white">
                    <div class="grid w-full gap-2">
                        <label for="">Supplier Name</label>
                        <input type="text" readonly v-model="saleData.customer.name" class="min-w-[250px] dark:bg-slate-800" autofocus="true">
                    </div>
                    <div class="grid w-full gap-2">
                        <label for="">Total Return Amount</label>
                        <input type="number" readonly v-model="salereturn.total" class="min-w-[250px] dark:bg-slate-800" autofocus="true">
                    </div>
                </div>
            </div>
            <div>
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Return Reason</label>
                    <textarea name="" v-model="salereturn.note" id="" cols="50" rows="1" class=" dark:bg-slate-800">{{ salereturn.note }}</textarea>
                </div>
            </div>
        </div>

        <div class="bg-white dark:bg-slate-700 dark:text-white mt-5 rounded-lg p-5">
            <DataView :value="cart" dataKey="id"
    :paginator="cart.length>10 ? true : false" :rows="10" :filters="filters"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
            <template #list="slotProps">
            <table class="w-full dark:bg-slate-700 dark:text-white">
                <tr>
                    <!-- <vth>check</vth> -->
                    <vth>SL</vth>
                    <vth>Product Name</vth>
                    <vth>Returnable Qty</vth>
                    <vth>Return Qty</vth>
                    <vth>Purchase Price </vth>
                    <vth>Total</vth>
                </tr>
                <tr v-for="(item, sl) in slotProps.items" :key="sl" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <!-- <vtd class="text-center">
                        <input type="checkbox">
                    </vtd> -->
                    <vtd>{{ sl+1 }}</vtd>
                    <vtd>{{ item.product.product_name }}</vtd>
                    <vtd class="text-center">{{ item.quantity }}</vtd>
                    <vtd class="w-24">
                        <input type="number" v-model="item.return_quantity" @input="productReturnTotal(sl)" class="w-24 text-center dark:bg-slate-800">
                    </vtd>
                    <vtd class="text-center">{{ item.sale_rate }}</vtd>
                    <vtd class="text-center">{{ item.return_rate }}</vtd>
                </tr>
            </table>
        </template>
    </DataView>
            <div class="mt-5">
                <Button @click="saveSaleReturn">Confirm</Button>
            </div>
        </div>
    </main>
</template>


<script>
import Button from '@/components/global/Button.vue';
export default{
    components:{
        Button
    },data: () => ({
        salereturn: {
            sale_id: null,
            date: new Date().toISOString().substr(0, 10),
            total: 0,
            note: '',
            customer_id: null,
        },
        purchase: null,
        purchaseId: null,
        return_rate: null,
        cart: [],
        saleData: [],
    }),
    async created() {
            await this.$store.dispatch('sale/getSaleReturn', {id: this.$route.params.id});
            this.saleData = this.$store.getters['sale/saleReturn'];
            this.salereturn.sale_id = this.saleData.id;
            this.salereturn.customer_id = this.saleData.customer.id;
            this.cart = this.saleData.sale_details;
            this.cart.map(item => {
                return item;
            })
    },
    methods:{
        goBack(){
            window.history.back();
        },
        productReturnTotal(ind){
            if((+this.cart[ind].return_quantity) > +this.cart[ind].quantity){
                this.$store.dispatch('notification/error', 'Return quantity is not valid');
                this.cart[ind].return_quantity = '';
            }

            this.cart[ind].return_rate = (+this.cart[ind].return_quantity * +this.cart[ind].sale_rate);
            this.calculateTotal();
        },

        calculateTotal(){
            this.salereturn.total = this.cart.reduce((p, c) => {return +p + (c.return_rate ? +c.return_rate : 0.00)}, 0);
        },
        async saveSaleReturn(){
            let filterCart = this.cart.filter(product => product.return_quantity > 0 && product.return_rate > 0);

            if(filterCart.length == 0){
                this.$store.dispatch('notification/error', 'No products to return');
                return;
            }
            let data = {
                salereturn: this.salereturn,
                cart: filterCart
            }
            let isSuccess = await this.$store.dispatch('sale/saveSaleReturn', data); 
            if (isSuccess) {
                this.$router.push('/sales-return');
            }
        },
    }
}
</script>