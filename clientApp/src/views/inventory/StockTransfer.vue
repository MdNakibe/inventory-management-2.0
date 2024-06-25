<template>
    <main>
        <div class="flex justify-between">
            <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Stock Transfer</h1>
            <router-link to="/stock-transfer/record-new-transfer">
                <Button class="whitespace-nowrap bg-green-500 px-5">Record New Transfer</Button>
            </router-link>
        </div>
        <div class="grid grid-cols-1 2xl:grid-cols-2 gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="flex items-center gap-5">
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">View Stock</label>
                    <input type="text" class="max-w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Search by Product">
                </div>
                <div class="grid gap-2 w-full dark:text-white">
                    <span class="">Category</span>
                    <select name="" id="" class="dark:bg-slate-800">
                        <option value="" disabled selected>Select</option>
                        <option value="">1200000</option>
                        <option value="">1200000</option>
                        <option value="">1200000</option>
                    </select>
                </div>
                <div class="grid gap-2 w-full dark:text-white">
                    <span class="">Brand</span>
                    <select name="" id="" class="dark:bg-slate-800">
                        <option value="" disabled selected>Select</option>
                        <option value="">1200000</option>
                        <option value="">1200000</option>
                        <option value="">1200000</option>
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
                <Button class="px-5">Search</Button>
                <Button class="px-5 bg-orange-500">Print</Button>
            </div>
        </div>


        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <table class="w-full dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Date</vth>
                    <vth>Transfer Invoice</vth>
                    <vth>Transferred From</vth>
                    <vth>Transferred To</vth>
                    <vth>Stock Value</vth>
                    <vth>Transfer Reason</vth>
                    <vth>Recorded By</vth>
                    <vth>Action</vth>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">P-00001</vtd>
                    <vtd class="text-center">fgkhgrdtl68i</vtd>
                    <vtd class="text-center">Lorem, ipsum</vtd>
                    <vtd class="text-right">15,000.00</vtd>
                    <vtd class="text-right">15,000.00</vtd>
                    <vtd class="text-right">Md. Sazib</vtd>
                    <vtd class="text-right">Md. Sazib</vtd>
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
import { ref } from 'vue';
import Button from '@/components/global/Button.vue';
// import Popup from '@/components/global/PopUp.vue';


export default {
    components: {
        Button,
        // Popup,
    },

    //     setup() {
    //         const RecordNewTransferModel = ref(false);
    //         const RecordNewTransferFun = () => {
    //             RecordNewTransferModel.value = !RecordNewTransferModel.value;
    //         }
    //         return {
    //             RecordNewTransferFun,
    //             RecordNewTransferModel,
    //         }
    //     }
}

</script>