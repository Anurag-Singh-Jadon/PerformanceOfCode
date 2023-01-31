import React from 'react';
import {Dimensions, FlatList, View, Image, Animated} from 'react-native';

const data = [
  require('../../Car.png'),
  require('../../Cycle.png'),
  require('../../Car.png'),
  require('../../Cycle.png'),
  require('../../Car.png'),
  require('../../Cycle.png'),
];
const {width, height} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;
const ImageSlider = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
 
  return (
    <View style={{flex: 1}}>
      <Animated.FlatList
        data={data}
        horizontal={true}
        keyExtractor={({item, index}) => index}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        pagingEnabled
        renderItem={({item, index}) => {
         const inputRange = [(index - 1)*width,index*width,(index + 1)*width]
         const translateY = scrollX.interpolate({
            inputRange,
            outputRange:[-width*0.7,0,width*0.7]
         })
          return (
            <View
              style={{
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  shadowOpacity: 20,
                  shadowRadius: 18,
                  shadowOffset: {x: 0, y: 0},
                  shadowColor: '#000',
                  borderWidth: 20,
                  borderColor: '#fff',
                }}>
                <View
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    overflow: 'hidden',
                    alignItems: 'center',
                  }}>
                  <Animated.Image
                    source={item}
                    style={{width: ITEM_WIDTH, height: ITEM_HEIGHT,transform:[{translateY: translateY}]}}
                  
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ImageSlider;
