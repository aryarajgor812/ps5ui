import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

const AddGame = ({ onAdd, onCancel }) => {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, path, icon });
  };

  return (
    <Modal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ModalContent>
        <h2>Add Game</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Game Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Executable Path"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Icon URL"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            required
          />
          <ButtonContainer>
            <Button type="submit">Add</Button>
            <Button type="button" onClick={onCancel}>
              Cancel
            </Button>
          </ButtonContainer>
        </Form>
      </ModalContent>
    </Modal>
  );
};

import { motion } from "framer-motion";

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background-color: #1a1a1a;
  padding: 40px;
  border-radius: 20px;
  width: 500px;
  color: white;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  padding: 15px 30px;
  border-radius: 10px;
  border: none;
  background-color: #0070d1;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005eaa;
  }
`;

export default AddGame;
