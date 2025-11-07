"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { usePrivy } from "@privy-io/react-auth"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { LogIn } from "lucide-react"

export default function Register() {
  const router = useRouter()
  const { ready, authenticated, login } = usePrivy()

  useEffect(() => {
    if (ready && authenticated) {
      router.push("/dashboard")
    }
  }, [ready, authenticated, router])

  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-7xl mx-auto px-6 py-12">
        <AnimatedSection className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Join Arden</h1>
            <p className="text-muted-foreground">Create your account to get started</p>
          </div>

          <div className="space-y-5 bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground">
              You will be redirected to the dashboard if you are already logged in.
            </p>
            <button
              onClick={login}
              disabled={!ready}
              className="w-full py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <LogIn size={18} />
              Login
            </button>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}

