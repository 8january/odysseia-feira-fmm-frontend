import styles from "./index.module.css"
type User = {
    name: string
    position: number
}
export const User = ({user}: {user: User}) => {
  return (
    <div className={styles.user}>
        <div className={styles.position}>{user.position}°</div>
        <div className={styles.name}>{user.name}</div>
    </div>
  );
};
