import React from 'react'
import { StyleSheet,View, Text , TouchableOpacity } from 'react-native'

import BookList from '../components/BookList'


const BooksScreen = (props) => {


    //books screende var olan propsların görünmesi sağlanır.
    //console.log(props);

    //sadece navigation görmek içinde
    //console.log(props.navigation);




    return (
        //<View>
        //<TouchableOpacity>
               //style={sytles.buttonStyle}
               //onPress = {() =>{
                //console.log("button is pressed");
                //beni bookdetail ekranına yönlendirir.
               // props.navigation.navigate('BookDetail');

            //}}>
                //<Text>Go to BookDetailScreen</Text>
            //</TouchableOpacity>

            //<BookList navigation={props.navigation}></BookList>
        //</View>
        //withNavigation function ile direk Booklist erişmek istiyorum.
        <View>
            <BookList ></BookList>
        </View>
    )
}

const sytles=StyleSheet.create({
    buttonStyle:{
        backgroundColor:"white",
        borderRadius:4,
        padding:5,
        marginHorizontal:7
    }
});

export default BooksScreen
