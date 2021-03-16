## Redirect Stripe webhook events in development:
./stripe listen --forward-to localhost:3333/hooks

## Trigger an event of payment intent created:
./stripe trigger payment_intent.created