<template>
    <main>
        <div class="p-5 bg-white dark:bg-slate-700 dark:text-white rounded-md shadow-md">
            <Button @click="printClick" class="mb-5 bg-slate-500 w-[100px]">Print</Button>
            <h1 class="text-center font-bold py-2 border-y border-dashed mb-4">Purchase Invoice</h1>
            <div class="flex justify-between items-center pb-5 border-b mb-5">
                <div class="text-sm grid gap-1">
                    <div class="flex gap-1 items-center">
                        <strong>Supplier ID:</strong>
                        <span>SUP-0001</span>
                    </div>
                    <div class="flex gap-1 items-center">
                        <strong>Supplier Name:</strong>
                        <span class="capitalize">{{ supplierdata.name }}</span>
                    </div>
                    <div class="flex gap-1 items-center">
                        <strong>Supplier Number:</strong>
                        <span>{{ supplierdata.phone }}</span>
                    </div>
                    <div class="flex gap-1 items-center">
                        <strong>Supplier Address:</strong>
                        <span>{{ supplierdata.address }}</span>
                    </div>
                </div>
                <div class="text-sm grid gap-1">
                    <div class="flex gap-1 items-center justify-end">
                        <strong>Purchase By:</strong>
                        <span>Demo</span>
                    </div>
                    <div class="flex gap-1 items-center justify-end">
                        <strong>Invoice No:</strong>
                        <span>2023000022</span>
                    </div>
                    <div class="flex gap-1 items-center justify-end">
                        <strong>Purchase Date:</strong>
                        <span>01-10-2023 11:28 pm</span>
                    </div>
                    <div class="flex gap-1 items-center justify-end">
                        <strong>P.O Date:</strong>
                        <span>10-12-2024</span>
                    </div>
                </div>
            </div>
            <div class="">
                <table class="w-full dark:bg-slate-700 dark:text-white">
                    <tr class="">
                        <vth class="w-10">SL.</vth>
                        <vth>Product Name</vth>
                        <vth>Quantity</vth>
                        <vth>Purchase Price</vth>
                        <vth>Retail Price</vth>
                        <vth>Wholesale Price</vth>
                        <vth>Total</vth>
                    </tr>

                    <tr v-for="(cart, ind) in cart" :key="ind" class="hover:bg-slate-100 dark:hover:bg-slate-600">
                        <vtd class="text-center">{{ ind + 1 }}</vtd>
                        <vtd>{{ cart.product_name }} {{ cart.code }}</vtd>
                        <vtd class="text-center w-24">{{ cart.quantity }}</vtd>
                        <vtd class="text-center">{{ cart.purchase_rate }}</vtd>
                        <vtd class="text-center">{{ cart.retail_rate }}</vtd>
                        <vtd class="text-center">{{ cart.wholesale_rate }}</vtd>
                        <vtd class="text-right">{{ cart.total }}</vtd>
                    </tr>
                </table>
                <div class="flex justify-between gap-10 mt-5">
                    <div class="flex-1">
                        <h1 class="text-center font-bold py-2 border-y border-dashed mb-4">Transaction</h1>
                        <table class="w-full dark:bg-slate-700 dark:text-white">
                            <tr class="">
                                <vth class="w-10">SL.</vth>
                                <vth>Account</vth>
                                <vth>Amount</vth>
                            </tr>
                            <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                                <vtd class="text-center">01</vtd>
                                <vtd>bKash-0182589634</vtd>
                                <vtd class="text-right">10,000.00</vtd>
                            </tr>
                            <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                                <vtd class="text-center">02</vtd>
                                <vtd>bKash-0182589634</vtd>
                                <vtd class="text-right">10,000.00</vtd>
                            </tr>
                            <tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
                                <vtd class="text-center">03</vtd>
                                <vtd>bKash-0182589634</vtd>
                                <vtd class="text-right">10,000.00</vtd>
                            </tr>
                            <tr class="">
                                <vth colspan="2" class="text-right bg-white dark:bg-slate-700 border-none">Total :</vth>
                                <vth colspan="1" class="text-right bg-white dark:bg-slate-700 border-none">10,000.00</vth>
                            </tr>
                        </table>
                        <div class="mt-5">
                            <strong class="">In Words : </strong>
                            <span class="">Eight Hundred and Sixty Seven TK Only</span>
                        </div>
                        <div class="mt-1">
                            <strong class="">Note : </strong>
                            <span class="">Eight Hundred and Sixty Seven TK Only</span>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="w-full flex justify-between">
                            <strong class="">Sub Total :</strong>
                            <span class="">100.00</span>
                        </div>
                        <div class="w-full flex justify-between">
                            <strong class="">Vat :</strong>
                            <span class="">100.00</span>
                        </div>
                        <div class="w-full flex justify-between">
                            <strong class="">Discount :</strong>
                            <span class="">100.00</span>
                        </div>
                        <div class="w-full flex justify-between pb-2 mb-2 border-b">
                            <strong class="">Transport Cost :</strong>
                            <span class="">100.00</span>
                        </div>
                        <div class="w-full flex justify-between">
                            <strong class="">Total Amount :</strong>
                            <span class="">100.00</span>
                        </div>
                        <div class="w-full flex justify-between pb-2 mb-2 border-b">
                            <strong class="">Paid Amount :</strong>
                            <span class="">100.00</span>
                        </div>
                        <div class="w-full flex justify-between">
                            <strong class="">Due Amount :</strong>
                            <span class="">100.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div ref="printSection" class="print-visible">
            <printPDF>
                <div>real Data Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora autem voluptatibus sit nam, illum ab quo illo eligendi necessitatibus at officiis enim dignissimos placeat, porro recusandae ullam accusamus facere voluptas? Minus voluptates veniam, ex quibusdam est numquam error sed illo consequatur quos quisquam deleniti unde commodi enim tempore pariatur animi quae recusandae ratione voluptate labore impedit. Quasi, commodi libero itaque ratione debitis illum animi ipsa. Similique, et culpa eius voluptate ratione officiis iste perspiciatis repellat cum nobis quia aspernatur! Fuga quia atque fugit repellendus, voluptatem eum iusto praesentium, cumque sit debitis nihil, earum consequuntur doloribus autem dolore ab ipsa.</div>
            </printPDF>
        </div>
    </main>
</template>


<script>
import Button from '@/components/global/Button.vue';
import printPDF from '@/components/global/printPDF.vue';
export default {
    components: {
        Button,
        printPDF,
    },


    data() {
        return {
            purchase: {
                id: null,
                invoice: '',
                date: '',
                supplier_id: null,
                employee_id: null,
                po_no: '',
                purchase_order_date: '',
                sub_total: 0,
                vat: 0,
                discount: 0,
                transport: 0,
                total: 0,
                note: '',
                paid: 0,
                due: 0,
                old_due: 0,
                total_due: '',
                vatPercent: 0.0,
                disPercent: 0.0,
            },
            cart: [],
            payment: [],
            supplierdata: [],
        }
    },
    async created() {
        if (this.$route.params.id) {
            await this.$store.dispatch('purchase/getPurchase', { id: this.$route.params.id });
            await this.getPurchases();
        }
    },


    methods: {
        printClick() {
            const printSection = this.$refs.printSection.innerHTML;
            const printWindow = window.open('', '_blank');
            printWindow.document.open();
            printWindow.document.write(`
        <html>
          <head>
            <title>Print</title>
            <!-- Add any necessary styles for printing -->
          </head>
          <body>${printSection}</body>
        </html>
      `);
            printWindow.document.close();
            printWindow.print();
        },
        async getPurchases() {
            let purchase = await this.$store.getters['purchase/purchase'][0]
            this.purchase.id = purchase.id;
            this.purchase.date = purchase.date;
            this.purchase.supplier_id = purchase.supplier_id;
            this.purchase.po_no = purchase.po_no;
            this.purchase.purchase_order_date = purchase.purchase_order_date;
            this.purchase.sub_total = purchase.sub_total;
            this.purchase.vat = purchase.vat;
            this.purchase.vatPercent = purchase.vatPercent;
            this.purchase.discount = purchase.discount;
            this.purchase.disPercent = purchase.disPercent;
            this.purchase.transport = purchase.transport;
            this.purchase.total = purchase.total;
            this.purchase.paid = purchase.paid;
            this.purchase.due = purchase.due;
            this.purchase.old_due = purchase.due;
            this.purchase.note = purchase.note;
            this.supplierdata = purchase?.supplier;
            this.purchase.total_due = this.supplierdata.total_due
            purchase?.purchase_details.forEach(item => {
                this.cart.push({
                    id: item.product.id,
                    code: item.product.code,
                    product_name: item.product.product_name,
                    purchase_rate: item.purchase_rate,
                    wholesale_rate: item.wholesale_rate,
                    retail_rate: item.retail_rate,
                    quantity: item.quantity,
                    total: item.total,
                })
            });
            purchase?.transaction.forEach(item => {
                this.payment.push({
                    account_id: item.account_id,
                    transaction_id: item.id,
                    account_name: item.account.account_name,
                    account_number: item.account.account_number,
                    ammount: item.ammount,
                });
            });
        },
    }
}
</script>


<style scoped>
@media print {
    body {
        background-color: white;
    }
    .print-visible {
        display: block !important;
    }
}
</style>