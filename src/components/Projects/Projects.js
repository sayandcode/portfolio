import { JS_PROJECTS, REACT_PROJECTS } from "../../ProjectsData"
import ProjectSection from "../ProjectSection/ProjectSection"
import styles from './Projects.module.css'

function Projects() {
  return (
    <div className={styles.container}>
      <ProjectSection title="ReactJS" data={REACT_PROJECTS} />
      <ProjectSection title="Vanilla Javascript" data={JS_PROJECTS} />
    </div>
  )
}

export default Projects