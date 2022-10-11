import React, { Component } from 'react';
import { Text, View,StyleSheet,Platform,StatusBar,Image,SafeAreaView,TouchableOpacity } from 'react-native';
import {FlatList} from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';
  let posts= require("./temp_posts.json")

  import PostCard from './PostCard'

export default class Feed extends Component {

      renderItem=({item:post})=>{
        return <PostCard post={post} navigation={this.props.navigation}/>
      }

      keyExtractor=(item,index)=>index.toString()

      render() {
          return (
            <TouchableOpacity
            style={styles.container}
            onPress={() =>
              this.props.navigation.navigate("PostScreen", {
                post: this.props.post
              })
            }
          >
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                  <Image
                    source={require("../assets/logo.png")}
                    style={styles.iconImage}
                  ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                  <Text style={styles.appTitleText}>Spectagram</Text>
                </View>
              </View>
              <View style={styles.cardContainer}>
                <FlatList
                  keyExtractor={this.keyExtractor}
                  data={posts}
                  renderItem={this.renderItem}
                />
              </View>
            </View>
            </TouchableOpacity>
          );
        }
      }
    
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  },
  droidSafeArea:{
    marginTop:Platform.OS==="android"?StatusBar.currentHeight:RFValue(35)
  },
  appTitle:{
    flex:0.07,
    flexDirection:"row"
  },
  appIcon:{
    flex:0.2,
    justifyContent:"center",
    alignItems:"center"
  },
  appTitleTextContainer:{
    flex:0.8,
    justifyContent:"center"
  },
  appTitleText:{
    color:"white",
    fontSize:RFValue(25)
  },
  cardContainer:{
    flex:0.85
  },
  iconImage:{
    width:"100%",
    height:"100%",
    resizeMode:"contain"
  }
})