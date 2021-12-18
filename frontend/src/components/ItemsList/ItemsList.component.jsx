import React from 'react';
import { List, Card } from 'antd';
import { Typography } from 'antd';
const { Meta } = Card;

const { Title, Text } = Typography;




const ItemsList = ({setAddedItems, saleItems , addedItems}) =>{

  const addElement = (item) => {
    const idx = addedItems.articles.findIndex((foundArticle) => {
        return foundArticle.id ==  item.cod_barras 
    })

    console.log(idx);

    if(idx >= 0 ){
      let itemsCopy = addedItems.articles;
      itemsCopy[idx].cantidad++;
      setAddedItems((prevState)=> {
        return {
          ...prevState,
          articles :itemsCopy
        }
      })
    } else{
      setAddedItems((prevState)=> {
        return {
        ...prevState,
        articles :[...prevState.articles , {id : item.cod_barras , cantidad : 1 , descripcion : item.descripcion, precio_venta: item.precio_venta}]
      }
      })
    }
    
  }

    return(
        <List
            grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
            }}
            dataSource={saleItems}
            renderItem={item => (
            <List.Item style = {{color :"white"}}>
              <Card  bordered = {true} style ={{backgroundColor :"#374785", color: "white" , textAlign : "center"}} hoverable = {true} onClick ={() => addElement(item)}>
                    <Title level = {5} style={{color:"white"}} >{item.descripcion}</Title>
                    <Text strong ={true} style = {{color : "white" , fontSize : "18px"}} >${item.precio_venta}</Text>
                </Card>
            </List.Item>
            )}
        />
    )
}

export default ItemsList;