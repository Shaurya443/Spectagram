import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";


import { TouchableOpacity } from "react-native-gesture-handler";



export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakerColor: "gray",
      speakerIcon: "volume-high-outline"
    };
  }

  componentDidMount(){
    this.initiateTTS
  }

async initiateTTS(title,author,caption){
  const current_color=this.state.speakerColor
  this.setState({
    speakerColor:current_color==="gray"?"#ee8249":"gray"
  })
  if(current_color==="gray"){
    Speech.speak(`${title} by ${author}`)
    Speech.speak("the moral of the story is ")
    Speech.speak(caption)
  }
  else{
    Speech.stop()
  }
}
    render(){
      return(
<View style={styles.appTitleTextContainer}>
 <Text style={styles.appTitleText}>Spectagram {this.props.route.params.post.title}</Text>
<View style={styles.cardContainer}>
<View style={styles.authorContainer}>
<View style={styles.authorImageContainer}>
<Image
   source={require("../assets/profile_img.png")}
   style={styles.profileImage}
></Image>
</View>
<View style={styles.authorNameContainer}>
  <Text style={styles.authorNameText}>{this.props.route.params.post.author}</Text>
  </View>
  </View>
  <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
  <View style={styles.captionContainer}>
      <Text style={styles.captionText}>
          {this.props.route.params.post.caption}
      </Text>
  </View>
  <View style={styles.actionContainer}>
      <View style={styles.likeButton}>
          <Ionicons name ={"heart"} size={RFValue(30)} color={"white"}/>
          <Text style={styles.likeText}>12k</Text>
      </View>
  </View>
</View>
</View>
      )
    }

}
const styles = StyleSheet.create({
  
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    authorImageContainer: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(15)
    },
    authorContainer: {
      paddingLeft: RFValue(10),
      justifyContent: "center"
    },
    authorNameContainer: {
      fontSize: RFValue(25),
      color: "white"
    },
    authorNameText: {
      fontSize: RFValue(28),
     justifyContent:"center",
     alignSelf:"center",
      color: "white"
    },
    postImage: {
      resizeMode: "contain",
      width: "100%",
      alignSelf: "center",
      height: RFValue(450)
    },
    captionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
    },
    likeText: {
      color: "white",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    },
    captionText:{
      color:"white",
      fontSize: RFValue(15)
    },
    actionContainer:{
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    profileImage:{
        justifyContent:"center",
        height:RFValue(30),
        width:RFValue(30),
        alignSelf:"flex-start"
    },
    appTitle:{
      flex:0.07,
      flexDirection:"row"
    },
    appTitleTextContainer:{
      flex:1.0,
      justifyContent:"center"
    },
});
