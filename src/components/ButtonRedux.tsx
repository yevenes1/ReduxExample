import { TouchableOpacity, Text, StyleSheet  } from "react-native";
import { useAppDispatch } from "../app/hooks";
import { increment, decrement, reset } from "../features/counter/counterSlice";

const ButtonRedux = () => {
    
    const dispatch = useAppDispatch();

    return (
       <>
            <TouchableOpacity 
                onPress={() => dispatch(increment())}
                style={styles.containerincrement}>
                <Text style={styles.text}>Aumentar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => dispatch(decrement ())}
                style={styles.containerdecrement}>
                <Text style={styles.text}>Restar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => dispatch(reset ())}
                style={styles.containerReset}>
                <Text style={styles.text}>Reset</Text>
            </TouchableOpacity>
        </>
    )
}

export default ButtonRedux;

const styles = StyleSheet.create({
    containerincrement: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    containerdecrement: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },

    containerReset: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    
    text: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    } 
})