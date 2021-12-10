import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import ItemsList from '../../components/ItemsList/ItemsList.component'
import SalesList from '../../components/SaleList/SalesList.component';
import { Button } from 'antd';
import { Typography, Space ,Input } from 'antd';
import MainLayout from '../../components/MainLayout/MainLayout.component';

const {Search} = Input;
const onSearch = value => console.log(value);

const { Title, Text } = Typography;


const Home = () =>{
    const [saleItems, setSaleItems] = useState(null);
    const [addedItems, setAddedItems] = useState(null);
    const [search, setSearch] = useState("");


    useEffect(() => {
        var url = "/api/items"
        axios.get(url)
        .then(respnse =>{
            // setSaleItems(respnse.data);
            console.log(respnse);
            console.log("hello");
        })
        .catch(error =>{
            console.error(error);
        })
        .finally(() =>{
            
        })
    }, [])

    const checkout = () =>{
        var url = "/api/checkout"
        var data = {};
        axios.post(url , data)
        .then(respnse =>{
            // setSaleItems(respnse.data);
        })
        .catch(error =>{
            console.error(error);
        })
        .finally(() =>{
            
        })
    }

    return(
        <MainLayout menuKey = "1">
            <Space direction = "vertical" >
            <Title level ={2} >Favoritos</Title>
            <ItemsList saleItems = {saleItems} setAddedItems = {setAddedItems}/>
            <Search placeholder="12929192" allowClear onSearch={onSearch} style={{ width: 200 , float :"right" }} />
            <Title level ={2} >Venta actual</Title>
            <SalesList/>
            <Button type="primary" size={'large'} style ={{float :"right"}} onClick = {checkout} >
                <Title level ={5} style ={{color: "white"}}> Cobrar $1000 </Title>
            </Button>
            </Space>
        </MainLayout>
    )
}

export default Home;