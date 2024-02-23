// Importando todos os elementos que eu vou usar
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

// constante do alerta ao clicar no botão
export default function App() {

  pressButton = () => {
    alert("Seja bem vindo!")
  }
  
  // Imagem de fundo
  const imagem = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMzx4_RHZAx22XUXoq7d1BkTBsRfRwBk6Rw&usqp=CAU' }

  // codigo do "body" do meu site 
  return (
    // View principal do meu site
    <View style={styles.container}>

      {/* Imagem de fundo */}
      <ImageBackground source={imagem} 
      style={styles.image} 
      resizeMode='repeat'>

{/* Imagem menor */}
        <Image source={require('./assets/escudo_sp-removebg-preview.png')}
        style={styles.image2} 
        resizeMode='cover'
        />

{/* Texto que fica sobre as caixas de texto */}
        <Text style={{ color: 'white', fontSize: 20, }}>Faça Login
        </Text>

{/* Caixa de texto: Usuário */}
        <TextInput style={styles.inputName}
          placeholder='Usuário'
          inputMode='text'
          placeholderTextColor='black'
        />

{/* Caixa de texto: Senha */}
        <TextInput style={styles.inputName}
          placeholder='Senha'
          inputMode='numeric'
          secureTextEntry={true}
          placeholderTextColor='black'
        />

{/* Botão: Entrar */}
        <Button
          style={{ backgroundColor: 'white', width: '50%', }}
          onPress={pressButton}
          title='Entrar!'
          color='red'
        />


      </ImageBackground>
    </View>
  );
}

// style do site
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputName: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 15,
    fontSize: 20,
    backgroundColor: 'white',
    width: '50%',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2: {
    width: '20%',
    height: '10%',
  }

});
