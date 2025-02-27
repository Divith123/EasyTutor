import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:h-24">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <Link href="/" className="font-semibold">
            EasyTutor
          </Link>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} EasyTutor. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
            Terms
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

