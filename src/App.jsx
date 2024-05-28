import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SeletedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[],
  });


const handleAddTask = (text) => {
  const taskId = Math.random();
  setProjectState(preState=>{
    const newTask = {
      text:text,
      projectId :preState.selectedProjectId,
      id: taskId
    }
    return {
      ...preState,
      tasks:[newTask,...preState.tasks]
    }
  })
}
const handleDeleteTask = (id) => {
  setProjectState((preState) => {
    return {
      ...preState,
      tasks:preState.tasks?.filter(task=>task.id !== id)
    }
  })
  
}

  const handleStartAddProject = () => {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: null,
      }
    })
  }

  const handleSelectProject = (id) => {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: id,
      }
    })
  }

  const handleCancelProject = () => {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectId: undefined,
      }
    })
  }

  const HandleAddProject = (projectData) => {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId
    }
    setProjectState(preState => {
      return {
        ...preState,
        selectedProjectId: undefined,
        projects: [...preState.projects, newProject]
      }
    })
  }

  const projectRemoveHandler = () => {
    setProjectState(preState => {
      return {
        ...preState,
        selectedProjectId: undefined,
        projects: preState.projects.filter(project=> project.id !== preState.selectedProjectId),
    }
  })
  }

  const selectedProject = projectState.projects.find(project=> project.id === projectState.selectedProjectId)
  const selectedTask = projectState.tasks.filter(
    (task) => task.projectId === projectState.selectedProjectId
  );

  let content = <SelectedProject project={selectedProject} onRemoveProject={projectRemoveHandler} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={selectedTask}/>
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={HandleAddProject} onCancel={handleCancelProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId} />
      {content}
    </main>
  );
}

export default App;
