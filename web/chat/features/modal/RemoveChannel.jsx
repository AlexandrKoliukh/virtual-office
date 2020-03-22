import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import { removeChannel } from '../../handlers';
import { hideModal } from './modalSlice';
import useActions from '../../utils/useActions';

const ConfirmDelete = (props) => {
  const dispatchHideModal = useActions(hideModal);

  const handleRemove = () => {
    const { data: { id } } = props;
    removeChannel({ id });
    dispatchHideModal();
  };

  const handleHideModal = () => dispatchHideModal();

  return (
    <Modal
      size="sm"
      show
      onHide={handleHideModal}
      className="confirm"
    >
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-around">
        <Button onClick={handleHideModal}>Close</Button>
        <Button variant="danger" onClick={handleRemove}>Delete</Button>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmDelete;
