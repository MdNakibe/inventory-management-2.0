import fuse from 'fuse.js'
export default {
    data: function(){
        return {
            categoryGlobalFilter: function (filterableItem, term, display_text) {
                const fuseOptions = {
                    isCaseSensitive: false,
                    includeScore:false,
                    useExtendedSearch: true,
                    shouldSort:true,
                    findAllMatches: true,
                    ignoreLocation: true,
                    threshold: 0,
                    keys: ['name','description'],
                }
                const fuseObj = new fuse([filterableItem], fuseOptions)
                const op = fuseObj.search(term).map(item => item.item)
                if (op.length > 0) {
                    return true
                }
                return false
            },
            productGlobalFilter: function (filterableItem, term, display_text) {
                const fuseOptions = {
                    isCaseSensitive: false,
                    includeScore:false,
                    useExtendedSearch: true,
                    shouldSort:true,
                    findAllMatches: true,
                    ignoreLocation: true,
                    threshold: 0,
                    keys: ['product_name','code','barcode','description','brand.name','category.name','unit.name'],
                }
                const fuseObj = new fuse([filterableItem], fuseOptions)
                const op = fuseObj.search(term).map(item => item.item)
                if (op.length > 0) {
                    return true
                }
                return false
            },
            purchesRecordGlobalFilter: function (filterableItem, term, display_text) {
                const fuseOptions = {
                    isCaseSensitive: false,
                    includeScore:false,
                    useExtendedSearch: true,
                    shouldSort:true,
                    findAllMatches: true,
                    ignoreLocation: true,
                    threshold: 0,
                    keys: ['date','invoice','supplier.name','total','paid','due','user.name'],
                }
                const fuseObj = new fuse([filterableItem], fuseOptions)
                const op = fuseObj.search(term).map(item => item.item)
                if (op.length > 0) {
                    return true
                }
                return false
            },
            purchesReturnGlobalFilter: function (filterableItem, term, display_text) {
                const fuseOptions = {
                    isCaseSensitive: false,
                    includeScore:false,
                    useExtendedSearch: true,
                    shouldSort:true,
                    findAllMatches: true,
                    ignoreLocation: true,
                    threshold: 0,
                    keys: ['purchase.date','date','invoice','supplier.name','total','note','user.name'],
                }
                const fuseObj = new fuse([filterableItem], fuseOptions)
                const op = fuseObj.search(term).map(item => item.item)
                if (op.length > 0) {
                    return true
                }
                return false
            },
            customersListGlobalFilter: function (filterableItem, term, display_text) {
                const fuseOptions = {
                    isCaseSensitive: false,
                    includeScore:false,
                    useExtendedSearch: true,
                    shouldSort:true,
                    findAllMatches: true,
                    ignoreLocation: true,
                    threshold: 0,
                    keys: ['code','name','credit_limit','phone','email','office_name','opening_balance','address', ''],
                }
                const fuseObj = new fuse([filterableItem], fuseOptions)
                const op = fuseObj.search(term).map(item => item.item)
                if (op.length > 0) {
                    return true
                }
                return false
            },
            suppliersListGlobalFilter: function (filterableItem, term, display_text) {
                const fuseOptions = {
                    isCaseSensitive: false,
                    includeScore:false,
                    useExtendedSearch: true,
                    shouldSort:true,
                    findAllMatches: true,
                    ignoreLocation: true,
                    threshold: 0,
                    keys: ['code','name',,'phone','email','address', 'opening_balance'],
                }
                const fuseObj = new fuse([filterableItem], fuseOptions)
                const op = fuseObj.search(term).map(item => item.item)
                if (op.length > 0) {
                    return true
                }
                return false
            },
            accountsListGlobalFilter: function (filterableItem, term, display_text) {
                const fuseOptions = {
                    isCaseSensitive: false,
                    includeScore:false,
                    useExtendedSearch: true,
                    shouldSort:true,
                    findAllMatches: true,
                    ignoreLocation: true,
                    threshold: 0,
                    keys: ['account_name','account_number','bank_name','branch_name','total_balance','oppening_balance','total_cash_in','total_cash_out'],
                }
                const fuseObj = new fuse([filterableItem], fuseOptions)
                const op = fuseObj.search(term).map(item => item.item)
                if (op.length > 0) {
                    return true
                }
                return false
            },
            incomeGlobalFilter: function (filterableItem, term, display_text) {
                const fuseOptions = {
                    isCaseSensitive: false,
                    includeScore:false,
                    useExtendedSearch: true,
                    shouldSort:true,
                    findAllMatches: true,
                    ignoreLocation: true,
                    threshold: 0,
                    keys: ['transaction_id','date','account','description','category','amount','added_by','updated_by'],
                }
                const fuseObj = new fuse([filterableItem], fuseOptions)
                const op = fuseObj.search(term).map(item => item.item)
                if (op.length > 0) {
                    return true
                }
                return false
            },
            expenseGlobalFilter: function (filterableItem, term, display_text) {
                const fuseOptions = {
                    isCaseSensitive: false,
                    includeScore:false,
                    useExtendedSearch: true,
                    shouldSort:true,
                    findAllMatches: true,
                    ignoreLocation: true,
                    threshold: 0,
                    keys: ['transaction_id','date','account','description','category','amount','added_by','updated_by'],
                }
                const fuseObj = new fuse([filterableItem], fuseOptions)
                const op = fuseObj.search(term).map(item => item.item)
                if (op.length > 0) {
                    return true
                }
                return false
            },
            employeGlobalFilter: function (filterableItem, term, display_text) {
                const fuseOptions = {
                    isCaseSensitive: false,
                    includeScore:false,
                    useExtendedSearch: true,
                    shouldSort:true,
                    findAllMatches: true,
                    ignoreLocation: true,
                    threshold: 0,
                    keys: ['name',
                    'phone',
                    'email',
                    'nid',
                    'joining_date',
                    'designation',],
                }
                const fuseObj = new fuse([filterableItem], fuseOptions)
                const op = fuseObj.search(term).map(item => item.item)
                if (op.length > 0) {
                    return true
                }
                return false
            },
            stockGlobalFilter: function (filterableItem, term, display_text) {
                const fuseOptions = {
                    isCaseSensitive: false,
                    includeScore:false,
                    useExtendedSearch: true,
                    shouldSort:true,
                    findAllMatches: true,
                    ignoreLocation: true,
                    threshold: 0,
                    keys: ['product_name',
                    'category.name',
                    'brand.name',
                    'stock.purchase_quantity',
                    'stock.purchase_return',
                    'stock.sale_quantity',
                    'stock.sale_return',
                    'stock.transfer_from_quantity',
                    'stock.damage_quantity',
                    'stock.current_stock',
                    ],
                }
                const fuseObj = new fuse([filterableItem], fuseOptions)
                const op = fuseObj.search(term).map(item => item.item)
                if (op.length > 0) {
                    return true
                }
                return false
            },
            formatDate(dateString) {
                    dateString = new Date(dateString)
                    const day = dateString.getDate().toString().padStart(2, "0");
                    const month = (dateString.getMonth() + 1)
                      .toString()
                      .padStart(2, "0");
                    const year = dateString.getFullYear().toString();
        
                    return `${day}-${month}-${year}`;
              }
            
        }
    },
    methods: {}
}