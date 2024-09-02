<template>
  <section class="showcase">
    <div class="nes-container with-title">
      <h3>Impulsionar publicação</h3>
      <div class="img">
        <img src="" alt="" srcset="" />
      </div>
    </div>
  </section>
  <h2>Or...</h2>
  <div class="nes-field mt">
    <v-btn rounded="lg" dark color="hsla(160, 100%, 37%, 1)" @click="redirect">
      Pagar R$ 20,00
    </v-btn>
  </div>
</template>

<script>
import setupPayment from '@/Composable/payment';

export default {
  name: 'PaymentView',
  setup() {
    const { redirect, loading } = setupPayment();
    return {
      redirect,
      loading
    };
  }
};
</script>
