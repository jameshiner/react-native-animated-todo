import React, { useCallback, useState } from 'react';
import { Center, VStack, useColorModeValue, Icon, Fab } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
// import ThemeToggle from '../components/theme-toggle';
import TaskList from '../components/task-list';
import AnimatedColorBox from '../components/animated-color-box';
import Masthead from '../components/masthead';
import NavBar from '../components/navbar';
import shortid from 'shortid';

const initialData = [
  { id: shortid.generate(), subject: 'Buy Monitor Light Bar', isComplete: false },
  { id: shortid.generate(), subject: 'Find Christmas Presents', isComplete: false },
];

export default function MainScreen() {
  const [data, setData] = useState(initialData);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  // const [checked, setChecked] = useState(false);
  // const [subject, setSubject] = useState('Task Item');
  // const [isEditing, setIsEditing] = useState(false);
  const handleToggleTaskItem = useCallback((item) => {
    setData((prevData) => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        isComplete: !item.isComplete,
      };
      return newData;
    });
  }, []);

  const handleChangeTaskItem = useCallback((item, newSubject) => {
    setData((prevData) => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        subject: newSubject,
      };
      return newData;
    });
  }, []);

  const handleFinishEditingTaskItem = useCallback((_item) => {
    setEditingItemId(null);
  }, []);

  const handlePressTaskItem = useCallback((item) => {
    setEditingItemId(item.id);
  }, []);

  const handleRemoveTaskItem = useCallback((item) => {
    setData((prevData) => {
      const newData = prevData.filter((i) => item.id !== i.id);
      return newData;
    });
  }, []);
  return (
    <AnimatedColorBox flex={1} bg={useColorModeValue('blue', 'darkBlue')}>
      <Masthead title="What's up, JJ!?" image={require('../assets/masthead.png')}>
        <NavBar />
      </Masthead>
      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        pt="20px"
      >
        <TaskList
          data={data}
          editingItemId={editingItemId}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItem}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItem}
          onRemove={handleRemoveTaskItem}
        ></TaskList>
        {/* <ThemeToggle /> */}
        <Fab
          position="absolute"
          renderInPortal={false}
          size="sm"
          icon={<Icon color="white" as={<AntDesign name="plus" />} />}
          colorScheme={useColorModeValue('blue', 'darkBlue')}
          bg={useColorModeValue('blue.500', 'blue.400')}
          onPress={() => {
            const id = shortid.generate();
            setData([{ id, subject: '', isComplete: false }, ...data]);
            setEditingItemId(id);
          }}
        />
      </VStack>
    </AnimatedColorBox>
  );
}
