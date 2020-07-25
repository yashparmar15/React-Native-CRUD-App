import React , {useContext} from 'react';
import {Context} from '../context/BlogContext';

import {View , Text , StyleSheet , TouchableOpacity} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find((blogPost) => blogPost.id === id);
    console.log(blogPost);
    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
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

});

export default ShowScreen;