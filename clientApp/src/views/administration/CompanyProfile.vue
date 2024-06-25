<template>
    <main>
        <div>
            <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Company Information</h1>
            <div class="bg-white dark:bg-slate-700 rounded-md p-5">
                <div class="max-w-screen-sm mx-auto grid gap-2">
                    <div class="grid grid-cols-3 justify-between  dark:text-white">
                        <p class="col-span-1">Company Name</p>
                        <input type="text" class="col-span-2 dark:bg-slate-800">
                    </div>
                    <div class="grid grid-cols-3 justify-between  dark:text-white">
                        <p class="col-span-1">Address</p>
                        <div class="w-full col-span-2">
                            <textarea name="" id="" cols="10" rows="3" class="w-full  dark:bg-slate-800"></textarea>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 justify-between  dark:text-white">
                        <p class="col-span-1">Contact Us</p>
                        <input type="text" class="col-span-2 dark:bg-slate-800">
                    </div>
                    <div class="grid grid-cols-3 justify-between  dark:text-white">
                        <p class="col-span-1">E-mail</p>
                        <input type="text" class="col-span-2 dark:bg-slate-800">
                    </div>
                    <div class="grid grid-cols-3 justify-between  dark:text-white">
                        <p class="col-span-1">Company Logo</p>
                        <input type="file" @change="handleFileUpload" class="col-span-2 border p-1 rounded  dark:bg-slate-800 border-slate-500 dark:text-white">
                    </div>
                    <div v-if="imageUrl" class="grid grid-cols-3 justify-between  dark:text-white">
                        <div class="col-span-1"></div>
                        <div class="col-span-2 w-full border">
                            <img :src="imageUrl" alt="Uploaded Image" class="h-[150px] w-auto mx-auto ">
                        </div>
                    </div>
                    <div class="grid grid-cols-3 justify-between  dark:text-white">
                        <p class="col-span-1">Print Type</p>
                        <div class="flex items-center gap-10">
                            <div class="">
                                <label class="flex items-center gap-1 cursor-pointer select-none">
                                    <input type="radio" name="printType">
                                    <span>
                                        A4
                                    </span>
                                </label>
                            </div>
                            <div class="">
                                <label class="flex items-center gap-1 cursor-pointer select-none">
                                    <input type="radio" name="printType">
                                    <span class="whitespace-nowrap">
                                        1/2 A4
                                    </span>
                                </label>
                            </div>
                            <div class="">
                                <label class="flex items-center gap-1 cursor-pointer select-none">
                                    <input type="radio" name="printType">
                                    <span>
                                        POS
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 justify-between  dark:text-white mt-5">
                        <div class="col-span-1"></div>
                        <div class="col-span-2 flex gap-5">
                            <Button class="w-full">Save</Button>
                            <Button class="w-full bg-red-500">Clear</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<script>
import { ref } from 'vue';
import Button from '@/components/global/Button.vue';

export default {
    components: {
        Button,
    },

    setup() {
        const imageUrl = ref(null);

        const handleFileUpload = (event) => {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageUrl.value = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        };

        return {
            imageUrl,
            handleFileUpload,
        };
    },
};
</script>
