<!-- <template>
  <div v-show="printStatus">
    <div>

      <div style="padding: 20px 0; display: flex; justify-content: space-between; align-items: center;">
        <div style="font-size: 25px; font-weight: 700;">
          ZEALTECH
          <span style="color: #22C55E;">POS</span>
        </div>

        <div style="text-align: right;">
          <h1 class="text-2xl font-semibold">Motocyte</h1>
          <p><span class="font-semibold">Address :</span> Ka/32/5/A, Palash Tower (Ground Floor, Dhaka 1212)</p>
          <p><span class="font-semibold">Mobile :</span> 01835006633 </p>
          <p><span class="font-semibold">E-mail :</span> info@bikersocen.com </p>
        </div>

      </div>
    </div>
    <div>
      <slot name="addContent"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "PrintPDF",
  props: ['printStatus'],

  data() {
    return {

    };
  },


};
</script>
<style></style> -->



<template>
  <main>
    <div style="margin-top: 1.25rem; margin-bottom: 1.25rem;" class="my-5">
      <div style="display: grid; gap: 0.25rem;" class="grid">
        <!-- <img src="https://logovectorseek.com/wp-content/uploads/2020/02/demos-logo-vector.png" alt="img" style="max-width: 30%; max-height: 100px; margin: 0 auto;"> -->
        <h1 style="font-size: 1.875rem; text-transform: uppercase; text-align: center;" class="text-3xl">zealtech bd</h1>
        <div style="" class="">
          <p style="text-align: center;" class="text-center">Ka/32/5/A (2nd Floor), Palash Tower, Shahjadpur, Badda.</p>
          <div style="display: flex; gap: 0.25rem; justify-content: center;" class="flex">
            <span style="color: #254dc5;" class="text-[#254dc5]">+880125879652,</span>
            <span style="color: #c5252d;" class="text-[#c5252d]">shsazibbhuiyan892939@gmail.com</span>
          </div>
        </div>
      </div>
      <slot></slot>
      <div style="display: flex; align-items: center; gap: 1.25rem; justify-content: center;" class="flex items-center justify-center gap-5">
        <img src="https://logovectorseek.com/wp-content/uploads/2020/02/demos-logo-vector.png" alt="img" style="max-width: 100px; max-height: 100px; margin: 0;">
        <img src="https://logovectorseek.com/wp-content/uploads/2020/02/demos-logo-vector.png" alt="img" style="max-width: 100px; max-height: 100px; margin: 0;">
        <img src="https://logovectorseek.com/wp-content/uploads/2020/02/demos-logo-vector.png" alt="img" style="max-width: 100px; max-height: 100px; margin: 0;">
      </div>
    </div>

  </main>
</template>

<script>
export default {
  methods: {
    print() {
      window.print();
    },
  },
};
</script>

<style scoped>
@media print {
  body {
    background-color: white;
  }
}
</style>