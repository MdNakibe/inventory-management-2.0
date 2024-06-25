<template>
    <main>
        <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Purchase Record</h1>
        <div class="grid grid-cols-1 2xl:grid-cols-2 gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="flex items-center gap-5 dark:text-white">
                <div class="grid w-full gap-2">
                    <label for="">Product</label>
                    <input type="text" class="max-w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Search by Product" v-model="searchTerm">
                </div>
                <!-- <div class="grid gap-2 w-full ">
                    <span class="">Category</span>
                    <select name="" id="" class="dark:bg-slate-800">
                        <option value="" disabled selected>Select</option>
                        <option value="">1200000</option>
                        <option value="">1200000</option>
                        <option value="">1200000</option>
                    </select>
                </div>
                <div class="grid gap-2 w-full">
                    <span class="">Brand</span>
                    <select name="" id="" class="dark:bg-slate-800">
                        <option value="" disabled selected>Select</option>
                        <option value="">1200000</option>
                        <option value="">1200000</option>
                        <option value="">1200000</option>
                    </select>
                </div> -->
            </div>
      <!--       <div class="flex items-end gap-5 dark:text-white">
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
            <DataView :value="filteredPurchase" dataKey="id"
                :paginator="filteredPurchase.length>10 ? true : false" :rows="10" 
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
            <template #list="slotProps">
            <table class=" w-full dark:bg-slate-700 dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Date </vth>
                    <vth>Invoice</vth>
                    <vth>Supplier Name</vth>
                    <vth>Total</vth>
                    <vth>Paid</vth>
                    <vth>Due</vth>
                    <vth>Status</vth>
                    <vth>Purchase By</vth>
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
                            <button title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                            <button title="Edit"  @click="$router.push(`/purchase-entry/${item.id}`)" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button @click="$router.push(`/purchase-invoice-view/${item.id}`)" title="Print Invoice" class="hover:bg-orange-500 py-0.5 px-1.5 bg-orange-100 rounded text-orange-500 hover:text-white">
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
                return purchase.filter(purchase => this.purchesRecordGlobalFilter(purchase, this.searchTerm));
            }
        },
    },
}
</script>