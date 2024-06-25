<template>
  <main>
      <Popup :modalStatus="AddNewProductCatModel" @close="AddNewProductCatFun">
          <template #addContent>
              <div @click="AddNewProductCatFun" class="bg-black/40 w-full h-full z-[999] text-white text-2xl font-bold text-center absolute top-0 left-0"></div>
              <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                  <div class="flex justify-between items-center pb-5">
                      <h2 class="text-2xl dark:text-white">Add Category</h2>
                      <button @click="AddNewProductCatFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 rounded-full group">
                          <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                      </button>
                  </div>
                  <div class="grid gap-4 dark:text-white">
                      <div class="grid gap-2">
                          <p>Category</p>
                          <input type="hidden" v-model="categoryData.id" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                          <input type="text" v-model="categoryData.name" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                      </div>
                      <div class="grid gap-2">
                          <p>Description</p>
                          <textarea name="" id="" v-model="categoryData.description" cols="30" rows="3" class="dark:bg-slate-800"></textarea>
                      </div>
                      <Button @click="saveCategory">Add</Button>
                  </div>
              </div>
          </template>
      </Popup>
      <Popup :modalStatus="AddNewProductBrandModel" @close="AddNewProductBrandFun">
          <template #addContent>
              <div @click="AddNewProductBrandFun" class="bg-black/40 w-full h-full z-[999] text-white text-2xl font-bold text-center absolute top-0 left-0"></div>
              <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                  <div class="flex justify-between items-center pb-5 dark:text-white">
                      <h2 class="text-2xl ">Add Brand</h2>
                      <button @click="AddNewProductBrandFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 rounded-full group">
                          <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                      </button>
                  </div>
                  <div class="grid gap-4 dark:text-white">
                      <div class="grid gap-2">
                          <p>Brand</p>
                          <input type="hidden" v-model="brandData.id" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                          <input type="text" v-model="brandData.name" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                      </div>
                      <div class="grid gap-2">
                          <p>Description</p>
                          <textarea v-model="brandData.description" name="" id="" cols="30" rows="3" class="dark:bg-slate-800"></textarea>
                      </div>
                      <Button @click="saveBrand">Add</Button>
                  </div>
              </div>
          </template>
      </Popup>
      <Popup :modalStatus="AddNewProductUnitModel" @close="AddNewProductUnitFun">
          <template #addContent>
              <div @click="AddNewProductUnitFun" class="bg-black/40 w-full h-full z-[999] text-white text-2xl font-bold text-center absolute top-0 left-0"></div>
              <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                  <div class="flex justify-between items-center pb-5">
                      <h2 class="text-2xl dark:text-white">Add Unit</h2>
                      <button @click="AddNewProductUnitFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 rounded-full group">
                          <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                      </button>
                  </div>
                  <div class="grid gap-4 dark:text-white">
                      <div class="grid gap-2">
                          <p>Unit</p>
                          <input type="hidden" v-model="unitData.id" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                          <input type="text" v-model="unitData.name" class="p-2 min-w-[300px] dark:bg-slate-800" required>
                      </div>
                      <div class="grid gap-2">
                          <p>Description</p>
                          <textarea v-model="unitData.description" name="" id="" cols="30" rows="3" class="dark:bg-slate-800"></textarea>
                      </div>
                      <Button @click="saveUnit">Add</Button>
                  </div>
              </div>
          </template>
      </Popup>
      <Popup :modalStatus="AddNewProductColorModel" @close="AddNewProductColorFun">
          <template #addContent>
              <div @click="AddNewProductColorFun" class="bg-black/40 w-full h-full z-[999] text-white text-2xl font-bold text-center absolute top-0 left-0"></div>
              <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                  <div class="flex justify-between items-center pb-5">
                      <h2 class="text-2xl dark:text-white">Add Color</h2>
                      <button @click="AddNewProductColorFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 rounded-full group">
                          <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                      </button>
                  </div>
                  <div class="grid gap-4 dark:text-white">
                      <div class="grid gap-2">
                          <p>Color</p>
                          <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                      </div>
                      <div class="grid gap-2">
                          <p>Description</p>
                          <textarea name="" id="" cols="30" rows="3" class="dark:bg-slate-800"></textarea>
                      </div>
                      <Button>Add</Button>
                  </div>
              </div>
          </template>
      </Popup>

      <Popup :modalStatus="AddNewProductSizeModel" @close="AddNewProductSizeFun">
          <template #addContent>
              <div @click="AddNewProductSizeFun" class="bg-black/40 w-full h-full z-[999] text-white text-2xl font-bold text-center absolute top-0 left-0"></div>
              <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                  <div class="flex justify-between items-center pb-5">
                      <h2 class="text-2xl dark:text-white">Add Size</h2>
                      <button @click="AddNewProductSizeFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 rounded-full group">
                          <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                      </button>
                  </div>
                  <div class="grid gap-4">
                      <div class="grid gap-2">
                          <p class="dark:text-white">Size Type Name *</p>
                          <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800">
                      </div>
                      <div class="grid gap-2">
                          <p class="dark:text-white">Size Name</p>
                          <div class="bg-white dark:bg-slate-600 rounded">
                              <div class="flex items-center justify-between p-2">
                                  <input type="text" class="dark:bg-slate-800">
                                  <Button>Add</Button>
                              </div>
                              <div class="m-2">
                                  <table class="w-full">
                                      <tbody>
                                          <tr>
                                              <vtd><input type="text" class="w-full border-none focus:border dark:bg-slate-800 dark:text-white" value="Item 1"></vtd>
                                              <vtd class="w-10">
                                                  <button>
                                                      <svg xmlns="http://www.w3.org/2000/svg" class="bg-red-100 w-8 h-8 p-1 rounded-full text-red-500 hover:bg-red-500 hover:text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                          <path d="M4 7l16 0"></path>
                                                          <path d="M10 11l0 6"></path>
                                                          <path d="M14 11l0 6"></path>
                                                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                                      </svg>
                                                  </button>
                                              </vtd>
                                          </tr>
                                          <tr>
                                              <vtd><input type="text" class="w-full border-none focus:border dark:bg-slate-800 dark:text-white" value="Item 1"></vtd>
                                              <vtd class="w-10">
                                                  <button>
                                                      <svg xmlns="http://www.w3.org/2000/svg" class="bg-red-100 w-8 h-8 p-1 rounded-full text-red-500 hover:bg-red-500 hover:text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                          <path d="M4 7l16 0"></path>
                                                          <path d="M10 11l0 6"></path>
                                                          <path d="M14 11l0 6"></path>
                                                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                                      </svg>
                                                  </button>
                                              </vtd>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                      <Button>Add</Button>
                  </div>
              </div>
          </template>
      </Popup>










      <div class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Product Management</div>
      <div class="bg-white dark:bg-slate-700 rounded-md p-5">
          <div class="flex flex-wrap justify-between items-end gap-5">
              <!-- Add new product -->
              <Popup :modalStatus="AddNewProductModel" @close="AddNewProductFun">
                  <template #addContent>
                      <div @click="AddNewProductFun" class="bg-black/40 w-full h-full top-0 left-0 z-[900] text-white text-2xl font-bold text-center absolute"></div>
                      <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[901] border shadow-xl p-5 rounded">
                          <div class="dark:text-white">
                              <div class="flex justify-between items-center pb-5">
                                  <h2 class="text-2xl ">Add New Product</h2>
                                  <button @click="AddNewProductFun" class="bg-red-200 hover:bg-red-500 w-8 h-8 rounded-full group">
                                      <i class="fa-solid fa-xmark text-red-500 group-hover:text-white"></i>
                                  </button>
                              </div>
                              <div class="grid gap-4">
                                  <div class="flex gap-5">
                                      <div class="grid gap-2">
                                          <p>Product ID (*)</p>
                                          <input type="text" disabled class="p-2 min-w-[300px] dark:bg-slate-800" placeholder="Auto Generate" v-model="product.code">
                                      </div>
                                      <div class="grid gap-2">
                                          <p>Low Stock Quantity</p>
                                          <input type="number" class="p-2 min-w-[300px] dark:bg-slate-800" v-model="product.low_stock">
                                      </div>
                                  </div>
                                  <div class="grid gap-2">
                                      <p>Product Name (*)</p>
                                      <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800" v-model="product.product_name">
                                  </div>
                                  <div class="grid gap-2">
                                      <p>Description</p>
                                      <textarea name="" id="" cols="30" rows="3" class="dark:bg-slate-800" v-model="product.description"></textarea>
                                  </div>
                                  <div class="grid grid-cols-2 gap-5">
                                      <div class="flex items-end gap-2 ">
                                          <div class="grid gap-2 w-full">
                                              <p>Category (*)</p>
                                              <model-list-select :list="$store.getters['category/categories']" option-value="id" option-text="name" v-model="product.category" />

                                          </div>
                                          <div>
                                              <Button @click="AddNewProductCatFun" class="w-11 h-11 grid justify-center items-center border rounded-full border-green-500">
                                                  <i class="fa-solid fa-plus"></i>
                                              </Button>
                                          </div>
                                      </div>
                                      <div class="flex items-end gap-2">
                                          <div class="grid gap-2 w-full">
                                              <p>Brand (*) </p>
                                              <model-list-select :list="$store.getters['brand/brands']" option-value="id" option-text="name" v-model="product.brand" />
                                          </div>
                                          <div>
                                              <Button @click="AddNewProductBrandFun" class="w-11 h-11 grid justify-center items-center border rounded-full border-green-500">
                                                  <i class="fa-solid fa-plus"></i>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>

                                  <div class="grid grid-cols-2 gap-5">
                                      <div class="grid gap-2">
                                          <p>Barcode / QR Code </p>
                                          <input type="text" class="p-2 min-w-[300px] dark:bg-slate-800" v-model="product.barcode">
                                      </div>
                                      <div class="flex items-end gap-2">
                                          <div class="grid gap-2 w-full">
                                              <p>Unit (*) </p>
                                              <model-list-select :list="$store.getters['unit/activeUnits']" option-value="id" option-text="name" v-model="product.unit" />
                                          </div>
                                          <div>
                                              <Button @click="AddNewProductUnitFun" class="w-11 h-11 grid justify-center items-center border rounded-full border-green-500">
                                                  <i class="fa-solid fa-plus"></i>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="grid gap-2">
                                      <p>Product Image</p>
                                      <input type="file" class="p-2 border border-black/60 bg-white rounded outline-green-500 dark:bg-slate-800">
                                  </div>

                                  <div class="flex items-center justify-center gap-5 select-none my-2">
                                      <input type="checkbox" class="p-2" id="IMEI">
                                      <label for="IMEI">Serialized Item</label>
                                  </div>
                                  <div class="flex justify-center gap-10">
                                      <Button @click="saveProduct" class="w-28">Add</Button>
                                      <Button @click="clearInputData" class="w-28 bg-red-500">Clear</Button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </template>
              </Popup>
              <Button @click="AddNewProductFun" class=" w-48">Add New Product</Button>

              <div class="flex justify-center flex-wrap gap-10">
                  <div>
                      <div class="grid w-full gap-2 dark:text-white">
                          <label for="">Product</label>
                          <input type="text" class="min-w-[300px] dark:bg-slate-800" autofocus="true" placeholder="Select/Search Product" v-model="searchTerm">

                      </div>
                  </div>
                  <div>
                      <div class="grid gap-2 dark:text-white">
                          <label for="pet-select">Category</label>

                          <select name="" class="min-w-[300px] dark:bg-slate-800">
                              <option selected disabled>--Select--</option>
                              <option value="dog">Helmet</option>
                              <option value="cat">Engine Oil</option>
                              <option value="hamster">Gloves</option>
                              <option value="parrot">Brake</option>
                              <option value="spider">Head Light</option>
                              <option value="goldfish">Wind Breaker</option>
                          </select>
                      </div>
                  </div>
                  <div>
                      <div class="grid gap-2 dark:text-white">
                          <label for="pet-select">Brand</label>
                          <select name="" class="min-w-[300px] dark:bg-slate-800">
                              <option selected disabled>--Select--</option>
                              <option value="dog">Motul</option>
                              <option value="cat">Origine</option>
                              <option value="hamster">Motorista</option>
                              <option value="parrot">Quick Fix</option>
                              <option value="spider">RCB</option>
                              <option value="goldfish">Just One</option>
                          </select>
                      </div>
                  </div>
              </div>

              <div class="flex gap-5">
                  <Button title="Export as excel" class="w-20 grid justify-center items-center border whitespace-nowrap text-white bg-gray-600">
                      Export
                  </Button>
                  <a href="./product-bulk-import" title="Import">
                      <Button class="w-20 p-2 whitespace-nowrap text-white border bg-gray-600">
                          Import
                      </Button>
                  </a>
                  <Button title="User Permission Needed" disabled class="w-20 grid justify-center items-center whitespace-nowrap text-white bg-[#f97316] cursor-not-allowed">
                      Print
                  </Button>
              </div>
          </div>
      </div>
      <div class="bg-white dark:bg-slate-700 mt-5 rounded-lg p-5">
          <div class="flex justify-between pb-3">
              <h2 class="text-2xl dark:text-white">Product List</h2>
              <div class="flex gap-5">
                  <Button class="bg-[#f97316] w-48">Wholesale Price List</Button>
                  <Button class="bg-[#f97316] w-48">Retail Price List</Button>
                  <Button class="bg-[#f97316] w-48">Product List</Button>
              </div>
          </div>
      
      
          <table  class="w-full dark:text-white">
              <tr>
                  <vth>SL.</vth>
                  <vth>Product ID</vth>
                  <vth>Product Name</vth>
                  <vth>Image</vth>
                  <vth>Barcode/QR Code</vth>
                  <vth>Description</vth>
                  <vth>Category</vth>
                  <vth>Brand</vth>
                  <vth>Unit</vth>
                  <vth>Avg. Purchase Rate</vth>
                  <vth>Wholesale Rate</vth>
                  <vth>Retail Rate</vth>
                  <vth>Status</vth>
                  <vth>Action</vth>
              </tr>
             
           
              <tr v-if="useSelectProduct" v-for="(item, i) in selectProduct" :key="i" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                  <vtd class="text-center">{{ (currentPage - 1) * itemsPerPage + i + 1 }}</vtd>
                  <vtd class="text-center">{{ item.code }}</vtd>
                  <vtd class="text-center">{{ item.product_name }}</vtd>
                  <vtd class="text-center"></vtd>
                  <vtd class="text-center">{{ item.barcode }}</vtd>
                  <vtd class="text-center">{{ item.description }}</vtd>
                  <vtd class="text-center">{{ item.category.name }}</vtd>
                  <vtd class="text-center">{{ item.brand.name }}</vtd>
                  <vtd class="text-center">{{ item.unit.name }}</vtd>
                  <vtd class="text-center">0</vtd>
                  <vtd class="text-center">0</vtd>
                  <vtd class="text-center">0</vtd>
                  <vtd class="text-center">
                      <Button @click="statusUpdate(item.id, 1)" class="bg-red-500 w-16 px-1 py-0" v-if="item.status == 0">Inactive</Button>
                      <Button @click="statusUpdate(item.id, 0)" class="bg-green-500 w-16 px-1 py-0" v-if="item.status == 1">Active</Button>
                  </vtd>
                  <vtd>
                      <div class="flex items-center justify-center">
                          <Button @click="editProduct(item)" title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                              <i class="fa-solid fa-pen-to-square"></i>
                          </Button>
                          <Button @click="productDelete(item.id)" title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                              <i class="fa-solid fa-trash"></i>
                          </Button>
                      </div>
                  </vtd>
              </tr>
              <tr v-else v-for="(item, ind) in paginatedProducts" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                  <vtd class="text-center">{{ (currentPage - 1) * itemsPerPage + ind + 1 }}</vtd>
                  <vtd class="text-center">{{ item.code }}</vtd>
                  <vtd class="text-center">{{ item.product_name }}</vtd>
                  <vtd class="text-center"></vtd>
                  <vtd class="text-center">{{ item.barcode }}</vtd>
                  <vtd class="text-center">{{ item.description }}</vtd>
                  <vtd class="text-center">{{ item.category.name }}</vtd>
                  <vtd class="text-center">{{ item.brand.name }}</vtd>
                  <vtd class="text-center">{{ item.unit.name }}</vtd>
                  <vtd class="text-center">0</vtd>
                  <vtd class="text-center">0</vtd>
                  <vtd class="text-center">0</vtd>
                  <vtd class="text-center">
                      <Button @click="statusUpdate(item.id, 1)" class="bg-red-500 w-16 px-1 py-0" v-if="item.status == 0">Inactive</Button>
                      <Button @click="statusUpdate(item.id, 0)" class="bg-green-500 w-16 px-1 py-0" v-if="item.status == 1">Active</Button>
                  </vtd>
                  <vtd>
                      <div class="flex items-center justify-center">
                          <Button @click="editProduct(item)" title="Edit" class="hover:bg-[#3056d3] py-0.5 px-1.5 bg-[#3056d3]/10 rounded text-[#3056d3] hover:text-white mr-1">
                              <i class="fa-solid fa-pen-to-square"></i>
                          </Button>
                          <Button @click="productDelete(item.id)" title="Delete" class="hover:bg-red-500 py-0.5 px-1.5 bg-red-100 rounded text-red-500 hover:text-white mr-1">
                              <i class="fa-solid fa-trash"></i>
                          </Button>
                      </div>
                  </vtd>
              </tr>
          </table>

          <!-- Pagination -->
          <Pagination
              :total-items="filteredProduct.length"
              :items-per-page="itemsPerPage"
              :current-page="currentPage"
              @page-change="handlePageChange"
              @selectNumber="handleSelectNumber"
          ></Pagination>
          <!-- End Pagination -->


      </div>
  

  </main>
</template>

<script>
import { ref, } from 'vue';
import Button from '@/components/global/Button.vue';
import Popup from "@/components/global/PopUp.vue";
import Pagination from '../../components/global/Pagination.vue';



export default {
  components: {
      Button,
      Popup,
      Pagination,
  },




  setup() {
     
    
      const AddNewProductModel = ref(false);
      const AddNewProductFun = () => {
          AddNewProductModel.value = !AddNewProductModel.value;
      }

      const AddNewProductCatModel = ref(false);
      const AddNewProductCatFun = () => {
          AddNewProductCatModel.value = !AddNewProductCatModel.value;
      }

      const AddNewProductBrandModel = ref(false);
      const AddNewProductBrandFun = () => {
          AddNewProductBrandModel.value = !AddNewProductBrandModel.value;
      }

      const AddNewProductUnitModel = ref(false);
      const AddNewProductUnitFun = () => {
          AddNewProductUnitModel.value = !AddNewProductUnitModel.value;
      }

      const AddNewProductColorModel = ref(false);
      const AddNewProductColorFun = () => {
          AddNewProductColorModel.value = !AddNewProductColorModel.value;
      }

      const AddNewProductSizeModel = ref(false);
      const AddNewProductSizeFun = () => {
          AddNewProductSizeModel.value = !AddNewProductSizeModel.value;
      }

      const ActiveInActive = ref(true);
      const ActiveInActiveFunction = () => {
          let text = "Press a button!\nEither OK or Cancel."
          if (confirm(text) == true) {
              ActiveInActive.value = !ActiveInActive.value;
          }
          else {
          }
      }
      return {
          AddNewProductModel,
          AddNewProductFun,
          AddNewProductCatModel,
          AddNewProductCatFun,
          AddNewProductBrandModel,
          AddNewProductBrandFun,
          AddNewProductUnitModel,
          AddNewProductUnitFun,
          AddNewProductColorModel,
          AddNewProductColorFun,
          AddNewProductSizeModel,
          AddNewProductSizeFun,
          ActiveInActive,
          ActiveInActiveFunction,
      }
  },
  data() {
      return {
          useSelectProduct: false,
          selectNumber: 10,
          selectProduct: [],
          itemsPerPage: 10,
          currentPage: 1,
          searchTerm: '',
          categoryData: {
              name: '',
              id: null,
              description: '',
          },
          product: {
              id: null,
              code: '',
              low_stock: '',
              product_name: '',
              description: '',
              barcode: '',
              category: '',
              brand: '',
              unit: '',
          },
          brandData: {
              id: '',
              name: '',
              description: '',
          },
          unitData: {
              id: '',
              name: '',
              description: '',
          },
      }
  },
  async created() {
      this.product.code = await this.$store.dispatch('product/generateProductCode');
      await this.$store.dispatch('product/getproducts');
      this.getcategory();
      this.getBrand();
      this.getunit();
  },

 
  computed: {
      paginatedProducts() {
      if (this.useSelectProduct) {
          return this.selectProduct;
      } else {
          const start = (this.currentPage - 1) * this.itemsPerPage;
          const end = start + this.itemsPerPage;
          return this.filteredProduct.slice(start, end);
      }
  },
  
      filteredProduct() {
          const product = this.$store.getters['product/products'];
          if (this.searchTerm === '') {
              return product;
          } else {
              return product.filter(product => this.productGlobalFilter(product, this.searchTerm));
          }
      },

      
  },
  methods: {
      handleSelectNumber(value){
          this.selectProduct = this.filteredProduct.slice(0, value);
          this.useSelectProduct = true;
     },
  
      handlePageChange(page) {
          this.currentPage = page;
     },
      async getcategory() {
          await this.$store.dispatch('category/getCategories');
      },
      async getBrand() {
          await this.$store.dispatch('brand/getBrands');
      },
      async getunit() {
          await this.$store.dispatch('unit/getActiveUnit');
      },
      async saveCategory() {
          // const buttonElement = this.$refs.myButton;
          let isSuccess = await this.$store.dispatch('category/saveCategory', this.categoryData);
          if (isSuccess) {
              this.AddNewProductCatModel = false
              this.categoryData.name = '';
              this.categoryData.id = null;
              this.categoryData.description = '';
          }
      },
      async saveUnit() {
          // const buttonElement = this.$refs.myButton;
          let isSuccess = await this.$store.dispatch('unit/saveUnit', this.unitData);
          if (isSuccess) {
              this.AddNewProductUnitModel = false
              this.unitData.id = null;
              this.unitData.name = '';
              this.unitData.description = '';
          }
      },
      async saveProduct() {
          if (!this.product.product_name) {
              return this.$store.dispatch('notification/error', 'Product Name is required');
          }
          if (!this.product.category) {
              return this.$store.dispatch('notification/error', 'Category is required');
          }
          if (!this.product.brand) {
              return this.$store.dispatch('notification/error', 'Brand is required');
          }
          if (!this.product.unit) {
              return this.$store.dispatch('notification/error', 'Unit is required');
          }




          await this.$store.dispatch('product/generateProductCode');
          let isSuccess = await this.$store.dispatch('product/saveProduct', this.product);
          if (isSuccess) {
              this.product.id = '';
              this.product.product_name = '';
              this.product.description = '';
              this.product.category = '';
              this.product.brand = '';
              this.product.unit = '';
              this.product.barcode = '';
              this.product.low_stock = '';
          }
          this.AddNewProductModel = false;
      },
      async saveBrand() {
          let isSuccess = await this.$store.dispatch('brand/saveBrand', this.brandData);
          if (isSuccess) {
              this.AddNewProductBrandModel = false;
              this.brandData.id = null;
              this.brandData.name = '';
              this.brandData.description = '';
          }
      },
      editProduct(item) {
          this.AddNewProductModel = true;
          this.product.id = item.id;
          this.product.product_name = item.product_name;
          this.product.description = item.description;
          this.product.category = item.category_id;
          this.product.brand = item.brand_id;
          this.product.unit = item.unit_id;
          this.product.barcode = item.barcode;
          this.product.code = item.code;
          this.product.low_stock = item.low_stock;
      },
      async statusUpdate(id, code) {
          let data = {
              id: id,
              code: code,
          }
          await this.$store.dispatch('product/statusUpdate', data);
      },
      async productDelete(id) {
          let data = {
              id: id,
          }
          await this.$store.dispatch('product/productDelete', data);
      },
      clearInputData() {
          this.product.product_name = '';
          this.product.description = '';
          this.product.category = '';
          this.product.brand = '';
          this.product.unit = '';
          this.product.barcode = '';
          this.product.low_stock = '';
      }

  }
}


</script> 


<style>

</style>