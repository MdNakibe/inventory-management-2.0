<template>
    <main>
        <div class="flex items-center justify-between pb-5">
            <span class="text-2xl text-slate-700 dark:text-white font-bold">Record New Transfer</span>
            <Button @click="goBack" type="button" class="flex items-center justify-center w-1/2 px-5 py-3 text-sm whitespace-nowrap text-gray-700 dark:text-white hover:text-white transition-colors duration-200 bg-white dark:bg-slate-600 border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-600">
                <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Go back</span>
            </Button>
        </div>
        <div class="grid grid-cols-1 2xl:grid-cols-2 gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="flex items-center gap-5">
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Date From </label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Product</label>
                    <input type="text" class=" dark:bg-slate-800" autofocus="true" placeholder="Search by Product">
                </div>
            </div>
            <div class="flex items-end gap-5 dark:text-white">
                <div class="grid w-full gap-2 ">
                    <label for="">Source Warehouse</label>
                    <input type="text" class="dark:bg-slate-800" autofocus="true">
                </div>
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Destination Warehouse</label>
                    <input type="text" class="dark:bg-slate-800" autofocus="true">
                </div>
            </div>
            <div class="grid items-end gap-5 dark:text-white">
                <div class="flex justify-between gap-5">
                    <div class="grid w-full gap-2 ">
                        <label for="">Available Stock</label>
                        <input type="text" class="w-full dark:bg-slate-800" autofocus="true">
                    </div>
                    <div class="grid w-full gap-2 dark:text-white">
                        <label for="">Transfer Quantity</label>
                        <input type="text" class="w-full dark:bg-slate-800" autofocus="true">
                    </div>
                </div>
            </div>
            <div>
                <div class="float-right">
                    <Button class="w-[200px]">Add</Button>
                </div>
            </div>
        </div>


        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <table class="w-full max-h-[200px] dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Product Id</vth>
                    <vth>Product Name</vth>
                    <vth>Quantity</vth>
                    <vth>Action</vth>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">P-00001</vtd>
                    <vtd>fgkhgrdtl68i</vtd>
                    <vtd class="text-center">15</vtd>
                    <vtd>
                        <div class="flex items-center justify-center">
                            <button title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                            <button title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button title="Print Invoice" class="hover:bg-orange-500 py-0.5 px-1.5 bg-orange-100 rounded text-orange-500 hover:text-white">
                                <i class="fa-regular fa-print"></i>
                            </button>
                        </div>
                    </vtd>
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
    },

    setup() {
        const goBack = () => {
            window.history.back();
        }
        return {
            goBack
        }
    }
}

</script>