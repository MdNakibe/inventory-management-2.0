<template>
    <main>
        <div class="">
            <div class="flex justify-between items-center mb-5">
                <div class="text-2xl text-slate-700 dark:text-white font-bold">Customer Wise Sales Invoice</div>
                <div class="flex gap-5">
                    <Button class="whitespace-nowrap bg-[#f97316] w-[200px]">Print</Button>
                    <Button @click="goBack" type="button" class="flex items-center justify-center w-1/2 px-5 py-3 text-sm whitespace-nowrap text-gray-700 dark:text-white hover:text-white transition-colors duration-200 bg-white dark:bg-slate-600 border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-600">
                        <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        <span>Go back</span>
                    </Button>
                </div>
            </div>
            <div>
                <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
                    <table class="w-full dark:text-white">
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
                        <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                            <vtd class="text-center">01</vtd>
                            <vtd class="text-center">10-12-2023</vtd>
                            <vtd class="text-center">SLS-12015</vtd>
                            <vtd class="text-center">C00001- Customer Name </vtd>
                            <vtd class="text-right">0180008</vtd>
                            <vtd class="text-right">01808</vtd>
                            <vtd class="text-right">0180008</vtd>
                            <vtd class="text-right">01008</vtd>
                            <vtd class="text-right">12,0000.00</vtd>
                            <vtd class="text-center">MD. Sazib</vtd>
                            <vtd>
                                <div class="flex items-center justify-center">
                                    <button title="Print Invoice" class="hover:bg-orange-500 py-0.5 px-1.5 bg-orange-100 rounded text-orange-500 hover:text-white">
                                        <i class="fa-regular fa-print"></i>
                                    </button>
                                </div>
                            </vtd>
                        </tr>
                        <tr class="">
                            <vth colspan="4" class="text-right bg-white dark:bg-slate-700 border-none">Total:</vth>
                            <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                            <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                            <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                            <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                            <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>



<script setup>
import Button from '@/components/global/Button.vue';


const goBack = () => {
    window.history.back();
};
</script>