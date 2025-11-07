// lib/privyConfig.ts
import type { PrivyClientConfig } from '@privy-io/react-auth';
import { baseSepolia } from 'wagmi/chains';

export const privyConfig: PrivyClientConfig = {
  appearance: {
    theme: 'light',
    accentColor: '#0A74FF', // Base blue
  },
  embeddedWallets: {
    ethereum: {
      createOnLogin: 'all-users',
    },
  },
  supportedChains: [baseSepolia],
};
