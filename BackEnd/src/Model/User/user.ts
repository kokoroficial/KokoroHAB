import { DeleteUser, GetUserById, InsertUser, UpdateUser, UpdateUserPassword } from "./pUser";

export class User {
    public id: number;
    public firstName: String;
    public lastName: String;
    public nickName: String;
    public password: String;
    public dateBorn: Date;
    public email: String;
    public description: String;

    public constructor(id?: number, firstName?: String, lastName?: String, nickName?: String, password?: String, dateBorn?: Date, email?: String, description?: String) {
        this.id = id ?? 0;
        this.firstName = firstName ?? "";
        this.lastName = lastName ?? "";
        this.nickName = nickName ?? "";
        this.password = password ?? "";
        this.dateBorn = dateBorn ?? null!;
        this.email = email ?? "";
        this.description = description ?? "";
    }

    public InsertUser() {
        return InsertUser(this);
    }

    public static getUserById(id: number) {
        return GetUserById(id);
    }

    public UpdatePassword() {
        return UpdateUserPassword(this.id, this.password);
    }

    public UpdateUser() {
        return UpdateUser(this);
    }

    public DeleteUser() {
        return DeleteUser(this.id);
    }

}