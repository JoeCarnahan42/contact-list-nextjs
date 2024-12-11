import Link from "next/link"
import ContactList from "../ContactList/page"


export default function Contacts() {
  return (
    <main>
      <div className='text-center'>
        <h1 className='display-4'>All Contacts</h1>
        <Link className='btn btn-primary' href='/contacts/new'>Add Contact</Link>
      </div>
      <br />
      <div>
        <ContactList />
      </div>
  </main>
  )
}