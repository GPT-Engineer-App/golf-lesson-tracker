import React, { useState } from "react";
import { Box, Button, Container, Input, NumberInput, NumberInputField, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function MemberRegistrationModal({ onAddOrUpdateMember }) {
  const [months, setMonths] = useState(1);
  const [remainingLessons, setRemainingLessons] = useState(0);
  const navigate = useNavigate();

  const totalLessons = months * 8;

  const handleOk = () => {
    onAddOrUpdateMember(months, remainingLessons + totalLessons);
    navigate("/");
  };

  return (
    <Container centerContent p={4}>
      <VStack spacing={4}>
        <NumberInput min={1} value={months} onChange={(valueAsString, valueAsNumber) => setMonths(valueAsNumber)}>
          <NumberInputField placeholder="개월 수" />
        </NumberInput>
        <Text>총 레슨 횟수: {totalLessons}</Text>
        <Input placeholder="남은 레슨 횟수" value={remainingLessons} onChange={(e) => setRemainingLessons(parseInt(e.target.value) || 0)} />
        <Button colorScheme="blue" onClick={handleOk}>
          OK
        </Button>
      </VStack>
    </Container>
  );
}
