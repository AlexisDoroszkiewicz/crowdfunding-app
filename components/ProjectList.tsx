import ProjectItem, { Project } from "./ProjectItem";

interface Props {
    projects: Project[];
}

const ProjectList = (props: Props) => {
    return <ul>{props.projects.map((project) => ProjectItem(project))}</ul>;
};

export default ProjectList;
