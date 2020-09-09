import { Dimensions, StyleSheet } from 'react-native';

import {primaryColor,primaryWhite, primaryColorRed,primaryBlack} from '../../constants/styles';
import { verticalScale, moderateScale } from '../../constants/functions';

const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
    Cover: {
        flex: 1, 
        
    },
    Container:{
        margin:15
    },
    homeHeader:{
        backgroundColor:primaryColor,
        width:'100%',
        height:200
    },
    HeaderText:{
        fontWeight:'bold',
        fontSize:24,
        marginTop:5,
        color:'#404040'
    },
    ThumbNail:{
        width:40, 
        height:40,
        borderRadius:40/2,
    },
    ThumbNailWrapper:{
        marginLeft:'auto'
    },
    HeaderWrapper:{
        flexDirection:'row',
        width:'100%', 
    },
    SubHeaderText:
    {
        color:'#A8A8A8',
        fontWeight:'700'
    },
    CardWrapper:{
        height:120,
        marginTop:10,
        width:'100%',
        
        borderStyle:'solid',
        borderLeftWidth:6,
        borderRadius:5
    },
    CardContainer:{
        marginTop:20
    },
    DeliveryCardContainer:{
        margin:20
    },
    DeliveryCardHeader:{
        flexDirection:'row',
        width:'100%'
    },
    DeliveryTextHeader:{
        fontSize:20,
        fontWeight:'700',

    },
    DeliveryIcon:{
        height:60,
        width:60
    },
    DeliveryIconWrapper:{
        marginLeft:'auto'
    },
    DeliverySubText:{
        fontSize:18,
        color:'#BEBEBE'
    },
    FranchiseSubText:{
        fontSize:13,
        letterSpacing:2,
        color:'#A8A8A8'
    },
    FranchiseIcon:{
        height:80,
        width:80
    },
    OrderProceed:{
        borderRadius: 5,
        borderColor: primaryColor,
        borderStyle: 'solid',
        borderWidth: 2,
        width: '80%',
        height: 50,
        marginTop: 10,
        alignSelf:'center',
        marginTop:30
    },
    OrderProceedContainer:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    OrderProceedText:{
        fontSize:15
    }

})