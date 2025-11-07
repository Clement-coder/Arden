"use client"

import type React from "react"
import { PrivyProvider } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"

export function ArdenPrivyProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <PrivyProvider
      appId="cmh0g14h503wcky0d49f33uxy"
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "/logo.png",
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          ethereum: {
            createOnLogin: "users-without-wallets",
          },
        },
      }}
    >
      {children}
    </PrivyProvider>
  )
}
