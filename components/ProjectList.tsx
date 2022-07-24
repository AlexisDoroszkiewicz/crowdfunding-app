import ProjectCard from "./ProjectCard";

interface Project {
    id: string;
    title: string;
    description: string;
}
interface Props {
    projects: Project[];
}

const ProjectList = (props: Props) => {
    return <div>{props.projects.map((project) => ProjectCard(project))}</div>;
};

export default ProjectList;
