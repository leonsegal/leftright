import React, {useState, useEffect} from 'react';
import {StyleSheet, Button, Text, View, Image} from 'react-native';

export default function App() {
    const [direction, setDirection] = useState('');
    const [title, setTitle] = useState('Left...or right?');
    const timeout = 2000;

    useEffect(() => {
        if (direction) {
            const timer = setTimeout(() => {
                setDirection('');
                setTitle('Left...or right?')
            }, timeout);

            return () => clearTimeout(timer);
        }
    }, [direction]);

    const handlePress = () => {
        setTitle('');
        setDirection(
            Math.floor(Math.random() * 2)
                ? 'left'
                : 'right'
        );
    }

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <Text style={{marginVertical: 30, fontWeight: 400, fontSize: 20}}>{title}</Text>
                {direction === 'left'
                    ? <Image style={{width: 80, height: 40, marginVertical: 30}} source={require('./assets/left.png')}/>
                    : null}

                {direction === 'right'
                    ?
                    <Image style={{width: 80, height: 40, marginVertical: 30}} source={require('./assets/right.png')}/>
                    : null}
            </View>
            <Button
                onPress={handlePress}
                title="Choose"
                color={'hsl(120, 40%, 30%)'}
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
