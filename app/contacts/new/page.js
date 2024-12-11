import Link from "next/link";

export default function newContact() {
  return (
    <>
      <h1>This will be a new contact form</h1>
      <Link href='/contacts'>Back</Link>
    </>
  )
}