export class Chirp {
    _id: number;
    userId: number;
    body: string;
    date: Date;

    // TODO: Add references to rechriped/replied to chrip

    // Derived data
    userName: string; // Derived
    //likeCount: number;
    //rechripCount: number;
    //replyCount: number;
}
