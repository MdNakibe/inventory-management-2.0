<template>
    <main>
        <div >
            <div class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Brand List</div>
            <!-- <div class="flex justify-between items-center">
                <Button @click="goBack" type="button" class="flex items-center justify-center w-1/2 px-5 py-3 whitespace-nowrap text-sm text-gray-700 hover:text-white transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-600">
                    <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Go back</span>
                </Button>
            </div> -->
            <div class="bg-white dark:bg-slate-700 rounded-md p-5">
                <div class="flex justify-between items-end">
                    <div>
                        <Popup :modalStatus="AddNewBrandModel" @close="AddNewBrandFun">
                            <template #addContent >
                                <div @click="AddNewBrandFun" class="bg-black/40 w-full h-full z-[999] text-white text-2xl font-bold text-center absolute top-0 left-0"></div>
                                <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                                    <div class="flex justify-between items-center pb-5">
                                        <h2 class="text-2xl dark:text-white">Add Brand</h2>
                                        <button ref="myButton" @click="AddNewBrandFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 rounded-full group">
                                            <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                                        </button>
                                    </div>
                                    <div class="grid gap-4 dark:text-white">
                                        <div class="grid gap-2">
                                            <p >Brand</p>
                                            <input type="hidden" v-model="brandData.id" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                                            <input type="text" v-model="brandData.name" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                                        </div>
                                        <div class="grid gap-2">
                                            <p >Description</p>
                                            <textarea v-model="brandData.description" name="" id="" cols="30" rows="3" class="dark:bg-slate-800"></textarea>
                                        </div>
                                        <Button @click="saveBrand">Add</Button>
                                    </div>
                                </div>
                            </template>
                        </Popup>
                        <div>
                            <Button @click="AddNewBrandFun" class="grid justify-center items-center whitespace-nowrap text-white bg-green-500">
                                Add New Brand
                            </Button>
                        </div>
                    </div>
                    <div>
                        <div class="grid w-full gap-2 dark:text-white">
                            <label for="">Brand</label>
                            <input type="text" class="w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Select/Search Brand" v-model="searchTerm">
                        </div>
                    </div>
                    <div class="flex gap-5">
                        <Button title="Export as excel" class="w-20 grid justify-center items-center border whitespace-nowrap text-white bg-gray-600">
                            Export
                        </Button>
                        <a href="./brand-bulk-import" title="Import">
                            <Button class="w-20 p-2 whitespace-nowrap border text-white bg-gray-600">
                                Import
                            </Button>
                        </a>
                        <Button class="w-20 grid justify-center items-center  whitespace-nowrap text-white bg-[#f97316]">
                            Print
                        </Button>
                    </div>
                </div>

            </div>
            <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
                <DataView :value="filteredbrand" dataKey="id"
    :paginator="filteredbrand.length>10 ? true : false" :rows="10" :filters="filters"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
            <template #list="slotProps">
                <table class="w-full dark:bg-slate-700 dark:text-white">
                    <tr>
                        <vth>SL.</vth>
                        <vth>Brand Name</vth>
                        <vth>Description</vth>
                        <vth>Status</vth>
                        <vth>Action</vth>
                    </tr>
                    <tr v-for="(item, ind) in slotProps.items" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                        <vtd class="text-center">{{ ind + 1 }}</vtd>
                        <vtd class="text-center">{{ item.name }}</vtd>
                        <vtd class="text-center">{{ item.description }}</vtd>
                        <vtd class="text-center">
                            <Button @click="statusUpdate(item.id, 1)" class="bg-red-500 w-16 px-1 py-0" v-if="item.status == 0">Inactive</Button>
                            <Button @click="statusUpdate(item.id, 0)" class="bg-green-500 w-16 px-1 py-0" v-if="item.status == 1">Active</Button>
                        </vtd>
                        <vtd>
                            <div class="flex items-center justify-center">
                                <button @click="editBrand(item)" title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button @click="brandDelete(item.id)" title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </vtd>
                    </tr>
                </table>
            </template>
        </DataView>
            </div>
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

    data() {
        return {
            searchTerm: '',
            brandData: {
                id: '',
                name: '',
                description: '',
            },
            model: true,
        }
    },

    created() {
        this.getBrand();
    },
    computed: {
        filteredbrand() {
            const brand = this.$store.getters['brand/brands'];
            if (this.searchTerm === '') {
                return brand;
            } else {
                return brand.filter(brand => this.categoryGlobalFilter(brand, this.searchTerm));
            }
        },
    },


    methods: {
        getBrand() {
            this.$store.dispatch("brand/getBrands")
        },
        async saveBrand() {
            // const buttonElement = this.$refs.myButton;
            if(!this.brandData.name){
                return this.$store.dispatch('notification/error', 'Brand Name is required');
            }

            let isSuccess = await this.$store.dispatch('brand/saveBrand', this.brandData);
            if (isSuccess) {
                this.AddNewBrandModel = false
                this.brandData.id = null;
                this.brandData.name = '';
                this.brandData.description = '';
            }
        },
        editBrand(item) {
            this.AddNewBrandModel = true;
            this.brandData.id = item.id;
            this.brandData.name = item.name;
            this.brandData.description = item.description;
        },
        async statusUpdate(id, code) {
            let data = {
                id: id,
                code: code,
            }
            await this.$store.dispatch('brand/statusUpdate', data);
        },
        async brandDelete(id) {
            let data = {
                id: id,
            }
            await this.$store.dispatch('brand/brandDelete', data);
        },
    },

    setup() {
        const AddNewBrandModel = ref(false);
        const AddNewBrandFun = () => {
            AddNewBrandModel.value = !AddNewBrandModel.value;
        };

        const goBack = () => {
            window.history.back();
        }

        return {
            AddNewBrandModel,
            AddNewBrandFun,
            goBack,
        }
    }
}
</script>

<style>
.p-paginator.p-component {
    border: 1px solid #ddd;
    margin-top: 20px;
}
.p-dropdown.p-component.p-inputwrapper.p-inputwrapper-filled.p-paginator-rpp-options {
    border: 1px solid #ddd !important;
}
button.p-paginator-page.p-paginator-element.p-link.p-highlight {
    background: #F0FDFA;
    color: #22C55E;
}
</style>