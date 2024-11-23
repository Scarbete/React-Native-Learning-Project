import {View, Text, Button, StyleSheet, StatusBar} from 'react-native'
import {useRouter} from 'expo-router'

const DetailsScreen = () => {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'}/>
            <Text>Details Screen</Text>
            <Button
                title={'Go back'}
                onPress={() => router.back()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default DetailsScreen