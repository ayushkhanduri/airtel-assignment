import React, {Component} from 'react';
import {RangeSliderUI} from "../presentational/RangeSliderUI.component";

type IProps = {
    max: number,
    min: number
}
export default class RangeSliderComponent extends Component<IProps> {
    render() {
        const { max, min } = this.props;
        return (
          <RangeSliderUI max={ max } min={ min }/>
        );
    }
}
