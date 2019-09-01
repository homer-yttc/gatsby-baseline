import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import * as PropTypes from 'prop-types'
import React from 'react'

export const modalTypes = {
  info: 'info',
  confirm: 'confirm',
}

const Modal = ({ variant, title, content, submitModal, closeModal }) => (
  // eslint-disable-next-line react/jsx-boolean-value
  <Dialog open={true}>
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>{content}</DialogContent>
    <DialogActions>
      {variant === modalTypes.confirm && (
        <>
          <Button color="primary" onClick={submitModal}>
            Yes, I agree
          </Button>
          <Button color="primary" onClick={closeModal} autoFocus>
            CANCEL
          </Button>
        </>
      )}

      {(!variant || variant === modalTypes.info) && (
        <Button color="primary" onClick={submitModal} autoFocus>
          OK
        </Button>
      )}
    </DialogActions>
  </Dialog>
)

Modal.defaultProps = {
  submitModal: null,
  closeModal: null,
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  submitModal: PropTypes.func,
  closeModal: PropTypes.func,
}

export default Modal
