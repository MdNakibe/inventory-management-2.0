<template>
    <main>
        <div class="flex justify-between items-center mb-5">
                <div class="text-2xl text-slate-700 dark:text-white font-bold">Record New Return</div>
                <Button @click="goBack" type="button" class="flex items-center justify-center w-1/2 px-5 py-3 text-sm whitespace-nowrap text-gray-700 dark:text-white hover:text-white transition-colors duration-200 bg-white dark:bg-slate-600 border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-600">
                    <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Go back</span>
                </Button>
            </div>
        <div class="flex justify-between items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="grid w-full gap-2 dark:text-white">
                <label for="">Search by Invoice No.</label>
                <input type="text" class="max-w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Invoice Number">
            </div>
            <div class="flex items-end gap-5 dark:text-white">
                <div class="grid w-full gap-2">
                    <label for="">Date From </label>
                    <input type="date" class="min-w-[250px] dark:bg-slate-800" autofocus="true">
                </div>
                <div class="grid w-full gap-2">
                    <label for="">Date To</label>
                    <input type="date" class="min-w-[250px] dark:bg-slate-800" autofocus="true">
                </div>
                <Button>Search</Button>
            </div>
        </div>

        <div class="bg-white dark:bg-slate-700 dark:text-white mt-5 rounded-lg p-5">
        <DataView  :value="filteredPurchase" dataKey="id"
                :paginator="filteredPurchase.length>10 ? true : false" :rows="10"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
            <template #list="slotProps">
            <table class=" w-full dark:bg-slate-700 dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Date</vth>
                    <vth>Invoice</vth>
                    <vth>Supplier Name</vth>
                    <vth>Total</vth>
                    <vth>Paid</vth>
                    <vth>Due</vth>
                    <vth>Status</vth>
                    <vth>Purchased By</vth>
                    <vth>Action</vth>
                </tr>
                <tr v-for="(item, ind) in slotProps.items" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">{{ ind+1 }}</vtd>
                    <vtd class="text-center">{{ item.date }}</vtd>
                    <vtd class="text-center">{{ item.invoice }}</vtd>
                    <vtd>{{ item.supplier.name }}</vtd>
                    <vtd class="text-center">{{ item.total }}</vtd>
                    <vtd class="text-center">{{ item.paid }}</vtd>
                    <vtd class="text-center">{{ item.due }}</vtd>
                    <vtd class="text-right">
                        <Button v-if="item.paid ==  0" class="bg-red-500 w-16 px-1 py-0">Unpaid</Button>
                        <Button v-if="item.paid != 0 && item.due != 0" class="bg-orange-500 px-1 py-0 whitespace-nowrap">Partially Paid</Button>
                        <Button v-if="item.due == 0" class="bg-green-500 w-16 px-1 py-0">Paid</Button>
                    </vtd>
                    <vtd class="text-center">{{ item.user.name }}</vtd>
                    <vtd>
                        <div class="flex items-center justify-center">
                                <button v-if="item.has_return != 1" @click="$router.push(`/purchase-return/record-purchase-return/record-return/${item.id}`)" title="Return" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                    <i class="fa-solid fa-arrow-rotate-left"></i>
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
    </main>
</template>


<script>
import Button from '@/components/global/Button.vue';
export default{
    components:{
        Button,
    },
    data(){
        return{
            searchTerm:'',
        }
    },
    async created() {
        await this.$store.dispatch('purchase/getPurchase');
    },
    computed: {
        filteredPurchase() {
            const purchase = this.$store.getters['purchase/purchase'];
            if (this.searchTerm === '') {
                return purchase;
            } else {
                return product.filter(purchase => this.productGlobalFilter(purchase, this.searchTerm));
            }
        },
    },
    methods:{
        goBack(){
            window.history.back();
        },
    }
}

</script>