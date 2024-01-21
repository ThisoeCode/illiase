import Link from 'next/link'
 
export default function NotFound() {
  console.error('[Illiase: NotFound]')
  return (
    <div id='nf404'>
      <h1>404</h1>
      <p>This page is under construction...</p>
      <Link href="/">Surface</Link>
    </div>
  )
}