'use client';
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Data from "@/app/Data/page";
import 'bootstrap/dist/css/bootstrap.css';

export default function NewContact() {
  const nameInput = useRef('');
  const imgInput = useRef('');
  const emailInput = useRef('');
  const phoneInput = useRef('');
  
  const router = useRouter();
  
  const [isDisabled, setIsDisabled] = useState(true)
  
  
  
  const addCon = (e) => {
    e.preventDefault()
    console.log('Adding...')
    const id = Math.round(Math.random() * 100)
    
    Data.addContact(id, nameInput.current.value, imgInput.current.value, emailInput.current.value, phoneInput.current.value);
    
    nameInput.current.value = '';
    imgInput.current.value = '';
    emailInput.current.value = '';
    phoneInput.current.value = '';
    
    alert('Contact Added')
    
    router.push('/contacts')
  }
  
  const enableSubmit = () => {

    const isValidUrl = (string) => {
      try {
        new URL(string);
        return true;
      } catch (e) {
        return false
      }
    }

    const urlValid = isValidUrl(imgInput.current.value)

    if (nameInput.current.value === '' || urlValid === false || emailInput.current.value === '' || phoneInput.current.value === '' || imgInput.current.value === '') {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }

  return (
    <>
      <h1 className="text-center p-3">Add New Contact</h1>
      <form className="text-center p-3 mx-auto border rounded w-25 p-3">
        <label><u>Name</u></label>
        <br />
        <input onChange={enableSubmit} required ref={nameInput} className="input-group-text m-auto" type="text" />
        <br />
        <label><u>Image URL</u></label>
        <br />
        <input onChange={enableSubmit} required ref={imgInput} className="input-group-text m-auto" type="url" />
        <br />
        <label><u>Email</u></label>
        <br />
        <input onChange={enableSubmit} required ref={emailInput} className="input-group-text m-auto" type="email" />
        <br />
        <label><u>Phone Number</u></label>
        <br />
        <input onChange={enableSubmit} required ref={phoneInput} className="input-group-text m-auto" type="text" />
        <br />
        <button className="btn btn-primary" disabled={isDisabled} onClick={addCon}>Add Contact</button>
        <br />
        <Link href='/contacts'>Cancel</Link>
      </form>
    </>
  )
}