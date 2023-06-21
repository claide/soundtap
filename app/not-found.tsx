import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex items-center justify-center p-4'>
      <div className="text-center">
        <h1>
        Page Not Found
        </h1>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
