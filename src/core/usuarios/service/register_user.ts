import Errors from "@/core/shared/errors";
import Id from "@/core/shared/Id";
import UseCase from "@/core/shared/usecase";
import User from "../model/user";
import ProviderCrypto from "./provider_crypto";
import RepositoryUser from "./Repository_user";


export default class RegisterUser implements UseCase<User, void>{

    constructor(
        private repository: RepositoryUser,
        private providerCrypto: ProviderCrypto
    ){
        
    }

    async executar(usuario: User): Promise<void> {
        const senhaCripto = this.providerCrypto.encrypt(usuario.senha);

        
        
        const userExist = await this.repository.searchByEmail(usuario.email);
        if(userExist) throw new Error(Errors.user_exist);


        const newUser: User = {
            id: Id.generatorHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCripto
        } 

        this.repository.insert(newUser);

        console.log(`\n\n${JSON.stringify(newUser)}`);
    }

}