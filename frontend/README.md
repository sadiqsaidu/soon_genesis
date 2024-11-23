// Current pay usd price in the market

//

```
interface PageStructure {
  public: {
    landing: "/",
    pricing: "/pricing",
    documentation: "/docs",
    paymentPage: "/pay/[invoiceId]"
  },
  dashboard: {
    overview: "/dashboard",
    invoices: "/dashboard/invoices",
    analytics: "/dashboard/analytics",
    settings: "/dashboard/settings"
  },
  vendor: {
    profile: "/vendor/[id]",
    products: "/vendor/products",
    disputes: "/vendor/disputes"
  }
}
```

```
interface CoreFeatures {
  invoicing: {
    generation: "Create invoice with product/service details",
    sharing: "Shareable payment links (/pay/[invoiceId])",
    tracking: "Real-time payment status"
  },
  payments: {
    pyusd: "PYUSD payment processing",
    priceOracle: "Real-time PYUSD/USD price feed",
    verification: "Dual verification (wallet + ID)"
  }
}
```
