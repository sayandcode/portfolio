import ProjectSectionItem from "../ProjectSectionItem/ProjectSectionItem"
import styles from './ProjectSection.module.css'

function ProjectSection({ title, data }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.itemsContainer}>
        {data.map(item=><ProjectSectionItem key={item.title} item={item} />)}
      </div>
    </div>
  )
}

export default ProjectSection