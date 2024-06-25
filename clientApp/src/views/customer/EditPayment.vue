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
                            <input type="number" v-model="payment.ammount" @input="amountcalculation(ind)" class="w-24 text-center dark:bg-slate-800">
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
                    <vtd class="text-center">{{ ind + 1 }}</vtd>
                    <vtd class="text-center">{{ this.formatDate(due.date) }}</vtd>
                    <vtd class="text-left">{{ due.invoice }} - {{ due.name }}</vtd>
                    <vtd class="text-center">{{ due.total }}</vtd>
                    <vtd class="text-center">{{ due.paid }}</vtd>
                    <vtd class="text-center">{{ due.due }}</vtd>
                    <vtd class="w-40">
                        <input type="number" v-model="due.payment_amount" @input="paymentAmountCalculation(ind)" class="w-full text-center dark:bg-slate-800">
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
            serverdata: [],
            hasdeletePayment: [],
            previous_payment: [],
            changePaymet: [],
            oldcart: [],
            paymentCalculations: {
                total: 0,
                due:0,
                paid:0,
                payment_id:null,
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
        if (this.$route.params.id){
            await this.$store.dispatch('customer/getCustomerPaymentRecord', {payment_id: this.$route.params.id});
            this.handlePaymentProcess();
        }
    },
    methods: {
        goBack(){
            window.history.back();
        },
        handlePaymentProcess() {
            this.serverdata = this.$store.getters['customer/customerPaymentRecord'];
            if (this.serverdata) {
                this.serverdata?.paymentInfo.forEach((item, index) => {
                    this.cart.push({
                        id: item.id,
                        payment_id: item.payment_id,
                        invoice: item.invoice,
                        name: item.name,
                        date: item.date,
                        total: item.total,
                        paid: item.paid - item.payment_amount,
                        due: (+item.due + +item.payment_amount),
                        payment_amount: item.payment_amount,
                    })
                    this.paymentCalculations.payment_id = item.payment_id;
                    this.paymentAmountCalculation(index)
                });
                this.serverdata?.paymentInfo.forEach((item, index) => {
                    this.oldcart.push({
                        id: item.id,
                        payment_id: item.payment_id,
                        invoice: item.invoice,
                        name: item.name,
                        date: item.date,
                        total: item.total,
                        paid: item.paid - item.payment_amount,
                        due: (+item.due + +item.payment_amount),
                        payment_amount: item.payment_amount,
                    })
                    this.paymentCalculations.payment_id = item.payment_id;
                    this.paymentAmountCalculation(index)
                });
                this.serverdata?.transactions.forEach((item, ind) => {
                    this.payment.push({
                        account_id: item.id,
                        account_number: item.account_number,
                        account_name: item.account_name,
                        ammount: parseInt(item.ammount.trim()),
                    })
                    this.amountcalculation(ind)
                });
                this.serverdata?.transactions.forEach(item => {
                    this.previous_payment.push({
                        account_id: item.id,
                        account_number: item.account_number,
                        account_name: item.account_name,
                        ammount: parseInt(item.ammount.trim()),
                    })
                });
            }
        },
        addPayment(data){
            let account = {
                account_id: data.id,
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
        paymentAmountCalculation(ind){
            this.paymentCalculations.total = this.cart.reduce((p, c) => {return +p + (c.payment_amount ? +c.payment_amount : 0.00)}, 0);
            if((+this.cart[ind].payment_amount) > +this.cart[ind].due){
                this.$store.dispatch('notification/error', 'Payment Amount Getter then Due valid');
                this.paymentCalculations.total = this.paymentCalculations.total - this.cart[ind].payment_amount;
                this.cart[ind].payment_amount = '';
            }
            if(this.oldcart.length > 0 && this.oldcart[ind].payment_amount != this.cart[ind].payment_amount){
                this.cart[ind].old_ammount = this.oldcart[ind].payment_amount;
            }
            if(this.payment.length > 0){
                this.amountcalculation(ind)
            }
        },
        amountcalculation(ind){
            if(this.previous_payment.length > 0 && this.previous_payment[ind]){
                let changepay = {
                    account_id: this.previous_payment[ind].account_id,
                    ammount: this.previous_payment[ind].ammount,
                }
                this.changePaymet.findIndex(p => (p.account_id == changepay.account_id));
                this.payment[ind].old_ammount = this.previous_payment[ind].ammount;
            }
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
            if (this.$route.params.id != undefined && payment.account_id) {
                let deletePayment = {
                    account_id: payment.account_id,
                    ammount: payment.ammount,
                }
                this.previous_payment.slice(ind, 1)
                this.hasdeletePayment.push(deletePayment);
            }
            this.amountcalculation(ind)
            this.paymentAmountCalculation(ind)
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
                total: this.paymentCalculations,
                hasdeletePayment: this.hasdeletePayment
            }
            let isSuccess = await this.$store.dispatch('customer/saveCustomerPayment', data); 
            if (isSuccess) {
                this.$router.push('/customers-payment');
            }
        }
    }
}
</script>