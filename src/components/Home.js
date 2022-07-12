import React, { useState, useEffect } from "react"
import { db } from "../firebaseConfig"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore"
import { async } from "@firebase/util"

const Home = () => {
  const [user, setUser] = useState([])
  const [name, setName] = useState("")
  const [designation, setDesignation] = useState("")
  const [updateName, setupdateName] = useState("")
  const [updateDesignation, setupdateDesignation] = useState("")

  let address = collection(db, "user")

  useEffect(() => {
    let storedUser = async () => {
      let info = await getDocs(address)

      setUser(info.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(info)
      // console.log(info.docs[1].data())
    }
    storedUser()
  }, [])

  let handlePost = async () => {
    await addDoc(address, { myname: name, mydesignation: designation })
  }

  let handleUpdate = async (id) => {
    await updateDoc(doc(db, "user", id), {
      myname: updateName,
      mydesignation: updateDesignation,
    })
  }

  let handleDelete = async (id) => {
    await deleteDoc(doc(db, "user", id))
  }

  console.log(user)
  return (
    <>
      {/* add data */}
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="designation"
        onChange={(e) => setDesignation(e.target.value)}
      />
      <button onClick={handlePost}>Post</button> <br />
      {/* read Data */}
      {user.map((info, i) => (
        <div key={i}>
          <p>{info.id}</p>
          <h1>{info.myname}</h1>
          <h3>{info.mydesignation}</h3>
          {/* edit data */}
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setupdateName(e.target.value)}
          />
          <input
            type="text"
            placeholder="designation"
            onChange={(e) => setupdateDesignation(e.target.value)}
          />
          <button
            onClick={() => {
              handleUpdate(info.id)
            }}
          >
            Update
          </button>
          <button
            onClick={() => {
              handleDelete(info.id)
            }}
          >
            Delete
          </button>
          <br />
        </div>
      ))}
    </>
  )
}

export default Home
