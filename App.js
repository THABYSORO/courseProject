import { StatusBar } from 'react-native';
import { StyleSheet, ScrollView,Text,Image, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    
    
    <View style={styles.container}>
       
    <View style={styles.LimPic}>
        <ImageBackground  source={require('./assets/lim.jpg')} 
         style={{marginTop:15,height:150,width:380}}>
        <View style={styles.menu}> 
           <Entypo name="menu" size={30} color="white" />
          <FontAwesome style={{marginStart:315}} name="search" size={30} color="white" />
          </View>
          </ImageBackground>
        
        
    </View>
    <ScrollView>

    <View style={styles.softwareEngeering}>
        <Image style={{height:300,borderRadius:3,width:380,paddingHorizontal:10}} source={require('./assets/software.jpg')}/>
       
    </View>
    
    <View style={styles.software}>
       <Text style={{backgroundColor:'#BDBDBD',fontWeight:'bold',borderRadius:3,marginVertical:10,}}>Bachelor of science (Hons) in software Engeering</Text>
    </View>

    <View style={styles.softwareText}>
      <Text style={{color:'#000',padding:5}}>This programme will direct students to development and use of the multimedia systems.
            students are exposed and trained in the relevant programming skills with use of meltimedia application:</Text>
        <Text style={{color:'#000',padding:5}}>1)Theoretical and Techical skills</Text>
        <Text style={{color:'#000',padding:5}}>2)programming skills</Text>
        <Text style={{color:'#000',padding:5}}>3)Design in Computer programming</Text>
        <Text style={{color:'#000',padding:5}}>students are encouraged to at least have the following grades
              a minimum of five C grades including mathematics,English Language,Physical science
        </Text>
    </View>

    <View style= {styles.broadcastingAndJournalism}>
       <Image style={{height:300,borderRadius:3 ,width:380,paddingHorizontal:10}} source={require('./assets/journalism.png')}/> 
    </View>

    <View style={styles.broadcasting}>
    <Text style={{backgroundColor:'#BDBDBD',fontWeight:'bold',borderRadius:3,marginVertical:10,}}>Bachelor of arts (Hons) in Broadcasting and Journalism</Text>  
    </View>
    <View style={styles.boardcastingText}>
      <Text style={{color:'#000',padding:5}}>This programme demands a combined set of Skills and Knowledge both in print and broadcasting industries.</Text>
      <Text style={{color:'#000',padding:5}}>Students will be able to explore writting to be read by a newscaster,writting compliments,pictures,video and audio leading to a perfect stories.Therefore,students must prepare themselves to write, report and deliever the best contect for print parallel with the emergenceof news media like,Television,radio and social media</Text>
      <Text style={{color:'#000',padding:5}}>The required grades are minimum of five C grades including English Language,English Literature with drama</Text>
    </View>

   
    <View style= {styles.fashionDesign}>
       <Image style={{height:300,borderRadius:3,width:380,paddingHorizontal:10}} source={require('./assets/fashion.jpg')}/>
    </View> 

    <View style={styles.fashion}>
    <Text style={{backgroundColor:'#BDBDBD',fontWeight:'bold',borderRadius:3,marginVertical:10,}}>Bachelor of Arts (Hons) in fashion Design</Text>
    </View> 
    <View style={styles.fashionText}>
      <Text style={{color:'#000',padding:5}}>This programme prepares Students for a successful career as afashion Designer and developer,</Text>
      <Text style={{color:'#000',padding:5}}>Students will be able to eplore and eploit cutting-edge technology and aesthetics for clothing.</Text>
      <Text style={{color:'#000',padding:5}}>It provides the technical,Creative and professional skills</Text>
      <Text style={{color:'#000',padding:5}}>The required grades are at least minimum of C grades in English Language,mathematics,Art and Design and Home Economics</Text>
    </View>
    </ScrollView>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor: '#070707',
    justifyContent:'space-between',
    marginBottom:30,
  },
  LimPic:{
    width:380,
    marginBottom:4
  },
  Pic:{
    width:380, 
  },

  softwareEngeering:{
    height:200,
    width:380,
     
  },
  
  broadcastingAndJournalism:{
    height:200,
    width:380,
  },
  fashionDesign:{
    height:200,
    width:380,   
  },
  fashionText:{
    backgroundColor:'gray',
    borderRadius:3,
    padding:10
  
  },
  softwareText:{
    backgroundColor:'gray',
    borderRadius:3,
    padding:10,
    marginBottom:10, 
  },
  boardcastingText:{
    backgroundColor:'gray',
    borderRadius:3,
    padding:10,
    marginBottom:10,
  },
  menu:{
    flexDirection:'row',
    
  },
  
  });
