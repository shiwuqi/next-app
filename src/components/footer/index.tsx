"use client";
import { useSession } from "next-auth/react";

export default function Footer() {

  return (
    <footer className="border-t py-4">
        <div className="container mx-auto text-center text-lg text-muted-foreground">
            © 2025 AICV. All rights reserved.
        </div>
    </footer>
  )
}