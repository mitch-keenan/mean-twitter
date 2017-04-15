import { User } from './user';

export class Chirp {
    _id: number;
    user: User;
    body: string;
    date: Date;

    // TODO: Add references to rechriped/replied to chrip

    // Derived data
    //likeCount: number;
    //rechripCount: number;
    //replyCount: number;
}
