import ProviderCrypto from "../../core/usuarios/service/provider_crypto";

export default class InverterPassCrypto implements ProviderCrypto {

    encrypt(pass: String): string {
        return pass.split('').reverse().join('');
    }

}