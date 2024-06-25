<template>
    <main>
        <div class="flex justify-between">
            <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Product Ledger</h1>
        </div>
        <div class="grid justify-between grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-28 items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="grid w-full gap-2 dark:text-white col-span-1">
                <label for="">Product Ledger</label>
                <input type="text" class="w-full dark:bg-slate-800" autofocus="true" placeholder="Select/Search Product">
            </div>

            <div class="flex items-end gap-5 col-span-2">
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Date From </label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Date To</label>
                    <input type="date" class="dark:bg-slate-800" autofocus="true">
                </div>
                <Button class="min-w-[150px]">Search</Button>
            </div>

            <div class="grid col-span-1">
                <Button class="bg-orange-500">Print</Button>
            </div>
        </div>

        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <table class="w-full dark:text-white">
                <tr>
                    <vth>Date</vth>
                    <vth>Particulars</vth>
                    <vth>Stock In</vth>
                    <vth>Stock Out</vth>
                    <vth>Balance Stock</vth>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600 ">
                    <vtd class="text-center">01-01-2023</vtd>
                    <vtd class="font-bold">Opening Stock</vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-center">01 pcs</vtd>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600 ">
                    <vtd class="text-center">01-01-2023</vtd>
                    <vtd>Sale-**Invoice Number**-Customer Name</vtd>
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">05</vtd>
                    <vtd class="text-center">01 pcs</vtd>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600 ">
                    <vtd class="text-center">01-01-2023</vtd>
                    <vtd>Purchase-**Invoice Number**-Supplier Name</vtd>
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">05</vtd>
                    <vtd class="text-center">01 pcs</vtd>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600 ">
                    <vtd class="text-center">01-01-2023</vtd>
                    <vtd>Sale Return-**Invoice Number**-Customer Name</vtd>
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">05</vtd>
                    <vtd class="text-center">01 pcs</vtd>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600 ">
                    <vtd class="text-center">01-01-2023</vtd>
                    <vtd>Purchase Return-**Invoice Number**-Supplier Name</vtd>
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">05</vtd>
                    <vtd class="text-center">01 pcs</vtd>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600 ">
                    <vtd class="text-center">01-01-2023</vtd>
                    <vtd>Adjustment-**Reference Number**-Employee Name- Adjustment Reason</vtd>
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">05</vtd>
                    <vtd class="text-center">01 pcs</vtd>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600 ">
                    <vtd class="text-center">01-01-2023</vtd>
                    <vtd>Transfer-**Transfer Invoice**- Employee Name-From: Source Warehouse</vtd>
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">05</vtd>
                    <vtd class="text-center">01 pcs</vtd>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600 ">
                    <vtd class="text-center">01-01-2023</vtd>
                    <vtd>Transfer-**Transfer Invoice**- Employee Name-To: Destination Warehouse</vtd>
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">05</vtd>
                    <vtd class="text-center">01 pcs</vtd>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600 ">
                    <vtd class="text-center">01-01-2023</vtd>
                    <vtd class="font-bold">Closing Stock</vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-center"></vtd>
                    <vtd class="text-center">01 pcs</vtd>
                </tr>
                <tr class="">
                    <vth colspan="2" class="text-right bg-white dark:bg-slate-700 border-none">Total</vth>
                    <vth colspan="1" class="text-center bg-white dark:bg-slate-700 border-none">11 pcs</vth>
                    <vth colspan="1" class="text-center bg-white dark:bg-slate-700 border-none">11 pcs</vth>
                    <vth colspan="1" class="text-center bg-white dark:bg-slate-700 border-none">11 pcs</vth>
                </tr>
            </table>
        </div>
    </main>
</template>


<script>
import { ref } from 'vue';
import Button from '@/components/global/Button.vue';
import Popup from "@/components/global/PopUp.vue";

export default {
    components: {
        Button,
        Popup,
    },

    setup() {
        const AddNewSuppliersModel = ref(false);
        const AddNewSuppliersFun = () => {
            AddNewSuppliersModel.value = !AddNewSuppliersModel.value;
        }

        const AddNewDistrictModel = ref(false);
        const AddNewDistrictFun = () => {
            AddNewDistrictModel.value = !AddNewDistrictModel.value;
        }
        return {
            AddNewSuppliersModel,
            AddNewSuppliersFun,
            AddNewDistrictModel,
            AddNewDistrictFun,
        }
    }
}


</script>