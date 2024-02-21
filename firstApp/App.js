import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
return (
<View style={styles.container}>
<View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
</View>
<View style={styles.secondaryContainer}>
<Text style={{ color: 'blue',  fontSize: 30, fontWeight: 'bold', textAlign: 'right'}}>Caike Henry Firmino Felipe</Text>
<Text style={{ color: 'black',fontSize: 25, fontStyle: 'italic', borderBottomColor: 'red', borderBottomWidth: 1, width: 180, textAlign: 'left'}}>Computador 6</Text>
<Text style={{ color: 'black', fontSize: 20, backgroundColor: 'pink', textAlign: 'center',}}>Sala 7</Text>
<Text style={{ color: 'black', fontSize: 20, backgroundColor: '#8fffbc', borderBottomColor: 'blue', borderBottomWidth: 1, textAlign: 'center'}}>Outro texto</Text>
</View>
<View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
</View>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
},
secondaryContainer: {
flex: 1,
backgroundColor: '#fff',
justifyContent: 'center'
},
});