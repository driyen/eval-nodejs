/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import { Linking, StyleSheet, Text, View, Image, Button, SectionList, TextInput } from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text: 'Note' };
  }
 
  _onPublish() {
    console.log('onPublish')


var liste = {
    title: this.state.title,
    content: this.state.content,
    date: this.state.date,
  } ;
// Envoyer au serveur 
//fetch('http://192.168.33.15:3000/users', {
    
//      method: 'POST',
//      credentials: 'same-origin',
//      headers: {
//        'content-Type': 'application/json',
//     },
//      body: JSON.stringify(liste),
//    })
//    .then((response) => response.text())
//    .then((datas) => {
//      console.log(datas);
        // demander d'afficher la réponse 
//        this.props.addliste(liste)
//    })
}

  render() {
    return (

      <View style={styles.container}>
      <View style={styles.liste}>
        <SectionList
  renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
  renderSectionHeader={({section: {title}}) => (
    <Text style={{fontWeight: 'bold'}}>{title}</Text>
  )}
  sections={[
    {title: 'Test de note', data: ['Note de test', 'App mobile']},
    {title: 'Test de note', data: ['App Web', 'Js']},
    
  ]}
  keyExtractor={(item, index) => item + index}
/>
      </View>
      <View>
        <Text style={{paddingTop:15}}>Entrer une note</Text>
        <TextInput
        style={{height: 40, borderColor: 'gold', borderWidth: 1, paddingTop:15}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        autocapitalize= 'none'
      />
      </View> 
      <View style={{paddingTop:15}}>
      <Button 
  onPress={this._onPublish.bind(this)}
  title="Enregistrer"
  color="#841584"
/>
      </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  liste: {
    marginTop:20,
    backgroundColor:'white',
    height:150,
    width:400,
  },
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },

});