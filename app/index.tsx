import {useEffect, useState} from 'react'
import {useRouter} from 'expo-router'
import axios from 'axios'

import {
    TouchableOpacity,
    Alert,
    StatusBar,
    View,
    Text,
    FlatList,
    ActivityIndicator,
    RefreshControl
} from 'react-native'

import Post from '@/components/post/post'
import styled from 'styled-components/native'

const LoadingView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: -20px;
`

const BASE_URL = 'https://67420212e4647499008f825c.mockapi.io'

type Post = {
    id: number
    title: string
    createdAt: number
    imageUrl: string
}

const Home = () => {
    const router = useRouter()
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchPosts = () => {
        setIsLoading(true)
        axios.get(`${BASE_URL}/post`)
            .then(({data}) => setPosts(data))
            .catch(error => Alert.alert('Error', error.message))
            .finally(() => setIsLoading(false))
    }

    useEffect(fetchPosts, [])

    if (isLoading) return (
        <LoadingView>
            <ActivityIndicator size={'large'}/>
            <Text>Loading Posts...</Text>
        </LoadingView>
    )
    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
                data={posts}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => router.push('/details')}>
                        <Post
                            title={item.title}
                            createdDate={item.createdAt}
                            imageSource={item.imageUrl}
                        />
                    </TouchableOpacity>
                )}
            />
            <StatusBar barStyle={'dark-content'}/>
        </View>
    )
}

export default Home