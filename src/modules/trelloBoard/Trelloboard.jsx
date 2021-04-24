import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Column } from './components/Column';
import { useDragAndDrop } from './hooks/useDragAndDrop';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useColumns } from './hooks/useColumns';
import { data } from '../../FakeData';
import { FlexedRow } from '../../ui/Layouts';
import { Button } from '../../ui/Layouts';

const Container = styled.div`
  padding: 60px 40px;
`;
const ColumnContainer = styled(FlexedRow)``;
const AddColBtn = styled(Button)`
  height: 30px;
  width: 30px;
`;

export const TrelloBoard = () => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data'));
    savedData ? setColumns(savedData) : setColumns(data);
  }, []);

  const { addColumn, onChange } = useColumns(columns, setColumns);

  const { onDragEnd } = useDragAndDrop(columns, setColumns);
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='app' type='column' direction='horizontal'>
          {provided => (
            <ColumnContainer
              ref={provided.innerRef}
              {...provided.droppableProps}>
              {columns.map((column, index) => (
                <Column
                  column={column}
                  key={column.id}
                  index={index}
                  onChange={onChange}
                />
              ))}
              {provided.placeholder}
              <AddColBtn onClick={addColumn}>+</AddColBtn>
            </ColumnContainer>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};
