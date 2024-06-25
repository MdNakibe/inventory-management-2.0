<template>
  <div class="w-full h-full flex" v-if="loggedInStatus">
      <Aside v-if="loggedInStatus" />
      <div 
          class="w-full h-full transition-all"
          :class="{'pl-[var(--asideWidth)]' : asideOpen}"
      >
          <TopNav v-if="loggedInStatus" />
          <RightAside />
          <div class="p-5">
              <router-view />
          </div>
      </div>
  </div>
  <div v-if="!loggedInStatus">
    <router-view />
  </div>
  <!-- <slot /> -->
</template>

<script setup>
import Aside from './layouts/inc/Aside.vue';
import TopNav from './layouts/inc/TopNav.vue';
import { ref } from 'vue'

import { asideOpen } from './composable/useConfig';
import RightAside from './layouts/inc/RightAside.vue';
</script>
<script>
export default {
  computed:{
    loggedInStatus(){
      return this.$store.getters['user/GET_AUTH_TOKEN'];
    },
  },
  // watch: {
  //   loggedInStatus(newValue) {
  //     if (newValue === null) {
  //       // If the token is null, redirect to the root route
  //       this.$router.push('/');
  //     }
  //   },
  // },
  // mounted() {
  //   setTimeout(() => {
  //         this.$store.dispatch('user/logout');
  //       }, 5 * 60 *  1000);
  //   // Check the loggedInStatus when the component is mounted
  //   this.checkLoginStatus();
  // },
  // methods: {
  //   checkLoginStatus() {
  //     // If not logged in, redirect to the root route
  //     if (this.loggedInStatus === null) {
  //       this.$router.push('/');
  //     }
  //   },
  // },
}
</script>