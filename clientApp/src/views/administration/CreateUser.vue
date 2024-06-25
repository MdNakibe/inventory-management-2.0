<template>
    <main>
        <div>
            <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Create User</h1>
            <div class="bg-white dark:bg-slate-700 rounded-md p-5">
                <div class="max-w-screen-lg mx-auto grid grid-cols-2 items-start gap-10">
                    <div class="grid gap-3">
                        <div class="grid grid-cols-4 justify-between  dark:text-white">
                            <p class="col-span-1">Full Name</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                        <div class="grid grid-cols-4 justify-between  dark:text-white">
                            <p class="col-span-1">Phone</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                        <div class="grid grid-cols-4 justify-between  dark:text-white">
                            <p class="col-span-1">E-Mail</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                        <div class="grid grid-cols-4 justify-between  dark:text-white">
                            <p class="col-span-1">Branch</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                        <div class="grid grid-cols-4 justify-between  dark:text-white">
                            <p class="col-span-1">User Type</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                    </div>
                    <div class="grid gap-3">
                        <div class="grid grid-cols-4 justify-between  dark:text-white">
                            <p class="col-span-1">Username</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                        <div class="grid grid-cols-4 justify-between  dark:text-white">
                            <p class="col-span-1">Password</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                        <div class="grid grid-cols-4 justify-between  dark:text-white">
                            <p class="col-span-1">Re-type</p>
                            <input type="text" class="col-span-3  dark:bg-slate-800">
                        </div>
                        <div class="grid grid-cols-4 justify-between">
                            <div class="col-span-1"></div>
                            <div class="col-span-3 flex gap-5">
                                <Button class="w-full">Save</Button>
                                <Button class="w-full bg-red-500">Clear</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
                <div class="flex gap-10 items-center mb-5">
                    <h1 class="text-xl text-slate-700 dark:text-white font-semibold">User List</h1>
                    <div>
                        <input type="text" placeholder="Search User" class="w-[300px] dark:bg-slate-800 dark:text-white">
                    </div>
                </div>
                <table class="w-full dark:text-white">
                    <tr>
                        <vth>SL.</vth>
                        <vth>Name</vth>
                        <vth>User Name</vth>
                        <vth>Branch</vth>
                        <vth>Phone</vth>
                        <vth>E-mail</vth>
                        <vth>Type</vth>
                        <vth>Action</vth>
                    </tr>
                    <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                        <vtd>1</vtd>
                        <vtd>MD. Sazib</vtd>
                        <vtd>Sazib</vtd>
                        <vtd>Main Branch</vtd>
                        <vtd>01827892900</vtd>
                        <vtd>mssazib@gmail.com</vtd>
                        <vtd>Admin</vtd>
                        <vtd>
                            <div class="grid 2xl:flex gap-1 items-center justify-center">
                                <button title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                                <button title="Permission" class="hover:bg-[#000] py-0.5 px-1.5 bg-[#eee] rounded text-[#000] hover:text-white mr-1">
                                    <i class="fa-sharp fa-regular fa-key"></i>
                                </button>
                            </div>
                        </vtd>
                    </tr>
                    <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                        <vtd>1</vtd>
                        <vtd>MD. Sazib</vtd>
                        <vtd>Sazib</vtd>
                        <vtd>Main Branch</vtd>
                        <vtd>01827892900</vtd>
                        <vtd>mssazib@gmail.com</vtd>
                        <vtd>Super Admin</vtd>
                        <vtd>
                            <div class="grid 2xl:flex gap-1 items-center justify-center">
                                <button title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                            </div>
                        </vtd>
                    </tr>
                    <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                        <vtd>1</vtd>
                        <vtd>MD. Sazib</vtd>
                        <vtd>Sazib</vtd>
                        <vtd>Main Branch</vtd>
                        <vtd>01827892900</vtd>
                        <vtd>mssazib@gmail.com</vtd>
                        <vtd>Super Admin</vtd>
                        <vtd>
                            <div class="grid 2xl:flex gap-1 items-center justify-center">
                                <button title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                            </div>
                        </vtd>
                    </tr>
                </table>
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