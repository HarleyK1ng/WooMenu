import React from 'react';
import {Dimensions, View} from 'react-native';
import {Text} from '@ui-kitten/components';
import {TouchableOpacity, Image} from 'react-native';
import {ImageBackground} from 'react-native';
import * as RootNavigation from '../RootNavigation';

let a = Dimensions.get('screen').width;

function CarC(props) {
  let image;
  if (props.data.image !== null) {
    image = props.data.image.sourceUrl;
  } else {
    image = '';
  }
  let b = props.data.name.length;
  return (
    <TouchableOpacity
      style={{
        height: 210,
        flex: 0,
        justifyContent: 'center',
        padding: 2,
        borderWidth: 1,
        borderColor: '#C6C8CE80',
        margin: 4,
        // marginTop: 20,
        marginBottom: 20,
        width: a / 2 - 36,
        elevation: 14,
      }}
      onPress={() => {
        RootNavigation.navigate('CatDetail', {data: props.data});
      }}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: 'center',
          resizeMode: 'cover',
        }}
        source={{uri: image}}>
        <View>
          <View
            style={{
              alignSelf: 'center',
              padding: 24,
              backgroundColor: '#00000090',
              alignContent: 'center',
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 28,
                lineHeight: 32,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {props.data.name}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

function CarC2(props) {
  let image;
  if (props.data.image !== null) {
    // console.error(props.data.image.sourceUrl);
    image = props.data.image.sourceUrl;
  } else {
    image = '';
  }
  let b = props.data.name.length;
  return (
    <TouchableOpacity
      style={{
        height: 210,
        flex: 0,
        justifyContent: 'center',
        padding: 2,
        borderWidth: 1,
        borderColor: '#C6C8CE80',
        margin: 4,
        // marginTop: 20,
        marginBottom: 20,
        width: a / 2 - 36,
        elevation: 14,
      }}
      onPress={() => {
        if (props.data.children.nodes.length === 0) {
          RootNavigation.navigate('CatDetail', {data: props.data});
        } else {
          RootNavigation.navigate('Cate', {data: props});
        }
      }}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: 'center',
          resizeMode: 'cover',
        }}
        source={{uri: image}}>
        <View>
          <View
            style={{
              alignSelf: 'center',
              padding: 24,
              backgroundColor: '#00000090',
              alignContent: 'center',
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 28,
                lineHeight: 32,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {props.data.name}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export {CarC, CarC2};
