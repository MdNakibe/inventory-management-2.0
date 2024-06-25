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
                                    <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                </div>
                                <div>
                                    <Button class="w-28">Add</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Popup>
        </div>
        <div>
            <div class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">
                Sales Entry
            </div>
            <div class="flex items-start gap-5">
                <div class="flex-1 grid gap-5">
                    <div class="grid grid-col-1 2xl:grid-cols-2 gap-5">
                        <div class="col-span-1 bg-white dark:bg-slate-700 rounded-md shadow flex">
                            <div class="p-5 flex-1 grid gap-5">
                                <div class="flex justify-between items-center">
                                    <h1 class="text-xl font-bold text-slate-700 dark:text-white">
                                        Select Customer
                                    </h1>
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
                                                                    <input type="text" disabled class="p-2 min-w-[300px] dark:bg-slate-800" placeholder="Auto Generate" v-model="addcustomer.code">
                                                                </div>
                                                                <div class="grid gap-2">
                                                                    <p class="">Mobile</p>
                                                                    <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800" v-model="addcustomer.phone">
                                                                </div>
                                                            </div>
                                                            <div class="flex gap-5">
                                                                <div class="grid gap-2">
                                                                    <p class="">Customer Name</p>
                                                                    <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800" v-model="addcustomer.name">
                                                                </div>
                                                                <div class="grid gap-2">
                                                                    <p class="">Email</p>
                                                                    <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800" v-model="addcustomer.email">
                                                                </div>
                                                            </div>
                                                            <div class="flex gap-5">
                                                                <div class="flex items-end gap-2 w-full">
                                                                    <div class="grid gap-2 w-full">
                                                                        <p class="">District</p>
                                                                        <input type="text" class="p-2 w-full dark:bg-slate-800">
                                                                    </div>
                                                                    <div class="">
                                                                        <Button @click="AddNewDistrictFun" class="w-11 h-11 grid justify-center items-center border rounded-full border-green-500">
                                                                            <i class="fa-solid fa-plus"></i>
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                                <div class="grid gap-2">
                                                                    <p class="">Opening Balance</p>
                                                                    <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800" v-model="addcustomer.opening_balance">
                                                                </div>
                                                            </div>
                                                            <div class="flex gap-5">
                                                                <div class="grid gap-2">
                                                                    <p class="">Address</p>
                                                                    <textarea name="" id="" cols="35" rows="1" class="dark:bg-slate-800" v-model="addcustomer.address"></textarea>
                                                                </div>
                                                                <div class="grid gap-2">
                                                                    <p class="">Credit Limit</p>
                                                                    <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800" v-model="addcustomer.credit_limit">
                                                                </div>
                                                            </div>
                                                            <div class="flex justify-center gap-10">
                                                                <Button @click="saveCustomer" class="w-28">Confirm</Button>
                                                                <Button class="w-28 bg-red-500">Clear</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                        </Popup>
                                        <Button @click="AddNewCustomersFun">
                                            <i class="fa fa-plus"></i> Add Customer
                                        </Button>
                                    </div>
                                </div>
                                <div class="flex gap-4 flex-wrap items-center justify-between text-gray-600 dark:text-white">
                                    <div class="flex-1 grid items-center">
                                        <p class="pb-2 font-semibold">Sale Type:</p>
                                        <div class="grid grid-cols-2 select-none cursor-pointer">
                                            <div class="p-2 border border-slate-500 rounded-l text-center font-semibold hover:border-green-500" :class="{ 'bg-green-500 text-white !border-green-500': saleType == 'Retail' }" @click="saleType = 'Retail'">
                                                Retail
                                            </div>
                                            <div class="p-2 border border-slate-500 rounded-r -ml-px text-center font-semibold hover:border-green-500" :class="{ 'bg-green-500 text-white !border-green-500': saleType == 'Wholesale' }" @click="saleType = 'Wholesale'">
                                                Wholesale
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col flex-1 items-start gap-2">
                                        <label for="">Customer</label>
                                        <model-list-select 
                                            :list="$store.getters['customer/customer']" 
                                            option-value="id" option-text="name" 
                                            v-model="customer" />
                                        <!-- <input class="w-full dark:bg-slate-800" type="text"> -->
                                    </div>
                                </div>

                                
                    <div v-if="payment.length > 0">
                                <table class="w-full dark:bg-slate-700 dark:text-white">
                                <tr class="">
                                    <vth class="w-10">SL.</vth>
                                    <vth>Account Name</vth>
                                    <vth>Account Number</vth>
                                    <vth>Ammount</vth>
                                    <vth>Action</vth>
                                </tr>
                                <tr v-for="(payment, ind) in payment" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                                    <vtd class="text-center">{{ind+1}}</vtd>
                                    <vtd class="text-center">{{ payment.account_name }}</vtd>
                                    <vtd>{{ payment.account_number }}</vtd>
                                    <vtd>
                                        <input type="number" v-model="payment.ammount" @input="productReturnTotal(ind)" class="w-24 text-center dark:bg-slate-800">
                                    </vtd>
                                    <vtd>
                                        <div class="flex items-center justify-center">
                                            <button @click="deleteMethod(ind,payment)" v-if="editCartIndex != ind" title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                        </div>
                                    </vtd>
                                </tr>
                            </table>
                            </div>
                            </div>
                        </div>
                            
    

                        <div class="col-span-1 bg-white dark:bg-slate-700 rounded-md shadow grid p-5">
                            <div class="flex justify-between items-center">
                                <h1 class="text-xl font-bold text-slate-700 dark:text-white">Select Product</h1>
                            </div>

                            <div class="grid items-center gap-2 text-gray-600 dark:text-white">
                                <div class="flex justify-between gap-5 items-center">
                                    <div class="grid w-full items-start gap-2">
                                        <label for="">Product</label>
                                        <model-list-select :list="$store.getters['product/stockProducts']"
                                                option-value="id" 
                                                option-text="product_name"
                                                v-model="product"
                                                />
                                    </div>
                                    <div class="grid w-full items-start gap-2">
                                        <label for="">Sale Price</label>
                                        <input type="text" v-model="product.sale_rate" class="w-full dark:bg-slate-800">
                                    </div>
                                </div>
                            </div>
                            <div class="grid items-center gap-3 text-gray-600 dark:text-white">
                                <div class="flex justify-between gap-7 items-center">
                                    <div class="grid w-full items-start gap-2">
                                        <div class="grid w-full items-start gap-2">
                                            <label for="">Quantity</label>
                                            <input type="number" v-model="product.quantity" class="w-full dark:bg-slate-800">
                                        </div>
                                    </div>
                                    <div class="grid w-full items-start gap-2">
                                        <div class="grid w-full items-start gap-2">
                                        <label for="">Total Stock</label>
                                        <input type="number" v-model="product.total_stock" readonly class="w-full dark:bg-slate-800">
                                    </div>
                                    </div>
                                    <div class="grid w-full items-start gap-2 mt-7">
                                        <Button @click="addToCart" class="whitespace-nowrap">
                                            <i class="fa fa-plus"></i>Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



         

                    <div class="bg-white dark:bg-slate-700 p-5 rounded-md shadow-md text-gray-600 dark:text-white grid">
                        <div class="grid gap-3">
                            <div class="flex flex-row-reverse justify-between">
                                <div class="text-right">
                                    <div v-if="customer.name">
                                        <p>
                                        <span class="font-medium">{{ customer.name }}</span>
                                        <span class="text-sky-600 ml-1">{{ customer.address }}</span>
                                        <span class="ml-1">({{ customer.phone }})</span>
                                    </p>
                                    <p class="text-orange-400">Credit Limit: <strong class="font-semibold">{{ customer.credit_limit }}</strong></p>
                                    </div>
                                </div>
                                <p class="font-semibold text-4xl">Cart</p>
                            </div>

                            <DataView  :value="cart" dataKey="id"
                :paginator="cart.length>10 ? true : false" :rows="10"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
                   <template #list="slotProps">
                            <table class=" w-full dark:bg-slate-700 dark:text-white">
                                <tr class="">
                                    <vth class="w-10">SL.</vth>
                                    <vth>Product Details</vth>
                                    <vth>Sale Price</vth>
                                    <vth>Quantity</vth>
                                    <vth>Sub Total</vth>
                                    <vth>Action</vth>
                                </tr>
                                <tr v-for="(cart, ind) in slotProps.items" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                                    <vtd class="text-center">{{ ind + 1 }}</vtd>
                                    <vtd>{{ cart.name }} <span class="font-medium">{{ cart.code }}</span></vtd>
                                    <vtd class="text-right">{{ cart.sale_rate }}</vtd>
                                    <vtd class="text-right">{{ cart.quantity }}</vtd>
                                    <vtd class="text-right">{{ cart.total }}</vtd>
                                    <vtd>
                                        <div class="flex items-center justify-center">
                                            <button @click="editCart(ind)" title="Edit" class="hover:bg-blue-500 py-0.5 px-1.5 bg-blue-100 rounded text-blue-500 hover:text-white mr-1">
                                            <i class="fa-solid fa-edit"></i>
                                        </button>
                                            <button @click="deleteCart(ind,cart)" title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
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

      
                </div>

                <div class="w-full lg:w-[380px]">
                    <label class="bg-green-500 text-white rounded-md shadow mb-5 flex items-center justify-between gap-4 select-none cursor-pointer relative overflow-hidden custom_date">
                        <input type="date" v-model="date" class="absolute top-0 left-0 bottom-0 right-0 w-full h-full opacity-0">
                        <div class="flex flex-col justify-between p-5">
                            <div class="font-bold text-xl">{{ dayName }}</div>
                            <div>{{ dateMontYear }}</div>
                        </div>
                        <div class="text-3xl px-5">
                            <div class="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full">
                                <i class="fa-solid fa-calendar-days"></i>
                            </div>
                        </div>
                    </label>

                    <div class="bg-white dark:bg-slate-700 rounded-md shadow">
                        <h1 class="text-xl font-bold text-slate-700 dark:text-white mb-3 px-2 pt-5">Invoice Information</h1>
                        <div class="text-gray-600 px-2 pb-4">
                            <div class="grid gap-2">
                                <div class="flex items-center justify-between gap-4 dark:text-white">
                                    <label for="" class="">Date</label>
                                    <input type="date" v-model="sale.date" id="" class="w-full dark:bg-slate-800">
                                </div>
                                <div class="flex items-center justify-between gap-4 dark:text-white">
                                    <label for="" class="whitespace-nowrap">Sales Person</label>
                                    <model-list-select 
                                    :list="$store.getters['employe/employes']" 
                                    option-value="id" option-text="name"
                                    placeholder="Select a Sales Person"
                                    v-model="employee"/>
                                </div>
                                <div class="flex items-center justify-between gap-4 dark:text-white">
                                    <label for="" class="whitespace-nowrap">Purchase Order No.</label>
                                    <input type="text" id="" v-model="sale.po_no" class="w-full dark:bg-slate-800">
                                </div>
                                <div class="flex items-center justify-between gap-4 dark:text-white">
                                    <label for="" class="whitespace-nowrap">Purchase Order Date</label>
                                    <input type="date" id="" v-model="sale.po_date" class="w-full dark:bg-slate-800">
                                </div>
                                <div class="flex items-center justify-between gap-4 dark:text-white">
                                    <label for="" class="whitespace-nowrap">Sub Total</label>
                                    <input type="text" id="" v-model="sale.sub_total" class="w-full dark:bg-slate-800">
                                </div>
                                <div class="flex items-center justify-between gap-4 dark:text-white">
                                    <label for="" class="whitespace-nowrap">VAT / TAX</label>
                                    <div class="flex items-center gap-1">
                                        <input type="text" @input="calculateTotal" id="vat" v-model="sale.vatPercent" class="w-full dark:bg-slate-800" placeholder="Percentage">
                                        <span>or</span>
                                        <input type="text" @input="calculateTotal" v-model="sale.vat" id="" class="w-full dark:bg-slate-800" placeholder="Amount">
                                    </div>
                                </div>
                                <div class="flex items-center justify-between gap-4 dark:text-white">
                                    <label for="" class="">Discount</label>
                                    <div class="flex items-center gap-1">
                                        <input type="text" @input="calculateTotal" v-model="sale.disPercent" id="discount" class="w-full dark:bg-slate-800" placeholder="Percentage">
                                        <span>or</span>
                                        <input type="text" @input="calculateTotal" v-model="sale.discount" id="" class="w-full dark:bg-slate-800" placeholder="Amount">
                                    </div>
                                </div>
                                <div class="flex items-center justify-between gap-4 dark:text-white">
                                    <label for="" class="whitespace-nowrap">Delivery Charge</label>
                                    <input type="text" id="" @input="calculateTotal" v-model="sale.transport" class="w-full dark:bg-slate-800">
                                </div>
                                <div class="flex items-center justify-between gap-4 dark:text-white">
                                    <label for="" class="">Total</label>
                                    <input type="text" id="" v-model="sale.total" class="w-full dark:bg-slate-800">
                                </div>

                                <div class="flex items-center justify-between gap-4 dark:text-white">
                                <label for="" class="whitespace-nowrap">Payment Method</label>
                                    <model-list-select 
                                    :list="$store.getters['account/accounts']" 
                                    option-value="id" option-text="account_number"
                                    placeholder="Select a payment method"
                                    v-model="account"/>
                               </div>

                                <div class="flex items-center justify-between gap-4 dark:text-white">
                                    <label for="" class="">Paid</label>
                                    <input disabled type="text" id="" @input="calculateTotal" v-model="sale.paid" class="w-full dark:bg-slate-800 disabled:bg-gray-200 disabled:cursor-not-allowed">
                                </div>
                                <!-- <div class="flex items-center justify-between gap-4 dark:text-white">
                                    <label for="" class="whitespace-nowrap">Payment Method</label>
                                    <input type="text" id="" class="w-full dark:bg-slate-800">
                                </div> -->
                                <div class="flex items-center justify-between gap-4 dark:text-white">
                                    <label for="" class="">Due</label>
                                    <input type="text" id="" v-model="sale.due" class="w-full dark:bg-slate-800">
                                </div>
                                <div class="flex items-center gap-2 justify-between mt-5">
                                    <Button @click="saveSale" class="w-32">Confirm</Button>
                                    <Button class="bg-red-500 w-32">Clear</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>






<script>
import { ref } from 'vue';
import moment from 'moment';
import Button from '@/components/global/Button.vue';
import Popup from '@/components/global/PopUp.vue';

export default {
    components: {
        Button,
        Popup,
    },
    setup() {
        const date = ref(new Date());
        const dayName = moment(date).format('dddd');
        const dateMontYear = moment(date).format('D MMMM yyyy');

        const AddNewCustomersModel = ref(false);
        const AddNewCustomersFun = () => {
            AddNewCustomersModel.value = !AddNewCustomersModel.value;
        }

        const AddNewDistrictModel = ref(false);
        const AddNewDistrictFun = () => {
            AddNewDistrictModel.value = !AddNewDistrictModel.value;
        }
        return {
            date,
            dayName,
            dateMontYear,
            AddNewCustomersModel,
            AddNewCustomersFun,
            AddNewDistrictModel,
            AddNewDistrictFun,
        }
    },
    data(){
        return {
            saleType:  'Retail',
            sale: {
                id: null,
                invoice: '',
                date: new Date().toISOString().substr(0, 10),
                customer_id: null,
                employee_id: null,
                po_no: '',
                po_date: new Date().toISOString().substr(0, 10),
                sub_total: 0,
                vat: 0,
                discount: 0,
                transport: 0,
                total: 0,
                note: '',
                paid: 0,
                previous_due: 0,
                due: 0,
                vatPercent: 0.0,
                disPercent: 0.0,
                type: 'add',
            },
            employee: {},
            addcustomer: {
                id: null,
                code: '',
                phone: '',
                name: '',
                email: '',
                district: '',
                address: '',
                credit_limit: ''
            },
            districtData: {
                id: '',
                name: '',
            },
            customer: {
                id: null,
                name: '',
                phone: '',
                address: '',
                type: '',
                display_text: 'Select Customer'
            },
            product: {
                id: '',
                product_name: '',
                sale_rate: '',
                retail_rate: '',
                wholesale_rate: '',
                quantity: '',
                total: '',
                total_stock: '',
            },
            cart: [],
            editCartIndex: null,
            processType: 'add',
            hasdelete: [],
            hasdeletePayment: [],
            changeData: [],
            changePaymet: [],
            payment: [],
            previous_payment: [],
            account:{
                account_id: null,
                transaction_id: null,
                account_name:'',
                account_number:'',
            },
        }
    },
    async created() {
        this.customer.code = await this.$store.dispatch('customer/generateCustomerCode');
        await this.$store.dispatch('customer/getcustomer');
        await this.$store.dispatch('product/stockProducts');
        await this.$store.dispatch("account/getAccounts");
        await this.$store.dispatch("employe/getEmployes");
        if (this.$route.params.id) {
            await this.$store.dispatch('sale/getSale', {id: this.$route.params.id});
            await this.getSale();
            this.processType = 'update';
        }
    },
    watch: {
        async customer(customer) {
            if(customer == undefined) return;
            this.sale.customer_id = customer.id;
            this.customer = customer;
            this.calculateTotal();
            if(!this.sale.id) {
                await this.$store.dispatch('customer/getCustomerDue', {customerId: customer.id});
                this.sale.previous_due = this.$store.getters['customer/customerDue'][0].due;
            }
        },
        employee(employee) {
            if(employee == undefined) return;
            this.sale.employee_id = employee.id;
        },
        account(account) {
            if(account == undefined) return;
            this.addPayment(account);
            this.account.account_id = account.id;
            this.account.account_name = account.account_name;
            this.account.account_number = account.account_number;
        },

        product(product) {
            if(product == undefined) return;
            if(this.product.id != ''){
                this.product.sale_rate = this.product.sale_rate  ? this.product.sale_rate : (this.saleType == 'Wholesale' ? product.wholesale_rate : product.retail_rate);
                this.product.total_stock = this.product.total_stock ? this.product.total_stock : product.stock.current_stock;
                if(this.product.total_stock <= 0){
                    this.$store.dispatch('notification/error', 'Out of Stock');
                    this.total_stock = 0;
                    return;
                }
            }
        },
    },
    methods: {
        async getSale() {
            let sale = await this.$store.getters['sale/sale'][0]
            this.sale.id = sale.id;
            this.sale.date = sale.date;
            this.sale.supplier_id = sale.supplier_id;
            this.sale.po_no = sale.po_no;
            this.sale.sale_order_date = sale.po_date;
            this.sale.sub_total = sale.sub_total;
            this.sale.vat = sale.vat;
            this.sale.vatPercent = sale.vatPercent;
            this.sale.discount = sale.discount;
            this.sale.disPercent = sale.disPercent;
            this.sale.transport = sale.transport;
            this.sale.total = sale.total;
            this.sale.paid = sale.paid;
            this.sale.due = sale.due;
            this.sale.old_due = sale.due;
            this.sale.note = sale.note;
            this.customer = sale?.customer;
            sale?.sale_details.forEach(item => {
                this.cart.push({
                    id: item.product.id,
                    code: item.product.code,
                    name: item.product.product_name,
                    sale_rate: item.sale_rate,
                    wholesale_rate: item.wholesale_rate,
                    retail_rate: item.retail_rate,
                    quantity: item.quantity,
                    total_stock: (+item.product.stock.current_stock + +item.quantity),
                    total: item.total,
                })
            });
            sale?.transaction.forEach(item => {
                this.payment.push({
                    account_id: item.account_id,
                    transaction_id: item.id,
                    account_name: item.account.account_name,
                    account_number: item.account.account_number,
                    ammount: item.ammount,
                });
                this.previous_payment.push({
                    account_id: item.account_id,
                    transaction_id: item.id,
                    account_name: item.account.account_name,
                    account_number: item.account.account_number,
                    ammount: item.ammount,
                });
            });
        },

        deleteMethod(ind,payment) {
            if (this.$route.params.id != undefined && payment.transaction_id) {
                let deletePayment = {
                    account_id: payment.account_id,
                    transaction_id: payment.transaction_id,
                    ammount: payment.ammount,
                }
                this.previous_payment.slice(ind, 1)
                this.hasdeletePayment.push(deletePayment);
            }
            this.payment.splice(ind, 1); 
            this.calculateTotal();
            this.sale.paid = payment.ammount != undefined ? this.sale.paid-payment.ammount : this.sale.paid-0;
            this.sale.due = this.sale.total -this.sale.paid
        },

        addPayment(data){
            let account = {
                account_id: data.id,
                transaction_id: null,
                account_name: data.account_name,
                account_number: data.account_number,
            }
            let checkIfExist = this.payment.findIndex(a => (a.account_id == account.account_id));
            if (checkIfExist > -1) {
                this.$store.dispatch("notification/error", "Account already existed in Payment");
                return;
            }
            this.payment.push(account);
        },
        productReturnTotal(ind){
            if (this.$route.params.id != undefined && this.payment[ind].transaction_id) {
                let changepay = {
                    account_id: this.previous_payment[ind].account_id,
                    transaction_id: this.previous_payment[ind].transaction_id,
                    ammount: this.previous_payment[ind].ammount,
                }
                let checkIfExist = this.changePaymet.findIndex(p => (p.transaction_id == changepay.transaction_id));
                if (checkIfExist < 0) {
                    this.payment[ind].old_ammount = this.previous_payment[ind].ammount;
                }
            }
            let totaleEl= this.payment.map(pay => pay.ammount)
            let totalAmount= totaleEl.reduce((p, n) => p + n, 0)
            this.sale.due = this.sale.total - totalAmount;
            this.sale.paid =  totalAmount
            if (totalAmount > this.sale.total) {
                this.sale.paid =  totalAmount - this.payment[ind].ammount
                this.payment[ind].ammount = 0
                totaleEl = this.payment.map(pay => pay.ammount)
                totalAmount= totaleEl.reduce((p, n) => p + n, 0)
                this.sale.due = parseInt(this.sale.total) - totalAmount;
                this.$store.dispatch('notification/error', 'Input Amount is much more then due ammount');
                return
            }

        },



        addToCart() {
            if(this.product.id == '' || this.product.id == null) {
                this.$store.dispatch('notification/error', 'Select a product');
                return;
            }
            if(this.product.sale_rate == 0 || this.product.sale_rate == '' || this.product.sale_rate == null) {
                this.$store.dispatch('notification/error', 'sale rate is required');
                return;
            }
            if(!this.product.quantity) {
                this.$store.dispatch('notification/error', 'sale quantity is required');
                return;
            }
            if(+this.product.quantity > +this.product.total_stock) {
                this.$store.dispatch('notification/error', 'Product stock is insufficient');
                return;
            }
            let product = {
                id: this.product.id,
                name: this.product.name ? this.product.name : this.product.product_name,
                code: this.product.code,
                sale_rate: this.product.sale_rate  ? this.product.sale_rate : (this.saleType == 'Wholesale' ? product.wholesale_rate : product.retail_rate),
                quantity: this.product.quantity,
                total_stock:  this.product.total_stock,
                total: this.product.sale_rate * this.product.quantity,
            }
            if(this.editCartIndex != null) {
                let editProduct = this.cart[this.editCartIndex];
                let checkIfExist = this.cart.findIndex(p => (p.id == product.id) && (p.id != editProduct.id));
                let setChange = this.changeData.findIndex(p => (p.product_id == product.id) && (p.product_id == editProduct.id));
                if (setChange !== -1) {
                    if (this.changeData[setChange].quantity_old !== product.quantity) {
                        this.changeData[setChange].quantity_new = product.quantity;
                    }
                } 
                if (checkIfExist > -1) {
                    this.$store.dispatch("notification/error", "Product already existed in cart");
                    return;
                }

				this.cart[this.editCartIndex] = product;

            } else {
                let cartIndex = this.cart.findIndex(p => p.id == this.product.id)
                if(cartIndex > -1) {
                    this.$store.dispatch("notification/error", "Product already existed in cart");
                    return;
                }

                this.cart.push(product);
            }

            this.calculateTotal();
            this.clearProduct();
        },
        editCart(index) {
            let cartProduct = this.cart[index];
            this.product = cartProduct;
            this.editCartIndex = index;
            if (this.$route.params.id != undefined) {
                let change = {
                    product_id: cartProduct.id,
                    quantity_old: cartProduct.quantity,
                }
                this.changeData.push(change);
            }
        },

        deleteCart(ind,cart) {
            this.cart.splice(ind, 1);
            if (this.$route.params.id != undefined) {
                let deleteData = {
                    product_id: cart.id,
                    quantity: cart.quantity,
                }
                this.hasdelete.push(deleteData);
            }
            this.calculateTotal();
        },

        calculateTotal() {
            this.sale.sub_total = this.cart.reduce((p, c) => {return +p + +c.total}, 0).toFixed(2);

            if(event.target.id == "vat") {
                this.sale.vat = ((+this.sale.sub_total * +this.sale.vatPercent) / 100).toFixed(2);
            } else {
                this.sale.vatPercent = ((+this.sale.vat / +this.sale.sub_total) * 100).toFixed(2);
            }

            if(event.target.id == "discount") {
                this.sale.discount = ((+this.sale.sub_total * +this.sale.disPercent) / 100).toFixed(2);
            } else {
                this.sale.disPercent = ((+this.sale.discount / +this.sale.sub_total) * 100).toFixed(2);
            }

            this.sale.total = ((+this.sale.sub_total + +this.sale.vat + +this.sale.transport) - +this.sale.discount).toFixed(2);

            if(this.customer.type == 'G') {
                this.sale.paid = this.sale.total;
            } else {
                this.sale.due = (+this.sale.total - +this.sale.paid).toFixed(2);
            }
            
        },

        clearProduct() {
            this.product = {
                id: '',
                product_name: '',
                sale_rate: '',
                retail_rate: '',
                wholesale_rate: '',
                quantity: '',
                total: '',
            }
            this.editCartIndex = null;
            this.stock = '';
        },
        async saveSale() {
            if(this.sale.customer_id == null){
                return this.$store.dispatch('notification/error', 'Please Select Customer');
            }
            if(this.sale.employee_id == null){
                return this.$store.dispatch('notification/error', 'Please Select Employee');
            }
           
            if(this.cart.length == 0){
                return this.$store.dispatch('notification/error', 'No Product has Added');
            }
            let data = {
                sale: this.sale,
                cart: this.cart,
                type: this.processType,
                hasdelete: this.hasdelete,
                hasdeletePayment: this.hasdeletePayment,
                payment: this.payment,
                changeData: this.changeData.filter(item => !this.hasdelete.some(deleteItem => deleteItem.product_id === item.product_id) && 'quantity_new' in item)
            }
            let save = await this.$store.dispatch('sale/saveSale', data);
            if(save){
                this.$router.push('/sales-record');
            }
        },
        async saveCustomer() {
            if (!this.addcustomer.name) {
                return this.$store.dispatch('notification/error', 'Customer Name is required');
            }
            if (!this.addcustomer.phone) {
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
                await this.$store.dispatch('customer/getcustomer');
            }
            this.AddNewCustomersModel = false
        },
    },
}



</script>

<style scoped>
.slide-fade-enter-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>