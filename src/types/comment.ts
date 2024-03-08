type User = {
    _id: string,
    name: string
}
export type Reply = {
    _id: string,
    userId: User,
    like: number,
    content: string,
    parentCommentId: {
        userId: User
    },
    createdAt: string
};
export type Comment = {
    like: number,
    _id: string,
    userId: User,
    content: string,
    parentCommentId: null,
    createdAt: string,
    replies: Reply[]
}
export type PostComment = {
    moviesId: string,
    userId: string,
    content: string,
    parentCommentId?: string
}