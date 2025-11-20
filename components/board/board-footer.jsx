import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react"

export function BoardFooter() {
  return (
    <footer className="border-t border-border bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
         
          <p className="text-sm text-gray-400">© codeit - 2024</p>

          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-sm text-gray-400 hover:text-white">
              FAQ
            </Link>
          </div>

       
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Youtube className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
