import React, { useState } from 'react'
import * as PropTypes from 'prop-types'
import { isFunction } from 'lodash'
import { Button } from '@material-ui/core'
import { consoleBadge, consoleStyles } from '../console'
import Modal from './Modal/Modal'

const con = consoleBadge('Modal', consoleStyles.white)

const useModal = ({ onClose, onSubmit, button, ...modalProps }) => {
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
    setModal(<Modal {...modalProps} submitModal={submitModal} closeModal={closeModal} />)
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
