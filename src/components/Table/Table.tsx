import React from 'react';
import { capitalize } from 'lodash';
import { FC } from 'react';
import { STable, STableRow, STableBody, STableHeader, STableCell } from './Table.styled';

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
      {/* { content && <Text>{ content }</Text> } */}
      <STableHeader>
        <STableCell />
        { items[0] && Object.keys(items[0].value).map((key) => (
          <STableCell key={`cell-${key}`}>{ key.toUpperCase() }</STableCell>
        )) }
      </STableHeader>
      <STableBody>
      { items.map((item, index) => (
        <STableRow key={`list-item-${index}`}>
          <STableCell s={{ textAlign: 'left' }}>{ capitalize(item.name) }</STableCell>
          { Object.values(item.value).map((item, index) => (
            <STableCell key={`cell-${index}`}>{ item }</STableCell>
          )) }
        </STableRow>
      )) }
      </STableBody>
    </STable>
  )
}
