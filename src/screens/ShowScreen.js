import React , {useContext} from 'react';
import {Context} from '../context/BlogContext';

import {View , Text , StyleSheet , TouchableOpacity } from 'react-native';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find((blogPost) => blogPost.id === id);
    return <View style = {styles.card}>
        <Text style = {styles.title}>{blogPost.title}</Text>
        <Text style = {styles.content}>{blogPost.content}</Text>
    </View>
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight : (
            <TouchableOpacity onPress = {() => navigation.navigate('Edit' , {id : navigation.getParam('id')})}>
                <EvilIcons name = "pencil" style = {{fontSize : 30 , color : 'black'}}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    title : {
        fontSize : 30,
        alignSelf : 'center',
        fontWeight : 'bold',
        borderBottomWidth : 2,
        paddingTop : 20
    },
    content : {
        fontSize : 22,
        alignSelf : "center",
        marginTop : 30,
        marginBottom : 30
    },
    card : {
        margin : 20,
        borderWidth : 2,
        borderColor : 'gray',
        borderRadius : 30,
    }
});

export default ShowScreen;