import styles from './ProjectSectionItem.module.css'

function ProjectSectionItem({item: { title, icon, liveUrl, codeUrl, description }}) {
  return (
    <div className={styles.container}>
      <img src={icon} alt="Project Icon" className={styles.img} />
      <div className={styles.info}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={styles.buttonContainer}>
          <a href={liveUrl} target="_blank" rel="noreferrer">
            <button className={styles.button}>Live Website</button>
          </a>
          <a href={codeUrl} target="_blank" rel="noreferrer">
            <button className={styles.button}>Code Repo</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectSectionItem