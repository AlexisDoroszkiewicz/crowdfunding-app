import React from "react";

export interface Project {
    id: string | number;
    title: string;
    createdAt: Date;
    owner: string;
    likes: number;
    requiredAmount: number;
    reachedAmount: number;
    isClosed: boolean;
}

// interface Props {
//     project: Project;
// }

const ProjectItem = (props: Project) => {
    return <li>{props.title}</li>;
};

export default ProjectItem;
