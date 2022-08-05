import React from 'react';
import { fireEvent, render } from '../../../../tests';
import { TetrisControls } from './Controls';

describe('<Controls />', () => {
  it('renders', () => {
    render(<TetrisControls />)
  });

  it('renders (for desktop)', () => {
    const { getByText } = render(<TetrisControls />)

    expect(getByText('SPACE')).toBeInTheDocument()
    expect(getByText('SHIFT')).toBeInTheDocument()
  });

  it.skip('renders (for mobile)', () => {
    const { getByText } = render(<TetrisControls />)

    expect(getByText('SPACE')).not.toBeInTheDocument()
    expect(getByText('SHIFT')).not.toBeInTheDocument()
  });

  it('acts on button clicks', async () => {
    const moveX = jest.fn()
    const rotate = jest.fn()
    const drop = jest.fn()

    const { findByTestId } = render(<TetrisControls />, {
      value: {
        moveX,
        rotate,
        drop,
      }
    })

    const moveLeftButton = await findByTestId('move-left')
    const moveRightButton = await findByTestId('move-right')
    const rotateButton = await findByTestId('rotate')
    const dropButton = await findByTestId('drop')

    fireEvent.click(moveLeftButton)
    fireEvent.click(moveRightButton)
    fireEvent.click(rotateButton)
    fireEvent.click(dropButton)

    expect(moveX).toBeCalledTimes(2)
    expect(moveX).toBeCalledWith('right')
    expect(moveX).toBeCalledWith('left')
    expect(rotate).toBeCalledTimes(1)
    expect(drop).toBeCalledTimes(1)
  });
})
