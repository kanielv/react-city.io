import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Welcome to City.io!</h1>
      <Link href="/game">Login!</Link>
    </div>
  )
}
