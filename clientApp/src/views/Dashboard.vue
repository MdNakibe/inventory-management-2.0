<template>
	<div>
		<Widget />
		<div class="flex flex-wrap xl:flex-nowrap gap-5">
			<div class="flex-1 xl:w-[65%]">
				<div class=" flex-1 bg-white dark:bg-slate-700  p-5 rounded-md shadow-md mb-5">
					<h2 class="text-[20px] font-semibold text-gray-600 dark:text-white">Sales Progress</h2>
					<div>
						<SaleChart />
					</div>
				</div>
				<div class="flex flex-col lg:flex-row gap-5 w-full">
					<div class="bg-white dark:bg-slate-700 p-5 rounded-md shadow-md w-full xl:w-1/2 h-[380px]">
						<h2 class="text-[20px] font-semibold text-gray-600 dark:text-white ">Top Sold Customers</h2>
						<div>
							<DonutChart />
						</div>
					</div>
					<div class="bg-white dark:bg-slate-700 p-5 rounded-md shadow-md w-full xl:w-1/2 h-[380px]">
						<h2 class="text-[20px] font-semibold text-gray-600 dark:text-white">Top Sold Products</h2>
						<div>
							<DonutChart />
						</div>
					</div>
				</div>
			</div>
			<div class="w-[100%] xl:w-[35%] grid gap-5">
				<AccountBalance />
				<LowStockProducts />
			</div>
		</div>

		<div class="grid xl:grid-cols-2 gap-5 mt-5">
			<div class="bg-white dark:bg-slate-700 p-5 rounded-md shadow-md text-gray-600 dark:text-white">
				<p class="font-bold mb-5 text-[20px] text-center">Cash Received Today</p>
				<div class="grid gap-5">
					<table>
						<p class="font-semibold mb-2 text-[18px]">Sales Received</p>
						<tr class="">
							<vth class="border text-left p-1 font-semibold">SL.</vth>
							<vth class="border text-left p-1 font-semibold">Invoice</vth>
							<vth class="border text-left p-1 font-semibold">Customer</vth>
							<vth class="border text-left p-1 font-semibold">Amount</vth>
						</tr>
						<tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
							<vtd class="border text-left p-1">01</vtd>
							<vtd class="border text-left p-1">2023000120</vtd>
							<vtd class="border text-left p-1">True Star BD Limited</vtd>
							<vtd class="border text-left p-1">12,000.00</vtd>
						</tr>
						<tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
							<vtd class="border text-left p-1">02</vtd>
							<vtd class="border text-left p-1">2023000120</vtd>
							<vtd class="border text-left p-1">True Star BD Limited</vtd>
							<vtd class="border text-left p-1">12,000.00</vtd>
						</tr>
						<tr class="w-full">
							<vtd colspan="3" class="border text-left p-1 font-semibold">Total</vtd>
							<vtd class="border text-left p-1 font-semibold">24,000.00</vtd>
						</tr>
					</table>
				</div>
			</div>

			<div class="bg-white dark:bg-slate-700 p-5 rounded-md shadow-md text-gray-600 dark:text-white">
				<p class="font-bold mb-5 text-[20px] text-center">Cash Payment Today</p>
				<div class="grid gap-5">
					<table>
						<p class="font-semibold mb-2 text-[18px]">Purchase Payment</p>
						<tr class="">
							<vth class="border text-left p-1 font-semibold">SL.</vth>
							<vth class="border text-left p-1 font-semibold">Invoice</vth>
							<vth class="border text-left p-1 font-semibold">Supplier</vth>
							<vth class="border text-left p-1 font-semibold">Amount</vth>
						</tr>
						<tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
							<vtd class="border text-left p-1">01</vtd>
							<vtd class="border text-left p-1">2023000120</vtd>
							<vtd class="border text-left p-1">True Star BD Limited</vtd>
							<vtd class="border text-left p-1">12,000.00</vtd>
						</tr>
						<tr class="hover:bg-slate-100 dark:hover:bg-slate-600">
							<vtd class="border text-left p-1">02</vtd>
							<vtd class="border text-left p-1">2023000120</vtd>
							<vtd class="border text-left p-1">True Star BD Limited</vtd>
							<vtd class="border text-left p-1">12,000.00</vtd>
						</tr>
						<tr class="w-full">
							<vtd colspan="3" class="border text-left p-1 font-semibold">Total</vtd>
							<vtd class="border text-left p-1 font-semibold">24,000.00</vtd>
						</tr>
					</table>
				</div>
			</div>

		</div>
	</div>
</template>






<script setup>
import SaleChart from '../components/charts/SaleChart.vue'
import DonutChart from '../components/charts/DonutChart.vue';
import AccountBalance from '../components/dashboard/AccountBalance.vue';
import LowStockProducts from '../components/dashboard/LowStockProducts.vue';
import Widget from '../components/dashboard/Widget.vue';
// import TheWelcome from '../components/TheWelcome.vue'
// import { ref, watchEffect } from 'vue';
// const icon = ref('')

// watchEffect(() => {

//   let val = icon.value;
//   icon.value = String(val).replace('<i class="', '').replace('"></i>', '');
// })

</script>