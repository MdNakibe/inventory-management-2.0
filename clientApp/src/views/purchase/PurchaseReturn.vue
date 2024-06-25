<template>
    <main>
        <div class="flex justify-between">
            <span class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Purchase Return</span>
            <router-link to="/purchase-return/record-purchase-return">
                <Button class="whitespace-nowrap bg-[#1565c0]">Record New Return</Button>
            </router-link>
        </div>
        <div
            class="grid grid-cols-1 2xl:grid-cols-2 gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="flex items-center gap-5">
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Product</label>
                    <input type="text" class="max-w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Search by Product" v-model="searchTerm">
                </div>
               <!--  <div class="grid gap-2 w-full dark:text-white">
                    <span class="">Category</span>
                    <select name="" id="" class="dark:bg-slate-800">
                        <option value="" disabled selected>Select</option>
                        <option value="">1200000</option>
                        <option value="">1200000</option>
                        <option value="">1200000</option>
                    </select>
                </div>
                <div class="grid gap-2 w-full dark:text-white">
                    <span class="">Brand</span>
                    <select name="" id=""  class="dark:bg-slate-800">
                        <option value="" disabled selected>Select</option>
                        <option value="">1200000</option>
                        <option value="">1200000</option>
                        <option value="">1200000</option>
                    </select>
                </div> -->
            </div>
           <!--  <div class="flex items-end gap-5 dark:text-white">
                <div class="grid w-full gap-2">
                    <label for="">Date From </label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <div class="grid w-full gap-2">
                    <label for="">Date To</label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <Button>Search</Button>
                <Button class="bg-orange-500">Print</Button>
            </div> -->
        </div>

        <div class="bg-white dark:bg-slate-700 dark:text-white mt-5 rounded-lg p-5">
            <DataView :value="filteredReturn" dataKey="id"
                :paginator="filteredReturn.length>10 ? true : false" :rows="10" 
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
            <template #list="slotProps">
            <table class=" w-full dark:bg-slate-700 dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Purchase Date </vth>
                    <vth>Return Date</vth>
                    <vth>Return Invoice</vth>
                    <vth>Supplier Name</vth>
                    <vth>Amount</vth>
                    <vth>Note</vth>
                    <vth>Returned By</vth>
                    <vth>Action</vth>
                </tr>
                <tr v-for="(item, ind) in slotProps.items" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">{{ ind + 1 }}</vtd>
                    <vtd class="text-center">{{ item.purchase.date }}</vtd>
                    <vtd class="text-center">{{ item.date }}</vtd>
                    <vtd class="text-center">{{ item.invoice }}</vtd>
                    <vtd>{{ item.supplier.name }}</vtd>
                    <vtd class="text-center">{{ item.total }}</vtd>
                    <vtd>{{ item.note }}</vtd>
                    <vtd class="text-center">{{ item.user.name }}</vtd>
                    <vtd>
                        <div class="flex items-center justify-center">
                            <button title="Delete"
                                class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                            <!-- <button title="Edit"
                                class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button> -->
                            <button title="Print Invoice"
                                class="hover:bg-orange-500 py-0.5 px-1.5 bg-orange-100 rounded text-orange-500 hover:text-white">
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
    components: {
        Button
    },
    data() {
        return {
            searchTerm: ""
        }
    },
    async created() {
        await this.$store.dispatch('purchase/getAllPurchaseReturn');
    },
    computed: {
        filteredReturn() {
            const purchase = this.$store.getters['purchase/purchaseAllReturn'];
            if (this.searchTerm === '') {
                return purchase;
            } else {
                return purchase.filter(purchase => this.purchesReturnGlobalFilter(purchase, this.searchTerm));
            }
        },
    },
}
</script>