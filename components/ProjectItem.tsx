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

const ProjectItem = (props: Project) => {
    return <li key={props.id}>{props.title}</li>;
};

export default ProjectItem;
