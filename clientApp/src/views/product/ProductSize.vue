<template>
    <main>
        <div class="">
            <div class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Unit List</div>
            <!-- <div class="flex justify-between items-center">
                <Button @click="goBack" type="button" class="flex items-center justify-center w-1/2 px-5 py-3 text-sm whitespace-nowrap text-gray-700 hover:text-white transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-600">
                    <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Go back</span>
                </Button>
            </div> -->
            <div class="bg-white dark:bg-slate-700 rounded-md p-5">
                <div class="flex justify-between items-end">
                    <!-- add Size -->
                    <div>
                        <div @click="popUpClick" :class="{ 'hidden': isActive }" class="bg-black/40 w-full h-full top-0 left-0 z-[1000] text-white text-2xl font-bold text-center absolute"></div>
                        <div :class="{ 'hidden': isActive }" class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                            <div class="">
                                <div class="flex justify-between items-center pb-5">
                                    <h2 class="text-2xl dark:text-white">Add Size</h2>
                                    <button @click="popUpClick" :class="{ 'hidden': isActive }" class="bg-red-200 hover:bg-red-500 w-8 h-8      rounded-full group">
                                        <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                                    </button>
                                </div>
                                <div class="grid gap-4">
                                    <div class="grid gap-2 dark:text-white">
                                        <p class="">Size Type Name *</p>
                                        <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                    </div>
                                    <div class="grid gap-2 dark:text-white">
                                        <p class="">Size Name</p>
                                        <div class="bg-white dark:bg-slate-600 rounded">
                                            <div class="flex items-center justify-between p-2">
                                                <input type="text" class="dark:bg-slate-800">
                                                <Button>Add</Button>
                                            </div>
                                            <div class="m-2 ">
                                                <table class="w-full">
                                                    <tbody>
                                                        <tr class="">
                                                            <vtd><input type="text" class="w-full border-none focus:border dark:bg-slate-800" value="Item 1"></vtd>
                                                            <vtd class="w-10">
                                                                <button>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="bg-red-100 w-8 h-8 p-1 rounded-full text-red-500 hover:bg-red-500 hover:text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M4 7l16 0"></path>
                                                                        <path d="M10 11l0 6"></path>
                                                                        <path d="M14 11l0 6"></path>
                                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                                                    </svg>
                                                                </button>
                                                            </vtd>
                                                        </tr>
                                                        <tr class="">
                                                            <vtd><input type="text" class="w-full border-none focus:border dark:bg-slate-800" value="Item 1"></vtd>
                                                            <vtd class="w-10">
                                                                <button>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="bg-red-100 w-8 h-8 p-1 rounded-full text-red-500 hover:bg-red-500 hover:text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M4 7l16 0"></path>
                                                                        <path d="M10 11l0 6"></path>
                                                                        <path d="M14 11l0 6"></path>
                                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                                                    </svg>
                                                                </button>
                                                            </vtd>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <Button>Add</Button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button @click="popUpClick" class="grid justify-center items-center text-white bg-green-500">
                                Add New Size
                            </Button>
                        </div>
                    </div>
                    <div>
                        <div class="grid w-full gap-2 dark:text-white">
                            <label for="">Size</label>
                            <input type="text" class="w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Select/Search Size">
                        </div>
                    </div>
                    <!-- <div class="flex gap-5">
                        <Button title="Export as excel" class="w-20 grid justify-center items-center border whitespace-nowrap text-white bg-gray-600">
                            Export
                        </Button>
                        <a href="./unit-bulk-import" title="Import">
                            <Button class="w-20 p-2 whitespace-nowrap text-white bg-gray-600">
                                Import
                            </Button>
                        </a>
                    </div> -->
                    <Button class="w-20 grid justify-center items-center whitespace-nowrap text-white bg-[#f97316]">
                        Print
                    </Button>
                </div>
            </div>
            <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
                <table class="w-full dark:text-white">
                    <tr>
                        <vth>SL.</vth>
                        <vth>Size Type Name</vth>
                        <vth>Size Name</vth>
                        <vth>Status</vth>
                        <vth>Action</vth>
                    </tr>
                    <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                        <vtd class="text-center">01</vtd>
                        <vtd class="text-center">Shu Size</vtd>
                        <vtd class="text-center">42, 43, 44</vtd>
                        <vtd class="text-center">
                            <Button class=" w-16 px-1 py-0">Active</Button>
                        </vtd>
                        <vtd>
                            <div class="flex items-center justify-center">
                                <button title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </vtd>
                    </tr>
                    <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                        <vtd class="text-center">01</vtd>
                        <vtd class="text-center">Set</vtd>
                        <vtd class="text-center">Set</vtd>
                        <vtd class="text-center">
                            <Button class="bg-red-500  w-16 px-1 py-0">Inactive</Button>
                        </vtd>
                        <vtd>
                            <div class="flex items-center justify-center">
                                <button title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </vtd>
                    </tr>
                    <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                        <vtd class="text-center">01</vtd>
                        <vtd class="text-center">Pair</vtd>
                        <vtd class="text-center">Pair</vtd>
                        <vtd class="text-center">
                            <Button class="bg-red-500  w-16 px-1 py-0">Inactive</Button>
                        </vtd>
                        <vtd>
                            <div class="flex items-center justify-center">
                                <button title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </vtd>
                    </tr>
                </table>
            </div>
        </div>
    </main>
</template>

<script setup>
import Button from '@/components/global/Button.vue';
import { ref } from 'vue';

const isActive = ref('true');
const popUpClick = () => {
    isActive.value = !isActive.value;
};


const goBack = () => {
    window.history.back();
};
</script>