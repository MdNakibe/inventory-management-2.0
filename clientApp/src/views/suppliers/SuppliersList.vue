<template>
    <main>

        <div class="">
            <Popup :modalStatus="AddNewDistrictModel" @close="AddNewDistrictFun">
                <template #addContent>
                    <div @click="AddNewDistrictFun" class="bg-black/40 w-full h-full top-0 left-0 z-[999] text-white text-2xl font-bold text-center absolute"></div>
                    <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                        <div class="dark:text-white">
                            <div class="flex justify-between items-center pb-5">
                                <h2 class="text-2xl ">Add New District</h2>
                                <button @click="AddNewDistrictFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 rounded-full group">
                                    <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                                </button>
                            </div>
                            <div class="grid gap-4">
                                <div class="grid gap-2">
                                    <p class="">District Name</p>
                                    <input v-model="areaData.name" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                </div>
                                <div>
                                    <Button @click="saveArea" class="w-28">Add</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Popup>
        </div>



        <div class="flex justify-between">
            <span class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Suppliers List</span>
            <!-- add new supplier -->
            <div class="">
                <Popup :modalStatus="AddNewSuppliersModel" @close="AddNewSuppliersFun">
                    <template #addContent>
                        <div @click="AddNewSuppliersFun" class="bg-black/40 w-full h-full top-0 left-0 z-[900] text-white text-2xl font-bold text-center absolute"></div>
                        <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[901] border shadow-xl p-5 rounded">
                            <div class="dark:text-white">
                                <div class="flex justify-between items-center pb-5">
                                    <h2 class="text-2xl ">Add New Suppliers</h2>
                                    <button @click="AddNewSuppliersFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 rounded-full group">
                                        <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                                    </button>
                                </div>
                                <div class="grid gap-4">
                                    <div class="flex gap-5">
                                        <div class="grid gap-2">
                                            <p class="">Supplier ID</p>
                                            <input type="text" v-model="supplier.code" disabled class="p-2 min-w-[300px] dark:bg-slate-800" placeholder="Auto Generate">
                                        </div>
                                        <div class="grid gap-2">
                                            <p class="">Mobile</p>
                                            <input type="text" v-model="supplier.phone" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                                        </div>
                                    </div>
                                    <div class="flex gap-5">
                                        <div class="grid gap-2">
                                            <p class="">Supplier Name</p>
                                            <input type="text" v-model="supplier.name" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                                        </div>
                                        <div class="grid gap-2">
                                            <p class="">Office Phone</p>
                                            <input type="text" v-model="supplier.office_phone" class="p-2 min-w-[300px] dark:bg-slate-800">
                                        </div>
                                    </div>
                                    <div class="flex gap-5">
                                        <div class="grid gap-2">
                                            <p class="">Contact Person</p>
                                            <input type="text" v-model="supplier.office_name" class="p-2 min-w-[300px] dark:bg-slate-800">
                                        </div>
                                        <div class="grid gap-2">
                                            <p class="">Email</p>
                                            <input type="email" v-model="supplier.email" class="p-2 min-w-[300px] dark:bg-slate-800">
                                        </div>
                                    </div>
                                    <div class="flex gap-5">
                                        <div class="flex items-end gap-2 w-full">
                                            <div class="grid gap-2 w-full">
                                                <p class="">District</p>
                                                <model-list-select :list="$store.getters['area/area']" option-value="id" option-text="name" v-model="supplier.area_id" />
                                            </div>
                                            <div class="">
                                                <Button @click="AddNewDistrictFun" class="w-11 h-11 grid justify-center items-center border rounded-full border-green-500">
                                                    <i class="fa-solid fa-plus"></i>
                                                </Button>
                                            </div>
                                        </div>
                                        <div class="grid gap-2">
                                            <p class="">Opening Balance</p>
                                            <input type="text" v-model="supplier.opening_balance" class="p-2 min-w-[300px] dark:bg-slate-800">
                                        </div>
                                    </div>
                                    <div class="grid gap-2">
                                        <p class="">Address</p>
                                        <textarea name="" v-model="supplier.address" id="" cols="30" rows="3" class="dark:bg-slate-800" required>{{ supplier.address }}</textarea>
                                    </div>
                                    <div class="flex justify-center gap-10">
                                        <Button @click="saveSupplier" class="w-28">Confirm</Button>
                                        <Button @click="clearInputData" class="w-28 bg-red-500">Clear</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Popup>
                <Button @click="AddNewSuppliersFun" class="whitespace-nowrap bg-[#1565c0]">Add New Supplier</Button>
            </div>
        </div>
        <div class="grid justify-between grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-28 items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="grid w-full gap-2 dark:text-white col-span-1">
                <label for="">Supplier</label>
                <input type="text" class="w-full dark:bg-slate-800" autofocus="true" placeholder="Select/Search Supplier" v-model="searchTerm">
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
            <DataView :value="filteredsupplier" dataKey="id"
                :paginator="filteredsupplier.length>10 ? true : false" :rows="10" 
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
            <template #list="slotProps">
            <table class="w-full dark:bg-slate-700 dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Supplier ID</vth>
                    <vth>Supplier Name</vth>
                    <vth>Contact Person</vth>
                    <vth>Mobile</vth>
                    <vth>Email</vth>
                    <vth>Address</vth>
                    <vth>Credit Limit</vth>
                    <vth>Action</vth>
                </tr>
                <tr v-for="(item, ind) in slotProps.items" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">{{ ind + 1 }}</vtd>
                    <vtd class="text-center">{{ item.code }}</vtd>
                    <vtd>{{ item.name }}</vtd>
                    <vtd>{{ item.office_name }}</vtd>
                    <vtd class="text-center">{{ item.phone }}</vtd>
                    <vtd class="text-center">{{ item.email }}</vtd>
                    <vtd>{{ item.address }}</vtd>
                    <vtd class="text-right">{{ item.opening_balance }}</vtd>
                    <vtd class="text-center">
                        <button @click="supplierDelete(item)" title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <button @click="editsupplier(item)" title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                    </vtd>
                </tr>
                <tr class="">
                    <vth colspan="7" class="text-right bg-white dark:bg-slate-700 border-none">Total Suppliers Due:</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                </tr>
            </table>
        </template>
    </DataView>
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
    },
    data() {
        return {
            searchTerm: '',
            categoryData: {
                name: '',
                id: null,
                description: '',
            },
            supplier: {
                id: null,
                code: '',
                name: '',
                phone: '',
                email: '',
                opening_balance: '',
                area_id: '',
                office_phone: '',
                office_name: '',
                address: '',
            },
            areaData: {
                name: '',
                id: null,
            }
        }
    },
    async created() {
        this.supplier.code = await this.$store.dispatch('supplier/generateSupplierCode');
        await this.$store.dispatch('supplier/getSupplier');
        this.getArea();
    },
    computed: {
        filteredsupplier() {
            const supplier = this.$store.getters['supplier/suppliers'];
            if (this.searchTerm === '') {
                return supplier;
            } else {
                return supplier.filter(supplier => this.suppliersListGlobalFilter(supplier, this.searchTerm));
            }
        },
    },
    methods: {
        getArea() {
            this.$store.dispatch("area/getArea")
        },
        async saveArea() {
            let isSuccess = await this.$store.dispatch('area/saveArea', this.areaData);
            if (isSuccess) {
                this.AddNewDistrictModel = false
                this.areaData.name = '';
                this.areaData.id = null;
            }
        },
        async saveSupplier() {
            if (!this.supplier.name) {
                return this.$store.dispatch('notification/error', 'Supplier Name is required');
            }
            if (!this.supplier.phone) {
                return this.$store.dispatch('notification/error', 'Supplier Phone is required');
            }
            if (!this.supplier.address) {
                return this.$store.dispatch('notification/error', 'Supplier Address is required');
            }
            let isSuccess = await this.$store.dispatch('supplier/saveSupplier', this.supplier);
            if (isSuccess) {
                this.AddNewSuppliersModel = false
                this.supplier.id = '';
                this.supplier.code = '';
                this.supplier.name = '';
                this.supplier.phone = '';
                this.supplier.email = '';
                this.supplier.office_name = '';
                this.supplier.office_phone = '';
                this.supplier.opening_balance = '';
                this.supplier.area_id = '';
                this.supplier.code = await this.$store.dispatch('supplier/generateSupplierCode');
            }
        },
        editsupplier(item) {
            this.AddNewSuppliersModel = true;
            this.supplier.id = item.id;
            this.supplier.code = item.code;
            this.supplier.name = item.name;
            this.supplier.phone = item.phone;
            this.supplier.email = item.email;
            this.supplier.office_name = item.office_name;
            this.supplier.office_phone = item.office_phone;
            this.supplier.opening_balance = item.opening_balance;
            this.supplier.area_id = item.area_id;
            this.supplier.address = item.address;
        },
        async supplierDelete(id) {
            let data = {
                id: id,
            }
            await this.$store.dispatch('supplier/supplierDelete', data);
        },
        clearInputData() {
            this.supplier.name = '';
            this.supplier.phone = '';
            this.supplier.email = '';
            this.supplier.office_name = '';
            this.supplier.office_phone = '';
            this.supplier.opening_balance = '';
            this.supplier.area_id = '';
            this.supplier.address = '';
        }
    },
}


</script>