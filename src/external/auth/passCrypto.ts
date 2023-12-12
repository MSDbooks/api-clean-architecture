import bcrypt from "bcrypt";
import ProviderCrypto from "@/core/usuarios/service/provider_crypto";

export default class PassCrypto implements ProviderCrypto{
    encrypt(text: String): string {
       const salt = bcrypt.genSaltSync(10);
       return bcrypt.hashSync(text.toString(), salt);
    }


    
}