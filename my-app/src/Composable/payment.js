import { loadStripe } from "@stripe/stripe-js";
import { onMounted, ref } from "vue";

let stripe = null;
let elements = null;

export default function setupPayment() {
  const loading = ref(true);

  onMounted(async () => {
    try {
      const stripeKey = `${import.meta.env.VITE_STRIPE_KEY}`;
      stripe = await loadStripe(stripeKey);
      if (stripe) {
        loading.value = false;
        console.log("Stripe initialized successfully.");
      } else {
        console.error("Stripe failed to load.");
      }
    } catch (error) {
      console.error("Error loading Stripe:", error);
    }
  });

  function redirect() {
    if (stripe) {
      stripe.redirectToCheckout({
        successUrl: 'https://busca-pet-seven.vercel.app/success',
        cancelUrl: 'https://busca-pet-seven.vercel.app/',
        lineItems: [
          {
            price: "price_1PuBUaKaU1Vv323oO1K4iWIH",
            quantity: 1
          }
        ],
        mode: "subscription"
      }).then((result) => {
        if (result.error) {
          console.error("Error redirecting to checkout:", result.error.message);
        }
      });
    } else {
      console.error("Stripe is not initialized.");
    }
  }

  return { redirect, loading };
}
