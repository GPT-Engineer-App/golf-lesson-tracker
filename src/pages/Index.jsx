import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, NumberInput, NumberInputField, Stack, Text, VStack } from "@chakra-ui/react";
import { FaGolfBall, FaPlus, FaCheck } from "react-icons/fa";

const Index = () => {
  const [members, setMembers] = useState([]);
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberMonths, setNewMemberMonths] = useState(1);

  const handleAddMember = () => {
    const newMember = {
      name: newMemberName,
      totalLessons: newMemberMonths * 8,
      completedLessons: 0,
    };
    setMembers([...members, newMember]);
    setNewMemberName("");
    setNewMemberMonths(1);
  };

  const handleCompleteLesson = (index) => {
    const updatedMembers = [...members];
    if (updatedMembers[index].completedLessons < updatedMembers[index].totalLessons) {
      updatedMembers[index].completedLessons += 1;
    }
    setMembers(updatedMembers);
  };

  const handleLessonsChange = (index, value) => {
    const updatedMembers = [...members];
    updatedMembers[index].totalLessons = parseInt(value) || 0;
    setMembers(updatedMembers);
  };

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4} align="stretch">
        <Heading size="lg">골프 레슨 관리 앱</Heading>
        <Box>
          <Text mb={2}>새 회원 추가:</Text>
          <Stack direction="row" spacing={2}>
            <Input placeholder="회원 이름" value={newMemberName} onChange={(e) => setNewMemberName(e.target.value)} />
            <NumberInput min={1} value={newMemberMonths} onChange={(valueAsString, valueAsNumber) => setNewMemberMonths(valueAsNumber)}>
              <NumberInputField placeholder="개월 수" />
            </NumberInput>
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddMember}>
              등록
            </Button>
          </Stack>
        </Box>
        <Box>
          <Text mb={2}>회원 목록:</Text>
          {members.map((member, index) => (
            <Box key={index} p={3} shadow="md" borderWidth="1px">
              <Text fontWeight="bold">{member.name}</Text>
              <Text>총 레슨 횟수: {member.totalLessons}</Text>
              <Text>완료된 레슨: {member.completedLessons}</Text>
              <Stack direction="row" spacing={2} align="center">
                <Button leftIcon={<FaCheck />} colorScheme="green" onClick={() => handleCompleteLesson(index)}>
                  레슨 완료
                </Button>
                <NumberInput size="sm" maxW={24} defaultValue={member.totalLessons} min={0} onChange={(value) => handleLessonsChange(index, value)}>
                  <NumberInputField />
                </NumberInput>
              </Stack>
            </Box>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
