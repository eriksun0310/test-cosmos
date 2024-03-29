import { useState, useRef, useEffect } from "react";

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
import { setLogin, setLogout } from "../../store/createSlice";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const data = state.user;
  console.log("data ==>", data);
  const [showDialogue, setShowDialogue] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();

  const onLogout = () => {
    dispatch(setLogout());
  };

  useEffect(()=>{
    if(data.login){
      setShowDialogue(true)
    }
  }, [data.login])

  return (
    <Stack p="md">
      <Group justify="flex-start">
        {data.login ? <Text>已登入</Text>: <Text>請先登入</Text>}
        {
          data.login && (
            <Button onClick={() => setShowDialogue(!showDialogue)}>Open Dialogue</Button>
          )
        }
        
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
              <Text>已登入</Text>

                <ActionIcon
                  size="sm"
                  variant="subtle"
                  color="gray"
                  onClick={() => setShowDialogue(false)}
                >
                  <IconX />
                </ActionIcon>
              </Group>

              <TextInput
                label="name"
                defaultValue={data.name}
                placeholder="name"
                ref={nameRef}
              />

              <TextInput
                label="email"
                defaultValue={data.email}
                placeholder="email"
                ref={emailRef}
              />

              <TextInput
                label="age"
                defaultValue={data.age}
                placeholder="age"
                ref={ageRef}
              />

              <div className="flex-1" />
              <Group>
                <Button className="flex-1" onClick={onLogout}>
                  Logout
                </Button>
              </Group>
            </Stack>
          </Card>
        </Rnd>
      )}
    </Stack>
  );
};

export default Login;
