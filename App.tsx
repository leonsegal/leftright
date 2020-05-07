import React, {useState} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

export default function App() {
    const [result, setResult] = useState('');
    const [isStraight, setIsStraight] = useState(false);

    // animation?
    const handlePress = () => {
        setResult(Math.floor(Math.random() * 2) ? 'left' : 'right');
    }

    return (
        <View style={styles.container}>
            <Button
                onPress={handlePress}
                title="Choose"
                color={'hsl(120, 40%, 30%)'}
            />
            <Text style={{marginVertical: 50}}>{result ? `${result}!` : `Left ${isStraight ? ', straight' : ''} or right?`}</Text>
            <Button
                onPress={() => {
                    setResult('');
                    setIsStraight(!isStraight)
                }}
                title="toggle straight ahead"
                color={'hsl(240, 40%, 30%)'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'hsl(120, 5%, 95%)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
