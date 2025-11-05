# Code Impact Demo Repo

This small demo repo is used to record a Loom showcasing the Code Impact VS Code extension.

## Files to edit during demo
- `src/utils/calculateDiscount.ts` — make a small one-line logic change (e.g., adjust premium discount).
- `src/components/cart-summary.tsx` — will be detected as a downstream consumer (high confidence).
- `src/controllers/checkoutController.ts` — indirect consumer.

## Run tests (optional)
1. Install dev dependencies:
   ```bash
   npm install
   ```
2. Run the full test suite:
   ```bash
   npm test
   ```
3. Run a single test (example):
   ```bash
   npm run test:cart
   ```

## Notes for the demo
- Use the extension's **Analyze Impact** command after changing `calculateDiscount.ts`.
- Show the **What will break** subtree and expand the `src/components/cart-summary.tsx` entry.
- Optionally click suggested tests to run them locally.
