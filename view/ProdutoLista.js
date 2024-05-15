import React, {useState, useEffect} from 'react';
 import { Text, View, TouchableOpacity, FlatList }
     from 'react-native';
 import GestorDados from '../dados/GestorDados';
 import ProdutoItem from '../view/ProdutoItem'
 import { styles } from '../styles/CommonStyles';
 import { useIsFocused } from '@react-navigation/native';

 export default function ProdutoLista( { navigation } ) {
 const gestor = new GestorDados();
 const [produtos, setProdutos] = useState([]);

 const isFocused = useIsFocused();

 useEffect(() => {
     gestor.obterTodos().then(objs => setProdutos(objs));
 }, [isFocused]);

 const myKeyExtractor = item => {
     return item.codigo.toString();
 };

 function excluirProduto(codigo){
     gestor.remover(codigo).then(
     gestor.obterTodos().then(objs => setProdutos(objs))
     );
 }

 return (
     <View style={styles.container}>
     <TouchableOpacity style={styles.button}
         onPress={()=>navigation.navigate('NovoProd')}>
         <Text style={styles.buttonTextBig}>Novo Produto</Text>
     </TouchableOpacity>
     <FlatList style={styles.scrollContainer} data={produtos}
         contentContainerStyle={styles.itemsContainer}
         keyExtractor={myKeyExtractor}
         renderItem={ ({item}) =>
         <ProdutoItem
         onDelete={()=>excluirProduto(item.codigo)}
         produto={item} />
         }
     />
     </View>
 );
 }