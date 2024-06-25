<template>

    <div class="text-center my-5 flex gap-10 items-center justify-center">
    <nav class="flex items-center justify-center">
      <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button">
        <span>Previous</span>
      </button>
      <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ 'current-page': currentPage === page }" class="pagination-button">
        {{ page }}
      </button>


      <div v-if="totalPages>3" class="pagination-button">
      <button type="button" class="hs-tooltip-toggle group min-h-[30px] min-w-[30px] flex justify-center items-center text-gray-400 hover:text-[#4ED17E] p-1 text-sm">
        <span class="group-hover:hidden text-[10px]">•••</span>
        <svg class="group-hover:block hidden flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
        
      </button>
    </div>


      <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-button">
        <span>Next</span>
      </button>

 
      

    </nav>

    <div>
        <select @change="selectNumber" class="py-1.5 border border-gray-300">
          <option selected value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
  </div>
 
</template>

<script>
export default {
  data() {
    return {
      
    }
  },

  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
  methods: {
    selectNumber(num) {
      this.$emit('selectNumber', num.target.value);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('page-change', this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('page-change', this.currentPage + 1);
      }
    },
    gotoPage(page) {
      this.$emit('page-change', page);
    },

    
  },
};
</script>

<style scoped>
.pagination-button {
  min-height: 38px;
  min-width: 38px;
  padding: 2px 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1.5px;
  font-size: 14px;
  border: 1px solid #ddd;
  cursor: pointer;
  background-color: #fff;
  color: #333;
  border-radius: 4px;
  margin: 0 2px;
}

.pagination-button.current-page {
  background-color: #4ED17E;
  color: #fff;
}

.pagination-button:disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
