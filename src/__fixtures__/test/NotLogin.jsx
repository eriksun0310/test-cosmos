import { useState, useRef } from "react";

import {
  Stack,
  TextInput,
  Group,
  Button,
  Card,
  Text,
  ActionIcon,
} from "@mantine/core";

import { IconX } from "@tabler/icons-react";

import { Rnd } from "react-rnd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLogin } from "../../store/createSlice";

const NotLogin = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const data = state.user;
  console.log("data ==>", data);
  const [showDialogue, setShowDialogue] = useState(true);
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();

  const onSave = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const age = ageRef.current.value;
    dispatch(
      setLogin({
        name,
        email,
        age,
      })
    );
  };
  return (
    <Stack p="md">
      <Group justify="space-between">
        <Text>請先登入</Text>
      </Group>
      {showDialogue && (
        <Rnd
          default={{
            x: 0,
            y: 80,
            width: 300,
            height: 700,
          }}
          minWidth={300}
          minHeight={300}
          bounds="window"
        >
          <Card className="h-full" withBorder>
            <Stack className="h-full">
              <Group justify="space-between">
                <Text>請先登入</Text>
              </Group>

              <TextInput label="name" placeholder="name" ref={nameRef} />

              <TextInput label="email" placeholder="email" ref={emailRef} />

              <TextInput label="age" placeholder="age" ref={ageRef} />

              <div className="flex-1" />

              <Group>
                <Button className="flex-1" onClick={onSave}>
                  Login
                </Button>
              </Group>
            </Stack>
          </Card>
        </Rnd>
      )}
    </Stack>
  );
};

export default NotLogin;
