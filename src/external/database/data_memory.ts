import RepositoryUser from "@/core/usuarios/service/Repository_user";
import User from "../../core/usuarios/model/user";

export default class DataMemory implements RepositoryUser{
    private static readonly items: User[] = [];

    async insert(user: User):Promise<void>{
        const userExist = await this.searchByEmail(user.email);
        if(userExist) return 
        DataMemory.items.push(user);
    }

    async searchByEmail(email: String):Promise<User | null>{
        return DataMemory.items.find(u=> u.email === email) ?? null;
    }
}