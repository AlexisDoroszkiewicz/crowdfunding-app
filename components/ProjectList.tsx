import ProjectCard from "./ProjectCard";
import Project from "@classes/Project";

interface Props {
    projects: Project[];
}

const ProjectList = (props: Props) => {
    return <div>{props.projects.map((project) => ProjectCard(project))}</div>;
};

export default ProjectList;
