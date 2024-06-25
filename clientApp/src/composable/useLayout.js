import { ref } from "vue";

export const layout = ref([
  {
    name: "Dashboard",
    icon: "fa-solid fa-gauge",
    link: "/admin",
    active: false,
  },
  {
    name: "Sales",
    icon: "fa-solid fa-cart-shopping",
    color: "",
    active: false,
    children: [
      {
        name: "Sales Entry",
        link: "/sales-entry",
        icon: "ti ti-point-filled",
      },
      {
        name: "Sales Return",
        link: "/sales-return",
        icon: "ti ti-point-filled",
      },
      {
        name: "Sales Record",
        link: "/sales-record",
        icon: "ti ti-point-filled",
      },
    ],
  },
  {
    name: "Customers",
    icon: "fa-solid fa-users-gear",
    color: "",
    active: false,
    children: [
      {
        name: "Customers List",
        link: "/customers-list",
        icon: "ti ti-point-filled",
      },
      {
        name: "Customers Ledger",
        link: "/customers-ledger",
        icon: "ti ti-point-filled",
      },
      {
        name: "Customers Payment",
        link: "/customers-payment",
        icon: "ti ti-point-filled",
      },
      {
        name: "Customer Due List",
        link: "/customer-due-list",
        icon: "ti ti-point-filled",
      },
    ],
  },
  {
    name: "Purchases",
    icon: "fa-solid fa-bag-shopping",
    active: false,
    children: [
      {
        name: "Purchase Entry",
        link: "/purchase-entry",
        icon: "fa-regular fa-bag-shopping",
      },
      {
        name: "Purchase Record",
        link: "/purchase-record",
        icon: "fa-regular fa-bag-shopping",
      },
      {
        name: "Purchase Return",
        link: "/purchase-return",
        icon: "fa-regular fa-bag-shopping",
      },
    ],
  },

  {
    name: "Suppliers",
    icon: "fa-solid fa-truck-field-un",
    color: "",
    active: false,
    children: [
      {
        name: "Suppliers List",
        link: "/suppliers-list",
        icon: "ti ti-point-filled",
      },
      {
        name: "Suppliers Ledger",
        link: "/suppliers-ledger",
        icon: "ti ti-point-filled",
      },
      {
        name: "Suppliers Payment",
        link: "/suppliers-payment",
        icon: "ti ti-point-filled",
      },
      {
        name: "Supplier Due List",
        link: "/supplier-due-list",
        icon: "ti ti-point-filled",
      },
    ],
  },

  {
    name: "Products",
    icon: "fa-brands fa-product-hunt",
    color: "",
    show: false,
    locked: true,
    children: [
      {
        name: "Product Management",
        link: "/product-management",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "Category",
        link: "/product-category",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "Brand",
        link: "/product-brand",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "Unit",
        link: "/product-unit",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      // {
      //   name: "Color",
      //   link: "/product-color",
      //   color: "",
      //   id: "v20cz",
      //   icon: "ti ti-point-filled",
      // },
      // {
      //   name: "Size",
      //   link: "/product-size",
      //   color: "",
      //   id: "v20cz",
      //   icon: "ti ti-point-filled",
      // },
    ],
  },

  {
    name: "Inventory",
    icon: "fa-solid fa-grid-2",
    color: "",
    show: false,
    locked: true,
    children: [
      {
        name: "Product Stock",
        link: "/product-stock",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "Stock Adjustment",
        link: "/stock-adjustment",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "Stock Transfer",
        link: "/stock-transfer",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "Products Ledger",
        link: "/products-ledger",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      // {
      //   name: "Product Ledger",
      //   link: "/product-ledger",
      //   color: "",
      //   id: "v20cz",
      //   icon: "ti ti-point-filled",
      // },
    ],
  },

  {
    name: "Accounts",
    icon: "fa-sharp fa-solid fa-money-check-dollar-pen",
    color: "",
    show: false,
    locked: true,
    children: [
      {
        name: "Accounts List",
        link: "/accounts-list",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "Income",
        link: "/income",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "Expense",
        link: "/expense",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "Cash View",
        link: "/cash-view",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
    ],
  },
  {
    name: "Administration",
    icon: "fa-solid fa-sliders",
    color: "",
    show: false,
    locked: true,
    children: [
      // {
      //   name: "Create User",
      //   link: "/create-user",
      //   color: "",
      //   id: "v20cz",
      //   icon: "ti ti-point-filled",
      // },
      // {
      //   name: "Company Profile",
      //   link: "/company-profile",
      //   color: "",
      //   id: "v20cz",
      //   icon: "ti ti-point-filled",
      // },
      {
        name: "Areas",
        link: "/areas",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "Employe",
        link: "/employe",
        color: "",
        id: "v21cz",
        icon: "ti ti-point-filled",
      },
    ],
  },

  {
    name: "Reports",
    icon: "fa-solid fa-memo-pad",
    color: "",
    show: false,
    locked: true,
    children: [
      {
        name: "Sales Report",
        link: "/sales-report",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "Purchase Report",
        link: "/purchase-report",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "Financial Transactions",
        link: "/financial-transactions",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "Account Balance",
        link: "/account-balance",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "General Ledger",
        link: "/general-ledger",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
      {
        name: "Profit-Loss Statement",
        link: "/profit-loss-statement",
        color: "",
        id: "v20cz",
        icon: "ti ti-point-filled",
      },
    ],
  },
]);
