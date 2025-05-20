import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function screen2() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  return (
    <View style={styles.container}>
      <text style={{color: 'white', marginBottom: 10}}>Modo Escuro</text>
      <TouchableOpacity onPress={() => router.push('/')}>
        <Image source={require('../../assets/images/tipo_escuro.jpg')}
        style={{width: 120, height: 120}}
        />
        </TouchableOpacity>
        <text style={{color: 'white', marginTop: 30}}>Clique na imagem para mudar o modo</text>
</View>
 );
}
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // fundo preto
    fontFamily: 'Montserrat_700Bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 