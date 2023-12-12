import User from "../../core/usuarios/model/user";
import db from './db';
export default class DataMemoryPg {
    

    async insert(user: User):Promise<void>{
        await db.query(`insert into usuarios
        (id, nome, email, senha)
        values($1, $2, $3, $4)`,
    [
        user.id,
        user.nome,
        user.email,
        user.senha
    ]    
    )}

    async searchByEmail(email: string):Promise<User | null>{
        
        const user = await db.oneOrNone(
            'select * from usuarios where email = $1',
            [
                email
            ]
        );
        if(!user) return null
        return user;
    }
}