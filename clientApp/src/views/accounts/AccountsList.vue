

<template>
    <main>
        <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Accounts List</h1>
        <div class="grid  gap-5 bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
            <div class="flex gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end ">
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Account Type</label>
                    <input type="text" class=" max-w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Search by Product" v-model="searchTerm">
                </div>
               <!--  <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Account Category</label>
                    <input type="text" class=" max-w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Search by Product" >
                </div> -->
                <div class="flex gap-10">
                    <div>
                        <Popup :modalStatus="AddNewAccountModel" @close="AddNewAccountFun">
                            <template #addContent >
                                <div @click="AddNewAccountFun" class="bg-black/40 w-full h-full z-[999] text-white text-2xl font-bold text-center absolute top-0 left-0"></div>
                                <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                                    <div class="flex justify-between items-center pb-5">
                                        <h2 class="text-2xl dark:text-white">Add New Account</h2>
                                        <Button @click="AddNewAccountFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 flex items-center justify-center rounded-full group">
                                            <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                                        </Button>
                                    </div>
                                    <div class="grid gap-4 dark:text-white">
                                        <div class="gap-2 ">
                                            <div class="grid gap-2">
                                            <p >Account Name</p>
                                            <input type="hidden" v-model="accountData.id" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                                            <input v-model="accountData.account_name" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                        </div>
                                        <div class="flex items-end gap-2 ">
                                            <div class="grid gap-2">
                                            <p >Account Number</p>
                                            <input v-model="accountData.account_number" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                            <div class="grid gap-2">
                                                <p >Opening Balance</p>
                                                <input v-model="accountData.oppening_balance" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                        </div>

                                        <div class="flex items-end gap-2 ">
                                            <div class="grid gap-2">
                                                <p >Bank Name</p>
                                                <input v-model="accountData.bank_name" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                            <div class="grid gap-2">
                                                <p >Branch Name</p>
                                                <input v-model="accountData.branch_name" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                        </div>
                                        <div class="flex items-end gap-2 ">
                                          
                                            <div class="grid gap-2">
                                                <p >Total Cash In</p>
                                                <input v-model="accountData.total_cash_in" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                            <div class="grid gap-2">
                                                <p >Total Cash Out</p>
                                                <input v-model="accountData.total_cash_out" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                        </div>
                                        <div class="grid gap-2">
                                            <p >Description</p>
                                            <textarea v-model="accountData.description" name="" id="" cols="30" rows="3" class="dark:bg-slate-800"></textarea>
                                        </div>
                                        <div class="flex justify-between gap-10">
                                            <Button @click="saveAccount" class="w-28">Confirm</Button>
                                            <Button @click="clearData" class="w-28 bg-red-500">Clear</Button>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </Popup>
                        <div>
                            <Button @click="AddNewAccountFun" class="whitespace-nowrap bg-green-500 px-5">Add New Account</Button>
                        </div>
                    </div>
                    <div>
                        <Button @click="printData(filteredProduct)" class="bg-orange-500 w-[100px]">Print</Button>
                    </div>
                </div>
            </div>
        </div>


        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <DataView :value="filteredProduct" dataKey="id"
                :paginator="filteredProduct.length>10 ? true : false" :rows="10"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
            <template #list="slotProps">
            <table class="w-full dark:bg-slate-700 dark:text-white">
                <tr>
                    <vth>SL. </vth>
                    <vth>Account Name</vth>
                    <vth>Account Number</vth>
                    <vth>Bank Name</vth>
                    <vth>Branch Name</vth>
                    <vth>Total Transaction</vth>
                    <vth>Opening Balance</vth>
                    <vth>Total Cash In</vth>
                    <vth>Total Casu Out</vth>
                    <vth>Status</vth>
                    <vth>Action</vth>
                </tr>
                <tr v-for="(item, i) in slotProps.items" :key="i" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">{{ i+1 }}</vtd>
                    <vtd >{{ item.account_name }}</vtd>
                    <vtd class="text-center">{{ item.account_number }}</vtd>
                    <vtd class="text-center">{{ item.bank_name }}</vtd>
                    <vtd>{{ item.branch_name }}</vtd>
                    <vtd>{{ item.total_balance }}</vtd>
                    <vtd>{{ item.oppening_balance }}</vtd>
                    <vtd>{{ item.total_cash_in }}</vtd>
                    <vtd>{{ item.total_cash_out }}</vtd>
                    <vtd class="text-center">
                        <Button @click="statusUpdate(item.id, item.status === 1? 0 : 1)" :class="item.status === 1 ? 'bg-green-500' : 'bg-red-500'" class="px-1 py-0">{{ item.status === 1 ? 'Active' : 'Inactive' }}</Button>
                    
                    </vtd>
                    <vtd>
                        <div class="flex items-center justify-center">
                            <Button v-if="item.has_transaction_count == 0" @click="AccountDelete(item.id)" title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                <i class="fa-solid fa-trash"></i>
                            </Button>
                            <Button @click="editAccount(item)" title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </Button>
                        </div>
                    </vtd>
                </tr>
        
            </table>
        </template>
            </DataView>
            <PrintPDF ref="printPDFComponent" :printStatus="printDataModal" @close="printDataModal=false">
                            <template v-slot:addContent >
                                <div @click="printDataModal=false" class="bg-black/40 w-full h-full z-[999] text-white text-2xl font-bold text-center fixed top-0 left-0"></div>
                                <div class=" bg-[#f5f5f5] w-full h-screen dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                                   
                                    <div style="border-bottom: 1px dotted #333;border-top: 1px dotted #333; margin: 20px 0">
                                         <h2 style="text-align: center; font-weight: 600;">Accounts Invoice</h2>
                                    </div>

                                    <div class=" dark:text-white">
                                        <table class="w-full dark:text-white">
                                            <tr style="">
                                                <th style="">SL. </th>
                                                <th style="">Account Name</th>
                                                <th style="">Account Number</th>
                                                <th style="">Bank Name</th>
                                                <th style="">Branch Name</th>
                                                <th style="">Total Transaction</th>
                                                <th style="">Opening Balance</th>
                                                <th style="">Total Cash In</th>
                                                <th style="">Total Cash Out</th>
                                            </tr>
                                            <tr style="" v-for="(item, i) in filteredProduct" :key="i">
                                                <td style="; text-align: center;">{{ i+1 }}</td>
                                                <td style="">{{ item.account_name }}</td>
                                                <td style="">{{ item.account_number }}</td>
                                                <td style="">{{ item.bank_name }}</td>
                                                <td style="">{{ item.branch_name }}</td>
                                                <td style="">{{ item.total_balance }}</td>
                                                <td style="">{{ item.oppening_balance }}</td>
                                                <td style="">{{ item.total_cash_in }}</td>
                                                <td style="">{{ item.total_cash_out }}</td>
                                            </tr>
                                          </table>
                                        <!-- <div class="text-right mt-10">
                                            <Button @click="printPDFData" class="w-28">Print</Button>
                                        </div> -->
                                       
                                    </div>
                                </div>
                            </template>
            </PrintPDF>

        </div>

    </main>
</template>


<script>
import Button from '@/components/global/Button.vue';
import Popup from '@/components/global/PopUp.vue';
import PrintPDF from '@/components/global/printPDF.vue';
import { ref, onMounted } from 'vue';
import moment from 'moment';



export default {
    components: {
    Button,
    Popup,
    PrintPDF
},

    data() {
        return {
            searchTerm: '',
            accountData: {
                id: "",
                account_name: "",
                account_number: "",
                oppening_balance: "",
                bank_name: "",
                branch_name: "",
                total_cash_in: "",
                total_cash_out: "",
                description: ""
            },
            model: true,
            printDataModal: false,
            
        }
    },

    created() {
        this.getAccount();
    },

    computed: {
        filteredProduct() {
            const account = this.$store.getters['account/accounts'];
            if (this.searchTerm === '') {
                return account;
            } else {
                return account.filter(account => this.accountsListGlobalFilter(account, this.searchTerm));
            }
        },
    },
    methods: {
    printPDFData() {
      const printWindow = window.open('', '_blank');
      const modalContent = this.$refs.printPDFComponent.$el.outerHTML;

      printWindow.document.write(`
        <html>
          <head>
                <style>
                @font-face {
                            font-family: "Font Awesome 6 Pro";
                            font-style: normal;
                            font-weight: 900;
                            font-display: block;
                            src: url(../webfonts/fa-solid-900.woff2) format("woff2"),url(../webfonts/fa-solid-900.ttf) format("truetype")
                        }
                table {
                    border-collapse: collapse;
                    }
                    td, th {
                    border: 1px solid #333;
                    }
                    
                </style>
          </head>
          <body>
            ${modalContent}
          </body>
        </html>
      `);

      printWindow.document.close();
      printWindow.print();

    //   window.print()
    },



        printData(data) {
            this.filteredProduct = data;
            this.printDataModal = true;

            this.$nextTick(() => {
                    this.printPDFData();
                });
        },

    
        async getAccount() {
        await this.$store.dispatch("account/getAccounts");
       },

       async saveAccount() {
            try {
                if (!this.accountData.account_name) {
                    return this.$store.dispatch('notification/error', 'Account Name is required');
                }

                let isSuccess = await this.$store.dispatch('account/saveAccount', this.accountData);
                if (isSuccess) {
                    this.AddNewAccountModel = false;
                    this.clearData(); 
                }
            } catch (error) {
                console.error('Error saving account:', error);
                this.$store.dispatch('notification/error', 'Failed to save account. Please try again.');
            }
        },

        editAccount(item) {
                this.AddNewAccountModel = true;

                this.accountData.id = item.id;
                this.accountData.account_name = item.account_name,
                this.accountData.account_number= item.account_number,
                this.accountData.oppening_balance= item.oppening_balance,
                this.accountData.bank_name= item.bank_name,
                this.accountData.branch_name= item.branch_name,
                this.accountData.total_cash_in= item.total_cash_in,
                this.accountData.total_cash_out= item.total_cash_out,
                this.accountData.description= item.description
        },

        async statusUpdate(id, code) {
            let data = {
                id: id,
                code: code,
            }
            await this.$store.dispatch('account/statusUpdate', data);
        },

        async AccountDelete(id) {
            let data = {
                id: id,
            }
            await this.$store.dispatch('account/accountDelete', data);
        },

        clearData() {
            this.accountData = {
            id: null,
            account_name: '',
            account_number: '',
            oppening_balance: '',
            bank_name: '',
            branch_name: '',
            total_cash_in: '',
            total_cash_out: '',
            description: ''
        };
        },

        
    },

    setup() {
        const AddNewAccountModel = ref(false);
        const clockTime = ref();
        const AddNewAccountFun = () => {
            AddNewAccountModel.value = !AddNewAccountModel.value;
        }

        onMounted(() => {
            clockTime.value = moment().format('MMMM Do YYYY, h:mm:ss a');
            setInterval(() => {
                clockTime.value = moment().format('MMMM Do YYYY, h:mm:ss a');
            }, 1000)
        })
        
        return {
            AddNewAccountModel,
            AddNewAccountFun,
            clockTime,
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
Button.p-paginator-page.p-paginator-element.p-link.p-highlight {
    background: #F0FDFA;
    color: #22C55E;
}
</style>