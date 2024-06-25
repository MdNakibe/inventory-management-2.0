<template>
  <div>
    <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Employe List</h1>
        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
          <div class="flex gap-x-0 gap-y-5 2xl:gap-10 justify-between items-end ">
                <div class="grid w-full gap-2 dark:text-white">
                    <label for="">Employe Search</label>
                    <input type="text" class=" max-w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Search by Employe" v-model="searchTerm">
                </div>
     
                <div class="flex gap-10">
                    <div>
                        <Popup :modalStatus="AddNewEmployeModel" @close="AddNewEmployeFun">
                            <template #addContent >
                                <div @click="AddNewEmployeFun" class="bg-black/40 w-full h-full z-[999] text-white text-2xl font-bold text-center absolute top-0 left-0"></div>
                                <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                                    <div class="flex justify-between items-center pb-5">
                                        <h2 class="text-2xl dark:text-white">Add New Account</h2>
                                        <Button @click="AddNewEmployeFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 flex items-center justify-center rounded-full group">
                                            <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                                        </Button>
                                    </div>
                                    <div class="grid gap-4 dark:text-white">
                                        <div class="gap-2 ">
                                            <div class="grid gap-2">
                                            <p >Full Name</p>
                                            <input type="hidden" v-model="employeData.id" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                                            <input v-model="employeData.name" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                        </div>
                                        <div class="flex items-end gap-2 ">
                                            <div class="grid gap-2">
                                            <p >Phone Number</p>
                                            <input v-model="employeData.phone" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                            <div class="grid gap-2">
                                                <p >Email</p>
                                                <input v-model="employeData.email" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                        </div>

                                        <div class="flex items-end gap-2 ">
                                            <div class="grid gap-2">
                                                <p >NID</p>
                                                <input v-model="employeData.nid" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                            <div class="grid gap-2">
                                                <p >Joining Date</p>
                                                <input v-model="employeData.joining_date" type="date" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                        </div>
                                        <div class="">
                                            <div class="grid gap-2">
                                                <p >Designation</p>
                                                <input v-model="employeData.designation" type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                                            </div>
                                        </div>
                          
                                        <div class="flex justify-between gap-10">
                                            <Button @click="saveEmploye" class="w-28">Confirm</Button>
                                            <Button @click="clearData" class="w-28 bg-red-500">Clear</Button>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </Popup>
                        <div>
                            <Button @click="AddNewEmployeFun" class="whitespace-nowrap bg-green-500 px-5">Add Employe</Button>
                        </div>
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
                    <vth>Name</vth>
                    <vth>Phone</vth>
                    <vth>Email</vth>
                    <vth>NID</vth>
                    <vth>Joining Date</vth>
                    <vth>Designation</vth>
                    <vth>Action</vth>
                </tr>
                <tr v-for="(item, i) in slotProps.items" :key="i" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">{{ i+1 }}</vtd>
                    <vtd class="text-center">{{ item.name }}</vtd>
                    <vtd class="text-center">{{ item.phone }}</vtd>
                    <vtd class="text-center">{{ item.email }}</vtd>
                    <vtd class="text-center">{{ item.nid }}</vtd>
                    <vtd class="text-center">{{ item.joining_date }}</vtd>
                    <vtd class="text-center">{{ item.designation }}</vtd>
                  
                    <vtd>
                        <div class="flex items-center justify-center">
                            <Button @click="employeDelete(item.id)" title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
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

        </div>
  </div>
</template>
<script>
import Button from '@/components/global/Button.vue';
import { ref, onMounted } from 'vue';
import Popup from '@/components/global/PopUp.vue';
import moment from 'moment';

export default {
  name: "Employee",
  components: {
    Button,Popup
  },


  data() {
        return {
            searchTerm: '',
            employeData: {
                id: "",
                name: "",
                phone: "",
                email: "",
                nid: "",
                joining_date: "",
                designation: "",
            },
            model: true,
            printDataModal: false,
            
        }
    },

    created() {
        this.getEmploye();
    },

    computed: {
        filteredProduct() {
            const employe = this.$store.getters['employe/employes'];
            if (this.searchTerm === '') {
                return employe;
            } else {
                return employe.filter(employe => this.employeGlobalFilter(employe, this.searchTerm));
            }
        },
    },
    methods: {
        async getEmploye() {
        await this.$store.dispatch("employe/getEmployes");
       },

      async saveEmploye() {

            try {
                if (!this.employeData.name) {
                    return this.$store.dispatch('notification/error', 'Name is required');
                }

                let isSuccess = await this.$store.dispatch('employe/saveEmploye', this.employeData);
                if (isSuccess) {
                    this.AddNewEmployeModel = false;
                    this.clearData(); 
                }
            } catch (error) {
                console.error('Error saving account:', error);
                this.$store.dispatch('notification/error', 'Failed to save account. Please try again.');
            }
        },

        editAccount(item) {
                this.AddNewEmployeModel = true;

                this.employeData.id = item.id;
                this.employeData.name = item.name,
                this.employeData.phone= item.phone,
                this.employeData.email= item.email,
                this.employeData.nid= item.nid,
                this.employeData.designation= item.designation,
                this.employeData.joining_date= item.joining_date
        },

        async statusUpdate(id, code) {
            let data = {
                id: id,
                code: code,
            }
            await this.$store.dispatch('account/statusUpdate', data);
        },

        async employeDelete(id) {
            let data = {
                id: id,
            }
            await this.$store.dispatch('employe/employeDelete', data);
        },

        clearData() {
            this.employeData = {
            id: null,
            name: '',
            phone: '',
            email: '',
            nid: '',
            designation: '',
            joining_date: '',
        };
        },

        
    },

    setup() {
        const AddNewEmployeModel = ref(false);
        const clockTime = ref();
        const AddNewEmployeFun = () => {
            AddNewEmployeModel.value = !AddNewEmployeModel.value;
        }

        onMounted(() => {
            clockTime.value = moment().format('MMMM Do YYYY, h:mm:ss a');
            setInterval(() => {
                clockTime.value = moment().format('MMMM Do YYYY, h:mm:ss a');
            }, 1000)
        })
        
        return {
            AddNewEmployeModel,
            AddNewEmployeFun,
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
