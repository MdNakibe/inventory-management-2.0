<template>
    <main>
        <div class="text-green-800">
            <div class="flex justify-between items-center mb-5">
                <div class=" text-2xl text-slate-700 dark:text-white font-bold">Bulk Import</div>
                <Button @click="goBack" type="button" class="flex items-center justify-center w-1/2 px-5 py-3 text-sm whitespace-nowrap text-gray-700 dark:text-white hover:text-white transition-colors duration-200 bg-white dark:bg-slate-600 border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-600">
                    <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Go back</span>
                </Button>
            </div>
            <div class="bg-white dark:bg-slate-700 rounded-md p-5">
                <div class="flex items-start gap-10">
                    <div class="grid gap-5 border-r pr-10">
                        <h2 class="dark:text-white">Download <strong class="bg-green-200 dark:bg-green-500 font-semibold text-green-600 dark:text-white px-2 py-1 rounded">
                                <a href="https://mediaservice.biznify.com.bd/Item_Import_Format.xlsx">sample xlsx file</a>
                            </strong> and compare it to your import file to ensure you have the file perfect for the import.</h2>
                        <div>
                            <div class="flex items-center justify-center w-full">
                                <label for="fileInput" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 dark:border-slate-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-slate-600 dark:bg-slate-800 hover:bg-gray-100 dark:hover:border-gray-500">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-white"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-white">Supported Formates: XLX, XLSX</p>
                                    </div>
                                    <input type="file" @change="handleFileChange" id="fileInput" ref="fileInputRef" class="hidden" />
                                </label>
                            </div>
                            <p class="text-xs text-red-500 pt-1 text-center">Please select only XLX, XLSX</p>
                        </div>
                        <div v-if="fileName" class="flex items-center justify-between gap-5 border border-dashed rounded dark:border-slate-600 p-2 dark:bg-slate-800">
                            <div class="flex items-center gap-2 dark:text-green-500">
                                <i class="fa-solid fa-file-excel"></i>
                                <span>{{ fileName }}</span>
                            </div>
                            <button @click="closeFile" class="rounded-full bg-red-100 text-red-500 hover:text-white hover:bg-red-500 w-8 h-8">
                                <i class="fa-sharp fa-regular fa-xmark"></i>
                            </button>
                        </div>
                        <div>
                            <Button>Upload file</Button>
                        </div>
                    </div>
                    <div class="">
                        <div class="flex items-center gap-1 pb-2 dark:text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bulb" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path>
                                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path>
                                <path d="M9.7 17l4.6 0"></path>
                            </svg>
                            <span class="">
                                <strong>Import Tips</strong>
                            </span>
                        </div>
                        <ul class="list-disc leading-8 text-[13px] pl-5 dark:text-white">
                            <li class="">You can download the <strong class="bg-green-200 dark:bg-green-500 font-semibold text-green-600 dark:text-white px-2 py-1 rounded">
                                    <a href="https://mediaservice.biznify.com.bd/Item_Import_Format.xlsx">sample xlsx file</a>
                                </strong> to get detailed information about the data fields used while importing.</li>
                            <li class="">Your file should be in XLS or XLSX format.</li>
                            <li class="">In sample file, required column headers are star marked and have required note on them.</li>
                            <li class="">Make sure that no required columns are empty.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<script setup>
import Button from '@/components/global/Button.vue';
import { ref } from 'vue';

const fileName = ref();
const handleFileChange = (event) => {
    const file = event.target.files[0].name;
    fileName.value = file;
}
const fileInputRef = ref(null);
const closeFile = () => {
    fileName.value = null;
    const fileInput = fileInputRef.value;
    if (fileInput) {
        fileInput.value = '';
    };
};


const goBack = () => {
    window.history.back();
};

</script>