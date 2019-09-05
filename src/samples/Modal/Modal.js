import React from 'react'
import Memoized from '../../components/layout/Memoized/Memoized'
import { useModal, modalTypes } from '../../lib/hooks'
import { consoleBadge, consoleStyles } from '../../lib'

const con = consoleBadge('Modal', consoleStyles.white)

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
      con.log('closing info modal')
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
      con.log('closing confirm modal')
    },
    onSubmit: () => {
      con.log('submitting confirm modal')
    },
  })

  const digest = () => {
    con.log('handle modal samples digest')
    con.log('modals', infoModal, confirmModal)
  }

  return (
    <Memoized deps={[infoModal, confirmModal]} digest={digest}>
      <h2>Modal Samples</h2>
      {infoModalButton}
      {infoModal}
      <br/>
      <br/>
      {confirmModalButton}
      {confirmModal}
      <br/>
      <br/>
      <hr/>
    </Memoized>
  )
}

export default Modal
