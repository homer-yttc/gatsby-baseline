import React from 'react'
import consola from 'consola'
import Memoized from '../../layout/Memoized/Memoized'
import useModal, { modalTypes } from '../../../lib/hooks/useModal'

const Modal = () => {
  const { modal: infoModal, modalTrigger: infoModalButton } = useModal({
    button: 'Open Info Modal',
    title: 'Info Modal',
    content: (
      <div>
        <p>Testing this Info modal!</p>
      </div>
    ),
    onClose: () => {
      consola.log('closing info modal')
    },
  })

  const { modal: confirmModal, modalTrigger: confirmModalButton } = useModal({
    button: 'Open Confirm Modal',
    variant: modalTypes.confirm,
    title: 'Confirm Modal',
    content: (
      <div>
        <p>Testing this Confirm modal!</p>
      </div>
    ),
    onClose: () => {
      consola.log('closing confirm modal')
    },
    onSubmit: () => {
      consola.log('submitting confirm modal')
    },
  })

  const digest = () => {
    consola.log('handle modal samples digest')
    consola.log('modals', infoModal, confirmModal)
  }

  return (
    <Memoized deps={[infoModal, confirmModal]} digest={digest}>
      <h2>Modal Samples</h2>
      {infoModalButton}
      {infoModal}
      <br />
      <br />
      {confirmModalButton}
      {confirmModal}
      <br />
      <br />
      <hr />
    </Memoized>
  )
}

export default Modal
