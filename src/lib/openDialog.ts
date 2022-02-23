import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";

export const openDialog = ({ title, content, ok = "", cancel = "" }) => {
  const div = document.createElement("div");
  document.body.appendChild(div);

  const close = () => {
    app.unmount();
    div.remove();
  };

  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVal) => {
            if (!newVal) {
              close();
            }
          },
          cancel: cancel ? cancel : () => {},
          ok: ok ? ok : () => {},
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};
