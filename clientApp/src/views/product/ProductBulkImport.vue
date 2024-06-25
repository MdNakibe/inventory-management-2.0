<template>
    <main>
        <div class="text-green-800">
            <div class="flex justify-between items-center mb-5">
                <div class="text-2xl text-slate-700 dark:text-white font-bold">Bulk Import</div>
                <Button @click="goBack" type="button" class="flex items-center justify-center w-1/2 px-5 py-3 text-sm whitespace-nowrap text-gray-700 dark:text-white hover:text-white transition-colors duration-200 bg-white dark:bg-slate-600 border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-600">
                    <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Go back</span>
                </Button>
            </div>

            <div class="bg-white dark:bg-slate-700 rounded-md p-5">
                <div class="flex items-start gap-10">
                    <div class="grid gap-5 border-r pr-10">
                        <h2 class="dark:text-white">Download <strong class="bg-green-200 dark:bg-green-500 font-semibold text-green-600 dark:text-white px-2 py-1 rounded">
                            <button @click="exportexcel">sample xlsx file</button>
                            </strong> and compare it to your import file to ensure you have the file perfect for the import.</h2>
                        <div>
                            <div class="flex items-center justify-center w-full">
                                <label for="fileInput" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 dark:border-slate-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-slate-600 dark:bg-slate-800 hover:bg-gray-100 dark:hover:border-gray-500">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-white"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-white">Supported Formates: XLX, XLSX</p>
                                    </div>
                                    <input type="file" @input="e => handleFileSelect(e.target.files[0])" id="fileInput"  ref="fileInputRef" class="hidden" />
                                </label>
                            </div>
                            <p class="text-xs text-red-500 pt-1 text-center">Please select only XLX, XLSX</p>
                        </div>
                        <div v-if="shit.selected_shit" class="flex items-center justify-between gap-5 border border-dashed rounded dark:border-slate-600 p-2 dark:bg-slate-800">
                            <div class="flex items-center gap-2 dark:text-green-500">
                                <i class="fa-solid fa-file-excel"></i>
                                <span>{{ shit.selected_shit }}</span>
                               
                            </div>
                            <button @click="closeFile" class="rounded-full bg-red-100 text-red-500 hover:text-white hover:bg-red-500 w-8 h-8">
                                <i class="fa-sharp fa-regular fa-xmark"></i>
                            </button>
                        </div>
                        <div>
                            <Button @click="saveProduct">Upload</Button>
                        </div>
                    </div>
                    <div class="">
                        <div class="flex items-center gap-1 pb-2 dark:text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bulb" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path>
                                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path>
                                <path d="M9.7 17l4.6 0"></path>
                            </svg>
                            <span class="">
                                <strong>Import Tips</strong>
                            </span>
                        </div>
                        <ul class="list-disc leading-8 text-[13px] pl-5 dark:text-white">
                            <li class="">You can download the <strong class="bg-green-200 dark:bg-green-500 font-semibold text-green-600 dark:text-white px-2 py-1 rounded">
                                <button @click="exportexcel">sample xlsx file</button>
                                </strong> to get detailed information about the data fields used while importing.</li>
                            <li class="">Your file should be in XLS or XLSX format.</li>
                            <li class="">In sample file, required column headers are star marked and have required note on them.</li>
                            <li class="">Make sure that no required columns are empty.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5" v-if="this.desserts.length > 0">

            <DataView :value="desserts" dataKey="id"
                :paginator="true" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,20,50]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
            <template #list="slotProps">
                <table class="w-full dark:text-white">
                <tr>
                    <vth>SL.</vth>
                    <vth>Name</vth>
                    <vth>Description</vth>
                    <vth>Category</vth>
                    <vth>Brand</vth>
                    <vth>Unit</vth>
                    <vth>Low stock qty</vth>
                </tr>
                {{  }}
                <tr v-for="(item, ind) in slotProps.items" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                    <vtd class="text-center">{{ ind + 1 }}</vtd>
                    <vtd class="text-center">{{ item.name }}</vtd>
                    <vtd class="text-center">{{ item.description }}</vtd>
                    <vtd class="text-center">{{ item.category }}</vtd>
                    <vtd class="text-center">{{ item.brand }}</vtd>
                    <vtd class="text-center">{{ item.unit }}</vtd>
                    <vtd class="text-center">{{ item.low_stock_qty }}</vtd>
                </tr>
            </table>
           </template>
        </DataView>


           
        </div>
    </main>
</template>

<script>
import Button from '@/components/global/Button.vue';
import { ref } from 'vue';
import { read, utils, readFile, writeFile } from "xlsx";

export default{
    components:{
        Button
    },
    setup(){
        const fileName = ref();
        const handleFileChange = (event) => {
            const file = event.target.files[0].name;
            fileName.value = file;
        }
        const fileInputRef = ref(null);
        const closeFile = () => {
            fileName.value = null;
            const fileInput = fileInputRef.value;
            if (fileInput) {
                fileInput.value = '';
            }
        }


        const goBack = () => {
            window.history.back();
        }
        return{
            goBack,
            handleFileChange,
            closeFile,
            fileName,
        }
    },
    data: () => ({
        product: null,
        loading: false,
        show: false,
        desserts: [],
        benched: 5,
        headers: [
            { text: 'Name', value: 'name' },
            { text: 'Description', value: 'description' },
            { text: 'Brand', value: 'brand' },
            { text: 'Category', value: 'category' },
            { text: 'Low stock qty', value: 'low_stock_qty' },
            { text: 'Unit', value: 'unit' },
        ],
        requiredColumn: [
        'name', 'brand', 'category','unit','low_stock_qty'
        ],
        shit: {
            html: '',
            selected_shit: null,
        },
        analyzeReport: '',
        products: [],
        workbook: null,
        shit_names: null,
        loadingSheet: false,
        column: [
            ["name","description", "brand", "unit", "category", "low_stock_qty"]
        ]
    }),
    watch: {
        'shit.selected_shit'(selected_shit) {
            this.handleShit(selected_shit)
        },
    },
    methods: {
        exportexcel(){
            const format = utils.book_new();
            const filed = utils.aoa_to_sheet(this.column);
            utils.book_append_sheet(format,filed,"ProductBulkUpload");
            writeFile(format,"product_bulk_upload.xlsx");
        },
        handleShit(selected_shit) {
           
           this.desserts = utils.sheet_to_json(this.workbook.Sheets[selected_shit]);
           this.analyzeProduct()
       },
       analyzeProduct() {
            let items = this.desserts;
            if (items.length == 0) return;
            let single_item = items[0];
            let targetKey   = this.requiredColumn
            let foundKey    = Object.keys(single_item)
            let missing     = targetKey.filter(column => !foundKey.includes(column));
            if (missing.length) {
                this.analyzeReport += `<div>${missing.join(', ')} missing  ${missing.length > 1 ? 'columns' : 'column'} </div>`;
            }

        },
        async handleFileSelect(inputFile=null) {
            if (!inputFile) {
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                const bstr = e.target.result;
                const wb   = read(bstr, { type: 'binary' });

                this.workbook           = wb;
                this.shit_names         = wb.SheetNames;
                this.shit.selected_shit = wb.SheetNames[0];
            }
            reader.readAsBinaryString(inputFile);
        },
        async saveProduct(){
            let isSuccess = await this.$store.dispatch('product/saveBulkProduct', this.desserts);
            if(isSuccess) {
                this.$router.push('/product-management');
            }
        }
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