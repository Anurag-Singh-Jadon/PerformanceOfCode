import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
const data = [
  require('../../Car.png'),
  require('../../Cycle.png'),
  require('../../Car.png'),
  require('../../Cycle.png'),
  require('../../Car.png'),
  require('../../Cycle.png'),
];
const {height, width} = Dimensions.get('window');

const ImageGalary = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const bottomRef = useRef();
  const topRef = useRef();
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        ref={topRef}
        onScroll={e=>{
            const index=(e.nativeEvent.contentOffset.x/width).toFixed(0)
            setSelectedIndex(index)
            bottomRef.current.scrollToIndex({animated: true, index: index});
          }}
        pagingEnabled
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <Image source={item} style={{width: width, height: height}} />;
        }}
      />
      <View style={{position: 'absolute', bottom: 20}}>
        <FlatList
          data={data}
          pagingEnabled
          ref={bottomRef}
          initialScrollIndex={selectedIndex}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: 90,
                  height: 90,
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
                onPress={() => {
                  setSelectedIndex(index);
                  topRef.current.scrollToIndex({animated: true, index: index});
                }}>
                <Image
                  source={item}
                  style={{
                    width: selectedIndex == index ? 90 : 50,
                    height: selectedIndex == index ? 90 : 50,
                    borderRadius: selectedIndex == index ? 45 : 10,
                    borderWidth:selectedIndex==index?1:0,
                    borderColor:'#fff'
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ImageGalary;

const styles = StyleSheet.create({});
