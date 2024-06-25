<template>
    <main>
        <div class="flex justify-between">
            <span class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Product Stock</span>
            <router-link to="/product-stock/low-stock-report">
                <Button class="whitespace-nowrap bg-red-500 px-5">Low Stock Report</Button>
            </router-link>
        </div>
        <div class="grid grid-cols-1 2xl:grid-cols-2 gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="flex items-center gap-5">
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Product</label>
                    <input type="text" class=" max-w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Search by Product" v-model="searchTerm">
                </div>
                <div class="grid gap-2 w-full dark:text-white">
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
                    <select name="" id="" class="dark:bg-slate-800">
                        <option value="" disabled selected>Select</option>
                        <option value="">1200000</option>
                        <option value="">1200000</option>
                        <option value="">1200000</option>
                    </select>
                </div>
            </div>
            <div class="flex items-end gap-5 dark:text-white">
                <div class="grid w-full gap-2 ">
                    <label for="">Date From </label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Date To</label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <Button class="px-5">Search</Button>
                <Button class="px-5 bg-orange-500">Print</Button>
            </div>
        </div>


        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <DataView :value="filteredstock" dataKey="id"
    :paginator="filteredstock.length>10 ? true : false" :rows="10" :filters="filters"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
            <template #list="slotProps">
            <table class="w-full dark:bg-slate-700 dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Product Name</vth>
                    <vth>Category</vth>
                    <vth>Brand</vth>
                    <!-- <vth>Opening Stock</vth> -->
                    <vth>Purchase</vth>
                    <vth>Pur Rtn</vth>
                    <vth>Sale</vth>
                    <vth>Sale Rtn</vth>
                    <vth>Adjusted</vth>
                    <vth>Transferred</vth>
                    <vth>Current Stock</vth>
                    <vth>Average Rate</vth>
                    <vth>Stock Value</vth>
                </tr>
                <tr v-for="(item, ind) in slotProps.items" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">{{ ind + 1 }}</vtd>
                    <vtd class="text-left">{{ item.product_name}} - {{ item.code}} </vtd>
                    <vtd class="text-center">{{ item.category.name }}</vtd>
                    <vtd class="text-center">{{ item.brand.name }}</vtd>
                    <!-- <vtd class="text-center">Lorem, ipsum</vtd> -->
                    <vtd class="text-center">{{ item.stock.purchase_quantity }}</vtd>
                    <vtd class="text-center">{{ item.stock.purchase_return }}</vtd>
                    <vtd class="text-center">{{ item.stock.sale_quantity }}</vtd>
                    <vtd class="text-center">{{ item.stock.sale_return }}</vtd>
                    <vtd class="text-center">{{ item.stock.transfer_from_quantity }}</vtd>
                    <vtd class="text-center">{{ item.stock.damage_quantity }}</vtd>
                    <vtd class="text-center">{{ item.stock.current_stock }}</vtd>
                    <vtd class="text-center">{{ item.purchase_details_sum_avarage_rate }}</vtd>
                    <vtd class="text-center">{{ item.purchase_details_sum_avarage_rate * item.stock.current_stock}}</vtd>
                </tr>
            </table>
        </template>
    </DataView>
        </div>
    </main>
</template>


<script>
import Button from '@/components/global/Button.vue';


export default {
    components: {
        Button,
    },
    data() {
        return {
            searchTerm: ""
        }
    },
    async created() {
        await this.$store.dispatch('product/getProductStock');
    },
    computed: {
        filteredstock() {
            const stock = this.$store.getters['product/stock'];
            if (this.searchTerm === '') {
                return stock;
            } else {
                return stock.filter(stock => this.stockGlobalFilter(stock, this.searchTerm));
            }
        },
    },
}

</script>