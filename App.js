import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { List, MD3Colors,Button } from 'react-native-paper';
import {useState} from 'react';






export default function App() {
  const [listaProdutos, setListaProdutos] = setState([]);



  const carregaProdutos = async () => {
    var resp = await fecth("https://web-wfiwe9krz76p.up-de-fra1-1.apps.run-on-seenode.com/api/produtos",
    { 
      method: "GET", 
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
  }
    )
    // setListaProdutos(resp.json());
    console.log(resp.json());
  }
  



  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>produtos</List.Subheader>
        {listaProdutos.map((produto)=> {
        return(
            <List.Item title={produto.nome} left={() => <List.Icon color={MD3Colors.tertiary70} icon="cellphone" />} />
          )
        })}

      </List.Section>

      <Button  onPress={()=>{carregaProdutos()}} mode="">CARREGAR DADOS</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
