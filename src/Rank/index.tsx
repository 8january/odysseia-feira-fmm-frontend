import styles from "./index.module.css"
import { User } from "./User"

export const Rank = () => {

  const users = [
    { name: "John", position: 1 },
    { name: "Jane", position: 2 },
    { name: "Bob", position: 3 },
    { name: "Bob 2", position: 4 },
    { name: "Bob 3", position: 5 },
    { name: "Bob 4", position: 6 },
    { name: "Bob 5", position: 7 },
  ];

  return (
    <div className="app">
      <h1 id={styles.h1_rank}>Ranking</h1>
      
      <div className={styles.rank}>
      {users.map((user) => (
        <User key={user.name} user={user}/>
      ))}
      </div>
    </div>
  );
};
