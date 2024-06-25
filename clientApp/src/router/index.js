import { createRouter, createWebHistory } from "vue-router";
import dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import store from "../store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
      meta: { guest: true }
    },
    {
      path: "/admin",
      name: "home",
      component: dashboard,
      meta: { auth: true }
    },
    {
      path: "/",
      name: "purchase",
      children: [
        {
          path: "/purchase-entry/:id?",
          name: "purchaseEntry",
          meta: { auth: true },
          component: () => import("../views/purchase/PurchaseEntry.vue"),
        },
        {
          path: "/purchase-record",
          name: "PurchaseRecord",
          meta: { auth: true },
          component: () => import("../views/purchase/PurchaseRecord.vue"),
        },
        {
          path: "/purchase-return",
          name: "PurchaseReturn",
          meta: { auth: true },
          component: () => import("../views/purchase/PurchaseReturn.vue"),
        },
        {
          path: "/purchase-return/record-purchase-return",
          name: "RecordPurchaseReturn",
          meta: { auth: true },
          component: () => import("../views/purchase/RecordPurchaseReturn.vue"),
        },
        {
          path: "/purchase-return/record-purchase-return/record-return/:id?",
          name: "PurchaseRecordReturn",
          meta: { auth: true },
          component: () => import("../views/purchase/RecordReturn.vue"),
        },
        {
          path: "/purchase-invoice-view/:id?",
          name: "PurchaseInvoice",
          meta: { auth: true },
          component: () => import("../views/purchase/PurchaseInvoice.vue"),
        },
      ],
    },
    {
      path: "/product-management",
      name: "productManagement",
      meta: { auth: true },
      component: () => import("../views/product/ProductManagement.vue"),
    },
    {
      path: "/products-ledger",
      name: "ProductsLedger",
      meta: { auth: true },
      component: () => import("../views/product/ProductsLedger.vue"),
    },
    {
      path: "/product-category",
      name: "ProductCategory",
      meta: { auth: true },
      component: () => import("../views/product/ProductCategory.vue"),
    },
    {
      path: "/product-brand",
      name: "ProductBrand",
      meta: { auth: true },
      component: () => import("../views/product/ProductBrand.vue"),
    },
    {
      path: "/product-unit",
      name: "ProductUnit",
      meta: { auth: true },
      component: () => import("../views/product/ProductUnit.vue"),
    },
    {
      path: "/product-color",
      name: "ProductColor",
      meta: { auth: true },
      component: () => import("../views/product/ProductColor.vue"),
    },
    {
      path: "/product-size",
      name: "ProductSize",
      meta: { auth: true },
      component: () => import("../views/product/ProductSize.vue"),
    },
    {
      path: "/product-bulk-import",
      name: "ProductBulkImport",
      meta: { auth: true },
      component: () => import("../views/product/ProductBulkImport.vue"),
    },
    {
      path: "/category-bulk-import",
      name: "CategoryBulkImport",
      meta: { auth: true },
      component: () => import("../views/product/CategoryBulkImport.vue"),
    },
    {
      path: "/brand-bulk-import",
      name: "BrandBulkImport",
      meta: { auth: true },
      component: () => import("../views/product/BrandBulkImport.vue"),
    },
    {
      path: "/unit-bulk-import",
      name: "UnitBulkImport",
      meta: { auth: true },
      component: () => import("../views/product/UnitBulkImport.vue"),
    },
    {
      path: "/sales-entry/:id?",
      name: "SalesEntry",
      meta: { auth: true },
      component: () => import("../views/sales/SalesEntry.vue"),
    },
    {
      path: "/sales-return",
      name: "SalesReturn",
      meta: { auth: true },
      component: () => import("../views/sales/SalesReturn.vue"),
    },
    {
      path: "/sales-return/record-sales-return",
      name: "RecordSalesReturn",
      meta: { auth: true },
      component: () => import("../views/sales/RecordSalesReturn.vue"),
    },
    {
      path: "/sales-return/record-sales-return/record-return/:id?",
      name: "SalesRecordReturn",
      meta: { auth: true },
      component: () => import("../views/sales/RecordReturn.vue"),
    },
    {
      path: "/sales-record",
      name: "SalesRecord",
      meta: { auth: true },
      component: () => import("../views/sales/SalesRecord.vue"),
    },
    {
      path: "/suppliers-list",
      name: "SuppliersList",
      meta: { auth: true },
      component: () => import("../views/suppliers/SuppliersList.vue"),
    },
    {
      path: "/suppliers-ledger",
      name: "SuppliersLedger",
      meta: { auth: true },
      component: () => import("../views/suppliers/SuppliersLedger.vue"),
    },
    {
      path: "/suppliers-payment",
      name: "SuppliersPayment",
      meta: { auth: true },
      component: () => import("../views/suppliers/SuppliersPayment.vue"),
    },
    {
      path: "/supplier-due-list",
      name: "SupplierDueList",
      meta: { auth: true },
      component: () => import("../views/suppliers/SupplierDueList.vue"),
    },
    {
      path: "/suppliers-payment/make-new-payment",
      name: "MakeNewPayment",
      meta: { auth: true },
      component: () => import("../views/suppliers/MakeNewPayment.vue"),
    },
    {
      path: "/suppliers-payment/edit-payment/:id?",
      name: "SupplierEditPayment",
      meta: { auth: true },
      component: () => import("../views/suppliers/EditPayment.vue"),
    },
    {
      path: "/sales-report",
      name: "SaleReport",
      meta: { auth: true },
      component: () => import("../views/allReport/salesReport/SalesReport.vue"),
    },
    {
      path: "/sales-report/product-wise-report",
      name: "SalesProductWiseReport",
      meta: { auth: true },
      component: () => import("../views/allReport/salesReport/ProductWiseReport.vue"),
    },
    {
      path: "/sales-report/category-wise-report",
      name: "SalesCategoryWiseReport",
      meta: { auth: true },
      component: () => import("../views/allReport/salesReport/CategoryWiseReport.vue"),
    },
    {
      path: "/sales-report/brand-wise-report",
      name: "SalesBrandWiseReport",
      meta: { auth: true },
      component: () => import("../views/allReport/salesReport/BrandWiseReport.vue"),
    },
    {
      path: "/sales-report/employee-sales-report",
      name: "EmployeeSalesReport",
      meta: { auth: true },
      component: () => import("../views/allReport/salesReport/EmployeeSalesReport.vue"),
    },
    {
      path: "/sales-report/customer-wise-report",
      name: "CustomerWiseReport",
      meta: { auth: true },
      component: () => import("../views/allReport/salesReport/CustomerWiseReport.vue"),
    },
    {
      path: "/sales-report/customers-item-report",
      name: "CustomersItemReport",
      meta: { auth: true },
      component: () => import("../views/allReport/salesReport/CustomersItemReport.vue"),
    },
    {
      path: "/sales-report/customers-wise-report/sales-invoices",
      name: "CustomerWiseSalesInvoice",
      meta: { auth: true },
      component: () => import("../views/allReport/salesReport/CustomerWiseSalesInvoice.vue"),
    },
    {
      path: "/sales-report/customers-wise-report/return-invoices",
      name: "CustomerWiseReturnInvoice",
      meta: { auth: true },
      component: () => import("../views/allReport/salesReport/CustomerWiseReturnInvoice.vue"),
    },
    {
      path: "/purchase-report",
      name: "PurchaseReport",
      meta: { auth: true },
      component: () => import("../views/allReport/purchaseReport/PurchaseReport.vue"),
    },
    {
      path: "/purchase-report/product-wise-report",
      name: "PurchaseProductWiseReport",
      meta: { auth: true },
      component: () => import("../views/allReport/purchaseReport/ProductWiseReport.vue"),
    },
    {
      path: "/purchase-report/category-wise-report",
      name: "PurchaseCategoryWiseReport",
      meta: { auth: true },
      component: () => import("../views/allReport/purchaseReport/CategoryWiseReport.vue"),
    },
    {
      path: "/purchase-report/brand-wise-report",
      name: "PurchaseBrandWiseReport",
      meta: { auth: true },
      component: () => import("../views/allReport/purchaseReport/BrandWiseReport.vue"),
    },
    {
      path: "/purchase-report/employee-purchase-report",
      name: "EmployeePurchaseReport",
      meta: { auth: true },
      component: () => import("../views/allReport/purchaseReport/EmployeePurchaseReport.vue"),
    },
    {
      path: "/purchase-report/supplier-wise-report",
      name: "SupplierWiseReport",
      meta: { auth: true },
      component: () => import("../views/allReport/purchaseReport/SupplierWiseReport.vue"),
    },
    {
      path: "/purchase-report/suppliers-item-report",
      name: "SuppliersItemReport",
      meta: { auth: true },
      component: () => import("../views/allReport/purchaseReport/SuppliersItemReport.vue"),
    },
    {
      path: "/financial-transactions",
      name: "FinancialTransactions",
      meta: { auth: true },
      component: () => import("../views/allReport/accountsReport/FinancialTransactions.vue"),
    },
    {
      path: "/account-balance",
      name: "AccountBalance",
      meta: { auth: true },
      component: () => import("../views/allReport/accountsReport/AccountBalance.vue"),
    },
    {
      path: "/general-ledger",
      name: "GeneralLedger",
      meta: { auth: true },
      component: () => import("../views/allReport/accountsReport/GeneralLedger.vue"),
    },
    {
      path: "/profit-Loss-statement",
      name: "ProfitLossStatement",
      meta: { auth: true },
      component: () => import("../views/allReport/accountsReport/ProfitLossStatement.vue"),
    },


    {
      path: "/customers-list",
      name: "CustomersList",
      meta: { auth: true },
      component: () => import("../views/customer/CustomersList.vue"),
    },
    {
      path: "/customers-ledger",
      name: "CustomersLedger",
      meta: { auth: true },
      component: () => import("../views/customer/CustomersLedger.vue"),
    },
    {
      path: "/customers-payment",
      name: "CustomersPayment",
      meta: { auth: true },
      component: () => import("../views/customer/CustomersPayment.vue"),
    },
    {
      path: "/customers-payment/receive-new-payment",
      name: "ReceiveNewPayment",
      meta: { auth: true },
      component: () => import("../views/customer/ReceiveNewPayment.vue"),
    },
    {
      path: "/customers-payment/edit-payment/:id?",
      name: "EditPayment",
      meta: { auth: true },
      component: () => import("../views/customer/EditPayment.vue"),
    },
    {
      path: "/customer-due-list",
      name: "CustomerDueList",
      meta: { auth: true },
      component: () => import("../views/customer/CustomerDueList.vue"),
    },

    {
      path: "/product-stock",
      name: "ProductStock",
      meta: { auth: true },
      component: () => import("../views/inventory/ProductStock.vue"),
    },
    {
      path: "/product-stock/low-stock-report",
      name: "LowStockReport",
      meta: { auth: true },
      component: () => import("../views/inventory/LowStockReport.vue"),
    },
    {
      path: "/stock-adjustment",
      name: "StockAdjustment",
      meta: { auth: true },
      component: () => import("../views/inventory/StockAdjustment.vue"),
    },
    {
      path: "/stock-transfer",
      name: "StockTransfer",
      meta: { auth: true },
      component: () => import("../views/inventory/StockTransfer.vue"),
    },
    {
      path: "/stock-transfer/record-new-transfer",
      name: "RecordNewTransfer",
      meta: { auth: true },
      component: () => import("../views/inventory/RecordNewTransfer.vue"),
    },
    {
      path: "/create-user",
      name: "CreateUser",
      meta: { auth: true },
      component: () => import("../views/administration/CreateUser.vue"),
    },
    {
      path: "/company-profile",
      name: "CompanyProfile",
      meta: { auth: true },
      component: () => import("../views/administration/CompanyProfile.vue"),
    },
    {
      path: "/areas",
      name: "Areas",
      meta: { auth: true },
      component: () => import("../views/administration/Areas.vue"),
    },
    {
      path: "/employe",
      name: "Employe",
      meta: { auth: true },
      component: () => import("../views/administration/Employee.vue"),
    },
    {
      path: "/product-ledger",
      name: "ProductLedger",
      meta: { auth: true },
      component: () => import("../views/inventory/ProductLedger.vue"),
    },
    {
      path: "/profile-setting",
      name: "ProfileSetting",
      meta: { auth: true },
      component: () => import("../views/ProfileSetting.vue"),
    },
    {
      path: "/accounts-list",
      name: "AccountsList",
      meta: { auth: true },
      component: () => import("../views/accounts/AccountsList.vue"),
    },
    {
      path: "/income",
      name: "Income",
      meta: { auth: true },
      component: () => import("../views/accounts/Income.vue"),
    },
    {
      path: "/expense",
      name: "Expense",
      meta: { auth: true },
      component: () => import("../views/accounts/Expense.vue"),
    },
    {
      path: "/cash-view",
      name: "CashView",
      meta: { auth: true },
      component: () => import("../views/accounts/CashView.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('jwtToken');
    if(token == null || token == undefined || token == ''){
      store.dispatch('user/forceLogout')
    }
    axios.get(`${store.state.host}/verification-token`, {
        headers: {
        	Authorization: token ? `Bearer ${token}` : null
        }
    })
    .then(res => {
		if(!res.data) {
			localStorage.removeItem('jwtToken')
          token = null;
			router.push('/login').catch(()=>{});
		}
	}).catch(e => {
        if(e.response.statusText == 'Unauthorized'){
            localStorage.removeItem('jwtToken')
            token = null;
        }
  })
  if (to.matched.some(record => record.meta.auth)) {
    if (!store.getters['user/GET_AUTH_TOKEN']) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (store.getters['user/GET_AUTH_TOKEN']) {
      next({
        name: 'home'
      })
    }
    else {
      next()
    }
  }
})
export default router;
