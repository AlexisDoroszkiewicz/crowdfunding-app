import { Project } from "@classes/Project";

const ProjectCard = ({ id, title, description }: Project) => {
    return (
        <div key={id}>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    );
};

export default ProjectCard;
