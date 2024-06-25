<template>
    <main>
        <div>
            <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Profile Setting</h1>
            <div class="bg-white dark:bg-slate-700 rounded-md p-5">
                <div class="max-w-screen-lg mx-auto grid grid-cols-2 items-start gap-10">
                    <div class="grid gap-3">
                        <div class="grid grid-cols-4 justify-between items-center dark:text-white">
                            <p class="col-span-1">Name</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                        <div class="grid grid-cols-4 justify-between items-center dark:text-white">
                            <p class="col-span-1">User Name</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                        <div class="grid grid-cols-4 justify-between items-center dark:text-white">
                            <p class="col-span-1">E-Mail</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                        <div class="grid grid-cols-4 justify-between items-center dark:text-white">
                            <p class="col-span-1">Phone</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                    </div>
                    <div class="grid gap-3">
                        <div class="grid grid-cols-4 justify-between items-center dark:text-white">
                            <p class="col-span-1">Current Password</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                        <div class="grid grid-cols-4 justify-between items-center dark:text-white">
                            <p class="col-span-1">New Password</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                        <div class="grid grid-cols-4 justify-between items-center dark:text-white">
                            <p class="col-span-1">Confirm Password</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                        <div class="grid grid-cols-4 justify-between items-center">
                            <div class="col-span-1"></div>
                            <div class="col-span-3 flex gap-5">
                                <Button class="w-full">Save</Button>
                                <Button class="w-full bg-red-500">Clear</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

        return {

        }
    }
}
</script>