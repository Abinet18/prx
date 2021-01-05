import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { findIndex, Position } from './find-index';
import { framerStyles } from '../styles/styles';

const onTop = { zIndex: 1 };
const flat = {
  zIndex: 0,
  transition: { delay: 0.3 },
};

const initialColors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF'];
const heights: { [key: string]: number } = {
  '#FF008C': 60,
  '#D309E1': 80,
  '#9C1AFF': 40,
  '#7700FF': 100,
};

const move = (arr: string[], i: number, j: number) => {
  arr.splice(j, 0, arr.splice(i, 1)[0]);
  return [...arr];
};

type ItemProps = {
  color: string;
  setPosition: (i: number, offset: Position) => void;
  moveItem: (dragOffset: number) => number;
  i: number;
};

const Item = ({ color, setPosition, moveItem, i }: ItemProps) => {
  const [isDragging, setDragging] = useState(false);

  // We'll use a `ref` to access the DOM element that the `motion.li` produces.
  // This will allow us to measure its height and position, which will be useful to
  // decide when a dragging element should switch places with its siblings.
  const ref = useRef(null);
  const classes = framerStyles();
  // By manually creating a reference to `dragOriginY` we can manipulate this value
  // if the user is dragging this DOM element while the drag gesture is active to
  // compensate for any movement as the items are re-positioned.
  const dragOriginY = useRef(0);

  // Update the measured position of the item so we can calculate when we should rearrange.
  useEffect(() => {
    // console.log('setting position', i);
    setPosition(i, {
      height: (ref.current as HTMLLIElement | null)?.offsetHeight ?? 0,
      top: (ref.current as HTMLLIElement | null)?.offsetTop ?? 0,
    });
  });

  return (
    <motion.li
      className={classes.li}
      ref={ref}
      initial={false}
      // If we're dragging, we want to set the zIndex of that item to be on top of the other items.
      drag
      layout
      animate={isDragging ? onTop : flat}
      style={{ background: color, height: heights[color] }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.12 }}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={1}
      onDragStart={(e: any, { point }: any) => {
        console.log('dragging', i, point.y);
        dragOriginY.current = point.y;
        setDragging(true);
      }}
      onDragEnd={() => setDragging(false)}
      onDrag={(e: any, { point }: any) => {
        dragOriginY.current += moveItem(point.y - dragOriginY.current);
      }}
    />
  );
};

export const Example = () => {
  const [colors, setColors] = useState(initialColors);

  // We need to collect an array of height and position data for all of this component's
  // `Item` children, so we can later us that in calculations to decide when a dragging
  // `Item` should swap places with its siblings.
  const positions = useRef<Position[]>([]).current;
  const setPosition = (i: number, offset: Position) => (positions[i] = offset);

  // Find the ideal index for a dragging item based on its position in the array, and its
  // current drag offset. If it's different to its current index, we swap this item with that
  // sibling.
  const moveItem = (i: number, dragOffset: number) => {
    // console.log('trying to move item', i, dragOffset);
    const targetIndex = findIndex(i, dragOffset, positions);
    if (targetIndex !== i) {
      console.log(
        'trying to swap ...',
        i,
        targetIndex,
        dragOffset,
        positions[i],
        positions[targetIndex],
      );
      setColors(move(colors, i, targetIndex));
      return dragOffset;
    }
    return 0;
  };
  console.log(positions);
  const classes = framerStyles();
  return (
    <ul className={classes.ul}>
      {colors.map((color, i) => (
        <Item
          key={color}
          i={i}
          color={color}
          setPosition={setPosition}
          moveItem={(dragOffset) => moveItem(i, dragOffset)}
        />
      ))}
    </ul>
  );
};

// Spring configs
type DragItemProps = {
  color: string;

  i: number;
  onDragStart: (e: any, groupId: string, index: number) => void;
  onDragEnd: (e: any) => void;
  onDragExit: (e: any) => void;
  onDragEnter: (e: any, groupId: string, index: number) => void;
  onDrag: (e: any) => void;
  groupId: string;
  dragging: boolean;
};

const DragItem = ({
  color,
  i,
  onDragStart,
  onDragEnter,
  onDragExit,
  onDrag,
  onDragEnd,
  groupId,
  dragging,
}: DragItemProps) => {
  const classes = framerStyles();

  return (
    <motion.li
      className={classes.li}
      initial={false}
      // If we're dragging, we want to set the zIndex of that item to be on top of the other items.
      draggable
      layout
      animate={dragging ? onTop : flat}
      style={{ background: color, height: heights[color] }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.12 }}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={1}
      onDragStart={(e: any) => {
        onDragStart(e, groupId, i);
        return false;
      }}
      onDragExit={onDragExit}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDragEnd={onDragEnd}
      onDragEnter={(e) => {
        onDragEnter(e, groupId, i);
      }}
    />
  );
};

export const FramerDrag = () => {
  const [groups, setGroups] = useState<{
    [key: string]: { title: string; list: string[] };
  }>({ sample: { title: 'sample', list: initialColors } });

  const dragSourceNode = useRef<{ groupId: string; index: number }>();
  const dragTargetNode = useRef<{ groupId: string; index: number }>();
  const [dragging, setDragging] = useState(false);

  const onDragEnd = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };
  const onDragStart = (e: any, groupId: string, index: number) => {
    dragSourceNode.current = { groupId, index };
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 50;

    e.dataTransfer.setDragImage(canvas, 9999, 9999);
    setDragging(true);
  };

  const onChange = (groups: any) => {
    setGroups({ ...groups });
  };
  const dragAction = () => {
    const dragSource = dragSourceNode.current;
    const dragTarget = dragTargetNode.current;
    if (dragSource && dragTarget && dragSource !== dragTarget) {
      console.log('trying to move item', dragSource, dragTarget);
      groups[dragTarget.groupId].list.splice(
        dragTarget.index,
        0,
        groups[dragSource.groupId].list.splice(dragSource.index, 1)[0],
      );
      onChange(groups);
      dragSourceNode.current = dragTargetNode.current;
      dragTargetNode.current = undefined;
    }
  };

  const onDrag = () => {
    dragAction();

    dragTargetNode.current = undefined;
  };

  const onDragEnter = (e: any, groupId: string, index: number) => {
    e.preventDefault();
    dragTargetNode.current = { groupId, index };
    dragAction();
    dragSourceNode.current = { groupId, index };
    dragTargetNode.current = undefined;
  };

  const onDragExit = (e: any) => {
    e.preventDefault();
    dragTargetNode.current = undefined;
  };

  const renderItem = (item: string) => <p>{item}</p>;

  const classes = framerStyles();
  return (
    <ul className={classes.ul}>
      {groups['sample'].list.map((color, i) => (
        <DragItem
          key={color}
          i={i}
          color={color}
          onDragEnter={onDragEnter}
          onDragStart={onDragStart}
          groupId='sample'
          onDragExit={onDragExit}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
          dragging={dragging && dragSourceNode.current?.index === i}
        />
      ))}
    </ul>
  );
};
