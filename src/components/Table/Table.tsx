import React from 'react';
import { capitalize } from 'lodash';
import { FC } from 'react';
import { Text } from '3oilerplate';
import { STable, STableRow, STableBody, STableHeader, STableCell } from './Table.styled';
import moment from 'moment';

export interface TableItem {
  name: string;
  value: string;
  index?: string;
  isSelected?: boolean;
}

export interface TableProps {
  content?: string;
  items: TableItem[];
  controlledSelectedIndex?: number;
}

export const Table: FC<TableProps> = ({ items }) => {

  return (
    <STable>
      <STableHeader>
        <STableCell />
        { items[0] && Object.keys(items[0].value).map((key) => (
          <STableCell key={`cell-${key}`}>{ key.toUpperCase() }</STableCell>
        )) }
      </STableHeader>
      <STableBody>
      { items.map((item: any, index) => (
        <STableRow key={`list-item-${index}`}>
          <STableCell s={{ textAlign: 'left' }}>{ capitalize(item.name) }</STableCell>
          { Object.keys(item.value).map((key, index) => (
            <STableCell key={`cell-${index}`}>{
              key === 'time' ?
                moment.utc(item.value[key] || 0).format('m:ss') :
                item.value[key]
            }</STableCell>
          )) }
        </STableRow>
      )) }
      </STableBody>
    </STable>
  )
}
