import {stripe} from "./";
import {Stripe} from "stripe";

/**
 * Creates a Stripe Checkout session with line items.
 * @param {number} lineItems Items to be purchased.
 * @return {number} The Stripe Checkout Session object.
 */
export async function createStripeCheckoutSession(
    lineItems: Stripe.Checkout.SessionCreateParams.LineItem[]
): Promise<Stripe.Checkout.Session> {
  // Example Item
  // {
  //   name: 'T-shirt',
  //   description: 'Comfortable cottom t-shirt',
  //   images: ['https://example.com/t-shirt.png'],
  //   amount: 500,
  //   currency: 'usd',
  //   quantity: 1
  // }

  const url = process.env.WEBAPP_URL;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${url}/failed`,
  });

  return session;
}
