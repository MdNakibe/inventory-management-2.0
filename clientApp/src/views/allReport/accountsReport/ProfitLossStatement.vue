<template>
    <main>
        <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Financial Transactions</h1>
        <div class="flex gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="flex items-end gap-5 dark:text-white">
                <div class="grid w-[300px] gap-2 ">
                    <label for="">Date From </label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <div class="grid w-[300px] gap-2 dark:text-white">
                    <label for="">Date To</label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
            </div>
            <div>
                <Button class="w-[200px] bg-orange-500">Print</Button>
            </div>
        </div>


        <div class="bg-white dark:bg-slate-700 mt-5">
            <div class="w-full dark:text-white border rounded-lg">
                <div>
                    <div class="flex justify-between items-center px-5 py-2 rounded-t-lg bg-slate-300 dark:bg-slate-800 font-bold">
                        <div class="">SALES</div>
                        <div class="">AMOUNT</div>
                    </div>
                    <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                        <div class="">Gross Sales</div>
                        <div class="">1,732,000.00</div>
                    </div>
                    <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                        <div class="">Less: Sales Returns</div>
                        <div class="">10,000.00</div>
                    </div>
                    <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                        <div class="">Less: Sales Discounts</div>
                        <div class="">5,000.00</div>
                    </div>
                    <div class="flex justify-between items-center px-5 py-2 bg-slate-300 dark:bg-slate-800 font-bold">
                        <div class="">Net Sales</div>
                        <div class="">1,717,000.00</div>
                    </div>
                </div>
                <div class="mt-5">
                    <div class="px-5 py-2 font-bold bg-slate-300 dark:bg-slate-800 ">COST OF GOODS SOLD</div>
                    <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100  dark:hover:bg-slate-600">
                        <div class="">Opening Inventory</div>
                        <div class="">940,000.00</div>
                    </div>
                    <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                        <div class="">Add: Gross Purchase</div>
                        <div class="">156,000.00</div>
                    </div>
                    <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                        <div class="">Less: Purchase Returns</div>
                        <div class="">16,000.00</div>
                    </div>
                    <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                        <div class="">Less: Purchase Discount</div>
                        <div class="">8,000.00</div>
                    </div>
                    <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                        <div class="">Less: Closing Inventory</div>
                        <div class="">842,000.00</div>
                    </div>
                    <div class="flex justify-between items-center px-5 py-2 dark:hover:bg-slate-600 font-bold">
                        <div class="">(Less) Net Cost of Goods Sold</div>
                        <div class="">16,000.00</div>
                    </div>
                    <div class="flex justify-between items-center px-5 py-2 dark:bg-slate-800 bg-slate-300 font-bold">
                        <div class="">Gross Profit</div>
                        <div class="">1,487,000.00</div>
                    </div>
                    <div class="mt-5">
                        <div class="px-5 py-2 font-bold bg-slate-300 dark:bg-slate-800">OPERATING EXPENSES</div>
                        <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                            <div class="">Wages & Salaries</div>
                            <div class="">150,000.00</div>
                        </div>
                        <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                            <div class="">Office Rent</div>
                            <div class="">20,000.00</div>
                        </div>
                        <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                            <div class="">Utility Bills</div>
                            <div class="">9,000.00</div>
                        </div>
                        <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                            <div class="">TA/DA</div>
                            <div class="">2,500.00</div>
                        </div>
                        <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                            <div class="">Office Expenses</div>
                            <div class="">3,000.00</div>
                        </div>
                        <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                            <div class="">Transportation/Delivery Charge </div>
                            <div class="">5,500.00</div>
                        </div>
                        <div class="flex justify-between items-center px-5 py-2 dark:hover:bg-slate-600 font-bold">
                            <div class="">(Less) Total Operating Expenses </div>
                            <div class="">190,000.00</div>
                        </div>
                        <div class="flex justify-between items-center px-5 py-2 bg-slate-300 dark:bg-slate-800 font-bold">
                            <div class="">Net Operating Income</div>
                            <div class="">1,297,000.00</div>
                        </div>
                        <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                            <div class="">Add: Other Incomes</div>
                            <div class="">6,000.00</div>
                        </div>
                        <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                            <div class="">Less: Other Expenses</div>
                            <div class="">3,000.00</div>
                        </div>
                        <div class="flex justify-between items-center px-5 py-2 bg-slate-300 dark:bg-slate-800 font-bold">
                            <div class="">Net Profitable Income Before Tax</div>
                            <div class="">1,300,000.00</div>
                        </div>
                        <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                            <div class="">Less: Income Tax</div>
                            <div class="">45,000.00</div>
                        </div>
                        <div class="flex justify-between items-center px-5 py-1 hover:bg-slate-100 dark:hover:bg-slate-600">
                            <div class="">Less: VAT & AIT</div>
                            <div class="">28,000.00</div>
                        </div>
                        <div class="flex justify-between items-center px-5 py-4 bg-slate-600 dark:bg-slate-800 rounded-b-lg text-white font-bold">
                            <div class="">Less: VAT & AIT</div>
                            <div class="">1,227,900.00</div>
                        </div>
                    </div>
                </div>
            </div>
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