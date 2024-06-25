<template>
    <main>
        <div class="flex justify-between items-center mb-5">
            <div class="text-2xl text-slate-700 dark:text-white font-bold">Return</div>
            <Button @click="goBack" type="button" class="flex items-center justify-center w-1/2 px-5 py-3 text-sm whitespace-nowrap text-gray-700 dark:text-white hover:text-white transition-colors duration-200 bg-white dark:bg-slate-600 border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-600">
                <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Go back</span>
            </Button>
        </div>
        <div class="flex flex-wrap justify-between items-end bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div>
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Search Invoice </label>
                    <input type="text" class="min-w-[250px] dark:bg-slate-800" autofocus="true" placeholder="Search Invoice ">
                </div>
            </div>
            <div v-if="payment.length > 0">
                <span>Total Due {{ paymentCalculations.due }}</span><br>
                <span>Total Paid {{ paymentCalculations.paid }}</span>
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
                        
                                <button @click="deleteMethod(ind,payment)" title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </vtd>
                    </tr>
                </table>
            </div>
            <div>
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Supplier ID/Name</label>
                    <input type="text" class="min-w-[250px] dark:bg-slate-800" autofocus="true" placeholder="Select/Search Supplier">
                </div>
            </div>
            <div>
                <div class="flex items-end gap-5 dark:text-white">
                    <div class="grid w-full gap-2">
                        <label for="">Select Payment Method</label>
                        <model-list-select 
                        :list="$store.getters['account/accounts']" 
                        option-value="id" option-text="account_number"
                        placeholder="Select a payment method"
                        v-model="account"/>
                    </div>
                    <div class="grid w-full gap-2">
                        <label for="">Total Due</label>
                        <input type="text" v-model="paymentCalculations.total" readonly class="min-w-[250px] dark:bg-slate-800" autofocus="true">
                    </div>
                    <Button @click="savePayment">Confirm</Button>
                </div>
            </div>
        </div>

        <div class="bg-white dark:bg-slate-700 dark:text-white mt-5 rounded-lg p-5">
            <table class=" w-full">
                <tr>
                    <vth>SL.</vth>
                    <vth>Invoice Date</vth>
                    <vth>Invoice</vth>
                    <vth>Total Bill</vth>
                    <vth>Paid</vth>
                    <vth>Due</vth>
                    <vth>Enter Amount</vth>
                </tr>
                <tr v-for="(due, ind) in cart" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">{{ ind +1 }}</vtd>
                    <vtd class="text-center">{{ this.formatDate(due.date) }}</vtd>
                    <vtd class="text-left">{{ due.invoice }} - {{ due.supplier.name }}</vtd>
                    <vtd class="text-center">{{ due.total }}</vtd>
                    <vtd class="text-center">{{ due.paid }}</vtd>
                    <vtd class="text-center">{{ due.due }}</vtd>
                    <vtd class="w-40">
                        <input type="number" v-model="due.payment_amount" @input="paymentAmount(ind)" class="w-full text-center dark:bg-slate-800">
                    </vtd>
                </tr>
            </table>
        </div>
    </main>
</template>


<script>
import Button from '@/components/global/Button.vue';
export default{
    components:{
        Button,
    },
    data() {
        return {
            payment: [],
            account:{
                account_id: null,
                transaction_id: null,
                account_name:'',
                account_number:'',
            },
            cart: [],
            paymentCalculations: {
                total: 0,
                due:0,
                paid:0,
                payment_id:null,
                type: 'add',
            },
        }
    },
    watch:{
        account(account) {
            if(account == undefined) return;
            this.addPayment(account);
            this.account.account_id = account.id;
            this.account.account_name = account.account_name;
            this.account.account_number = account.account_number;
        },
    },
    async created() {
        await this.$store.dispatch("account/getAccounts");
        await this.$store.dispatch('supplier/getSupplierDue');
        this.cart = this.$store.getters['supplier/supplierdue'];
            this.cart.map(item => {
                return item;
            })
    },
    methods: {
        goBack(){
            window.history.back();
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
        paymentAmount(ind){
            this.paymentCalculations.total = this.cart.reduce((p, c) => {return +p + (c.payment_amount ? +c.payment_amount : 0.00)}, 0);
            
            if((+this.cart[ind].payment_amount) > +this.cart[ind].due){
                this.$store.dispatch('notification/error', 'Payment Amount Getter then Due valid');
                this.total = this.total - this.cart[ind].payment_amount;
                this.cart[ind].payment_amount = '';
            }
            this.productReturnTotal(ind)
        },
        productReturnTotal(ind){
            let totaleEl= this.payment.map(pay => pay.ammount)
            let totalAmount= totaleEl.reduce((p, n) => p + n, 0)
            this.paymentCalculations.due = this.paymentCalculations.total - totalAmount;
            this.paymentCalculations.paid =  totalAmount
            if (totalAmount > this.paymentCalculations.total) {
                this.paymentCalculations.paid =  totalAmount - this.payment[ind].ammount
                this.payment[ind].ammount = 0
                totaleEl = this.payment.map(pay => pay.ammount)
                totalAmount= totaleEl.reduce((p, n) => p + n, 0)
                this.paymentCalculations.due = parseInt(this.paymentCalculations.total) - totalAmount;
                this.$store.dispatch('notification/error', 'Input Amount is much more then due ammount');
                return
            }
        },
        deleteMethod(ind,payment) {
            this.productReturnTotal(ind)
            this.paymentAmount(ind)
            this.payment.splice(ind, 1);
            this.paymentCalculations.paid = payment.ammount != undefined ? this.paymentCalculations.paid-payment.ammount : this.paymentCalculations.paid-0;
            this.paymentCalculations.due = this.paymentCalculations.total -this.paymentCalculations.paid
        },
        async savePayment(){
            if(this.paymentCalculations.due > 0){
                this.$store.dispatch('notification/error', 'Due Amont Must Be 0');
                return;
            }
            let filterCart = this.cart.filter(product => product.payment_amount > 0);
            if(filterCart.length == 0){
                this.$store.dispatch('notification/error', 'No products to return');
                return;
            }
            let data = {
                payment: this.payment,
                cart: filterCart,
                total: this.paymentCalculations
            }
            let isSuccess = await this.$store.dispatch('supplier/saveSupplierPayment', data); 
            if (isSuccess) {
                this.$router.push('/suppliers-payment');
            }
        }
    }
}
</script>