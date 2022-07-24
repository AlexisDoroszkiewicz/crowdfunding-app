import { QueryDocumentSnapshot } from "firebase/firestore";

export class Project {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    ownerId: string;
    likes: number;
    requiredAmount: number;
    reachedAmount: number;
    isClosed: boolean;

    constructor(
        id: string,
        title: string,
        description: string,
        createdAt: Date,
        ownerId: string,
        likes: number,
        requiredAmount: number,
        reachedAmount: number,
        isClosed: boolean
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.ownerId = ownerId;
        this.likes = likes;
        this.requiredAmount = requiredAmount;
        this.reachedAmount = reachedAmount;
        this.isClosed = isClosed;
    }
}

// Firestore data converter
export const projectConverter = {
    toFirestore: (project: Project) => {
        return {
            id: project.id,
            title: project.title,
            description: project.description,
            createdAt: project.createdAt,
            ownerId: project.ownerId,
            likes: project.likes,
            requiredAmount: project.requiredAmount,
            reachedAmount: project.reachedAmount,
            isClosed: project.isClosed,
        };
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot, options: any) => {
        const data = snapshot.data(options);
        return new Project(
            data.id,
            data.title,
            data.description,
            data.createdAt,
            data.ownerId,
            data.likes,
            data.requiredAmount,
            data.reachedAmount,
            data.isClosed
        );
    },
};
