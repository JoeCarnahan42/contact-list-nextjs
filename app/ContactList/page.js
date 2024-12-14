'use client'
import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image"

export default function ContactList({ prop }) {
  console.log(prop)
  // TODO : 
  const contacts = prop

  return (
    <div>
      {contacts.map((c) => (
        <ul className='list-group list-group-horizontal justify-content-center' key={c.id}>
          <li className="border-0 list-group-item bg-secondary">
            <Image width={40} height={40} alt="unc" src={c.image_url} />
          </li>
          <li className='border-0 list-group-item bg-secondary'>{c.name}</li>
          <li className='border-0 list-group-item bg-secondary'>{c.email}</li>
          <li className='border-0 list-group-item bg-secondary'>{c.phone_number}</li>
          <li className='border-0 list-group-item bg-secondary'><a className='link'>Edit</a></li>
        </ul>
      ))}
    </div>
  )
}