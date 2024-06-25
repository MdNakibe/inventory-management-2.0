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


        <div class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Purchase Entry</div>
        <div class="flex items-start gap-5">
            <div class="flex-1 grid gap-5">
                <div class="grid grid-col-1 2xl:grid-cols-2 gap-5">
                    <div class="col-span-1 bg-white dark:bg-slate-700 rounded-md shadow overflow-hidden flex items-start">
                        <div class="p-5 flex-1 grid gap-5">
                            <h1 class="text-xl font-bold text-slate-700 dark:text-white">Supplier Information </h1>
                            <div class="grid gap-2">
                                <div class="flex justify-between flex-wrap gap-5">
                                    <div class="flex-1 grid gap-2 w-full dark:text-white">
                                        <label for="">Supplier</label>
                                        <div class="flex gap-2">
                                            <model-list-select 
                                            :list="$store.getters['supplier/suppliers']" 
                                            option-value="id" option-text="name" 
                                            v-model="supplierdata" />
                                            <div>
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
                                                                        <Button class="w-28 bg-red-500">Clear</Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </template>
                                                </Popup>
                                                <Button @click="AddNewSuppliersFun">Add</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-1 grid gap-2 w-full dark:text-white">
                                        <label for="">Mobile</label>
                                        <input type="text" v-model="supplierdata.phone" class="p-2 min-w-[300px] dark:bg-slate-800">
                                    </div>
                                </div>
                                <div class="grid gap-2 w-full dark:text-white">
                                    <label for="">Address</label>
                                    <textarea class="w-full h-28 dark:bg-slate-800" autofocus="true" placeholder="" v-model="supplierdata.address">{{ supplierdata.address }}</textarea>
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

                    <div class="col-span-1 bg-white dark:bg-slate-700 rounded-md shadow overflow-hidden grid p-5 gap-5">
                        <h1 class="text-xl font-bold text-slate-700 dark:text-white">Product Information</h1>
                        <div class="grid gap-5">
                            <div class="grid gap-2 w-full dark:text-white">
                                <label for="">Product</label>
                                <div class="flex gap-1">
                                    <model-list-select :list="$store.getters['product/products']"
                                    option-value="id" 
                                    option-text="product_name"
                                    placeholder="Select a product"
                                    v-model="product"
                                     />
                                    <!-- <input type="text" class="w-full dark:bg-slate-800" autofocus="true" placeholder=""> -->
                                </div>
                            </div>
                            <div class="flex justify-between gap-5">
                                <div class="flex flex-col gap-5 w-full">
                                    <div class="grid gap-2 dark:text-white">
                                        <label for="">Purchase Price </label>
                                        <input type="text" v-model="product.purchase_rate"
                                            @input="total"
                                            class="w-full dark:bg-slate-800" 
                                            autofocus="true" placeholder="">
                                    </div>
                                    <div class="grid gap-2 dark:text-white">
                                        <label for="">Retail Price </label>
                                        <input type="text" v-model="product.retail_rate" class="w-full dark:bg-slate-800" autofocus="true" placeholder="">
                                    </div>
                                </div>
                                <div class="grid gap-5 w-full">
                                    <div class="grid gap-2 dark:text-white">
                                        <label for="">Quantity</label>
                                        <input type="number" v-model="product.quantity" @input="total" class="w-full dark:bg-slate-800" autofocus="true" placeholder="">
                                    </div>
                                    <div class="grid gap-2 dark:text-white">
                                        <label for="">Wholesale Price</label>
                                        <input type="text" v-model="product.wholesale_rate" class="w-full dark:bg-slate-800" autofocus="true" placeholder="">
                                    </div>
                                    <div class="grid gap-2 dark:text-white">
                                        <label for="">Total</label>
                                        <input type="text" v-model="product.total" class="w-full dark:bg-slate-800" autofocus="true" placeholder="">
                                    </div>
                                    <Button @click="addToCart">Add</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-slate-700 p-5 rounded-md shadow-md text-gray-600 dark:text-white grid">
                    <div class="grid gap-3">
                        <h1 class="text-2xl font-bold text-slate-700 dark:text-white">Cart</h1>
                       
                    <DataView  :value="cart" dataKey="id"
                    :paginator="cart.length>10 ? true : false" :rows="10"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
                <template #list="slotProps">
         
                        <table class="w-full dark:bg-slate-700 dark:text-white">
                            <tr class="">
                                <vth class="w-10">SL.</vth>
                                <vth>Product ID</vth>
                                <vth>Product Name</vth>
                                <vth>Purchase Price</vth>
                                <vth>Quantity</vth>
                                <vth>Total</vth>
                                <vth>Action</vth>
                            </tr>
                            <tr v-for="(cart, ind) in slotProps.items" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                                <vtd class="text-center">{{ind+1}}</vtd>
                                <vtd class="text-center">{{ cart.code }}</vtd>
                                <vtd>{{ cart.product_name }}</vtd>
                                <vtd class="text-right">{{ cart.purchase_rate }}</vtd>
                                <vtd class="text-center w-24">{{ cart.quantity }}</vtd>
                                <vtd class="text-right">{{ cart.total }}</vtd>
                                <vtd>
                                    <div class="flex items-center justify-center">
                                        <button @click="editCart(ind)" title="Edit" class="hover:bg-blue-500 py-0.5 px-1.5 bg-blue-100 rounded text-blue-500 hover:text-white mr-1">
                                            <i class="fa-solid fa-edit"></i>
                                        </button>
                                        <button @click="deleteCart(ind,cart)" v-if="editCartIndex != ind" title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
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
                        <div>
                            {{ dateMonthYear }}
                            <!-- 31 December 2023 -->
                        </div>
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
                            <!-- <div class="flex items-center justify-between gap-4 dark:text-white">
                                <label for="" class="">Invoice</label>
                                <input type="text" id="" class="w-full dark:bg-slate-800">
                            </div> -->
                            <div class="flex items-center justify-between gap-4 dark:text-white">
                                <label for="" class="">Date</label>
                                <input type="date" v-model="purchase.date" id="" class="w-full dark:bg-slate-800">
                            </div>
                            <!-- <div class="flex items-center justify-between gap-4 dark:text-white">
                                <label for="" class="whitespace-nowrap">Purchase Officer</label>
                                <input type="text" id="" class="w-full dark:bg-slate-800" value="MD. Nasir">
                            </div> -->
                            <div class="flex items-center justify-between gap-4 dark:text-white">
                                <label for="" class="whitespace-nowrap">Purchase Order No.</label>
                                <input type="text" v-model="purchase.po_no" id="" class="w-full dark:bg-slate-800">
                            </div>
                            <div class="flex items-center justify-between gap-4 dark:text-white">
                                <label for="" class="whitespace-nowrap">Purchase Order Date</label>
                                <input type="date" v-model="purchase.purchase_order_date" id="" class="w-full dark:bg-slate-800">
                            </div>
                            <div class="flex items-center justify-between gap-4 dark:text-white">
                                <label for="" class="whitespace-nowrap">Sub Total</label>
                                <input type="text" v-model="purchase.sub_total" id="" class="w-full dark:bg-slate-800">
                            </div>
                            <div class="flex items-center justify-between gap-4 dark:text-white">
                                <label for="" class="whitespace-nowrap">VAT / TAX</label>
                                <div class="flex items-center gap-1">
                                    <input type="text" @input="calculateTotal" v-model="purchase.vatPercent" id="vat" class="w-full dark:bg-slate-800" placeholder="Percentage">
                                    <span>or</span>
                                    <input type="text" @input="calculateTotal" v-model="purchase.vat" id="" class="w-full dark:bg-slate-800" placeholder="Amount">
                                </div>
                            </div>
                            <div class="flex items-center justify-between gap-4 dark:text-white">
                                <label for="" class="">Discount</label>
                                <div class="flex items-center gap-1">
                                    <input type="text" @input="calculateTotal" v-model="purchase.disPercent" id="discount" class="w-full dark:bg-slate-800" placeholder="Percentage">
                                    <span>or</span>
                                    <input type="text" @input="calculateTotal" v-model="purchase.discount" id="" class="w-full dark:bg-slate-800" placeholder="Amount">
                                </div>
                            </div>
                            <div class="flex items-center justify-between gap-4 dark:text-white">
                                <label for="" class="whitespace-nowrap">Transport Cost</label>
                                <input type="text" @input="calculateTotal" v-model="purchase.transport" id="" class="w-full dark:bg-slate-800">
                            </div>
                            <div class="flex items-center justify-between gap-4 dark:text-white">
                                <label for="" class="">Total</label>
                                <input type="text" v-model="purchase.total" id="" class="w-full dark:bg-slate-800">
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
                                <input disabled type="text" @input="calculateTotal" v-model="purchase.paid" id="" class="w-full dark:bg-slate-800 disabled:bg-gray-200 disabled:cursor-not-allowed">
                            </div>
                            <!-- <div class="flex items-center justify-between gap-4 dark:text-white">
                                <label for="" class="whitespace-nowrap">Old Due</label>
                                <input type="number" readonly id="" v-model="purchase.total_due" class="w-full dark:bg-slate-800">
                            </div> -->
                            <div class="flex items-center justify-between gap-4 dark:text-white">
                                <label for="" class="">Due</label>
                                <input type="text" @input="calculateTotal" v-model="purchase.due" id="" class="w-full dark:bg-slate-800">
                            </div>
                            <div class="flex items-center gap-2 justify-between mt-5">
                                <Button @click="savePurchase" class="w-32">Confirm</Button>
                                <Button class="bg-red-500 w-32">Clear</Button>
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
import Popup from "@/components/global/PopUp.vue";


export default {
    components: {
        Button,
        Popup,
    },

    setup() {
        const date = ref(new Date());
        const dayName = moment(date).format('dddd');
        const dateMonthYear = moment(date).format('D MMMM yyyy');
        const AddNewSuppliersModel = ref(false);
        const AddNewSuppliersFun = () => {
            AddNewSuppliersModel.value = !AddNewSuppliersModel.value;
        }

        const AddNewDistrictModel = ref(false);
        const AddNewDistrictFun = () => {
            AddNewDistrictModel.value = !AddNewDistrictModel.value;
        }

        return {
            date,
            dayName,
            dateMonthYear,
            AddNewSuppliersModel,
            AddNewSuppliersFun,
            AddNewDistrictModel,
            AddNewDistrictFun,
        }
    },
    data() {
        return {
            purchase: {
                id: null,
                invoice: '',
                date: new Date().toISOString().substr(0, 10),
                supplier_id: null,
                employee_id: null,
                po_no: '',
                purchase_order_date: new Date().toISOString().substr(0, 10),
                sub_total: 0,
                vat: 0,
                discount: 0,
                transport: 0,
                total: 0,
                note: '',
                paid: 0,
                due: 0,
                old_due: 0,
                total_due: '',
                vatPercent: 0.0,
                disPercent: 0.0,
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
            areaData:{
                name: '',
                id: null,
            },
            supplierdata:{
                id: null,
                phone: '',
                address: '',
            },
            searchTerm:'',
            hasdelete: [],
            hasdeletePayment: [],
            changeData: [],
            changePaymet: [],
            product: {
                id: '',
                product_name: '',
                purchase_rate: '',
                retail_rate: '',
                wholesale_rate: '',
                quantity: '',
                total: ''
            },
            cart: [],
            payment: [],
            previous_payment: [],
            editCartIndex: null,
            processType: 'add',
            account:{
                account_id: null,
                transaction_id: null,
                account_name:'',
                account_number:'',
            },
        }
    },
    async created() {
        this.supplier.code = await this.$store.dispatch('supplier/generateSupplierCode');
        await this.$store.dispatch('product/getproducts');
        await this.$store.dispatch('supplier/getSupplier');
        await this.$store.dispatch("account/getAccounts");
        this.getArea();
        if (this.$route.params.id) {
            await this.$store.dispatch('purchase/getPurchase', {id: this.$route.params.id});
            await this.getPurchases();
            this.processType = 'update';
        }
    },
    watch: {
        supplierdata(data) {
            if(data == undefined) return;
            this.purchase.supplier_id = data.id;
            this.supplierdata.phone = data.phone;
            this.supplierdata.address = data.address;
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
            this.product.id = product.id;
            this.product.code = product.code;
            this.product.product_name = product.product_name;
            this.product.purchase_rate = product.purchase_rate ? product.purchase_rate : 0;
            this.product.retail_rate = product.retail_rate ? product.retail_rate : 0;
            this.product.wholesale_rate= product.wholesale_rate ? product.wholesale_rate : 0;
            this.product.quantity= product.quantity ? product.quantity: 0;
        },
    },
    methods: {
        deleteCart(ind,cart) {
            this.cart.splice(ind, 1); 
            this.calculateTotal();
            if (this.$route.params.id != undefined) {
                let deleteData = {
                    product_id: cart.id,
                    quantity: cart.quantity,
                }
                this.hasdelete.push(deleteData);
            }
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
            this.purchase.paid = payment.ammount != undefined ? this.purchase.paid-payment.ammount : this.purchase.paid-0;
            this.purchase.due = this.purchase.total -this.purchase.paid
        },
        async getPurchases() {
            let purchase = await this.$store.getters['purchase/purchase'][0]
            this.purchase.id = purchase.id;
            this.purchase.date = purchase.date;
            this.purchase.supplier_id = purchase.supplier_id;
            this.purchase.po_no = purchase.po_no;
            this.purchase.purchase_order_date = purchase.purchase_order_date;
            this.purchase.sub_total = purchase.sub_total;
            this.purchase.vat = purchase.vat;
            this.purchase.vatPercent = purchase.vatPercent;
            this.purchase.discount = purchase.discount;
            this.purchase.disPercent = purchase.disPercent;
            this.purchase.transport = purchase.transport;
            this.purchase.total = purchase.total;
            this.purchase.paid = purchase.paid;
            this.purchase.due = purchase.due;
            this.purchase.old_due = purchase.due;
            this.purchase.note = purchase.note;
            this.supplierdata = purchase?.supplier;
            this.purchase.total_due = this.supplierdata.total_due
            purchase?.purchase_details.forEach(item => {
                this.cart.push({
                    id: item.product.id,
                    code: item.product.code,
                    product_name: item.product.product_name,
                    purchase_rate: item.purchase_rate,
                    wholesale_rate: item.wholesale_rate,
                    retail_rate: item.retail_rate,
                    quantity: item.quantity,
                    total: item.total,
                })
            });
            purchase?.transaction.forEach(item => {
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
        total(){
            this.product.total = this.product.purchase_rate * this.product.quantity;
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
            this.purchase.due = this.purchase.total - totalAmount;
            this.purchase.paid =  totalAmount
            if (totalAmount > this.purchase.total) {
                this.purchase.paid =  totalAmount - this.payment[ind].ammount
                this.payment[ind].ammount = 0
                totaleEl = this.payment.map(pay => pay.ammount)
                totalAmount= totaleEl.reduce((p, n) => p + n, 0)
                this.purchase.due = parseInt(this.purchase.total) - totalAmount;
                this.$store.dispatch('notification/error', 'Input Amount is much more then due ammount');
                return
            }
        },
        addToCart(){
            if (!this.product.quantity){
                return this.$store.dispatch('notification/error', 'Quantity is required');
            }
            let product = {
                id: this.product.id,
                code: this.product.code,
                product_name: this.product.product_name,
                purchase_rate: this.product.purchase_rate,
                retail_rate: this.product.retail_rate,
                wholesale_rate: this.product.wholesale_rate,
                quantity: this.product.quantity,
                total: this.product.total,
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
                    return this.$store.dispatch('notification/error', 'Product already existed in cart');
                }
                this.cart.push(product);
            }

            this.calculateTotal();
            this.clearProduct();
        },
        editCart(index) {
            let cartProduct = this.cart[index];
            this.editCartIndex = index;
            this.product = cartProduct;
            if (this.$route.params.id != undefined) {
                let change = {
                    product_id: cartProduct.id,
                    quantity_old: cartProduct.quantity,
                }
                this.changeData.push(change);
            }
        },
        calculateTotal() {
            this.purchase.sub_total = this.cart.reduce((p, c) => {return +p + +c.total}, 0).toFixed(2);

            if(event.target.id == "vat") {
                this.purchase.vat = ((+this.purchase.sub_total * +this.purchase.vatPercent) / 100).toFixed(2);
            } else {
                this.purchase.vatPercent = ((+this.purchase.vat / +this.purchase.sub_total) * 100).toFixed(2);
            }

            if(event.target.id == "discount") {
                this.purchase.discount = ((+this.purchase.sub_total * +this.purchase.disPercent) / 100).toFixed(2);
            } else {
                this.purchase.disPercent = ((+this.purchase.discount / +this.purchase.sub_total) * 100).toFixed(2);
            }

            this.purchase.total = ((+this.purchase.sub_total + +this.purchase.vat + +this.purchase.transport) - +this.purchase.discount).toFixed(2);
            this.purchase.due = (this.purchase.total - +this.purchase.paid).toFixed(2);
        },

        clearProduct() {
            this.product={
                id: '',
                product_name: '',
                purchase_rate: '',
                retail_rate: '',
                wholesale_rate: '',
                quantity: '',
                total: ''
            },
            this.editCartIndex = null;
            this.productinfo = null;
        },
        async savePurchase() {
            let data = {
                purchase: this.purchase,
                cart: this.cart,
                type: this.processType,
                payment: this.payment,
                hasdelete: this.hasdelete,
                hasdeletePayment: this.hasdeletePayment,
                changeData: this.changeData.filter(item => !this.hasdelete.some(deleteItem => deleteItem.product_id === item.product_id) && 'quantity_new' in item)
            }
            let isSuccess = await this.$store.dispatch('purchase/savePurchases', data);
            if (isSuccess) {
                this.$router.push('/purchase-record');
            }
        },
        getArea(){
            this.$store.dispatch("area/getArea")
        },
        async saveArea() {
		    let isSuccess = await this.$store.dispatch('area/saveArea', this.areaData);
            if(isSuccess) {
                this.AddNewDistrictModel = false
                this.areaData.name= '';
                this.areaData.id= null;
            }
        },
        async saveSupplier() {
            if(!this.supplier.name){
                return this.$store.dispatch('notification/error', 'Supplier Name is required');
            }
            if(!this.supplier.phone){
                return this.$store.dispatch('notification/error', 'Supplier Phone is required');
            }
            if(!this.supplier.area_id){
                return this.$store.dispatch('notification/error', 'Select Supplier Area is required');
            }
            if(!this.supplier.address){
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