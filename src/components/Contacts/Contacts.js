import styles from './Contacts.module.css'

function Contacts() {
  return (
    <div className={styles.container}>
      <p>sayand.satish3@gmail.com</p>
      <a href="https://github.com/sayandcode">
        <p>Github Profile</p>
      </a>
      <a href="https://bit.ly/3L6bP3I">
        <p>LinkedIn</p>
      </a>
      <p>Ph: +918921976986</p>
    </div>
  )
}

export default Contacts