import styled from 'styled-components/native'

const PostView = styled.View`
    flex-direction: row;
    padding: 15px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
    gap: 6px;
`

const PostImage = styled.Image`
    width: 130px;
    height: 100px;
    border-radius: 10px;
`

const PostDetails = styled.View`
    justify-content: center;
    flex: 1;
`

const PostTitle = styled.Text`
    font-size: 16px;
    font-weight: 500;
`

const PostDate = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 2px;
`

type Props = {
    title: string
    imageSource: string
    createdDate: number
}

const Post = (props: Props) => {

    const {
        title,
        imageSource,
        createdDate,
    } = props

    return (
        <PostView>
            <PostImage source={{ uri: imageSource }} />
            <PostDetails>
                <PostTitle>{title}</PostTitle>
                <PostDate>{createdDate}</PostDate>
            </PostDetails>
        </PostView>
    )
}

export default Post