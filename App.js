/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Sound from "react-native-sound";
import soundsSources from "./sounds";

Sound.setCategory("Playback");

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

function prepareSound(key) {
  return new Sound(key, error => {
    if (error) {
      console.log("failed to load the sound", error);
      return;
    }
    console.log(
      // `duration in seconds: ${this.sine.getDuration()} -
      // number of channels: ${this.sine.getNumberOfChannels()}`
      `success loading ${key}`
    );
  });
}

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.sounds = {};
  }
  componentDidMount() {
    this.sounds = {
      sine1: prepareSound(soundsSources["sine1"]),
      sine2: prepareSound(soundsSources["sine2"]),
      sineGo: prepareSound(soundsSources["sineGo"]),
      snare: prepareSound(soundsSources["snare"]),
      kick: prepareSound(soundsSources["kick"])
    };
  }
  playSound = key => {
    this.sounds[key].play(success => {
      if (success) {
        console.log("successfully finished playing");
      } else {
        console.log("playback failed due to audio decoding errors");
        sine.reset();
      }
    });

    // this.sounds.sine1.release();
  };
  render() {
    return (
      <View style={styles.container}>
        <Icon name="rocket" size={30} color="#900" />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title="Play Sine 1" onPress={() => this.playSound("sine1")} />
        <Button title="Play Sine 2" onPress={() => this.playSound("sine2")} />
        <Button title="Play Sine GO" onPress={() => this.playSound("sineGo")} />
        <Button title="Play Snare" onPress={() => this.playSound("snare")} />
        <Button title="Play Kick" onPress={() => this.playSound("kick")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
