import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import React from 'react';

export function Home(): React.JSX.Element {
    function handleParticipantAdd(): void {
        console.log('clique');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022.</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor="#6B6B6B"
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}
