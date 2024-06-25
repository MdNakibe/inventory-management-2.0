<template>
    <main>
        <!-- pc design -->
        <div class="hidden lg:block">
            <div class="w-full h-[100vh] grid grid-cols-2 justify-between bg-white relative">
                <div class="p-8 lg:p-16" style="background: rgb(210,220,214);background: linear-gradient(339deg, rgba(210,220,214,1) 0%, rgba(255,255,255,1) 75%);">
                    <div>
                        <lottie-player class="border-b-2 border-[#22c55e]" src="../../public/Zealtechpos.json" background="transparent" speed="0.8" style="width: 300px; height: 80px" direction="0.1" mode="normal" loop autoplay></lottie-player>
                    </div>
                    <p class="py-3 text-justify"><b class="text-green-700">ZealtechPos</b> is a cutting-edge Online Inventory Management System designed for seamless point-of-sale operations. Streamline your business with real-time inventory tracking, sales analytics, and user-friendly interface, ensuring efficiency and precision in every transaction. Elevate your retail experience with ZealtechPos.</p>
                    <div class="grid justify-center gap-5">
                        <img src="../../public/image/pos-images.png" alt="img" class="w-full">
                        <div class="flex gap-1 items-center font-semibold justify-center">
                            <img src="../../public/image/Call-icone.png" alt="img" class="w-6 mr-2">
                            <span>Call for support:</span>
                            <a href="tel:01977749733" class="hover:text-[#22c55e]">+88 01977749733</a>
                        </div>
                    </div>
                </div>

                <div class="bg-[#edf1ef] rounded-full border-[5px] border-white" style="width: 120px;height: 120px;overflow: auto;margin: auto;position: absolute;top: 0; left: 0; bottom: 0; right: 0;">
                    <img src="../../public/image/logo.png" alt="img" class="p-5 ">
                </div>

                <div class="p-8 lg:p-16 grid justify-center items-center" style="background: rgb(215,251,228);background: linear-gradient(299deg, rgba(215,251,228,1) 0%, rgba(255,255,255,1) 59%);">
                    <div class="shadow-2xl bg-white p-10 rounded-3xl grid gap-5 z-[100]">
                        <p class="text-center font-semibold text-green-700">Online inventory management system</p>
                        <form @submit.prevent="login">
                            <div class="grid gap-5">
                                <div class="flex items-center gap-5">
                                    <img src="../../public/image/human-icone.png" alt="img" class="w-8">
                                    <input type="text" class="rounded-full border border-[#22c55e] shadow-md shadow-green-500/20 w-[300px]" v-model="user.name" placeholder="Username" required>
                                </div>
                                <div class="flex items-center gap-5">
                                    <img src="../../public/image/Lock-icone.png" alt="img" class="w-8">
                                    <input type="password" class="rounded-full border border-[#22c55e] shadow-md shadow-green-500/20 w-[300px]" v-model="user.password" placeholder="Password" required>
                                </div>
                                <div>
                                    <button type="submit" class="float-right bg-green-500 text-white py-2 px-6 font-medium rounded-full shadow-md shadow-green-500/50">Log in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="absolute right-0 bottom-0">
                    <img src="../../public/image/pas-useing-vector.png" alt="img" class="opacity-10">
                </div>
            </div>
        </div>

        <!-- mobile design -->
        <div class="lg:hidden block LoginBgImg">
            <div class="relative h-[100vh]">
                <div class="bg-white p-5 rounded-[40px] z-10" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: auto; height: auto; box-shadow: 0 5px 15px 3px rgba(145,158,171,.2);">
                    <div class="grid gap-3">
                        <div class="border-b-2 border-[#22c55e] pb-3">
                            <lottie-player class=" w-[270px] mx-auto h-[40px] px-5" src="../../public/Zealtechpos.json" background="transparent" speed="0.8" direction="0.1" mode="normal" loop autoplay></lottie-player>
                        </div>
                        <div class="">
                            <img src="../../public/image/pos-images-2.png" alt="img" class="w-full">
                        </div>
                        <h2 class="text-2xl font-bold text-center text-green-700">Log in</h2>
                        <p class="text-center font-normal text-green-700">Online inventory management system</p>
                        <div class="">
                            <form @submit.prevent="login">
                                <div class="grid gap-5 mt-2">
                                    <div class="flex items-center gap-3">
                                        <img src="../../public/image/human-icone.png" alt="img" class="w-8">
                                        <input type="text" class="rounded-lg border border-[#22c55e] shadow-md shadow-green-500/20 w-full" v-model="user.name" placeholder="Username" required>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <img src="../../public/image/Lock-icone.png" alt="img" class="w-8">
                                        <input type="password" class="rounded-lg border border-[#22c55e] shadow-md shadow-green-500/20 w-full" v-model="user.password" placeholder="Password" required>
                                    </div>
                                    <div>
                                        <button type="submit" class="float-right bg-green-500 hover:bg-green-400 text-white py-2 px-6 font-medium rounded-lg shadow-md shadow-green-500/50">Log in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="absolute right-0 bottom-0">
                    <img src="../../public/image/pas-useing-vector-2.png" alt="img" class="opacity-5">
                </div>
            </div>
        </div>



    </main>























    <!-- <div class="max-w-[500px] bg-white w-full mx-auto p-5 rounded-xl">
        <h1>ZEALTECHBD</h1>
        <form @submit.prevent="login">
            <div class="grid gap-5">
                <input type="text" v-model="user.name" placeholder="Username">
                <input type="text" v-model="user.password" placeholder="Password">
            </div>
            <button type="submit" class="mt-10"> Login </button>
        </form>
    </div> -->
</template>

<script>
export default {

    data() {
        return {
            user: {
                name: '',
                password: '',
            },
            isSuccess: '',
        }
    },
    methods: {
        async login() {
            this.$store.dispatch('user/login', this.user)
                .then(() => {
                    this.$router.push({ name: 'home' })
                }).catch((error) => {
                    this.errors = error.response.data.error
                })
        }
    }
}
</script>