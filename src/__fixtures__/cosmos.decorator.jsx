/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

// import '@/utils/i18n';
import { MantineProvider, Paper } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

// import { theme } from '@/theme';
import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/tiptap/styles.css";
// import '@/index.css';
import { Provider } from "react-redux";
import { store } from "../store/store";

export default ({ children }) => {
  return (
    <Provider store={store}>
      <MantineProvider defaultColorScheme="dark">
        <ModalsProvider>
          <Notifications position="top-right" />

          <div
            className="w-full h-screen form-editor-canvas flex justify-center items-center p-10"
            id="modalWindow"
          >
            <Paper className="p-5 w-1/2 resize overflow-auto">{children}</Paper>
          </div>
        </ModalsProvider>
      </MantineProvider>
    </Provider>
  );
};
