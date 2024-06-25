<template>
    <main>
        <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">General Ledger</h1>
        <div class="flex gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end ">
            <div>
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Account</label>
                    <input type="text" class="w-[300px] dark:bg-slate-800" autofocus="true">
                </div>
            </div>
            <div class="flex items-end gap-5">
                <div class="grid w-[250px] gap-2 dark:text-white">
                    <label for="">Date From </label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <div class="grid w-[250px] gap-2 dark:text-white">
                    <label for="">Date To</label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <Button class="w-[150px]">Search</Button>
            </div>
            <div class="flex gap-5">
                <Button class="bg-orange-500 w-[150px]">Print</Button>
            </div>
        </div>
        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <table class="w-full dark:text-white">
                <tr>
                    <vth>Date</vth>
                    <vth>Particulars</vth>
                    <vth>Debit</vth>
                    <vth>Credit</vth>
                    <vth>Balance</vth>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">10-10-2023</vtd>
                    <vtd>Starting Balance</vtd>
                    <vtd class="text-right"></vtd>
                    <vtd class="text-right"></vtd>
                    <vtd class="text-right">1,000.00</vtd>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">10-10-2023</vtd>
                    <vtd>Starting Balance</vtd>
                    <vtd class="text-right"></vtd>
                    <vtd class="text-right">5,000.00</vtd>
                    <vtd class="text-right">6,000.00</vtd>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">10-10-2023</vtd>
                    <vtd>Starting Balance</vtd>
                    <vtd class="text-right">2,000.00</vtd>
                    <vtd class="text-right"></vtd>
                    <vtd class="text-right">4,000.00</vtd>
                </tr>
                <tr>
                    <vth colspan="2" class="text-right bg-white dark:bg-slate-700 border-none">Total</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">2,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">5,000.00</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">11,000.00</vth>
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