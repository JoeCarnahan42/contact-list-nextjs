'use client'
import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image"
import Link from 'next/link'
import '/app/style.css'

export default function ContactList({ prop }) {

  return (
    <div className='container list-bg'>
      {prop.map((c) => (
        <ul className='list-group list-group-horizontal justify-content-center ' key={c.id}>
          <li className="border-0 list-group-item list-bg">
            <Image width={40} height={40} alt="unc" src={c.image_url} />
          </li>
          <li className='border-0 list-group-item list-bg'><Link href={'/contact'}>{c.name}</Link></li>
          <li className='border-0 list-group-item list-bg'>{c.email}</li>
          <li className='border-0 list-group-item list-bg'>{c.phone_number}</li>
          <li className='border-0 list-group-item list-bg'><a className='link'>Edit</a></li>
        </ul>
      ))}
    </div>
  )
}