import { View, Text,StyleSheet } from "react-native"
import { styles } from "./styles"

export default function Index () {
    return (
       <View style={styles.container}> 
       <text style={{ color: "blue", fontSize: 22}}>óla mundo!</text>
       <Text style={styles.title} >Medley</Text>
       <Text style={styles.subTite} >Endereço</Text>
       <Text style={styles.contP} >Data de nascimento</Text>
       </View>
    );
    
} 


  