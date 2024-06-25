<template>
    <main>
        <div class="">
            <div class="flex justify-between items-center mb-5">
                <div class="text-2xl text-slate-700 dark:text-white font-bold">Customer Wise Return Invoice</div>
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
            <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
                <table class=" w-full dark:text-white">
                    <tr>
                        <vth>SL.</vth>
                        <vth>Sale Date </vth>
                        <vth>Return Date</vth>
                        <vth>Return Invoice</vth>
                        <vth>Customer Name</vth>
                        <vth>Total Amount</vth>
                        <vth>Received By</vth>
                        <vth>Action</vth>
                    </tr>
                    <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                        <vtd class="text-center">01</vtd>
                        <vtd class="text-center">01-10-2023</vtd>
                        <vtd class="text-center">08-12-2023</vtd>
                        <vtd class="text-center">SR-00012</vtd>
                        <vtd>MD. Nasir</vtd>
                        <vtd class="text-right">12,000.00</vtd>
                        <vtd class="text-center">MD. Dinar</vtd>
                        <vtd>
                            <div class="flex items-center justify-center">
                                <button title="Print Invoice" class="hover:bg-orange-500 py-0.5 px-1.5 bg-orange-100 rounded text-orange-500 hover:text-white">
                                    <i class="fa-regular fa-print"></i>
                                </button>
                            </div>
                        </vtd>
                    </tr>
                </table>
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