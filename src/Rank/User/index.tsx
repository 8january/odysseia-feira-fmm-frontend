import styles from "./index.module.css"
type UserT = {
  name: string
  correct: number
  time: number
  minutes: number
  seconds: number
  position: number
}
export const User = ({user}: {user: UserT}) => {
  return (
    <div className={styles.user}>
        <div className={styles.position}>{user.position}°</div>
        <div className={styles.name}>{user.name}</div>
    </div>
  );
};
