import React, {FC} from 'react';
import { Slider } from 'antd';

type IProps = {
    max: number,
    min: number,
}
export const RangeSliderUI: FC<IProps> = ( { min=0 , max =1000 } ) => (
    <Slider range defaultValue={[min, max]}   />
);
