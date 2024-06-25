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
                                    <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800" v-model="areaData.name">
                                </div>
                                <div>
                                    <Button class="w-28" @click="saveArea">Add</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Popup>
        </div>

        <div class="flex justify-between">
            <span class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Customers List</span>
            <div class="">
                <Popup :modalStatus="AddNewCustomersModel" @close="AddNewCustomersFun">
                    <template #addContent>
                        <div @click="AddNewCustomersFun" class="bg-black/40 w-full h-full top-0 left-0 z-[900] text-white text-2xl font-bold text-center absolute"></div>
                        <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[901] border shadow-xl p-5 rounded">
                            <div class="dark:text-white">
                                <div class="flex justify-between items-center pb-5">
                                    <h2 class="text-2xl ">Add New Customer</h2>
                                    <button @click="AddNewCustomersFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 rounded-full group">
                                        <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                                    </button>
                                </div>
                                <div class="grid gap-4">
                                    <div class="flex gap-5">
                                        <div class="grid gap-2">
                                            <p class="">Customer ID</p>
                                            <input type="text" disabled class="p-2 min-w-[300px] dark:bg-slate-800" placeholder="Auto Generate" v-model="customer.code">
                                        </div>
                                        <div class="grid gap-2">
                                            <p class="">Mobile</p>
                                            <input type="number" class="p-2 min-w-[300px] dark:bg-slate-800" v-model="customer.phone">
                                        </div>
                                    </div>
                                    <div class="flex gap-5">
                                        <div class="grid gap-2">
                                            <p class="">Customer Name</p>
                                            <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800" v-model="customer.name">
                                        </div>
                                        <div class="grid gap-2">
                                            <p class="">Email</p>
                                            <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800" v-model="customer.email">
                                        </div>
                                    </div>
                                    <div class="flex gap-5">
                                        <div class="flex items-end gap-2 w-full">
                                            <div class="grid gap-2 w-full">
                                                <p class="">District</p>
                                                <model-list-select :list="$store.getters['area/area']" option-value="id" option-text="name" v-model="customer.district" />
                                            </div>
                                            <div class="">
                                                <Button @click="AddNewDistrictFun" class="w-11 h-11 grid justify-center items-center border rounded-full border-green-500">
                                                    <i class="fa-solid fa-plus"></i>
                                                </Button>
                                            </div>
                                        </div>
                                        <div class="grid gap-2">
                                            <p class="">Opening Balance</p>
                                            <input type="number" class="p-2 min-w-[300px] dark:bg-slate-800" v-model="customer.opening_balance">
                                        </div>
                                    </div>
                                    <div class="flex gap-5">
                                        <div class="grid gap-2">
                                            <p class="">Address</p>
                                            <textarea name="" id="" cols="35" rows="1" class="dark:bg-slate-800" v-model="customer.address"></textarea>
                                        </div>
                                        <div class="grid gap-2">
                                            <p class="">Credit Limit</p>
                                            <input type="number" class="p-2 min-w-[300px] dark:bg-slate-800" v-model="customer.credit_limit">
                                        </div>
                                    </div>
                                    <div class="flex justify-center gap-10">
                                        <Button class="w-28" @click="saveCustomer">Confirm</Button>
                                        <Button class="w-28 bg-red-500" @click="clearInputData">Clear</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Popup>
                <Button @click="AddNewCustomersFun" class="whitespace-nowrap bg-[#1565c0]">Add New Customer</Button>
            </div>
        </div>
        <div class="grid justify-between grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-28 items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="grid w-full gap-2 col-span-1 dark:text-white">
                <label for="">Customer</label>
                <input type="text" class="w-full dark:bg-slate-800" autofocus="true" placeholder="Select/Search Customer" v-model="searchTerm">
            </div>

            <div class="flex items-end gap-5 col-span-2 dark:text-white">
                <div class="grid w-full gap-2">
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
            <DataView :value="filteredCustomer" dataKey="id"
                :paginator="filteredCustomer.length>10 ? true : false" :rows="10"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
            <template #list="slotProps">
            <table class="w-full dark:bg-slate-700 dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Customer ID</vth>
                    <vth>Customer Name</vth>
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
                    <vtd class="text-center">{{ item.phone }}</vtd>
                    <vtd class="text-center">{{ item.email }}</vtd>
                    <vtd>{{ item.address }}</vtd>
                    <vtd class="text-right">{{ item.credit_limit }}</vtd>
                    <vtd class="text-center min-w-[80px]">
                        <Button @click="customerDelete(item.id)" title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                            <i class="fa-solid fa-trash"></i>
                        </Button>
                        <Button @click="editCustomer(item)" title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </Button>
                    </vtd>
                </tr>
                <!-- <tr class="">
                    <vth colspan="6" class="text-right bg-white dark:bg-slate-700 border-none">Total Suppliers Due:</vth>
                    <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">12,000.00</vth>
                </tr> -->
            </table>
        </template>
    </DataView>
        </div>
    </main>
</template>


<script>
import { ref } from 'vue';
import Button from '@/components/global/Button.vue';
import Popup from '@/components/global/PopUp.vue';


export default {
    components: {
        Button,
        Popup,
    },
    setup() {
        const AddNewCustomersModel = ref(false);
        const AddNewCustomersFun = () => {
            AddNewCustomersModel.value = !AddNewCustomersModel.value;
        }

        const AddNewDistrictModel = ref(false);
        const AddNewDistrictFun = () => {
            AddNewDistrictModel.value = !AddNewDistrictModel.value;
        }
        return {
            AddNewCustomersModel,
            AddNewCustomersFun,
            AddNewDistrictModel,
            AddNewDistrictFun,
        }
    },
    data() {
        return {
            customer: {
                id: null,
                code: '',
                phone: '',
                name: '',
                email: '',
                district: '',
                address: '',
                credit_limit: ''
            },
            areaData: {
                id: '',
                name: '',
            },
            searchTerm: '',
        }
    },
    async created() {
        this.customer.code = await this.$store.dispatch('customer/generateCustomerCode');
        await this.$store.dispatch('customer/getcustomer');
        this.$store.dispatch("area/getArea");
    },
    computed: {
        filteredCustomer() {
            const customer = this.$store.getters['customer/customer'];
            if (this.searchTerm === '') {
                return customer;
            } else {
                return customer.filter(customer => this.customersListGlobalFilter(customer, this.searchTerm));
            }
        },
    },

    methods: {
        async saveArea() {
		    let isSuccess = await this.$store.dispatch('area/saveArea', this.areaData);
            if(isSuccess) {
                this.AddNewDistrictModel = false
                this.areaData.name= '';
                this.areaData.id= null;
            }
        },
        async saveCustomer() {
            if (!this.customer.name) {
                return this.$store.dispatch('notification/error', 'Customer Name is required');
            }
            if (!this.customer.phone) {
                return this.$store.dispatch('notification/error', 'Phone is required');
            }
            await this.$store.dispatch('customer/generateCustomerCode');

            let isSuccess = this.$store.dispatch('customer/saveCustomer', this.customer);
            if (isSuccess) {
                this.customer.id = '';
                this.customer.name = '';
                this.customer.phone = '';
                this.customer.email = '';
                this.customer.district = '';
                this.customer.opening_balance = '';
                this.customer.credit_limit = '';
                this.customer.address = '';
            }
            this.AddNewCustomersModel = false
        },

        editCustomer(item) {
            this.AddNewCustomersModel = true;
            this.customer.id = item.id;
            this.customer.name = item.name;
            this.customer.phone = item.phone;
            this.customer.email = item.email;
            this.customer.district = item.district;
            this.customer.opening_balance = item.opening_balance;
            this.customer.credit_limit = item.credit_limit;
            this.customer.address = item.address;
        },
        // async statusUpdate(id, code) {
        //     let data = {
        //         id: id,
        //         code: code,
        //     }
        //     await this.$store.dispatch('customer/statusUpdate', data);
        // },
        async customerDelete(id) {
            let data = {
                id: id,
            }
            await this.$store.dispatch('customer/customerDelete', data);
        },
        clearInputData() {
            this.customer.name = '';
            this.customer.phone = '';
            this.customer.email = '';
            this.customer.district = '';
            this.customer.opening_balance = '';
            this.customer.credit_limit = '';
            this.customer.address = '';
        }
    },
}



</script>