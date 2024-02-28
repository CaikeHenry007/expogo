import { Text, View, StyleSheet } from 'react-native';

export default function SecondComponent() {

return (
<View style={styles.container}>
<Text style={{color: 'red', fontSize: 30,}}>Componente</Text>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
justifyContent: 'center',
alignItems: 'center',
}
});