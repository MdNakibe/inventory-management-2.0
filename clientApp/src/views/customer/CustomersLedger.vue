<template>
    <main>
        <div class="">
            <h2 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold"> Customers Ledger</h2>
        </div>
        <div class="grid justify-between grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-28 items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="grid w-full gap-2 col-span-1 dark:text-white">
                <label for=""> Customers Ledger </label>
                <model-list-select :list="$store.getters['customer/customer']" option-value="id" option-text="name" placeholder="Select Customer" v-model="customer" />
                
            </div>
            <div class="flex items-end gap-5 col-span-2 dark:text-white">
                <div class="grid w-full gap-2">
                    <label for="">Date From </label>
                    <input type="date" v-model="customerinfo.dateFrom" class="dark:bg-slate-800" autofocus="true">
                </div>
                <div class="grid w-full gap-2">
                    <label for="">Date To</label>
                    <input type="date" v-model="customerinfo.dateTo" class="dark:bg-slate-800" autofocus="true">
                </div>
                <Button @click="getCustomerLedger" class="min-w-[150px]">Search</Button>
            </div>

            <div class="grid col-span-1">
                <Button class="bg-orange-500">Print</Button>
            </div>
        </div>

        <div v-if="customer.coustomer_id" class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <table class="w-full dark:text-white">
                <tr>
                    <vth>Date</vth>
                    <vth>Invoice</vth>
                    <vth>Total</vth>
                    <vth>Paid</vth>
                    <vth>Due</vth>
                    <vth>Return</vth>
                    <vth>Balance</vth>
                    <!-- <vth>Balance</vth> -->
                </tr>
                <tr class="full hover:bg-slate-100 dark:hover:bg-slate-600 group">
                    <vtd class="text-center"></vtd>
                    <vth colspan="5" class="bg-white group-hover:bg-slate-100 dark:group-hover:bg-slate-600 text-left">Opening Balance</vth>
                    <vtd class="text-center">{{ $store.getters['customer/openingBalance'] }}</vtd>
                </tr>
                <tr v-for="(ledger, ind) in $store.getters['customer/ledgers']" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center ">{{ ledger.date }}</vtd>
                    <vtd class="text-center-justify">{{ ledger.invoice }}</vtd>
                    <vtd class="text-center">{{ ledger.total }}</vtd>
                    <vtd class="text-center">{{ ledger.paid }}</vtd>
                    <vtd class="text-center">{{ ledger.due }}</vtd>
                    <vtd class="text-center">{{ ledger.return_amount }}</vtd>
                    <vtd class="text-center">{{ ledger.balance }}</vtd>
                </tr>
                <!-- <tr class="">
                    <vth colspan="2" class="text-right bg-white dark:bg-slate-700 border-none">Grand Total</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                </tr> -->
            </table>
        </div>
        <div v-else class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <table class="w-full dark:text-white">
                <h3 class="text-center">Please Select Customer</h3>
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
    data() {
        return {
            customer:{
                coustomer_id: '',
                coustomer_name: '',
            },
            customerinfo: {
                id: '',
                customer_name: '',
                dateFrom: '',
                dateTo: new Date().toISOString().substr(0, 10),
            },
        }
    },
    async created() {
        await this.$store.dispatch('customer/getcustomer');
    },
    watch:{
        customer(customer) {
            if(customer == undefined) return;
            this.customer.coustomer_id = customer.id;
            this.customer.coustomer_name = customer.name;
            this.customerinfo.id = customer.id;
            this.getCustomerLedger();
        },
    },
    methods: {
        async getCustomerLedger() {
            if(this.customerinfo.id == '') {
                this.$store.dispatch("notification/error", "Select a customer");
                return;
            }
            await this.$store.dispatch('customer/getCustomerLedger', this.customerinfo)
        }
    }
}
</script>