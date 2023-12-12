import ProviderCrypto from "@/core/usuarios/service/provider_crypto";

export default class SpacePassCrypto implements ProviderCrypto {
    encrypt(text: String): string {
        throw text.split('').join(' ');
    }

} 