import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
let limit = 10;
//If we want to increase our limit
let loadMore = true
const FlatListPerformance = () => {
  //const[data,setData] = useState([{},{},{}])
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const[showLoader,setShowLoader] = useState(false)
  useEffect(() => {
    fetchData();
  });

  const fetchData = () => {
    let query = `?skip=${skip}&limit=${limit}`
    fetch('https://dummyjson.com/products' + query)
      
      .then(res => res.json())
      .then(res => {
        console.log('api response===>', res);
        if(res.products.length == 0){
            loadMore = false
        }
        //setData(res.products);
        setData([...data,...res.products])
        setSkip(skip + 10)
        setShowLoader(false)
      })
      .catch(error => {
        console.log('error raised during fetch products', error);
      });
  };

  console.log("products data",data)
  const renderItem = useCallback(
    ({item}) => {
      return (
        <View style={styles.flatStyle}>
          <Image source={{uri: item.thumbnail}} style={styles.imgStyle} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: hp('3%'),
              marginHorizontal: wp('2%'),
            }}>
            <Text>{item.brand}</Text>
            <Text>{item.price}</Text>
          </View>
          <Text style={{marginLeft: wp('3%')}}>{item.description}</Text>
        </View>
      );
    },
    [data],
  );

  const itemSeparatorComponent = useCallback(() => {
    return <View style={{height: 20}} />;
  }, [data]);

  const keyExtractor = useCallback(item => `${item.id}`);

  const onEndReached = () => {
    if(loadMore){
        setShowLoader(true)
        fetchData()
    }
  };

  const listFooterComponent = useCallback(()=>{
     return(
        <ActivityIndicator size='large' style={{marginVertical:16}}/>
     )
  },[data])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={itemSeparatorComponent}
          onEndReached={onEndReached}
          ListFooterComponent={showLoader && listFooterComponent}
        />
      </View>
    </SafeAreaView>
  );
};

export default FlatListPerformance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //paddingHorizontal:wp('2%')
  },
  imgStyle: {
    width: wp('90%'),
    height: hp('35%'),
    borderRadius: hp('2%'),
    alignSelf: 'center',
  },
  flatStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    backgroundColor: 'white',
    borderRadius: hp('2%'),
  },
});
