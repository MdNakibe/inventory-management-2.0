<template>
    <main>
        <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Account Balance</h1>
        <div class="grid grid-cols-1 2xl:grid-cols-2 gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="flex items-center gap-5">
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Account Type</label>
                    <select name="" id="" class="w-[300px] dark:bg-slate-800">
                        <option value="">Income</option>
                        <option value="">Expense</option>
                        <option value="">Asset</option>
                        <option value="">Liabilities</option>
                    </select>
                </div>
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Account Category</label>
                    <select name="" id="" class="w-[300px] dark:bg-slate-800">
                        <option value="">Bank</option>
                        <option value="">Income</option>
                        <option value="">Expense</option>
                        <option value="">Asset</option>
                        <option value="">Liabilities</option>
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
                <Button class="w-[200px]">Search</Button>
                <Button class="w-[200px] bg-orange-500">Print</Button>
            </div>
        </div>


        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <table class="w-full dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Account Name</vth>
                    <vth>Account Type</vth>
                    <vth>Account Category</vth>
                    <vth>Opening Balance</vth>
                    <vth>Debit</vth>
                    <vth>Credit</vth>
                    <vth>Net Transaction</vth>
                    <vth>Ending Balance</vth>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">City Bank</vtd>
                    <vtd class="text-center">Income</vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-right"></vtd>
                    <vtd class="text-right"></vtd>
                    <vtd class="text-right"></vtd>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">City Bank</vtd>
                    <vtd class="text-center">Expense</vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-right"></vtd>
                    <vtd class="text-right"></vtd>
                    <vtd class="text-right"></vtd>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">City Bank</vtd>
                    <vtd class="text-center">Asset</vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-right"></vtd>
                    <vtd class="text-right"></vtd>
                    <vtd class="text-right"></vtd>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">City Bank</vtd>
                    <vtd class="text-center">Liabilities</vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-right"></vtd>
                    <vtd class="text-right"></vtd>
                    <vtd class="text-right"></vtd>
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