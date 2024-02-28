// Importando todos os elementos que eu vou usar
import { Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';
import SecondComponent from './src/assets/componentes/SecondComponent';
import { styles } from './src/styles/StyleSheet';



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
        <Image source={require('./src/assets/images/escudo_sp-removebg-preview.png')}
        style={styles.image2} 
        resizeMode='center'
        />

{/* Texto que fica sobre as caixas de texto */}
        <Text style={{ color: 'white', fontSize: 20, }}>Faça Login
        </Text>

{/* Caixa de texto: Usuário */}
        <TextInput style={styles.inputName}
          placeholder='Email'
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

      <SecondComponent />

      </ImageBackground>
    </View>
  );
}
