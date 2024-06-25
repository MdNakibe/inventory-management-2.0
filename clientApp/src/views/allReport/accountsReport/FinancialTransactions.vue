<template>
    <main>
        <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Financial Transactions</h1>
        <div class="grid grid-cols-1 2xl:grid-cols-2 gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="flex items-center gap-5">
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Account</label>
                    <input type="text" class=" max-w-[300px] dark:bg-slate-800" autofocus="true">
                </div>
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Transaction Type</label>
                    <select name="" id="" class="dark:bg-slate-800">
                        <option value="">Received</option>
                        <option value="">Paid</option>
                    </select>
                    <!-- <input type="text" class=" max-w-[300px] dark:bg-slate-800" autofocus="true"> -->
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
                <Button class="w-[200px]">Search</Button>
                <Button class="w-[200px] bg-orange-500">Print</Button>
            </div>
        </div>


        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <table class="w-full dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Date</vth>
                    <vth>Transaction ID</vth>
                    <vth>Particulars</vth>
                    <vth>Account</vth>
                    <vth>Description</vth>
                    <vth>Received</vth>
                    <vth>Paid</vth>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">12-12-2023</vtd>
                    <vtd class="text-center">TXN-0111111</vtd>
                    <vtd class="text-center">Sale * MD. Sazib</vtd>
                    <vtd class="text-center">bKash(018888888)</vtd>
                    <vtd class="text-center">Lorem, ipsum</vtd>
                    <vtd class="text-right">12,000.00</vtd>
                    <vtd class="text-right"></vtd>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">12-12-2023</vtd>
                    <vtd class="text-center">TXN-0111111</vtd>
                    <vtd class="text-center">Purchase * MD. Sazib</vtd>
                    <vtd class="text-center">City Bank(2103568000)</vtd>
                    <vtd class="text-center">Lorem, ipsum</vtd>
                    <vtd class="text-right"></vtd>
                    <vtd class="text-right">12,000.00</vtd>
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
    }
}

</script>