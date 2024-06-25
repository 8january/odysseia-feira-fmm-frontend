import styles from "./index.module.css"
import { useCookies } from 'react-cookie';

type UserT = {
  name: string
  correct: number
  time: number
  minutes: number
  seconds: number
  position: number
  _id: any;
}
export const User = ({user}: {user: UserT}) => {
  const id = (localStorage.getItem('id'))
  const [cookies] = useCookies(['id']);

    const cookieValue = cookies['id'];
    console.log("COOKIE:", cookieValue)

  if(id === user?._id)
  console.log('ID:', id, ' IGUAL AO DO ', user.name)
  //console.log("ID USER:", id)
  return (
    <div className={id === user?._id ? styles.user_selected : styles.user}>
        <div className={styles.position}>{user.position}°</div>
        <div className={styles.name}>{user.name}</div>
    </div>
  );
};
