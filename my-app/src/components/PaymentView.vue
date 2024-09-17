<template>
  <section class="showcase">
    <div class="nes-container with-title">
      <h3>Impulsionar publicação</h3>
      <div class="img">
        <img src="" alt="" srcset="" />
      </div>
    </div>
  </section>

  <div class="nes-field mt">
    <stripe-pricing-table :pricing-table-id="pricingTableId"
    :publishable-key="publishableKey">
    </stripe-pricing-table>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  name: 'PaymentView',
  setup() {
    const publishableKey = ref(import.meta.env.VITE_STRIPE_KEY);
    const pricingTableId = ref('prctbl_1Q04xGKaU1Vv323oW6l0QpnG');

    onMounted(() => {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/pricing-table.js';
      script.async = true;
      document.body.appendChild(script);
    });

    return {
      publishableKey,
      pricingTableId
    };
  }
};
</script>
