import React, {FC,Fragment} from 'react';
import {Card, Col, Row, InputNumber} from 'antd';
const { Meta } = Card;

interface IProps {
    data: Array<FoodTypes.FoodProduct>,
    onQuantityChanged: ( item: FoodTypes.FoodProduct, value: number | undefined ) => void
}
export const FoodCardUI: FC<IProps> = ( { data, onQuantityChanged } ) => (
    <Row gutter={12} className={'card-container'}>
        { data.map( ( item, index: number ) => (
            <Col key={ item.id } span={8} style={{padding: "10px 0px"}}>
                <Card
                    key = { item.id }
                    hoverable
                    style={{ width: 200 }}
                    cover={<img width={200} height={200} alt="example" src={item.image} />}
                >
                    <Meta style={{marginBottom: "10px;"}} description={`Rating: ${item.rating}`} title={getTitle( item.name, item.price )} />
                    <InputNumber  min={0} defaultValue={0} onChange={ ( value ) => onQuantityChanged( item, value )  } />
                </Card>
            </Col>
        ) )}
    </Row>
);

function getTitle(name: string , price: number) {
    return `${name}: Rs ${price}`;
}
