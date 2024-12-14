'use client';
import Link from "next/link";
import ContactList from "../ContactList/page";
import { useState } from 'react'
import Data from "../Data/page";


export default function Contacts() {
  const [search, setSearch] = useState(Data.all())
  const searchCon = (e) => {
    console.log(e.target.value)
    // TODO : normalize input
    if (e.target.value === '') {
      setSearch(Data.all())
    } else {
      console.log(search)
      const newList = Data.all().filter((c) => {
        return c.name.includes(e.target.value)
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