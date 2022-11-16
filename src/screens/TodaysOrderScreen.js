import React,{useEffect} from 'react'

import {
    View,
    Text,
    Button,
    StyleSheet,
    StatusBar,
    ImageBackground,
  } from 'react-native';


import Icon from 'react-native-vector-icons/AntDesign'
import LocationIcon from 'react-native-vector-icons/Entypo'
import { Searchbar } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';




const TodaysOrderScreen = ({navigation}) => {
    const [searchQuery,setSearchQuery] = React.useState('');
    
    var data = {
        defaultPage: 6,
        from: 0,
        to: 0,
        items: [],
        searchList: [],
        filteredItems: [],
        paginatedItems: [],
        selectedItems: [] 
     }
 
     var pagination = {
         range:5,
         currentPage: 1,
         items: [],
         itemPerPage: 3,
         filteredItems:[]
     }

     const [defaultPage,setdefaultPage] = React.useState(5)
     const [from,setFrom] = React.useState(0)
     const [to,setTo] = React.useState(0)
     const [dataItems, setDataItems] = React.useState([])
     const [searchList, setSearchList] = React.useState([])
     const [dataFilteredItems, setDataFilteredItems] = React.useState([])
     const [paginatedItems, setPaginatedItems] = React.useState([])
     const [selectedItems, setSelectedItems] = React.useState([])

     const [range,setRange] = React.useState(5)
     const [currentPage,setCurrentPage] = React.useState(1)
     const [paginationItems,setPaginationItems] = React.useState([])
     const [paginationFilteredItems,setpaginationFilteredItems] = React.useState([])


    const [customers,setCustomers] = React.useState([
        {
            name: 'John Louise Berdida',
            status: 2,
            price: 1000,
            location: 'Brgy. Luzon'

        },
        {
            name: 'Kent Michael Baguion',
            status: 2,
            price: 1000,
            location: 'Brgy. Makabugtog Panty',
            
        },
        {
            name: 'Kentotoy Velasco',
            status: 1,
            price: 2000,
            location: 'Brgy. Luzon'
        },
        {
            name: 'Rodrigo Villamor',
            status: 2,
            price: 1000,
            location: 'Brgy. Luzon'
        },
        {       
            name: 'Angelica Espanto',
            status: 2,
            price: 1000,
            location: 'Brgy. Luzon'
        },
        {
            name: 'Romeo Batuon',
            status: 1,
            price: 1000,
            location: 'Brgy. Luzon'
        },
        {
            name: 'Alexander Kuroichi',
            status: 0,
            price: 1000,
            location: 'Brgy. Luzon'
        },
        {
            name: 'Manong Bombay',
            status: 1,
            price: 1000,
            location: 'Brgy. Luzon'
        },
        {
            name: 'Jane Fucking Doe',
            status: 3,
            price: 1000,
            location: 'Brgy. Luzon'
        },
        {
            name: 'Jonathan Samonte',
            status: 1,
            price: 1000,
            location: 'Brgy. Luzon'
        },
        {
            name: 'John Fucking Wick',
            status: 2,
            price: 1000,
            location: 'Brgy. Luzon'
        },
        {
            name: 'Durante Estapador',
            status: 1,
            price: 1000,
            location: 'Brgy. Luzon'
        }

    ])

    const _onChangeSearch = (query) => {
        setSearchQuery({searchQuery: query})
        searchFiltered(query,'search')
    }

    const _handleStatusFilter = (filter) => {
        // setPageItems(pagination.filteredItems)
        // setFilteredCustomers(data.paginatedItems)
        searchFiltered(filter.value,'status')
    }
    //Pagination

    const changedefaultPage = () => {
        pagination.itemPerPage = data.defaultPage
    }

    const fromNumber = () => {
        data.from = data.filteredItems.length > 0 ? ((currentPage -  1) * pagination.itemPerPage) + 1 : 0
    }

    const toNumber = () => {
        data.to = data.filteredItems.length > 0 ? data.from + (data.paginatedItems.length - 1): 0
    }

    const buildPagination = () => {
        var numberOfPage = Math.ceil(data.filteredItems.length / pagination.itemPerPage)
        pagination.items = []
       
        for(var i=0; i<numberOfPage; i++){
           pagination.items.push(i+1)
        } 
    }

    const changePage = (item) => {
        
        data.filteredItems = customers
        buildPagination();
        selectPage(item);
        settingUpPagination()
        console.log('pagination',pagination)
    }

    const selectPage = (item) => {
        setCurrentPage(item)
        
        let start = 0
        let end = 0
        if(currentPage < pagination.range-2){
            start = 1
            end = start+ pagination.range-1
        }
        else if(currentPage <= paginationItems.length && currentPage > paginationItems.length - pagination.range + 2){
            start = 1
            end = pagination.items.length
        }
        else{
            start = currentPage-2
            end = currentPage+2
        }

        if(start>1){
            start = 1
        }
        if(end>paginationItems.length){
            end = pagination.items.length
        }

        pagination.filteredItems = []
        for(var i = start; i <=end; i++){
            pagination.filteredItems.push(i)
        }
        
        data.paginatedItems = data.filteredItems.filter((v,k)=>{
            return Math.ceil((k+1) / pagination.itemPerPage) == currentPage
        })
     
        
        fromNumber()
        toNumber()
        PageNumber()
    }

    const searchFiltered = (v,type) => {
        if(type == 'search') {
            data.filteredItems =  customers.filter(data => {
                return data.name.toLowerCase().includes(v.toLowerCase())
            })
        }
        else {
            data.filteredItems =  customers.filter(data => {
                return data.status == v
            })
        }
        

        data.filteredItems.forEach(function(v,k){
            v.key = k+1
        })

        
        if(typeof currentPage === "undefined"){
            selectPage(1)
            settingUpPagination()
            buildPagination()
        }else{
            selectPage(currentPage)
            settingUpPagination()
            buildPagination()
        }
        
    }

    const PageNumber = () => {
        
        const pages = pageItems.map(function(page,index){
            return (
                <TouchableOpacity key={index} onPress={()=>changePage(page)} style={{marginLeft: 10,marginRight:10}}>
                    <Text style={{fontSize: 19}}>{page}</Text>
                </TouchableOpacity>
            )
        })

        return pages
    }

    const CustomerList = ({item})=>{
        return(
            <ImageBackground source={require('../img/bg-img.png')} style={{height: 'auto',marginBottom: 10,
            marginTop: 30,borderColor:'#219653',borderWidth: 1}}>

            
                <View style={[{flexDirection: 'row',width:'100%',padding: 20}]}>
                    <View style={{width: '90%',flexDirection: 'row'}}>
                        
                        <View style={{marginRight: 10}}>
                            <Text style={{marginRight: 10}}>{item.name}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <LocationIcon name="location-pin" size={16} />
                                <Text>{item.location}</Text>
                            </View>
                            
                        </View>
                        <View style={{position: 'absolute', right: 0}}>
                            <Text>₱ {parseFloat(item.price).toFixed(2)}</Text>
                        </View>
                        
                    </View>
                </View>
                { item.status == 0 ? 
                    <View style={[styles.pending,{position: 'absolute',right:0, top: -20,paddingLeft: 10,paddingRight:10,color:'#fff'}]}>
                        <Text style={{color:'#fff'}}>Pending</Text>
                    </View>
                : item.status == 1 ? 
                    <View style={[styles.processing,{position: 'absolute',right:0, top: -20,paddingLeft: 10,paddingRight:10,color:'#fff'}]}>
                        <Text style={{color:'#fff'}}>Processing</Text>
                    </View>

                : item.status == 2 ? 
                    <View style={[styles.transit,{position: 'absolute',right:0, top: -20,paddingLeft: 10,paddingRight:10,color:'#fff'}]}>
                        <Text style={{color:'#fff'}}>In-Transit</Text>
                    </View>
                : 
                    <View style={[styles.delivered,{position: 'absolute',right:0, top: -20,paddingLeft: 10,paddingRight:10,color:'#fff'}]}>
                        <Text style={{color:'#fff'}}>delivered</Text>
                    </View>
                }
            </ImageBackground>

        )
    }
    const settingUpPagination = () => {
        setPageItems(pagination.filteredItems)
        setFilteredCustomers(data.paginatedItems)
        setPaginationItems(pagination.items)
        
    }

    const [filteredCustomers,setFilteredCustomers] = React.useState([])
    const [pageItems,setPageItems] = React.useState([])


   

    useEffect(()=>{
            data.filteredItems = customers
            buildPagination()
            selectPage(1)
            settingUpPagination()
    },[])

    return(
        <View style={styles.container} >
            <View style={[styles.row,{marginRight: 10,marginLeft: 10}]}>

                <DropDownPicker
                    arrowStyle={{color:'#fff'}}
                    style={{backgroundColor:'#219653'}}
                    placeholder="Status"
                    dropDownStyle={{borderWidth: 1,borderColor: '#219653'}}
                    containerStyle={{height: 40,width:120}}
                    placeholderStyle={{color: '#fff'}}
                    onChangeItem={item => _handleStatusFilter(item)}
                    items={[
                        { label: 'Pending', value: 0 },
                        { label: 'Processing', value: 1 },
                        { label: 'In-Transit', value: 2 },
                        { label: 'Delivered', value: 3 },
                    ]}
                />

                <Searchbar
                    style={{width: 200,height: 38,marginLeft: 10,borderColor: '#219653',borderWidth: 1}}
                    inputStyle={{fontSize: 12, paddingTop: 5,paddingBottom: 5}}
                    placeholder="Search by name"
                    onChangeText= {query => _onChangeSearch(query)}
                />

            </View>

            <View style={[styles.row,{paddingBottom: 20,paddingTop: 0,alignItems:'center',justifyContent: 'center',borderWidth: 1, borderColor: '#333'}]}>
                <TouchableOpacity 
                    style={[styles.row,{marginRight: 50}]} 
                    onPress={()=>changePage(currentPage-1)}
                    disabled={currentPage == paginationItems[0] || paginationItems.length == 0 ? true:false}
                    >
                    <Icon name="left" size={20} style={{fontWeight: 'bold'}}/> 
                    <Text style={{fontWeight: 'bold'}}>Prev</Text>
                </TouchableOpacity>

                <View style={styles.row}>
                    <PageNumber/>
                </View>

                <TouchableOpacity 
                    style={[styles.row,{marginLeft: 50}]} 
                    onPress={()=>changePage(currentPage+1)}
                    disabled={currentPage==paginationItems[paginationItems.length-1] || paginationItems.length == 0 ? true : false}
                    >
                    <Text style={{fontWeight: 'bold',marginRight: 5}}>Next</Text>
                    <Icon name="right" size={20} style={{fontWeight: 'bold'}}/> 
                </TouchableOpacity>
            </View>

            <FlatList
                data={filteredCustomers}
                renderItem={({item}) => <CustomerList item={item}/>}
                keyExtractor={item => item.name}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            />

            
        </View>

    );
   };
   

export default TodaysOrderScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    row:{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    section:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        justifyContent: 'center',
    },
    transit:{
        backgroundColor: '#219653'
    },
    pending: {
        backgroundColor: '#333'
    },
    delivered: {
        backgroundColor: '#00bcd4'
    },
    processing: {
        backgroundColor: '#ec407a'
    }



    
});