export default interface UseCase<E,S>{
    executar(Usuario: E): Promise<S>;
}