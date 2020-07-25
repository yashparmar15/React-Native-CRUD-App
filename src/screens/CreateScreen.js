import React , {useContext, useState} from 'react';
import {Context} from '../context/BlogContext';

import {View , Text , StyleSheet , TextInput , Button} from 'react-native';

const CreateScreen = ({navigation}) => {
    const [title , setTitle]  = useState('');
    const [content , setContent] = useState('');
    const {addBlogPost} = useContext(Context);
    return <View>
        <Text style = {styles.label}>Enter Title :</Text>
        <TextInput style = {styles.TextInput} value = {title} onChangeText = {(text) => setTitle(text)}/>
        <Text style = {styles.label}>Enter Content :</Text>
        <TextInput style = {styles.TextInput} value = {content} onChangeText = {(text) => setContent(text)} />
        <Button title = "Add Blog Post" onPress = {() => {
            addBlogPost(title,content);
            navigation.navigate('Index');
        }} />
    </View>
};

const styles = StyleSheet.create({
    TextInput : {
        fontSize : 18,
        borderWidth : 1,
        borderColor : 'black',
        padding : 5,
        margin : 5,
        borderRadius : 10
    },
    label : {
        fontSize : 20,
        marginBottom : 5,
        margin : 5,
        fontWeight : 'bold'
    }
});

export default CreateScreen;