import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { SafeAreaView, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

export default function TabTwoScreen({ navigation } : {navigation:any}) {

 // Dummy Datas

 const initialCurrentLocation = {
  streetName: "Kuching",
  gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922
  }
}



const restaurantData = [
  {
      id: 1,
      name: "B00G's Burgers",
      rating: 4.8,
      photo: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg',
      duration: "30 - 40 mins",
      menuItem1: 
          {
              menuId: 1,
              name: "B00G's Beautiful Burger",
              //photo: images.crispy_chicken_burger,
              description: "Burger with a 1/2 pound patty, bacon, and cheese",
              calories: 1200,
              price: 11
          },
      menuItem2:
          {
              menuId: 2,
              name: "Extra Crispy Chicken Wrap",
              //photo: images.honey_mustard_chicken_burger,
              description: "Crispy Chicken Wrap with Honey Mustard Coleslaw",
              calories: 950,
              price: 14
          },
       menuItem3:
          {
              menuId: 3,
              name: "Not Your AVG Fries",
              //photo: images.baked_fries,
              description: "Crispy Baked French Fries",
              calories: 495,
              price: 6
          }
      
  },
  {
      id: 2,
      name: "Pheonix Pizza",
      rating: 4.1,
      photo: 'https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg',
      duration: "15 - 25 min",
      menuItem1: 
          {
              menuId: 4,
              name: "Hawaiian Pizza",
              //photo: images.hawaiian_pizza,
              description: "Canadian bacon, homemade pizza crust, pizza sauce",
              calories: 2250,
              price: 22
          },
      menuItem2:
          {
              menuId: 5,
              name: "Garbagio Pizza",
              //photo: images.pizza,
              description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
              calories: 2350,
              price: 29
          },
      menuItem3:
          {
              menuId: 6,
              name: "Veggie Pasta",
              //photo: images.tomato_pasta,
              description: "Pasta with fresh tomatoes",
              calories: 600,
              price: 18
          },
  },
  {
      id: 3,
      name: "Hungry Hungry Hotdogs",
      rating: 3.7,
      photo: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2020_27/1586837/hotdogs-te-main-200702.jpg',
      duration: "15 - 30 min",
      menuItem1: 
          {
              menuId: 8,
              name: "Chicago Style Hot Dog",
              //photo: images.chicago_hot_dog,
              description: "Fresh tomatoes, all beef hot dogs",
              calories: 300,
              price: 5
          },
      menuItem2:
          {
              menuId: 7,
              name: "Salad Of Your Dreams",
              //photo: images.salad,
              description: "Lettuce + a whole lotta stuff",
              calories: 1400,
              price: 19
          },
      menuItem3:
          {
              menuId: 7,
              name: "Tater Tots With Cheese",
              //photo: images.salad,
              description: "Tots, Cheese, Signiture sauce",
              calories: 1400,
              price: 19
          }
  },
  {
      id: 4,
      name: "Signal Sushi",
      rating: 4.3,
      photo: 'https://cdn.shopify.com/s/files/1/0305/5921/articles/maki-nigiri-sushi-web_2100x.jpg?v=1616098701',
      duration: "10 - 15 min",     
      menuItem1: 
          {
              menuId: 9,
              name: "Sushi Galore",
              //photo: images.sushi,
              description: "Fresh salmon, sushi rice, fresh avocado, unlimited wasabi",
              calories: 950,
              price: 40
          },
      menuItem2:
          {
              menuId: 7,
              name: "Sampler of the most popular items",
              //photo: images.salad,
              description: "A taste of the best - from the best",
              calories: 1400,
              price: 19
          },
      menuItem3:
          {
              menuId: 7,
              name: "Fried Rice With Chicken or Shrimp",
              //photo: images.salad,
              description: "The best fried rice out there",
              calories: 1400,
              price: 19
          }  
  },
  {
      id: 5,
      name: "Clicker's Cuisine",
      rating: 4.5,
      photo: 'https://www.washingtonpost.com/news/voraciously/wp-content/uploads/sites/68/2020/01/v-rr-lunarnewyear_01_leadweb.jpg',
      duration: "25 - 40 min",
      menuItem1: 
          {
              menuId: 10,
              name: "Siracha Noodles",
              //photo: images.kolo_mee,
              description: "Noodles - extra spicy",
              calories: 1200,
              price: 8
          },
      menuItem2:
          {
              menuId: 11,
              name: "Alfredo Romano",
              //photo: images.sarawak_laksa,
              description: "Noodles - 2 cheeses with special sauce",
              calories: 950,
              price: 18
          },
      menuItem3:
          {
              menuId: 13,
              name: "Curry Time Best Time",
              //photo: images.nasi_briyani_mutton,
              description: "Our signiture dish with top tier curry",
              calories: 1400,
              price: 18
          },
  },
  {

      id: 6,
      name: "Dan's Delicious Desserts",
      rating: 4.6,
      photo: 'https://c.ndtvimg.com/2020-04/chd4rs3g_dessert_625x300_07_April_20.jpg',
      duration: "35 - 55 min",
      menuItem1: 
          {
              menuId: 12,
              name: "Bannana Split",
              //photo: images.teh_c_peng,
              description: "Split with EVERYTHING, Split with NOBODY",
              calories: 2100,
              price: 17
          },
      menuItem2:
          {
              menuId: 13,
              name: "Triple Scooper",
              //photo: images.ice_kacang,
              description: "3 scoops of any ice cream flavor",
              calories: 500,
              price: 8
          },
      menuItem3:
          {
              menuId: 14,
              name: "Ice cream Cone",
              //photo: images.kek_lapis,
              description: "2 scoops and an OG cone",
              calories: 1300,
              price: 10
          }
  }
]


const [restaurants, setRestaurants] = React.useState(restaurantData)



  function renderRestaurantList() {

    const renderItem = ({item} : {item:any}) => (
     <TouchableOpacity>
        <View>
            <Text style={{fontWeight: 'bold'}}>Name:</Text>
            <Text style={{paddingLeft: 20}}>{item.name}</Text>         
        </View>
        <View>
            <Text style={{fontWeight: 'bold'}}>Rating:</Text> 
            <Text style={{paddingLeft: 20}}> {item.rating} / 5 </Text>       
        </View>
        <View style={{ marginBottom: 5}}>
            <Text style={{fontWeight: 'bold'}}>ETA:</Text>    
            <Text style={{paddingLeft: 20}}>{item.duration}</Text>  
            <Image 
                style={{ width: 200, height:75}}
                resizeMode='center'
                source={item.photo}
       ></Image>     
        </View>
        
        <Button title = "See Menu" 
        onPress={() => navigation.navigate("Order", {
          item
        })}
      >   
      </Button>
      <Text>--------------------------------------</Text>
     </TouchableOpacity>
    )

    return (
      <FlatList
        data={restaurants}
        renderItem={renderItem}
      />
    )
  };


  return (
    <SafeAreaView style={styles.container}>
      {renderRestaurantList()}
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#65ff75',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#0199ff",
  }
});
