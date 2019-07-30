import React, { useState } from 'react'
import * as PropTypes from 'prop-types'
import { isFunction } from 'lodash'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  // DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import { consoleBadge, consoleStyles } from '../console'

const con = consoleBadge('Modal', consoleStyles.white)

export const modalTypes = {
  info: 'info',
  confirm: 'confirm',
}

const useModal = ({ variant = modalTypes.info, title, content, onClose, onSubmit, button }) => {
  const [modal, setModal] = useState()
  const closeModal = () => {
    con.log('modal closing')
    setModal()
    isFunction(onClose) && onClose()
  }

  const submitModal = () => {
    con.log('modal submitting')
    setModal()
    isFunction(onSubmit) && onSubmit()
  }

  const triggerModal = () => {
    setModal(
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

          {variant === modalTypes.info && (
            <Button color="primary" onClick={submitModal}>
              OK
            </Button>
          )}
        </DialogActions>
      </Dialog>
    )
  }

  const modalTrigger = <Button onClick={triggerModal}>{button}</Button>

  return { modal, triggerModal, modalTrigger }
}

useModal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  variant: PropTypes.string,
  button: PropTypes.string,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
}

export default useModal
