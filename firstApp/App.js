import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

export default function App() {

  pressButton = () => {
    alert("Seja bem vindo!")
  }

  const imagem = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMzx4_RHZAx22XUXoq7d1BkTBsRfRwBk6Rw&usqp=CAU' }

  return (
    <View style={styles.container}>
      <ImageBackground source={imagem} style={styles.image} resizeMode='repeat'>

        <Image require style={styles.image2} resizeMode='cover'
        />

        <Text style={{ color: 'white', fontSize: 20, }}>Faça Login
        </Text>


        <TextInput style={styles.inputName}
          placeholder='Usuário'
          inputMode='text'
          placeholderTextColor='black'
        />

        <TextInput style={styles.inputName}
          placeholder='Senha'
          inputMode='numeric'
          secureTextEntry={true}
          placeholderTextColor='black'
        />

        <Button
          style={{ backgroundColor: 'white', width: '50%', }}
          onPress={pressButton}
          title='Entrar!'
          color='black'
        />


      </ImageBackground>
    </View>
  );
}

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
