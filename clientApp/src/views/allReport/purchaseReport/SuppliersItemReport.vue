<template>
    <div class="">
        <div class="flex justify-between items-center">
            <div class="text-2xl text-slate-700 dark:text-white font-bold">Supplier's-item Report</div>
            <Button @click="goBack" type="button" class="flex items-center justify-center w-1/2 px-5 py-3 text-sm whitespace-nowrap text-gray-700 dark:text-white hover:text-white transition-colors duration-200 bg-white dark:bg-slate-600 border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-600">
                <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Go back</span>
            </Button>
        </div>
        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <div class="flex flex-wrap justify-between items-end gap-5">
                <div class="grid w-full gap-2 flex-1 dark:text-white">
                    <label for="">Supplier</label>
                    <input type="text" class="max-w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Select/Search Supplier">
                </div>
                <div class="flex justify-between items-end gap-5 flex-1">
                    <div class="flex items-end gap-5 flex-1">
                        <div class="grid w-full gap-2 dark:text-white">
                            <label for="">Date From </label>
                            <input type="date" class="min-w-[200px] dark:bg-slate-800" autofocus="true">
                        </div>
                        <div class="grid w-full gap-2 dark:text-white">
                            <label for="">Date To</label>
                            <input type="date" class="min-w-[200px] dark:bg-slate-800" autofocus="true">
                        </div>
                        <Button class="min-w-[120px]">Search</Button>
                    </div>
                </div>
                <div class="flex-1">
                    <Button class="bg-orange-500 w-[120px] float-right">Print</Button>
                </div>
            </div>
        </div>
        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <table class="w-full dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Product ID</vth>
                    <vth>Product Name</vth>
                    <vth>Category</vth>
                    <vth>Brand</vth>
                    <vth>Quantity Purchase</vth>
                    <vth>Quantity Returned</vth>
                    <vth>Purchase Amount</vth>
                    <vth>Purchase Amount</vth>
                    <vth>Net Purchase</vth>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">P-12015</vtd>
                    <vtd>TIRE SEALANT</vtd>
                    <vtd class="text-center">TIRE</vtd>
                    <vtd class="text-center">Quick Fix</vtd>
                    <vtd class="text-center">18</vtd>
                    <vtd class="text-center">8</vtd>
                    <vtd class="text-right">18,000.00</vtd>
                    <vtd class="text-right">8,000.00</vtd>
                    <vtd class="text-right">10,000.00</vtd>

                </tr>
                <tr class="">
                    <vth colspan="7" class="text-right bg-white dark:bg-slate-700 border-none">Total:</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">18,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">8,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">10,000.00</vth>
                </tr>
            </table>
        </div>
    </div>
</template>


<script setup>
import Button from '@/components/global/Button.vue';

const goBack = () => {
    window.history.back();
};
</script>

