import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
    const participants = [
        'Michael Ronald',
        'Diogo Defante',
        'Away Canela Fina',
        'Psiu',
        'Dilera',
        'Skylab',
        'Chorumaçã',
        'Barata Frita',
        'Reporter Doidão',
        'Poderoso Castiga',
    ];

    function handleParticipantAdd() {
        console.log('adicionar participante');
    }

    function handleParticipantRemove() {
        console.log('remover participante');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022.</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Participant name={item} onRemove={handleParticipantRemove} key={item} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de
                        presença.
                    </Text>
                )}
            />
        </View>
    );
}
