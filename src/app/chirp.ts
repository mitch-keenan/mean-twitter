export class Chirp {
    id: number;
    userId: number;
    content: string;
    date: Date;

    // TODO: Add references to rechriped/replied to chrip

    // Derived data
    likeCount: number;
    rechripCount: number;
    replyCount: number;
}
