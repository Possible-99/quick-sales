import React from 'react';
import { List, Card } from 'antd';
import { Typography } from 'antd';
const { Meta } = Card;

const { Title, Text } = Typography;

const data = [
  {
    title: '$200',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
  {
    title: '$200',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 5',
  },
];


const addElement = () =>{
  alert("Hello")
}

const ItemsList = () =>{
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
            dataSource={data}
            renderItem={item => (
            <List.Item style = {{color :"white"}}>
                <Card  bordered = {true} style ={{backgroundColor :"#374785", color: "white" , textAlign : "center"}} hoverable = {true} onClick ={addElement}>
                    <Title level = {2} style={{color:"white"}} >Durex</Title>
                    <Text strong ={true} style = {{color : "white" , fontSize : "18px"}} >$200</Text>
                </Card>
               
            </List.Item>
            )}
        />
    )
}

export default ItemsList;