'use client'
import Data from "@/app/Data/page";
import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'



export default function Contact(prop) {
  const id = JSON.parse(prop.searchParams.id)

  const contact = Data.contacts.find((c) => {
    return c.id === id
  })
 
  return (
    <div className="text-center">
      <h1>Contact Info</h1>
      <Link href={'/contacts'}>Back</Link>
      <h1>{contact.name}</h1>
      <Image src={contact.image_url} alt="Profile Picture" height={300} width={300} />
      <h1>{contact.email}</h1>
      <h1>{contact.phone_number}</h1>
    </div>
  )

}