import {
    FirestoreDataConverter,
    QueryDocumentSnapshot,
    SnapshotOptions,
} from "firebase/firestore";

export interface Project {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    ownerId: string;
    likes: number;
    requiredAmount: number;
    reachedAmount: number;
    isClosed: boolean;
}

// Firestore data converter
export const projectConverter: FirestoreDataConverter<Project> = {
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
    fromFirestore: (
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ) => {
        const data = snapshot.data(options);
        const proj: Project = {
            id: snapshot.id,
            title: data.title,
            description: data.description,
            createdAt: data.createdAt,
            ownerId: data.ownerId,
            likes: data.likes,
            requiredAmount: data.requiredAmount,
            reachedAmount: data.reachedAmount,
            isClosed: data.isClosed,
        };

        return proj;
    },
};
