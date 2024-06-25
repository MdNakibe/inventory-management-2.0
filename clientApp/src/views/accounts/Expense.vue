

<template>
    <main>
        <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Expense</h1>
        <div class="grid  gap-5 bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="flex gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end ">

                <div class="flex items-center gap-5">
                    <div class="grid w-full gap-2 dark:text-white">
                        <label for="">Expense Category</label>
                        <input type="text" class=" max-w-[300px] dark:bg-slate-800" autofocus="true">
                    </div>
                    <div class="grid w-full gap-2 dark:text-white">
                        <label for="">Account</label>
                        <input type="text" class=" max-w-[300px] dark:bg-slate-800" autofocus="true">
                    </div>
                </div>
                <div class="flex items-end gap-5 dark:text-white">
                    <div class="grid w-full gap-2">
                        <label for="">Date From </label>
                        <input type="date" class="dark:bg-slate-800 min-w-[200px]" autofocus="true">
                    </div>
                    <div class="grid w-full gap-2 ">
                        <label for="">Date To</label>
                        <input type="date" class="dark:bg-slate-800 min-w-[200px]" autofocus="true">
                    </div>
                    <div>
                        <Button class="bg-green-500">Search</Button>
                    </div>
                </div>
                <div class="flex gap-5">
                    <div>
                        <Popup :modalStatus="RecordNewExpenseModel" @close="RecordNewExpenseFun">
                            <template #addContent>
                                <div @click="RecordNewExpenseFun" class="bg-black/40 w-full h-full z-[999] text-white text-2xl font-bold text-center absolute top-0 left-0"></div>
                                <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                                    <div class="flex justify-between items-center pb-5">
                                        <h2 class="text-2xl dark:text-white">Record New Expense</h2>
                                        <button @click="RecordNewExpenseFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 rounded-full group">
                                            <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                                        </button>
                                    </div>
                                    <div class="grid gap-4 dark:text-white">
                                        <div class="flex items-end gap-2 ">
                                            <div class="grid gap-2">
                                                <p>Transaction ID</p>
                                                <input type="hidden" v-model="expenseData.id" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                                                <input v-model="expenseData.transaction_id" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                            <div class="grid gap-2">
                                                <p>Date</p>
                                                <input v-model="expenseData.date" type="date" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                        </div>
                                        <div class="grid gap-2">
                                            <p>Account</p>
                                            <input v-model="expenseData.account" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                        </div>
                                        <div class="grid gap-2">
                                            <p>Description</p>
                                            <textarea v-model="expenseData.description" name="" id="" cols="30" rows="3" class="dark:bg-slate-800"></textarea>
                                        </div>
                                        <div class="flex items-end gap-2 ">
                                            <div class="grid gap-2">
                                                <p>Income Category</p>
                                                <input v-model="expenseData.category" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                            <div class="grid gap-2">
                                                <p>Amount</p>
                                                <input v-model="expenseData.amount" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                        </div>
                                        <!-- <div class="flex items-end gap-2 ">
                                            <div>
                                                <div class="grid gap-2">
                                                    <p>Total Value</p>
                                                    <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                                </div>
                                            </div>
                                            <div class="mx-auto">
                                                <div class="border border-black/60 p-5 rounded text-2xl font-bold dark:bg-slate-800">25</div>
                                            </div>
                                        </div> -->
                                        <div class="flex justify-between gap-10">
                                            <Button @click="saveExpense" class="w-28">Confirm</Button>
                                            <Button @click="clearData" class="w-28 bg-red-500">Clear</Button>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </Popup>
                        <div>
                            <Button @click="RecordNewExpenseFun" class="whitespace-nowrap bg-green-500 px-5">Record New Expense</Button>
                        </div>
                    </div>
                    <div>
                        <Button class="bg-orange-500 w-[100px]">Print</Button>
                    </div>
                </div>
            </div>
        </div>


        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <DataView :value="filteredExpense" dataKey="id"
                :paginator="filteredExpense.length>10 ? true : false" :rows="10"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
            <template #list="slotProps">
            <table class="w-full dark:bg-slate-700 dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Date</vth>
                    <vth>Transaction ID</vth>
                    <vth>Expense Category</vth>
                    <vth>Account</vth>
                    <vth>Description</vth>
                    <vth>Amount</vth>
                    <vth>Action</vth>
                </tr>
                <tr v-for="(item,i) in slotProps.items" :key="i" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">{{ i+1 }}</vtd>
                    <vtd class="text-center">{{ item.date }}</vtd>
                    <vtd class="text-center">{{ item.transaction_id }}</vtd>
                    <vtd class="text-center">{{ item.category }}</vtd>
                    <vtd class="text-center">{{ item.account }}</vtd>
                    <vtd class="text-center">{{ item.description }}</vtd>
                    <vtd class="text-right">{{ item.amount }}</vtd>
                    <vtd>
                        <div class="flex items-center justify-center">
                            <button @click="ExpenseDelete(item.id)" title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                            <button @click="editExpense(item)" title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                        </div>
                    </vtd>
                </tr>
            </table>
        </template>
    </DataView>
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
            expenseData: {
                id: "",
                transaction_id: "",
                date: "",
                account: "",
                description: "",
                category: "",
                amount: "",
                added_by: "",
                updated_by: ""
            },
        }
    },

    created() {
        this.getExpense();
    },

    computed: {
        filteredExpense() {
            const expense = this.$store.getters['expense/expences'];
            if (this.searchTerm === '') {
                return expense;
            } else {
                return expense.filter(expense => this.expenseGlobalFilter(expense, this.searchTerm));
            }
        },
    },


    methods: {
        
        async getExpense() {
        await this.$store.dispatch("expense/getExpenses");
        },


        async saveExpense() {
            try {
                if (!this.expenseData.amount) {
                    return this.$store.dispatch('notification/error', 'Expense Amount is required');
                }

                let isSuccess = await this.$store.dispatch('expense/saveExpense', this.expenseData);
                if (isSuccess) {
                    this.RecordNewExpenseModel = false;
                    this.clearData()
                }
            } catch (error) {
                console.error('Error saving account:', error);
                this.$store.dispatch('notification/error', 'Failed to save account. Please try again.');
            }
        },

        editExpense(item) {
                this.RecordNewExpenseModel = true;

                this.expenseData.id = item.id;
                this.expenseData.transaction_id = item.transaction_id,
                this.expenseData.date= item.date,
                this.expenseData.account= item.account,
                this.expenseData.description= item.description,
                this.expenseData.category= item.category,
                this.expenseData.amount= item.amount,
                this.expenseData.added_by= item.total_cash_out,
                this.expenseData.updated_by= item.updated_by
        },

        async ExpenseDelete(id) {
            let data = {
                id: id,
            }
            await this.$store.dispatch('expense/expenseDelete', data);
        },

        clearData() {
            this.expenseData = {
            id: null,
            transaction_id: '',
            date: '',
            account: '',
            description: '',
            category: '',
            amount: '',
            total_cash_out: '',
            total_cash_out: '',
            updated_by: ''
        };
        },

       

    },

    setup() {
        const RecordNewExpenseModel = ref(false);
        const RecordNewExpenseFun = () => {
            RecordNewExpenseModel.value = !RecordNewExpenseModel.value;
        }
        return {
            RecordNewExpenseModel,
            RecordNewExpenseFun,
        }
    }
}
</script>