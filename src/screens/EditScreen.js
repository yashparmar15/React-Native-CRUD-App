import React , {useState , useContext} from 'react';
import {View , Text , StyleSheet , TextInput , Button} from 'react-native';
import {Context} from '../context/BlogContext';

const EditScreen = ({navigation}) => {
    const {state , editBlogPost} = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
    console.log(blogPost)
    const [title , setTitle] = useState(blogPost.title);
    const [content , setContent] = useState(blogPost.content);

    return <View style = {styles.container}>
        <Text style = {styles.label}>Edit Title :</Text>
        <TextInput style = {styles.TextInput} value = {title} onChangeText = {newTitle => setTitle(newTitle)} />
        <Text style = {styles.label}>Edit Content :</Text>
        <TextInput style = {styles.TextInput} value = {content} onChangeText = {newTitle => setContent(newTitle)} />
        <Button title = "Save Blog Post" onPress = {() => {
            editBlogPost(navigation.getParam('id'),title,content);
            navigation.navigate('Show');
        }} />
    </View>
}

const styles = StyleSheet.create({
    TextInput : {
        fontSize : 18,
        borderWidth : 1,
        borderColor : 'black',
        paddingVertical : 5,
        paddingHorizontal : 15,
        margin : 5,
        borderRadius : 10,

        
    },
    label : {
        fontSize : 20,
        marginBottom : 5,
        margin : 5,
        fontWeight : 'bold',
        marginTop : 20
    },
    container : {
        marginHorizontal : 20,
        borderColor : 'gray',
        borderWidth : 3,
        marginVertical : 30,
        paddingBottom : 40,
        paddingHorizontal : 10,
        borderRadius : 20

    }
});

export default EditScreen;