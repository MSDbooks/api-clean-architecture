import User from "../model/user";

export default interface RepositoryUser{
    insert(user: User):Promise<void>;
    searchByEmail(mail: string): Promise<User | null>;
}