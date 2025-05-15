import { View, Text,StyleSheet } from "react-native"
import { colors } from "@/styles/colors"
import { red } from "react-native-reanimated/lib/typescript/Colors";

 export const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderColor:  colors.green[300],
        borderWidth: 10,
    },
    
    title: {
        color: colors.green[300],
        fontSize: 50,
    
    },
    
    subTite: {
        color:  colors.green[300],
        fontSize: 22, 
        fontFamily: "Times New Roman"
       
    },
    
    contP: {
        color:  colors.green[300],
        fontSize: 10,
    }
})

