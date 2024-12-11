'use client'
import 'bootstrap/dist/css/bootstrap.css'
import Data from "../Data/page"
import { useState } from "react"
import Image from "next/image"

export default function ContactList() {
  console.log(Data)
  const [contacts, _] = useState(Data.all())

  return (
    <div>
      {contacts.map((c) => (
        <ul className=' list-group list-group-horizontal justify-content-center' key={c.id}>
          <li className="border-0 list-group-item">
            <Image width={50} height={50} alt="unc" src={c.image_url} />
          </li>
          <li className='border-0 list-group-item'>{c.name}</li>
          <li className='border-0 list-group-item'>{c.email}</li>
          <li className='border-0 list-group-item'>{c.phone_number}</li>
          <li className='border-0 list-group-item'><a className='link'>Edit</a></li>
        </ul>
      ))}
    </div>
  )
}