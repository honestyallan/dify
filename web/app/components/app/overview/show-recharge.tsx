'use client'
import type { FC } from 'react'
import React from 'react'
import s from '../chat/style.module.css'
import Modal from '@/app/components/base/modal'
import Button from '@/app/components/base/button'

import './style.css'
type RechargeProps = {
  isShow: boolean
  onClose: () => void
}
const showRechargeModal: FC<RechargeProps> = ({
  isShow,
  onClose,
}) => {
  function membership(): void {
    let mStation = localStorage.getItem('mStation')
    if (!mStation)
      mStation = 'https://haoyaai.com'
    window.open(`${mStation}/#/userInfo`, '_blank')
  }

  return <Modal isShow={isShow} onClose={onClose}>
    <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '1rem', background: 'none', border: 'none' }}>
      ✕
    </button>
    <div className={s.logo} />
    <div className='mt-5 text-sm font-medium text-gray-500'>今日體驗次數已用完，可以通過邀請好友的方式獲得更多次數。 也可以點擊下方按鈕直接開通應用中心會員</div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
      <Button className='w-32' onClick={membership}>
        邀請好友
      </Button>
      <Button type='primary' className='w-32' onClick={membership}>
        開通會員
      </Button>
    </div>
    <a href="#" onClick={() => window.location.reload()}>
      <div style={{ textAlign: 'center', color: '#87CEFA', textDecoration: 'underline', marginTop: '20px' }}>我已開通會員</div>
    </a>
  </Modal>
}

export default showRechargeModal
