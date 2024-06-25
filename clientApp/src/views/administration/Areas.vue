<template>
    <main>
        <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Area List</h1>
        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
            <div class="max-w-screen-sm mx-auto">
                <div class="flex justify-between">
                    <div>
                        <div class="flex gap-10 items-center mb-5">
                            <span class="text-xl text-slate-700 dark:text-white font-semibold">Search Area</span>
                            <div>
                                <input type="text" placeholder="Search Area" class="w-[250px] dark:bg-slate-800 dark:text-white" v-model="searchTerm">
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <Popup :modalStatus="AddNewAreaModel" @close="AddNewAreaFun">
                            <template #addContent class="">
                                <div @click="AddNewAreaFun" class="bg-black/40 w-full h-full z-[999] text-white text-2xl font-bold text-center absolute top-0 left-0"></div>
                                <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                                    <div class="flex justify-between items-center pb-5">
                                        <h2 class="text-2xl dark:text-white">Add Area</h2>
                                        <button @click="AddNewAreaFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 rounded-full group">
                                            <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                                        </button>
                                    </div>
                                    <div class="grid gap-4">
                                        <div class="grid gap-2">
                                            <p class="dark:text-white">Area Name*</p>
                                            <input v-model="areaData.name" type="text" class="p-2 min-w-[300px] dark:text-white dark:bg-slate-800">
                                        </div>
                                        <Button @click="saveArea">Add</Button>
                                    </div>
                                </div>
                            </template>
                        </Popup>
                        <div>
                            <Button class="w-[100px]" @click="AddNewAreaFun">Add</Button>
                        </div>
                    </div>
                </div>
                <table class="w-full dark:text-white">
                    <tr>
                        <vth>SL.</vth>
                        <vth>Area Name</vth>
                        <vth>Action</vth>
                    </tr>
                    <tr v-for="(item, ind) in filteredArea" :key="ind"  class="hover:bg-slate-100 dark:hover:bg-slate-600">
                        <vtd class="text-center">{{ ind + 1 }}</vtd>
                        <vtd class="text-center">{{ item.name }}</vtd>
                        <vtd>
                            <div class="grid 2xl:flex gap-1 items-center justify-center">
                                <button @click="editArea(item)" title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button @click="areaDelete(item.id)" title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </vtd>
                    </tr>
                </table>
            </div>
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
        Popup
    },


    setup() {
        const AddNewAreaModel = ref(false);
        const AddNewAreaFun = () => {
            AddNewAreaModel.value = !AddNewAreaModel.value;
        }

        return {
            AddNewAreaModel,
            AddNewAreaFun,
        }
    },
    
    data() {
        return {
            searchTerm:'',
            areaData:{
                name: '',
                id: null,
            }
        }
    },
    created() {
        this.getArea();
    },
    computed: {
        filteredArea() {
            const area = this.$store.getters['area/area'];
            if (this.searchTerm === '') {
                return area;
            }else{
                return area.filter(area => this.categoryGlobalFilter(area, this.searchTerm));
            }
        },
    },
    methods:{
        getArea(){
            this.$store.dispatch("area/getArea")
        },
        goBack(){
            window.history.back();
        },
        async saveArea() {
		    let isSuccess = await this.$store.dispatch('area/saveArea', this.areaData);
            if(isSuccess) {
                this.AddNewAreaModel = false
                this.areaData.name= '';
                this.areaData.id= null;
            }
        },
        editArea(item){
            this.AddNewAreaModel = true;
            this.areaData.id= item.id;
            this.areaData.name= item.name;
        },
        async areaDelete(id){
            let data = {
                id: id,
            }
            await this.$store.dispatch('area/areaDelete',data);
        }
    },
}
</script>