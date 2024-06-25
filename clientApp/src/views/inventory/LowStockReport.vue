<template>
    <main>
        <div class="flex justify-between items-center mb-5">
            <h1 class=" text-2xl text-slate-700 dark:text-white font-bold">Low Stock Report</h1>
            <Button @click="goBack" type="button" class="flex items-center justify-center w-1/2 px-5 py-3 text-sm whitespace-nowrap text-gray-700 dark:text-white hover:text-white transition-colors duration-200 bg-white dark:bg-slate-600 border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-600">
                <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Go back</span>
            </Button>
        </div>
        <div class="grid justify-between grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-28 items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="grid w-full gap-2 col-span-1 dark:text-white">
                <label for="">Product</label>
                <input type="text" class="w-full dark:bg-slate-800" autofocus="true" placeholder="Select/Search Product">
            </div>

            <div class="flex items-end gap-5 col-span-2 dark:text-white">
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
                <!-- <Button class="min-w-[150px]">Search</Button> -->
            </div>
            <div class="grid col-span-1">
                <Button class="bg-orange-500">Print</Button>
            </div>
        </div>


        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <table class="w-full dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Product Name</vth>
                    <vth>Category</vth>
                    <vth>Brand</vth>
                    <vth>Current Stock</vth>
                    <vth>Stock Value</vth>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">01</vtd>
                    <vtd>P-00001-Product Name</vtd>
                    <vtd class="text-center">nfgjir dgvfd</vtd>
                    <vtd class="text-center">nfgjir dgvfd</vtd>
                    <vtd class="text-right">15,000.00</vtd>
                    <vtd class="text-right">15,000.00</vtd>
                </tr>
            </table>
        </div>
    </main>
</template>


<script>
import Button from '@/components/global/Button.vue';

export default {
    components: {
        Button,
    },

    setup() {
        const goBack = () => {
            window.history.back();
        }
        return {
            goBack
        }
    }
}


</script>