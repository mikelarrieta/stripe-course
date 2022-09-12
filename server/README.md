# React + Express + Stripe course source code
## Stripe webooks for development:
Redirect Stripe webhook events in development:
```bash
./stripe listen --forward-to localhost:3333/hooks
```

Trigger an event of payment intent created:
```bash
./stripe trigger payment_intent.created
```