import { User } from "../User/user";
import { AddLike, DeletePost, GetPostById, InsertPost, UpdatePost } from "./pPost";

export class Post {

    public id: number;
    public user: User;
    public description: String;
    public date: Date;
    public likes: number;

    constructor(id?: number, user?: User, description?: String, date?: Date, likes?: number) {
        this.id = id ?? 0;
        this.user = user ?? null!;
        this.description = description ?? "";
        this.date = date ?? null!;
        this.likes = likes ?? 0;
    }

    public InsertPost() {
        return InsertPost(this);
    }

    public static getPostById(id: number) {
        return GetPostById(id);
    }

    public UpdatePost() {
        return UpdatePost(this);
    }

    public AddLike() {
        return AddLike(this);
    }

    public DeletePost() {
        return DeletePost(this.id);
    }

}