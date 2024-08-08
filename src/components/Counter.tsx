import { View, Text, StyleSheet } from "react-native";
import { useAppSelector } from "../app/hooks";

const Counter = () => {
    const counter = useAppSelector(state => state.counter.value);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Contador</Text>
            <Text style={styles.counter}>{counter}</Text>
        </View>
    )
}

export default Counter; 

const styles = StyleSheet.create({
    
    container: {
        alignItems: 'center'
    },
    
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    counter: {
        fontSize: 62,
        color: 'black',
        fontWeight: 'bold',
    }
})