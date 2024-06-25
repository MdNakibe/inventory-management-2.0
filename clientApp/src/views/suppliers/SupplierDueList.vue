<template>
    <main>
        <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Supplier Due List</h1>
        <div class="grid justify-between grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-28 items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="grid w-full gap-2 col-span-1 dark:text-white">
                <label for="">Supplier</label>
                <model-list-select 
                :list="$store.getters['supplier/suppliers']" 
                option-value="id" option-text="name" 
                v-model="supplier" />
            </div>

            <div class="flex items-end gap-5 col-span-2 dark:text-white">
                <div class="grid w-full gap-2">
                    <label for="">Date From </label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Date To</label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <Button class="min-w-[150px]">Search</Button>
            </div>

            <div class="grid col-span-1">
                <Button class="bg-orange-500">Print</Button>
            </div>
        </div>

        <div v-if="supplierinfo.supplier_id" class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <table class="w-full dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Supplier Name</vth>
                    <vth>Unpaid Invoice</vth>
                    <vth>Total Bill</vth>
                    <vth>Paid</vth>
                    <vth>Total Due</vth>
                    <vth>Credit Limit</vth>
                    <vth>Action</vth>
                </tr>
                <tr v-for="(due, ind) in this.$store.getters['supplier/supplierdue'][0].purchase_info" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">{{ ind +1 }}</vtd>
                    <vtd class="text-center">{{ supplier.name }} - {{ supplier.code }}</vtd>
                    <vtd class="text-center">{{ due.invoice }}</vtd>
                    <vtd class="text-right">{{ due.total }}</vtd>
                    <vtd class="text-right">{{ due.paid }}</vtd>
                    <vtd class="text-right">{{ due.due }}</vtd>
                    <vtd class="text-right">12,000.00</vtd>
                    <vtd class="text-center min-w-[80px]">
                        <button title="Payment" class="hover:bg-green-500 py-0.5 px-1.5 bg-green-100 rounded text-green-500 hover:text-white mr-1">
                            <i class="fa-solid fas fa-money-check"></i>
                        </button>
                        <button title="Invoice" @click="$router.push(`/purchase-invoice-view/${due.id}`)" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                            <i class="fa-solid fa-file-invoice"></i>
                        </button>
                    </vtd>
                </tr>
                <!-- <tr class="">
                    <vth colspan="4" class="text-right bg-white dark:bg-slate-700 border-none">Grand Total</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                </tr> -->
            </table>
        </div>
        <div v-else class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5"> 
            <h4 class="text-center">
                Please select Supplier
            </h4>
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
            supplier:{},
            supplierinfo:{
                supplier_id: '',
                name: '',
                code: '',
            },
            dataList:[],
            supplierdueData:[],
        }
    },
    async created() {
        await this.$store.dispatch('supplier/getSupplier');
    },
    watch: {
        supplier(supplier) {
            if(supplier == undefined) return;
            this.supplierinfo.supplier_id = supplier.id;
            this.supplierinfo.name = supplier.name;
            this.supplierinfo.code = supplier.code;
            this.getSupplierDue();
        },
    },
    methods: {
        getSupplierDue(){
            this.$store.dispatch('supplier/getSupplierDue', this.supplierinfo);
          
        }
    },
}
</script>