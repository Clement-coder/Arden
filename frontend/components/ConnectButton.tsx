// components/ConnectButton.tsx
'use client';

import { usePrivy } from '@privy-io/react-auth';
import { useAccount } from 'wagmi';

export default function ConnectButton() {
  const { login, logout, authenticated } = usePrivy();
  const { address } = useAccount();

  return (
    <button
      onClick={authenticated ? logout : login}
      className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
    >
      {authenticated
        ? `Disconnect (${address?.slice(0, 6)}...${address?.slice(-4)})`
        : 'Wallet'}
    </button>
  );
}
