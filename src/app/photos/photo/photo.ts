export interface Photo {
    id: number;
    postDate: Date;
    url: string;
    description: string;
    aloowComments: boolean;
    likes: number;
    comments: number;
    userId: number;
}