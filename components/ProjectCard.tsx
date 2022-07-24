interface Project {
    project: {
        id: string;
        title: string;
        description: string;
    };
}

const ProjectCard = ({ project }: Project) => {
    return (
        <div key={project.id}>
            <h1>{project.title}</h1>
            <h2>{project.description}</h2>
        </div>
    );
};

export default ProjectCard;
