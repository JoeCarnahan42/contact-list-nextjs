'use client';
import Link from "next/link";
import ContactList from "../ContactList/page";
import { useState } from 'react'
import Data from "../Data/page";
import '/app/style.css'


export default function Contacts() {
  const [search, setSearch] = useState(Data.all())
  const searchCon = (e) => {
    const normData = e.target.value.toLowerCase()
    if (e.target.value === '') {
      setSearch(Data.contacts)
    } else {
      const newList = Data.contacts.filter((c) => {
        return c.name.toLowerCase().includes(normData)// Normalizes Input and Response
      })
      setSearch(newList)
    }
  };
  return (
    <main>
      <div className='text-center'>
        <h1 className='display-4'>All Contacts</h1>
        <Link className='btn btn-primary' href='/contacts/new'>Add Contact</Link>
      </div>
      <br />
      <div >
        <input id="con-search" onChange={searchCon} className="input-group-text m-auto" placeholder="Search Contacts" type="text"></input>
        <br />
        <ContactList prop={search} />
      </div>
  </main>
  );
};