<template>
    <main>
        <div class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Sales Record</div>
        <div class="grid grid-cols-1 2xl:grid-cols-2 gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="flex items-center gap-5">
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Search</label>
                    <input type="text" class=" max-w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Search by All">
                </div>
            </div>
            <div class="flex items-end gap-5">
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Date From </label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Date To</label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <Button>Search</Button>
                <Button class="bg-orange-500">Print</Button>
            </div>
        </div>

        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <DataView :value="filteredSale" dataKey="id"
                :paginator="filteredSale.length>10 ? true : false" :rows="10"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
            <template #list="slotProps">
            <table class="w-full dark:bg-slate-700 dark:text-white">
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
                    <vtd class="text-center">{{ item.sub_total }}</vtd>
                    <vtd class="text-center">{{ item.vat }}</vtd>
                    <vtd class="text-center">{{ item.transport }}</vtd>
                    <vtd class="text-center">{{ item.discount }}</vtd>
                    <vtd class="text-center">{{ item.total }}</vtd>
                    <vtd class="text-center">{{ item.user.name }}</vtd>
                    <vtd>
                        <div class="flex items-center justify-center">
                            <button title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                            <button title="Edit"  @click="$router.push(`/sales-entry/${item.id}`)" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button title="Print Invoice" class="hover:bg-orange-500 py-0.5 px-1.5 bg-orange-100 rounded text-orange-500 hover:text-white">
                                <i class="fa-regular fa-print"></i>
                            </button>
                        </div>
                    </vtd>
                </tr>
                <!-- <tr class="">
                    <vth colspan="4" class="text-right bg-white dark:bg-slate-700 border-none">Total:</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                </tr> -->
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
}

</script>