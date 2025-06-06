import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function index() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  
  return (
    <View style={styles.container}>
       <text style={{color: 'black', marginBottom: 10}}>Modo Claro</text>
      <TouchableOpacity onPress={() => router.push('./screen2')}>
        <Image source={require('../../assets/images/tipo_claro.jpg')}
        style={{width: 120, height: 120}}
        />
        </TouchableOpacity>
        <text style={{marginTop: 10}}>Clique na imagem para mudar o modo</text>
</View>
  );
}
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // fundo branco
    fontFamily: 'Montserrat_700Bold',
    justifyContent: 'center',
    alignItems: 'center',
  }
});