<template>
    <main>
        <div class="">
            <div class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Category List</div>
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
                    <div class="">
                        <!-- add category -->
                        <div>
                            <Popup :modalStatus="AddNewCatModel" @close="AddNewCatFun">
                                <template #addContent class="">
                                    <div @click="AddNewCatFun" class="bg-black/40 w-full h-full z-[999] text-white text-2xl font-bold text-center absolute top-0 left-0"></div>
                                    <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                                        <div class="flex justify-between items-center pb-5">
                                            <h2 class="text-2xl dark:text-white">Add Category</h2>
                                            <button ref="myButton" @click="AddNewCatFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 rounded-full group">
                                                <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                                            </button>
                                        </div>
                                        <div class="grid gap-4 dark:text-white">
                                            <div class="grid gap-2">
                                                <p class="">Category</p>
                                                <input type="hidden" v-model="categoryData.id" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                                                <input type="text" v-model="categoryData.name" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                                            </div>
                                            <div class="grid gap-2">
                                                <p class="">Description</p>
                                                <textarea name="" id="" v-model="categoryData.description" cols="30" rows="3" class="dark:bg-slate-800"></textarea>
                                            </div>
                                            <Button @click="saveCategory">Add</Button>
                                        </div>
                                    </div>
                                </template>
                            </Popup>
                            <div>
                                <Button  @click="AddNewCatFun" class="grid justify-center items-center whitespace-nowrap text-white bg-green-500">
                                    Add New Category
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="grid w-full gap-2 dark:text-white">
                            <label for="">Category</label>
                            <input type="text" class="w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Select/Search Category" v-model="searchTerm">
                        </div>
                    </div>
                    <div class="flex gap-5">
                        <Button title="Export as excel" class="w-20 grid justify-center items-center border whitespace-nowrap text-white bg-gray-600">
                            Export
                        </Button>
                        <a href="./category-bulk-import" title="Import">
                            <Button class="w-20 p-2 whitespace-nowrap border text-white bg-gray-600">
                                Import
                            </Button>
                        </a>
                        <Button class="w-20 grid justify-center items-center whitespace-nowrap text-white bg-[#f97316]">
                            Print
                        </Button>
                    </div>
                </div>
            </div>
            <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
                <DataView :value="filteredcategory" dataKey="id"
    :paginator="filteredcategory.length>10 ? true : false" :rows="10" :filters="filters"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
            <template #list="slotProps">
                <table class="w-full dark:bg-slate-700 dark:text-white">
                    <tr>
                        <vth>SL.</vth>
                        <vth>Category Name</vth>
                        <vth>Description</vth>
                        <vth>Status</vth>
                        <vth>Action</vth>
                    </tr>
                    <tr v-for="(item, ind) in slotProps.items" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                        <vtd class="text-center">{{ ind + 1 }}</vtd>
                        <vtd class="text-center">{{ item.name }}</vtd>
                        <vtd class="text-center">{{ item.description }}</vtd>
                        <vtd class="text-center">
                            <Button @click="statusUpdate(item.id,1)" class="bg-red-500 w-16 px-1 py-0" v-if="item.status == 0">Inactive</Button>
                            <Button @click="statusUpdate(item.id,0)" class="bg-green-500 w-16 px-1 py-0" v-if="item.status == 1">Active</Button>
                        </vtd>
                        <vtd>
                            <div class="flex items-center justify-center">
                                <Button @click="editCategory(item)" title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </Button>
                                <Button @click="catagoryDelete(item.id)" title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                    <i class="fa-solid fa-trash"></i>
                                </Button>
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
import { ref } from 'vue';
import Button from '@/components/global/Button.vue';
import Popup from '@/components/global/PopUp.vue';
export default{
    components:{
        Button,
        Popup
    },
    setup(){
        const AddNewCatModel = ref(false);
        const AddNewCatFun = () => {
            AddNewCatModel.value = !AddNewCatModel.value;
        };
        return{
            AddNewCatFun,
            AddNewCatModel
        } 
    },
    data() {
        return {
            searchTerm:'',
            categoryData:{
                name: '',
                id: null,
                description: '',
            },
            model:true,
        }
    },
    created() {
        this.getCategory();
    },
    computed: {
        filteredcategory() {
            const category = this.$store.getters['category/categories'];
            if (this.searchTerm === '') {
                return category;
            }else{
                return category.filter(category => this.categoryGlobalFilter(category, this.searchTerm));
            }
        },
    },
    methods:{
        getCategory(){
            this.$store.dispatch("category/getCategories")
        },
        goBack(){
            window.history.back();
        },
        async saveCategory() {
            // const buttonElement = this.$refs.myButton;
            if(!this.categoryData.name){
                return this.$store.dispatch('notification/error', 'Category Name is required');
            }


		    let isSuccess = await this.$store.dispatch('category/saveCategory', this.categoryData);
            if(isSuccess) {
                this.AddNewCatModel = false
                this.categoryData.name= '';
                this.categoryData.id= null;
                this.categoryData.description= '';
            }
        },
        editCategory(item){
            this.AddNewCatModel = true;
            this.categoryData.id= item.id;
            this.categoryData.name= item.name;
            this.categoryData.description= item.description;
        },
        async statusUpdate(id,code){
            let data = {
                id: id,
                code: code,
            }
            await this.$store.dispatch('category/statusUpdate', data);
        },
        async catagoryDelete(id){
            let data = {
                id: id,
            }
            await this.$store.dispatch('category/catagoryDelete', data);
        }
    },
    watch: {
        '$store.getters["category/categories"]': function (newCategories) {
            this.category = newCategories;
        },
    },
    
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