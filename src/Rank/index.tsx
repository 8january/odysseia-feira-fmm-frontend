import { useEffect, useState } from "react";
import styles from "./index.module.css"
import { User } from "./User"

import axios from "axios"

type UserT = {
  name: string
  correct: number
  time: number
  minutes: number
  seconds: number
}

export const Rank = () => {

  const [users, setUsers] = useState<UserT[]>([])
  useEffect(() => {

    const getRank = async () => {
      try {
        const { data } = await axios.get('https://odysseia-feira-fmm-backend.onrender.com/rank', {
          method: 'POST',
          withCredentials: true,
        })
        console.log(data)
        setUsers(data)
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
          <User key={user?.name} user={{ ...user, position: index + 1 }} />
        ))}
      </div>
    </div>
  </>
  );
};
