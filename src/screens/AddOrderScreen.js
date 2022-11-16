import React,{Fragment} from 'react'

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableHighlight,
    TextInput,
    Alert,
    SafeAreaView,
    FlastList
  } from 'react-native';

import { Modal,Portal} from 'react-native-paper';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchableDropdown from 'react-native-searchable-dropdown';
import DatePicker from 'react-native-datepicker';


const AddOrderScreen = ({navigation}) => {

    const [modalVisible,setModalVisible] = React.useState(false);
    const [customerVisible,setCustomerVisible] = React.useState(false);
    const [date,setDate] = React.useState({
        date: new Date()
    })
    const [customer,setCustomer] = React.useState({
      name: '',
      address:'',
      landmark:'',
      contactnumber: ''
    })
  
    const [itemId,setId] = React.useState(0);
    const [orderItems,setOrderItems] = React.useState({
      id: 0,
      qty: 0,
      unit: '',
      item: '',
      price: 0.00,
    })
    const [subTotal,setSubtotal] = React.useState(0)
    const [deliveryFee,setDeliveryFee] = React.useState(0);
    var items = [
        {
          id: 1,
          name: 'John Louise Gwapo',
          contactnumber: '09123456789',
          address: 'Brgy. Mambaling',
          landmark: 'At the back of tita gwapa',
        },
        {
          id: 2,
          name: 'Kentotoy Velasco',
          contactnumber: '09123456789',
          address: 'Brgy. Mambaling',
          landmark: 'At the back of tita gwapa',
        },
        {
          id: 3,
          name: 'Pms Code',
          contactnumber: '09123456789',
          address: 'Brgy. Mambaling',
          landmark: 'At the back of tita gwapa',
        },
        {
          id: 4,
          name: 'Pms Lablab',
          contactnumber: '09123456789',
          address: 'Brgy. Mambaling',
          landmark: 'At the back of tita gwapa',
        },
      
      ];

      const handleCustomerConfirmation = () => {
        setModalVisible(!modalVisible);
        setCustomerVisible(!customerVisible)
      }
      const [orders,setOrders] = React.useState([]);
      const onHandleAddItem = () => {
        setId(itemId + 1);

        setOrderItems({...orderItems,id: itemId})

        setOrders([
          ...orders,orderItems
        ])
        setOrderItems({
          ...orderItems,
          qty: 0,
          unit: '',
          item: '',
          price: 0.00,
        })
      }
      const resetOrder = () => {
        setOrderItems({
          ...orderItems,
          qty: 0,
          unit: '',
          item: '',
          price: 0.00,
        })
        setOrders([])
      }

      const totalOrder =() => { 
        var total = 0;
        orders.map((order) => {
          total = total +( parseInt(order.price) * parseInt(order.qty))
        })

        return total
      }

      const OrderItemList = ({item}) => {

        // console.log(item)
        return(
          
          <View style={[styles.row,{paddingBottom: 10}]}>
            <View style={{width: 40}}>
                <Text>{item.qty}</Text>
            </View>
            <View style={{width: 50}}>
                <Text>{item.unit}</Text>
            </View>
            <View style={{width: 130}}>
                <Text>{item.item}</Text>
            </View>
            <View style={{width: 60}}>
                <Text>{item.price}</Text>
            </View>
            <View style={{width: 60}}>
                <Text>{(parseInt(item.qty) * parseInt(item.price))}</Text>
            </View>
            <View style={{alignItems:'center',width: '95%',height:1,backgroundColor:'#219653',position:'absolute',bottom:0}}></View>
          </View>
        )

      }

    return(
        
        <ScrollView>
        
            <View style={styles.container} >
            <Portal>
                <Modal
                    visible={modalVisible} onDismiss={() => {setModalVisible(!modalVisible)}}
                >

                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Icon name="account-plus" size={30} style={{color: '#219653'}}/>
                        <Text style={styles.modalText}>Add Customer</Text>
                        {/* <TextInput style={{width: '100%', height: 30,marginBottom:10}}/>
                        <Text></Text> */}
                        <Fragment>
                            <SearchableDropdown
                                multi={true}
                                // selectedItems={data.selectedItems}
                                onItemSelect={(item) => {
                                  setCustomer({
                                    ...customer,
                                    name: item.name,
                                    contactnumber: item.contactnumber,
                                    landmark: item.landmark,
                                    address: item.address
                                  })
                                }}
                                containerStyle={{ width: '100%' }}
                                onRemoveItem={(item, index) => {
                                const items = data.selectedItems.filter((sitem) => sitem.id !== item.id);
                                setData({ ...data, selectedItems: items });
                                }}
                                itemStyle={{
                                padding: 10,
                                marginTop: 2,
                                backgroundColor: '#ddd',
                                borderColor: '#bbb',
                                borderWidth: 1,
                                borderRadius: 5,
                                width: 300
                                }}
                                itemTextStyle={{ color: '#222' }}
                                itemsContainerStyle={{ maxHeight: 140 }}
                                items={items}
                                defaultIndex={2}
                                chip={true}
                                resetValue={false}
                                textInputProps={
                                {
                                    placeholder: "Search Customer",
                                    underlineColorAndroid: "transparent",
                                    style: {
                                        padding: 12,
                                        borderWidth: 1,
                                        borderColor: '#ccc',
                                        borderRadius: 5,
                                    },
                                    // onTextChange: text => alert(text)
                                }
                                }
                                listProps={
                                {
                                    nestedScrollEnabled: true,
                                }
                                }
                            />
                        </Fragment>
                       {!!customer.name && !!customer.contactnumber && !!customer.landmark && !!customer.address ? (
                        <View style={{width: '100%'}}>
                          <View style={{textAlign:'right',width:'100%',marginTop: 10}}>
                            <Text style={{fontWeight: 'bold'}}>Name</Text>
                            <Text style={{fontSize: 12}}>{customer.name.toUpperCase()}</Text>
                          </View>

                          <View style={{textAlign:'right',width:'100%',marginTop: 10}}>
                            <Text style={{fontWeight: 'bold'}}>Address</Text>
                            <Text style={{fontSize: 12}}>{customer.address.toUpperCase()}</Text>
                          </View>

                          <View style={{textAlign:'right',width:'100%',marginTop: 10}}>
                            <Text style={{fontWeight: 'bold'}}>Landmark</Text>
                            <Text style={{fontSize: 12}}>{customer.landmark.toUpperCase()}</Text>
                          </View>

                          <View style={{textAlign:'right',width:'100%',marginTop: 10,marginBottom: 20}}>
                            <Text style={{fontWeight: 'bold'}}>Contact Number</Text>
                            <Text style={{fontSize: 12}}>{customer.contactnumber.toUpperCase()}</Text>
                          </View>
                        </View>
                        ): null}
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#219653" }}
                            onPress={() => {
                                handleCustomerConfirmation()
                            }}
                        >
                        <Text style={styles.textStyle}>Confirm</Text>
                        </TouchableHighlight>
                  
                    </View>
                    </View>
                </Modal>
            </Portal>
                <View style={styles.headerItem}>
                    <Icon name="account-circle" size={30} style={{color: '#219653'}}/>
                    <Text style={{fontWeight:'bold'}}>Customer Information</Text>
                </View>
                <ImageBackground source={require('../img/bg-img.png')} style={[styles.image,styles.headerItem]}>
                    {!customerVisible ? // If customer Visibility is not set
                    <TouchableOpacity style={{alignItems:'center'}} onPress={() => {
                         setModalVisible(!modalVisible)
                    }}>
                        <Icon name="account-plus" size={40} style={{color: '#219653'}}/>
                        <Text>Click to add Customer</Text>
                    </TouchableOpacity>

                    : //Else

                    <View style={{width: '100%',marginLeft: 50}}>
                      <View style={{textAlign:'right',width:'100%',marginTop: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Name</Text>
                        <Text style={{fontSize: 12}}>{customer.name.toUpperCase()}</Text>
                      </View>

                      <View style={{textAlign:'right',width:'100%',marginTop: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Address</Text>
                        <Text style={{fontSize: 12}}>{customer.address.toUpperCase()}</Text>
                      </View>

                      <View style={{textAlign:'right',width:'100%',marginTop: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Landmark</Text>
                        <Text style={{fontSize: 12}}>{customer.landmark.toUpperCase()}</Text>
                      </View>

                      <View style={{textAlign:'right',width:'100%',marginTop: 10,marginBottom: 20}}>
                        <Text style={{fontWeight: 'bold'}}>Contact Number</Text>
                        <Text style={{fontSize: 12}}>{customer.contactnumber}</Text>
                      </View>
                    </View>

                   }
                </ImageBackground>

                <View style={styles.headerItem}>
                    <Icon name="clipboard-text" size={30} style={{color: '#219653'}}/>
                    <Text style={{fontWeight:'bold'}}>Order Information</Text>
                </View>
                
                <View>
                    <ImageBackground source={require('../img/bg-img.png')} style={[styles.image,{borderWidth: 1, borderColor: '#000'}]}>
                    <View style={{alignItems: 'center',width: '100%',marginTop: 20}}>
                      <Text style={{marginRight: 10,fontWeight: 'bold'}}>Date</Text>
                      <DatePicker
                          style={{width: '50%', backgroundColor: '#fff',marginTop:5,marginBottom: 20}}
                          date={date.date}
                          mode="date"
                          placeholder="select date"
                          format="YYYY-MM-DD"
                          customStyles={{
                          dateIcon: {
                              position: 'absolute',
                              right: 0,
                              top: 4,
                              marginLeft: 0
                          },
                          dateInput: {
                              marginLeft: 0,
                              color: '#fff'
                          }
                          // ... You can check the source to find the other keys.
                          }}
                          onDateChange={(date) => {setData({
                              ...data,
                              date:date
                          })}}
                      />

<View style={{marginRight: 10,alignItems:'center',width: '80%',height:1,backgroundColor:'#fff',position:'absolute',bottom:0,justifyContent: 'center'}}></View>
                    </View>
                    
                    <View style={styles.row}>
                        <View style={{marginRight: 10,marginLeft: 30}}>
                            <Text style={{marginBottom: 5}}>Qty</Text>
                            <TextInput 
                              style={{width: 50,height: 30, backgroundColor:'#fff',paddingTop: 0,paddingBottom: 0}}
                              defaultValue={orderItems.qty}
                              onChangeText = { qty => setOrderItems({
                                ...orderItems,
                                  qty: qty
                              })}
                              />
                        </View>
                        <View style={{marginRight: 10}}>
                            <Text style={{marginBottom: 5}}>Unit</Text>
                            <TextInput 
                              style={{width: 50,height: 30, backgroundColor:'#fff',paddingTop: 0,paddingBottom: 0}}
                              defaultValue={orderItems.unit}
                              onChangeText = { unit => setOrderItems({
                                ...orderItems,
                                   unit: unit
                              })}
                              />
                        </View>
                        <View style={{marginRight: 10}}>
                            <Text style={{marginBottom: 5}}>Item</Text>
                            <TextInput 
                              style={{width: 130,height: 30, backgroundColor:'#fff',paddingTop: 0,paddingBottom: 0}}
                              defaultValue={orderItems.item}
                              onChangeText = { item => setOrderItems({
                                ...orderItems,
                                   item: item
                              })}
                              />
                        </View>
                        <View style={{marginRight: 25}}>
                            <Text style={{marginBottom: 5}}>Price</Text>
                            <TextInput 
                              style={{width: 70,height: 30, backgroundColor:'#fff',paddingTop: 0,paddingBottom: 0}}
                              defaultValue={orderItems.price}
                              onChangeText = { price => setOrderItems({
                                ...orderItems,
                                   price: price
                              })}
                              />
                        </View>
                    </View>

                
                    <View style={[styles.row,{marginTop: 30}]}>
                        <TouchableOpacity 
                          style={{marginRight: 150,backgroundColor:'#eee', paddingTop: 5,paddingBottom: 5,paddingLeft: 10, paddingRight: 10,borderColor:'#333',borderWidth:1 }}
                          onPress={()=> resetOrder()}
                          >
                            <Text><Icon name="close" size={14}/>Clear</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={{backgroundColor:'#219653', paddingTop: 5,paddingBottom: 5,paddingLeft: 10, paddingRight: 10,borderColor:'#fff',borderWidth:1 }}
                          onPress={ () => {onHandleAddItem()}}
                          >
                            <Text style={{color:'#fff'}}><Icon name="plus" size={16} />Add</Text>
                        </TouchableOpacity>
                    </View>
                    </ImageBackground>
                    {orders.length < 1 ?
                    <View style={{flex:1,alignItems: 'center',justifyContent: 'center',backgroundColor:'#eee', paddingTop: 150, paddingBottom: 150}}>
                          <Text>Empty</Text>
                    </View>
                     :
                    <View style={{backgroundColor: '#fff',marginTop:10}}>
                      <View style={styles.row}>
                        <View style={{width: 40}}>
                            <Text style={{fontWeight: 'bold'}}>Qty</Text>
                        </View>
                        <View style={{width: 50}}>
                            <Text style={{fontWeight: 'bold'}}>Unit</Text>
                        </View>
                        <View style={{width: 130}}>
                            <Text style={{fontWeight: 'bold'}}>Item</Text>
                        </View>
                        <View style={{width: 60}}>
                            <Text style={{fontWeight: 'bold'}}>Price</Text>
                        </View>
                        <View style={{width: 60}}>
                            <Text style={{fontWeight: 'bold'}}>Subtotal</Text>
                        </View>
                      </View> 
                        <FlatList
                          data={orders}
                          renderItem={({item}) => <OrderItemList item={item}/>}
                          // keyExtractor={order => order.item}
                        />
                      {/* </SafeAreaView> */}

                      <View style={styles.row}>
                        <View style={{width: 180}}>
                        </View>
                        <View style={{width: 100}}>
                            <Text style={{fontWeight: 'bold'}}>Delivery Fee</Text>
                        </View>
                        <View style={{width: 60}}>
                          <TextInput 
                              style={{width: 60,height: 30, backgroundColor:'#eee',paddingLeft:4, paddingTop: 0,paddingBottom: 0}}
                              defaultValue={'50'}
                              />
                        </View>
                      </View>
                      <View style={[styles.row,{paddingBottom: 30}]}>
                        <View style={{width: 180}}>
                        </View>
                        <View style={{width: 100}}>
                            <Text style={{fontWeight: 'bold'}}>Total</Text>
                        </View>
                        <View style={{width: 60}}>
                            <Text>{totalOrder()}</Text>
                        </View>
                      </View>

                      <View style={[styles.row,{marginBottom: 30, marginRight: 30}]}>
                        <View style={{width: 200}}>
                        </View>
                        <View style={{width: 150}}>
                          <TouchableHighlight
                              style={{ ...styles.openButton, backgroundColor: "#219653" }}
                              onPress={() => {
                                 
                              }}
                          >
                          <Text style={styles.textStyle}>Save</Text>
                          </TouchableHighlight>
                        </View>
                      </View>

                    </View>
                    }

                    
                </View>
            
            </View>
     </ScrollView>
    );
   };
   

export default AddOrderScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    headerItem:{
        // justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    image:{
        // width: '100%',
        // justifyContent: 'flex-start',
        height: 'auto',
        paddingBottom: 30
      },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateRow:{
      flexDirection: 'row',
 
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 10,
        // padding: 10,
        paddingBottom: 10,
        paddingTop:10,
        paddingLeft: 30,
        paddingRight: 30,
        elevation: 2,
        marginTop: 10
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }

    
});