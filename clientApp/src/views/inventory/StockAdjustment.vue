<template>
    <main>
        <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Stock Adjustment</h1>
        <div class="grid  gap-5 bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="flex gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end ">
                <div>
                    <Popup :modalStatus="RecordNewAdjustmentModel" @close="RecordNewAdjustmentFun">
                        <template #addContent class="">
                            <div @click="RecordNewAdjustmentFun" class="bg-black/40 w-full h-full z-[999] text-white text-2xl font-bold text-center absolute top-0 left-0"></div>
                            <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                                <div class="flex justify-between items-center pb-5">
                                    <h2 class="text-2xl dark:text-white">Record New Adjustment</h2>
                                    <button @click="RecordNewAdjustmentFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 rounded-full group">
                                        <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                                    </button>
                                </div>
                                <div class="grid gap-4 dark:text-white">
                                    <div class="flex items-end gap-2 ">
                                        <div class="grid gap-2">
                                            <p class="">Reference No.</p>
                                            <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                        </div>
                                        <div class="grid gap-2">
                                            <p class="">Date</p>
                                            <input type="date" class="p-2 min-w-[300px] dark:bg-slate-800">
                                        </div>
                                    </div>
                                    <div class="grid gap-2">
                                        <p class="">Product</p>
                                        <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                    </div>
                                    <div class="grid gap-2">
                                        <p class="">Adjustment Reason</p>
                                        <textarea name="" id="" cols="30" rows="3" class="dark:bg-slate-800"></textarea>
                                    </div>
                                    <div class="flex items-end gap-2 ">
                                        <div class="grid gap-2">
                                            <p class="">Unit Value</p>
                                            <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                        </div>
                                        <div class="grid gap-2">
                                            <p class="">Quantity</p>
                                            <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                        </div>
                                    </div>
                                    <div class="flex items-end gap-2 ">
                                        <div>
                                            <div class="grid gap-2">
                                                <p class="">Total Value</p>
                                                <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                        </div>
                                        <div class="mx-auto">
                                            <div class="border border-black/60 p-5 rounded text-2xl font-bold dark:bg-slate-800">25</div>
                                        </div>
                                    </div>
                                    <div class="flex justify-between gap-10">
                                        <Button class="w-28">Confirm</Button>
                                        <Button class="w-28 bg-red-500">Clear</Button>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Popup>
                    <div>
                        <Button @click="RecordNewAdjustmentFun" class="whitespace-nowrap bg-green-500 px-5">Record New Adjustment</Button>
                    </div>
                </div>
                <div class="flex items-center gap-5">
                    <div class="grid w-full gap-2 dark:text-white">
                        <label for="">Product</label>
                        <input type="text" class=" max-w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Search by Product">
                    </div>
                    <div class="grid gap-2 min-w-[200px] dark:text-white">
                        <span class="">Category</span>
                        <select name="" id="" class="dark:bg-slate-800">
                            <option value="" disabled selected>Select</option>
                            <option value="">1200000</option>
                            <option value="">1200000</option>
                            <option value="">1200000</option>
                        </select>
                    </div>
                    <div class="grid gap-2 min-w-[200px] dark:text-white">
                        <span class="">Brand</span>
                        <select name="" id="" class="dark:bg-slate-800">
                            <option value="" disabled selected>Select</option>
                            <option value="">1200000</option>
                            <option value="">1200000</option>
                            <option value="">1200000</option>
                        </select>
                    </div>
                </div>
                <div class="">
                    <Button class="bg-orange-500 px-5">Print</Button>
                </div>
            </div>
            <div class="flex gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end">
                <div>
                    <div class="grid w-full gap-2 dark:text-white">
                        <label for="">Find</label>
                        <input type="text" class=" max-w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Enter Reference Number">
                    </div>
                </div>
                <div class="flex items-end gap-5 dark:text-white">
                    <div class="grid w-full gap-2">
                        <label for="">Date From </label>
                        <input type="date" class="dark:bg-slate-800 min-w-[200px]" autofocus="true">
                    </div>
                    <div class="grid w-full gap-2">
                        <label for="">Date To</label>
                        <input type="date" class="dark:bg-slate-800 min-w-[200px]" autofocus="true">
                    </div>
                    <div class="">
                        <Button class="bg-green-500 px-5">Search</Button>
                    </div>
                </div>
            </div>

        </div>


        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <table class="w-full dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Date</vth>
                    <vth>Reference</vth>
                    <vth>Product Name</vth>
                    <vth>Quantity</vth>
                    <vth>Unit Value</vth>
                    <vth>Total Value</vth>
                    <vth>Adjustment Reason</vth>
                    <vth>Recorded By</vth>
                    <vth>Action</vth>
                </tr>
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">01</vtd>
                    <vtd class="text-center">P-00001</vtd>
                    <vtd class="text-center">fgkhgrdtl68i</vtd>
                    <vtd class="text-center">Lorem, ipsum</vtd>
                    <vtd class="text-center">Lorem, ipsum</vtd>
                    <vtd class="text-center">Lorem, ipsum</vtd>
                    <vtd class="text-center">Lorem, ipsum.</vtd>
                    <vtd class="text-center">Pcs/Set/Pair</vtd>
                    <vtd class="text-right">12,000.00</vtd>
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
import Popup from '@/components/global/PopUp.vue';
import { ref } from 'vue';



export default {
    components: {
        Button,
        Popup,
    },

    setup() {
        const RecordNewAdjustmentModel = ref(false);
        const RecordNewAdjustmentFun = () => {
            RecordNewAdjustmentModel.value = !RecordNewAdjustmentModel.value;
        }
        return {
            RecordNewAdjustmentModel,
            RecordNewAdjustmentFun,
        }
    }
}

</script>