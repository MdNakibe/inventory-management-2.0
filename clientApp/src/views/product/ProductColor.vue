<template>
    <main>
        <div class="">
            <div class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Color List</div>
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
                    <!-- add color -->
                    <div>
                        <div @click="popUpClick" :class="{ 'hidden': isActive }" class="bg-black/40 w-full h-full top-0 left-0 z-[1000] text-white text-2xl font-bold text-center absolute"></div>
                        <div :class="{ 'hidden': isActive }" class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                            <div class="">
                                <div class="flex justify-between items-center pb-5">
                                    <h2 class="text-2xl dark:text-white">Add Color</h2>
                                    <button @click="popUpClick" :class="{ 'hidden': isActive }" class="bg-red-200 hover:bg-red-500 w-8 h-8      rounded-full group">
                                        <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                                    </button>
                                </div>
                                <div class="grid gap-4">
                                    <div class="grid gap-2 dark:text-white">
                                        <p class="">Color Name (*)</p>
                                        <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                    </div>
                                    <div class="grid gap-2 dark:text-white">
                                        <p class="">Description</p>
                                        <textarea name="" id="" cols="30" rows="3" class="dark:bg-slate-800"></textarea>
                                    </div>
                                    <div>
                                        <Button class="float-right w-28">Add</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button @click="popUpClick" class="grid justify-center items-center text-white bg-green-500">
                                Add New Color
                            </Button>
                        </div>
                    </div>
                    <div>
                        <div class="grid w-full gap-2 dark:text-white">
                            <label for="">Color</label>
                            <input type="text" class="w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Select/Search color">
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
                        <vth>Color Name</vth>
                        <vth>Description</vth>
                        <vth>Status</vth>
                        <vth>Action</vth>
                    </tr>
                    <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                        <vtd class="text-center">01</vtd>
                        <vtd class="text-center">Yellow</vtd>
                        <vtd class="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing</vtd>
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
                        <vtd class="text-center">Green</vtd>
                        <vtd class="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing</vtd>
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
                        <vtd class="text-center">Red</vtd>
                        <vtd class="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing</vtd>
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


const goBack = () =>{
    window.history.back();
};
</script>