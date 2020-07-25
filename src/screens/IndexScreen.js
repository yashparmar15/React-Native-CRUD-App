import React , { useContext } from 'react';
import {View , Text , StyleSheet , FlatList , Button , TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
const IndexScreen = ({navigation}) => {
    const {state , addBlogPost , deleteBlogPost} = useContext(Context);


    return <View style = {styles.container}>
        <Text style = {styles.Users}>All Posts</Text>
        <FlatList 
            style = {styles.FlatList}
            data = {state}
            keyExtractor = {(blogPost) => blogPost.title}
            renderItem = {({item}) => {
                return (
                    <TouchableOpacity onPress = {() => navigation.navigate('Show' , {id : item.id})}>
                        <View style = {styles.row}>
                            <Text style = {styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress = {() => deleteBlogPost(item.id)}>
                                <Feather style = {styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
    </View>
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight : <TouchableOpacity onPress = {() => navigation.navigate('Create')}>
                <Feather name ="plus" style = {{fontSize : 30 , color : 'black' }} />
            </TouchableOpacity>
    };
}

const styles = StyleSheet.create ({
    row : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : 20,
        padding : 20,
        borderWidth : 2,
        borderRadius : 20,
        borderColor : 'gray',
        marginBottom : 10
    },
    title : {
        fontSize : 18,
        fontWeight : 'bold'
    },
    icon : {
        fontSize : 24
    },
    FlatList : {
        marginTop : 20,
        marginHorizontal : 10
    },
    Users : {
        marginTop : 20,
        fontWeight : 'bold',
        fontSize : 30,
        alignSelf : 'center',
    },
    container : {
        flex : 1,
    }
});

export default IndexScreen;