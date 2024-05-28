import Button from "./Button";

const ProjectSidebar = ({ onStartAddProject, projects, onSelectProject, selectedProjectId }) => {
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
        <div>
            <Button onClick={() => onStartAddProject()}> + Add Project</Button>
        </div>
        <ul className="mt-8">
            {projects.map(project => {
                let cssStyle = 'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800'
                if (project.id === selectedProjectId) {
                    cssStyle += ' bg-stone-800 text-stone-200'
                } else {
                    cssStyle += ' text-stone-400'
                }
                return <li className="flex justify-between my-4" key={project.id}><button onClick={()=>onSelectProject(project.id)} className={cssStyle}>{project.title}</button></li>
            })}
        </ul>

    </aside>
}

export default ProjectSidebar;