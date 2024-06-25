<template>
    <div>
        <div class="flex justify-center gap-2 items-center">
            <router-link to="/sales-report/product-wise-report"><Button class="bg-[#1565c0]">Report by Product </Button></router-link>
            <router-link to="/sales-report/category-wise-report"><Button class="bg-[#1565c0]">Report by Category</Button></router-link>
            <router-link to="/sales-report/brand-wise-report"><Button class="bg-[#1565c0]">Report by Brand</Button></router-link>
            <router-link to="/sales-report/employee-sales-report"><Button class="bg-[#1565c0]">Report by Employee</Button></router-link>
            <router-link to="/sales-report/customer-wise-report"><Button class="bg-[#1565c0]">Report by Customer</Button></router-link>
            <router-link to="/sales-report/customers-item-report"><Button class="bg-[#1565c0]">Report by Customer's Item</Button></router-link>
        </div>
        <div class="">
            <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold mt-5">Sales Report</h1>
            <div class="flex justify-between items-end gap-5 bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
                <div class="flex items-end gap-5 flex-1">
                    <div class="grid w-full gap-2 dark:text-white">
                        <label for="">Date From </label>
                        <input type="date" class="min-w-[200px] dark:bg-slate-800" autofocus="true">
                    </div>
                    <div class="grid w-full gap-2 dark:text-white">
                        <label for="">Date To</label>
                        <input type="date" class="min-w-[200px] dark:bg-slate-800" autofocus="true">
                    </div>
                    <Button class="min-w-[150px]">Search</Button>
                </div>
                <div class=" flex-1">
                    <Button class="bg-orange-500 w-[200px] float-right">Print</Button>
                </div>
            </div>
            <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
                <table class="w-full dark:text-white">
                    <tr>
                        <vth>SL.</vth>
                        <vth>Date</vth>
                        <vth>Invoice Number</vth>
                        <vth>Customer Name</vth>
                        <vth>Sub Total</vth>
                        <vth>TAX</vth>
                        <vth>Delivery Charge</vth>
                        <vth>Discount</vth>
                        <vth>Total</vth>
                        <vth>Sold By</vth>
                        <vth>Action</vth>
                    </tr>
                    <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                        <vtd class="text-center">01</vtd>
                        <vtd class="text-center">10-12-2023</vtd>
                        <vtd class="text-center">SLS-23000001</vtd>
                        <vtd class="text-left">C00001- Customer Name </vtd>
                        <vtd class="text-right">11,150.00</vtd>
                        <vtd class="text-right">500.00</vtd>
                        <vtd class="text-right">150.00</vtd>
                        <vtd class="text-right">200.00</vtd>
                        <vtd class="text-right">12,000.00</vtd>
                        <vtd class="text-center">MD. Sazib</vtd>
                        <vtd>
                            <div class="flex items-center justify-center">
                                <button title="Print Invoice"
                                class="hover:bg-orange-500 py-0.5 px-1.5 bg-orange-100 rounded text-orange-500 hover:text-white">
                                <i class="fa-regular fa-print"></i>
                            </button>
                            </div>
                        </vtd>
                    </tr>
                    <tr class="">
                        <vth colspan="4" class="text-right bg-white dark:bg-slate-700 border-none">Total:</vth>
                        <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">11,150.00</vth>
                        <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">500.00</vth>
                        <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">150.00</vth>
                        <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">200.00</vth>
                        <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>


<script setup>
import Button from '@/components/global/Button.vue';
</script>

