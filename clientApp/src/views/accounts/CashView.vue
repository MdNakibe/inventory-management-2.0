
<template>
    <main>
        <h1 class="mb-5 text-2xl text-slate-700 dark:text-white font-bold">Cash View</h1>
        <div class="grid gap-5">
            <!-- <div class="grid  gap-5 bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
                <div class="flex items-center justify-between gap-10">
                    <div class="bg-[#475B9D] w-full p-5 rounded shadow-lg grid justify-center text-center gap-1 text-white">
                        <i class="fa-solid fa-money-check-dollar text-4xl text-white"></i>
                        <h2 class="text-xl">Cash Balance</h2>
                        <h2 class="text-xl font-bold">TK. 2,00,000.00</h2>
                    </div>
                    <div class="bg-[#505C8D] w-full p-5 rounded shadow-lg grid justify-center text-center gap-1 text-white">
                        <i class="fa-solid fa-building-columns text-4xl text-white"></i>
                        <h2 class="text-xl">Bank Balance</h2>
                        <h2 class="text-xl font-bold">TK. 2,00,000.00</h2>
                    </div>
                    <div class="bg-[#767E4A] w-full p-5 rounded shadow-lg grid justify-center text-center gap-1 text-white">
                        <i class="fa-sharp fa-solid fa-money-bill-wave text-4xl text-white"></i>
                        <h2 class="text-xl">MFS</h2>
                        <h2 class="text-xl font-bold">TK. 2,00,000.00</h2>
                    </div>
                    <div class="bg-[#22C55E] w-full p-5 rounded shadow-lg grid justify-center text-center gap-1 text-white">
                        <i class="fa-solid fa-bangladeshi-taka-sign text-4xl text-white"></i>
                        <h2 class="text-xl">Total Balance</h2>
                        <h2 class="text-xl font-bold">TK. 6,00,000.00</h2>
                    </div>
                </div>
            </div> -->

            <div class="grid  gap-5 bg-white dark:bg-slate-700 p-5 rounded-lg shadow">
                <div class="grid grid-cols-4 items-center justify-between gap-10">
                    <div v-for="(item, i) in $store.getters['account/accounts']" :key="i" class="bg-slate-100 dark:bg-slate-800 dark:text-white border dark:border-slate-500 w-full p-5 rounded shadow-lg grid justify-center text-center gap-1">
                        <h5 class="text-lg font-semibold">{{ item.account_name }}</h5>
                        <h5 class="text-lg font-bold">TK. {{ (+item.oppening_balance+ +item.total_balance) - item.total_cash_out }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default{
    async created(){
        await this.$store.dispatch("account/getAccounts");
    },
}
</script>