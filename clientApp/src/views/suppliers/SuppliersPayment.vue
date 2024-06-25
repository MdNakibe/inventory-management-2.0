<template>
    <main>
        <div class="flex justify-between">
            <span class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Suppliers Payment Record</span>
            <div>
                <router-link to="/suppliers-payment/make-new-payment">
                    <Button class="whitespace-nowrap bg-[#1565c0]">Make New Payment</Button>
                </router-link>
            </div>
        </div>
        <div class="grid justify-between grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-28 items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="grid w-full gap-2 col-span-1 dark:text-white">
                <label for="">Supplier</label>
                <input type="text" class="w-full dark:bg-slate-800" autofocus="true" placeholder="Select/Search Supplier">
            </div>

            <div class="flex items-end gap-5 col-span-2 dark:text-white">
                <div class="grid w-full gap-2">
                    <label for="">Date From </label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <div class="grid w-full gap-2">
                    <label for="">Date To</label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <Button class="min-w-[150px]">Search</Button>
            </div>

            <div class="grid col-span-1">
                <Button class="bg-orange-500">Print</Button>
            </div>
        </div>


        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <table class="w-full dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Date</vth>
                    <vth>Transaction ID</vth>
                    <vth>Paid Amount</vth>
                    <vth>Payment By</vth>
                    <vth>Action</vth>
                </tr>
                <tr v-for="(item, ind) in this.$store.getters['supplier/supplierPaymentRecord']" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">{{ ind + 1 }}</vtd>
                    <vtd class="text-center">{{ this.formatDate(item.created_at) }}</vtd>
                    <vtd class="text-center">{{ item.transaction_invoice }}</vtd>
                    <vtd class="text-center">{{ item.total }}</vtd>
                    <vtd class="text-center">{{ item.user.name }}</vtd>
                    <vtd class="flex justify-center">
                        <button title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <button title="Edit" @click="$router.push(`/suppliers-payment/edit-payment/${item.id}`)" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button title="Print Invoice" class="hover:bg-orange-500 py-0.5 px-1.5 bg-orange-100 rounded text-orange-500 hover:text-white">
                            <i class="fa-regular fa-print"></i>
                        </button>
                    </vtd>
                </tr>
                <!-- <tr class="">
                    <vth colspan="6" class="text-right bg-white dark:bg-slate-700 border-none">Grand Total</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
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
    data(){
        return{
            searchTerm:'',
        }
    },
    async created() {
        await this.$store.dispatch('supplier/getSupplierPaymentRecord',{type: 1});
    },
}
</script>