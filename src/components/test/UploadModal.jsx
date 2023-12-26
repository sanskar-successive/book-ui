import React, { useState } from 'react';
import { Modal } from 'antd';
import UploadButton from './UploadButton';
const UploadModal = () => {
  const [modal2Open, setModal2Open] = useState(true);
  return (
    <>
      <Modal
        title="Upload csv file"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <UploadButton/>
      </Modal>
    </>
  );
};
export default UploadModal;