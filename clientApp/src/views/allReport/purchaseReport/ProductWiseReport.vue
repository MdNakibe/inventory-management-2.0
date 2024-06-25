<template>
    <div class="">
        <div class="flex justify-between items-center">
            <div class="text-2xl text-slate-700 dark:text-white font-bold">Product-wise Report</div>
            <Button @click="goBack" type="button" class="flex items-center justify-center w-1/2 px-5 py-3 text-sm whitespace-nowrap text-gray-700 dark:text-white hover:text-white transition-colors duration-200 bg-white dark:bg-slate-600 border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-600">
                <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Go back</span>
            </Button>
        </div>
        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <div class="flex flex-wrap justify-between items-end gap-5 ">
                <div class="flex items-end gap-5 flex-1">
                    <div class="grid w-full gap-2 dark:text-white">
                        <label for="">Product</label>
                        <input type="text" class="min-w-[200px] dark:bg-slate-800" autofocus="true" placeholder="Select/Search Product">
                    </div>
                    <div class="grid w-full gap-2 dark:text-white">
                        <label for="">Category</label>
                        <input type="text" class="min-w-[200px] dark:bg-slate-800" autofocus="true" placeholder="Select/Search Category">
                    </div>
                    <div class="grid w-full gap-2 dark:text-white">
                        <label for="">Brand</label>
                        <input type="text" class="min-w-[200px] dark:bg-slate-800" autofocus="true" placeholder="Select/Search Brand">
                    </div>
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
                    <div>
                        <Button class="bg-orange-500 w-[120px] float-right">Print</Button>
                    </div>
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
                    <vth>Avg. Sales Rate</vth>
                    <vth>Quantity Sold</vth>
                    <vth>Quantity Returned</vth>
                    <vth>Sales Amount</vth>
                    <vth>Return Amount</vth>
                    <vth>Net Sales</vth>
                    <vth>Action</vth>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">P-00001</vtd>
                    <vtd class=" max-w-[250px]">
                        <p class="line-clamp-2">Lorem ipsum dolor Lorem ipsum dolor sit amet. sit amet. Lorem ipsum dolor sit amet.</p>
                    </vtd>
                    <vtd class="text-center">TIRE SEALANT</vtd>
                    <vtd class="text-center">Quick Fix</vtd>
                    <vtd class="text-right">1,800.00</vtd>
                    <vtd class="text-center">10</vtd>
                    <vtd class="text-center">10</vtd>
                    <vtd class="text-right">18,000.00</vtd>
                    <vtd class="text-right">18,000.00</vtd>
                    <vtd class="text-right">12,000.00</vtd>
                    <vtd>
                        <div class="flex items-center justify-center">
                            <button title="Invoice Report" class="hover:bg-orange-500 py-0.5 px-1.5 bg-orange-100 rounded text-orange-500 hover:text-white">
                                <i class="fa-solid fa-file-invoice"></i>
                            </button>
                        </div>
                    </vtd>
                </tr>
                <tr class="">
                    <vth colspan="8" class="text-right bg-white dark:bg-slate-700 border-none">Total:</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
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

