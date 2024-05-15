import AsyncStorage from '@react-native-async-storage/async-storage';
import { Produto } from '../dados/Produto';

const salvarProduto = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) { }
}

const removerProduto = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) { }
}

const obterProdutosJSON = async () => {
    try {
        // Cria uma cópia mutável dos keys para permitir modificações, se necessário
        let keys: string[] = [...await AsyncStorage.getAllKeys()];
        return await AsyncStorage.multiGet(keys);
    } catch (e) { return []; }
}

const obterProdutos = async () => {
    try {
        let objetos = [];
        let objJSON = await obterProdutosJSON();
        if (objJSON != null && objJSON.length > 0)
            objJSON.forEach(element => {
                let produto: Produto = JSON.parse(element[1]);
                objetos.push(produto);
            });
        return objetos;
    } catch (e) { return []; }
}

class GestorDados {
    public async remover(chave: number) {
        removerProduto(chave.toString());
    }
    public async adicionar(produto: Produto) {
        salvarProduto(produto.codigo.toString(), produto);
    }
    public async obterTodos(): Promise<Array<Produto>> {
        let lista: Array<Produto> = await obterProdutos();
        return lista;
    }
}

export default GestorDados;
