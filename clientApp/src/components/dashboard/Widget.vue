<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5">
            <div class="bg-[#5e35b1] h-auto w-full p-5 rounded-xl relative overflow-hidden ">
                <div class="z-10 text-white">
                    <div class="flex justify-between items-center border-b border-black/10 pb-2">
                        <p class="text-[20px] font-semibold">Profile</p>
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div class="flex justify-between items-center py-1">
                        <p class="font-semibold">Total Customer</p>
                        <p class="font-semibold">25</p>
                    </div>
                    <div class="flex justify-between items-center py-1">
                        <p class="font-semibold">Total Suppliers</p>
                        <p class="font-semibold">14</p>
                    </div>
                    <div class="flex justify-between items-center py-1">
                        <p class="font-semibold">Total Employees</p>
                        <p class="font-semibold">21</p>
                    </div>
                </div>
            </div>
            <div class="bg-[#1565c0] h-auto w-full p-5 rounded-xl relative overflow-hidden ">
                <div class="z-10 text-white">
                    <div class="flex justify-between items-center border-b border-black/10 pb-2">
                        <p class="text-[20px] font-semibold">Sales</p>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div class="flex justify-between items-center py-1">
                        <p class="font-semibold">Total Sales</p>
                        <p class="font-semibold">25</p>
                    </div>
                    <div class="flex justify-between items-center py-1">
                        <p class="font-semibold">Cash Sales</p>
                        <p class="font-semibold">14</p>
                    </div>
                    <div class="flex justify-between items-center py-1">
                        <p class="font-semibold">Due Sales</p>
                        <p class="font-semibold">21</p>
                    </div>
                </div>
            </div>
            <div class="bg-[#2e4a8b] h-auto w-full p-5 rounded-xl relative overflow-hidden ">
                <div class="z-10 text-white">
                    <div class="flex justify-between items-center border-b border-black/10 pb-2">
                        <p class="text-[20px] font-semibold">Today Cash Trnx</p>
                        <i class="fa-solid fa-money-bills-simple"></i>
                    </div>
                    <div class="flex justify-between items-center py-1">
                        <p class="font-semibold">Cash Received</p>
                        <p class="font-semibold">25</p>
                    </div>
                    <div class="flex justify-between items-center py-1">
                        <p class="font-semibold">Cash Payment</p>
                        <p class="font-semibold">14</p>
                    </div>
                    <div class="flex justify-between items-center py-1">
                        <p class="font-semibold">Total Balance</p>
                        <p class="font-semibold">21</p>
                    </div>
                </div>
            </div>
            <div class="bg-[#3fb0ac] h-auto w-full p-5 rounded-xl relative overflow-hidden ">
                <div class="z-10 text-white">
                    <div class="flex justify-between items-center border-b border-black/10 pb-2">
                        <p class="text-[20px] font-semibold">Overall Balance</p>
                        <i class="fa-sharp fa-solid fa-money-check-dollar"></i>
                    </div>
                    <div class="flex justify-between items-center py-1">
                        <p class="font-semibold">Supplier Dues</p>
                        <p class="font-semibold">25</p>
                    </div>
                    <div class="flex justify-between items-center py-1">
                        <p class="font-semibold">Customer Dues</p>
                        <p class="font-semibold">14</p>
                    </div>
                    <div class="flex justify-between items-center py-1">
                        <p class="font-semibold">Liability</p>
                        <p class="font-semibold">21</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5 py-5">
            <div class="flex justify-between items-center bg-white dark:bg-slate-700 p-5 rounded-xl">
                <div class="bg-green-100 dark:bg-slate-800 p-3 rounded-full grid items-center text-center">
                    <i class="fa-regular fa-chart-line-up text-green-500 dark:text-white text-[25px] w-[25px] h-[25px]"></i>
                </div>
                <div class="">
                    <p class="font-bold text-green-500 dark:text-white text-[15px]">Daily Profit</p>
                    <p class="font-bold text-green-500 dark:text-white text-[18px]">5400.00</p>
                </div>
            </div>
            <div class="flex justify-between items-center bg-white dark:bg-slate-700 p-5 rounded-xl">
                <div class="bg-green-100 dark:bg-slate-800 p-3 rounded-full grid items-center text-center">
                    <i class="fa-regular fa-chart-line-up text-green-500 dark:text-white text-[25px] w-[25px] h-[25px]"></i>
                </div>
                <div class="">
                    <p class="font-bold text-green-500 dark:text-white text-[15px]">Weekly Profit</p>
                    <p class="font-bold text-green-500 dark:text-white text-[18px]">4000.00</p>
                </div>
            </div>
            <div class="flex justify-between items-center bg-white dark:bg-slate-700 p-5 rounded-xl">
                <div class="bg-green-100 dark:bg-slate-800 p-3 rounded-full grid items-center text-center">
                    <i class="fa-regular fa-chart-line-up text-green-500 dark:text-white text-[25px] w-[25px] h-[25px]"></i>
                </div>
                <div class="">
                    <p class="font-bold text-green-500 dark:text-white text-[15px]">Monthly Profit</p>
                    <p class="font-bold text-green-500 dark:text-white text-[18px]">10000.00</p>
                </div>
            </div>
            <div class="flex justify-between items-center bg-white dark:bg-slate-700 p-5 rounded-xl">
                <div class="bg-green-100 dark:bg-slate-800 p-3 rounded-full grid items-center text-center">
                    <i class="fa-regular fa-chart-line-up text-green-500 dark:text-white text-[25px] w-[25px] h-[25px]"></i>
                </div>
                <div class="">
                    <p class="font-bold text-green-500 dark:text-white text-[15px]">Yearly Profit</p>
                    <p class="font-bold text-green-500 dark:text-white text-[18px]">100000.00</p>
                </div>
            </div>
        </div>
    </div>
</template>