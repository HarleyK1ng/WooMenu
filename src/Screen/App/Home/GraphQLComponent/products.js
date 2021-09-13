import React, {Component} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {productsSorted} from '../../../../Graphql/Actions/index';
import {Text} from '@ui-kitten/components';

const GetPop = props => {
  var {height, width} = Dimensions.get('window');
  const params = OrderBY(props.orderby);
  const {data, loading, error} = useQuery(productsSorted(params.filter));
  if (loading) {
    return <View />;
  }
  if (error) {
    return <Text>ERROR</Text>;
  }
  return (
    <View style={{marginVertical: 20}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text
            style={{
              marginLeft: 20,

              fontSize: 18,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            {params.title}
          </Text>
        </View>

        <View style={{flexDirection: 'row-reverse'}}>
          <Text
            style={{
              marginRight: 20,
              fontSize: 13,
              fontFamily: 'Montserrat-SemiBold',
            }}
            onPress={() =>
              props.navigation.navigate('Detail', {orderby: props.orderby})
            }>
            больше
          </Text>
        </View>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={data.products.nodes}
        renderItem={props.render}
      />
    </View>
  );
};
function OrderBY(order) {
  switch (order) {
    case 0:
      return {title: 'Все меню 🎉', filter: '{field: PARENT,order: DESC }'};
      // eslint-disable-next-line no-unreachable
      break;
    default:
      return {title: 'Все меню 🎉', filter: '{field: PARENT,order: DESC }'};
      // eslint-disable-next-line no-unreachable
      break;
  }
}
export default GetPop;
