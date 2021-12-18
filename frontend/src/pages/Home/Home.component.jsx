import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import ItemsList from '../../components/ItemsList/ItemsList.component'
import SalesList from '../../components/SaleList/SalesList.component';
import { Button, message } from 'antd';
import { Typography, Space ,Input } from 'antd';
import MainLayout from '../../components/MainLayout/MainLayout.component';

const {Search} = Input;

const { Title, Text } = Typography;


const Home = () =>{
    const [saleItems, setSaleItems] = useState(null);
    const [addedItems, setAddedItems] = useState({articles : [] , total: 0});
    const [search, setSearch] = useState("");

    const onSearch = value => setSearch(value);
    console.log(addedItems)


    useEffect(() => {
        var url = "/api/items"
        axios.get(url)
        .then(response =>{
            setSaleItems(response.data);
            console.log(response.data);
            // console.log("hello");
        })
        .catch(error =>{
            console.error(error);
        })
        .finally(() =>{
            
        })
    }, [])

    useEffect(() =>{
        console.log(addedItems.articles)
        let newTotal = addedItems.articles.reduce((partial_sum, {precio_venta, cantidad}) => partial_sum + (precio_venta * cantidad), 0);
        console.log(newTotal)
        setAddedItems((prevState) => (
            {
                ...prevState,
                total : newTotal
            }
        ))
    }, [addedItems.articles])

    const checkout = () =>{
        var url = "/api/checkout"
        var data = { addedItems: addedItems , rfc : search};
        axios.post(url , data)
        .then(response =>{
            // setSaleItems(respnse.data);
        })
        .catch(error =>{
            console.error(error);
        })
        .finally(() =>{
            setAddedItems({articles:[] , total: 0})
            message.success("Operacion exitosa")
        })
    }

    return(
        <MainLayout menuKey = "1">
            <Space direction = "vertical" >
            <Title level ={2} >Favoritos</Title>
            {
                saleItems != null ? <ItemsList saleItems = {saleItems} setAddedItems = {setAddedItems} addedItems={addedItems} /> : <></> 
            }
            {
                addedItems.articles.length != 0?
                (<><Search placeholder="12929192" allowClear onSearch={onSearch} style={{ width: 200 , float :"right" }} required={true} />
                <Title level ={2} >Venta actual</Title>
                <SalesList addedItems = {addedItems.articles}/>
                <Button type="primary" size={'large'} style ={{float :"right"}} onClick = {checkout} >
                    <Title level ={5} style ={{color: "white"}}> Cobrar ${addedItems.total} </Title>
                </Button> </>):
                <></>
            }
            </Space>
        </MainLayout>
    )
}

export default Home;