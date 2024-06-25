import { useEffect, useState } from "react";
import { User } from "./User"

import styles from "./index.module.css"
import axios from "axios"

type UserT = {
  name: string
  correct: number
  time: number
  minutes: number
  seconds: number
  _id: any
}

export const Rank = () => {

  const usersR = JSON.parse((localStorage.getItem('users') as string))
  console.log("USERRR:", usersR )
  const [users, setUsers] = useState<UserT[]>(usersR)

  useEffect(() => {

    const getRank = async () => {
      try {

        //https://odysseia-feira-fmm-backend-production.up.railway.app/rank
        //https://876a-2804-18-688d-c55a-246c-df23-efca-8fc4.ngrok-free.app
        const { data } = await axios.get('https://odysseia-feira-fmm-backend-production.up.railway.app/rank', {
          method: 'GET',
          withCredentials: true,
        })
        console.log("DATA LENGTH", data?.length)
        console.log("USERS LENGTH", users?.length)
        console.log('USERS', users)

        
        if(users.length <= data?.length) {
          setUsers(data)
          return
        }

        setUsers([data])
        console.log(users)

      } catch (err) {
        console.log(err)
      }
    }
    getRank()

  }, [])

  return (<>
    <img src='/a-1.svg' id='a-1' />
    <img src='/a-2.svg' id='a-3' />
    <img src='/a-3.svg' id='a-4' />
    <img src='/a-4.svg' id='a-2' />
    <div className="app">
      <h1 id={styles.h1_rank}>Ranking</h1>

      <div className={styles.rank}>
        {users.map((user, index) => (
          <User key={user?._id} user={{ ...user, position: index + 1 }} />
        ))}
      </div>
    </div>
  </>
  );
};
