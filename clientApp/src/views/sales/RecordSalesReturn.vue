<template>
    <main>
        <div class="flex justify-between items-center mb-5">
            <div class=" text-2xl text-slate-700 dark:text-white font-bold">Record New Return</div>
            <Button @click="goBack" type="button" class="flex items-center justify-center w-1/2 px-5 py-3 text-sm whitespace-nowrap text-gray-700 dark:text-white hover:text-white transition-colors duration-200 bg-white dark:bg-slate-600 border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-600">
                <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Go back</span>
            </Button>
        </div>
        <div class="grid grid-cols-1 2xl:grid-cols-2 gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="grid w-full gap-2 max-w-[400px] dark:text-white">
                <label for="">Search by Sales Invoice Number</label>
                <input type="text" class="dark:bg-slate-800" autofocus="true" placeholder="Sales Invoice Number">
            </div>
            <div class="flex items-end gap-5 dark:text-white">
                <div class="grid w-full gap-2 ">
                    <label for="">Date From </label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <div class="grid w-full gap-2">
                    <label for="">Date To</label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <Button class="w-[300px]">Search</Button>
            </div>
        </div>

        <div class="bg-white dark:bg-slate-700 dark:text-white mt-5 rounded-lg p-5">
            <DataView  :value="filteredSale" dataKey="id"
                :paginator="filteredSale.length>10 ? true : false" :rows="10"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
            <template #list="slotProps">
            <table class=" w-full dark:bg-slate-700 dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Date</vth>
                    <vth>Invoice Number</vth>
                    <vth>Customer Name</vth>
                    <vth>Sub Total</vth>
                    <vth>VAT</vth>
                    <vth>Delivery Charge</vth>
                    <vth>Discount</vth>
                    <vth>Total</vth>
                    <vth>Sold By</vth>
                    <vth>Action</vth>
                </tr>
                <tr v-for="(item, ind) in slotProps.items" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">{{ ind + 1 }}</vtd>
                    <vtd class="text-center">{{ item.date }}</vtd>
                    <vtd class="text-center">{{ item.invoice }}</vtd>
                    <vtd class="text-center">{{ item.customer.name }}</vtd>
                    <vtd class="text-right">{{ item.sub_total }}</vtd>
                    <vtd class="text-right">{{ item.vat }}</vtd>
                    <vtd class="text-right">{{ item.transport }}</vtd>
                    <vtd class="text-right">{{ item.discount }}</vtd>
                    <vtd class="text-right">{{ item.total }}</vtd>
                    <vtd class="text-center">{{ item.user.name }}</vtd>
                    <vtd>
                        <div class="flex items-center gap-2 justify-center">
                            <button v-if="!item.has_return" title="Return this Item" @click="$router.push(`/sales-return/record-sales-return/record-return/${item.id}`)" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white">
                                <i class="fa-solid fa-rotate-left"></i>
                            </button>
                            <button title="Print Invoice" class="hover:bg-orange-500 py-0.5 px-1.5 bg-orange-100 rounded text-orange-500 hover:text-white">
                                <i class="fa-regular fa-print"></i>
                            </button>
                        </div>
                    </vtd>
                </tr>

            </table>
        </template>
       </DataView>
        </div>


        <!-- <PopUp :SLSoiceNumber="SLSoiceNumber" :productName="productName" :saleQty="saleQty" :returnQty="returnQty" :reason="reason" :returnDate="returnDate" :customerName="customerName" :prevReturnQty="prevReturnQty" :palePrice="palePrice" :total="total" /> -->

    </main>
</template>


<script>
import Button from '@/components/global/Button.vue';
export default{
    components:{
        Button
    },
    data(){
        return{
            searchTerm:'',
        }
    },
    async created() {
        await this.$store.dispatch('sale/getSale');
    },
    computed: {
        filteredSale() {
            const sale = this.$store.getters['sale/sale'];
            if (this.searchTerm === '') {
                return sale;
            } else {
                return product.filter(sale => this.productGlobalFilter(sale, this.searchTerm));
            }
        },
    },
    methods:{
        goBack(){
            window.history.back();
        }
    }
}
</script>