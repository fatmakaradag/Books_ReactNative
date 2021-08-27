import { createAppContainer,createSwitchNavigator } from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import BooksScreen from './src/screens/BooksScreen';


import BookDetailScreen from './src/screens/BookDetailScreen';
//otomatik olarak header yapısını oluşturur.

const navigator = createStackNavigator({

    Books: BooksScreen,
    BookDetail: BookDetailScreen
},
{
    initialRouteName : 'Books',//ilk ekranda görünmesi istenilen ekrandır.
    defaultNavigations : {
        title : 'Books'
    }
}
);
//bir obje tanımlanır ve ekrana render edilir.

export default createAppContainer(navigator);

