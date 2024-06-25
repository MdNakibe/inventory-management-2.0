<template>
    <div class=" bg-white dark:bg-slate-700 rounded-md shadow-md text-gray-600 dark:text-white h-[380px] overflow-auto">
        <div class="flex items-center justify-between p-5">
            <h2 class="text-[20px] font-semibold ">Low stock report</h2>
            <a href="#" class="">View All</a>
        </div>
        <div class="">
            <table class="w-full text-sm text-left text-gray-500 dark:text-white">
                <thead class="font-semibold sticky top-0">
                    <tr class="border-b bg-white dark:bg-slate-700">
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Code
                        </th>
                        <th scope="col" class="px-6 py-3 text-right">
                            Stock
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in 40" :key="i" class="border-b hover:bg-gray-100 dark:hover:bg-slate-600">
                        <td scope="row" class="px-6 py-3">
                            Apple MacBook Pro 17"
                        </td>
                        <td class="px-6 py-3 text-center">
                            P00011
                        </td>
                        <td class="px-6 py-3 text-right">
                            -52
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>