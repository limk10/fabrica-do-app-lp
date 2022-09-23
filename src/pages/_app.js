import { Modal } from "@redq/reuse-modal";

export default function App({ Component, pageProps }) {
  return (
    <Modal>
      <Component {...pageProps} />
    </Modal>
  );
}
