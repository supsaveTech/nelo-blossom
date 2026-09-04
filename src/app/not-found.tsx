import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
      <h2 className="text-3xl font-bold">404 - Not Found</h2>
      <p className="text-muted-foreground">The page you are looking for does not exist.</p>
      <Link 
        href="/"
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 mt-4"
      >
        Return Home
      </Link>
    </div>
  )
}
