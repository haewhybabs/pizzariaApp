import { createAppContainer } from 'react-navigation';
import React,{Component} from 'react';
import { SwitchNavigator } from './src/navigation/SwitchNavigator';

const AppNav = createAppContainer(SwitchNavigator);

export default class App extends Component {

    constructor(props){
        super(props);
        this.state={}
    }

   

    render(){
        return (
            <AppNav />
        )
    }


}