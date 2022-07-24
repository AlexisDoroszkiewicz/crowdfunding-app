export default class Project {
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
