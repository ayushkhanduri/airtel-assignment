import React, {FC} from 'react';
import { Input } from 'antd';
import debounce from "debounce";

type IProps = {
    searchText: string,
    onSearchTextChange: ( value: string ) => void
}
export const SearchTextUI: FC<IProps> = ( { searchText = '', onSearchTextChange }) => (
    <Input placeholder="Search" value={ searchText }
           onChange={ ( event ) => onSearchTextChange( event.target.value ) }

    />
);
