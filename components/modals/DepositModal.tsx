import { Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import mangoStore from '../../store/state'
import { ModalProps } from '../../types/modal'
import { notify } from '../../utils/notifications'
import Input from '../forms/Input'
import Label from '../forms/Label'
import Button, { LinkButton } from '../shared/Button'
import DepositTokenList from '../shared/DepositTokenList'
import Loading from '../shared/Loading'
import Modal from '../shared/Modal'

function DepositModal({ isOpen, onClose }: ModalProps) {
  const { t } = useTranslation('common')
  const [inputAmount, setInputAmount] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [selectedToken, setSelectedToken] = useState('USDC')
  const [showTokenList, setShowTokenList] = useState(false)

  const handleSelectToken = (token: string) => {
    setSelectedToken(token)
    setShowTokenList(false)
  }

  const handleDeposit = async () => {
    const client = mangoStore.getState().client
    const group = mangoStore.getState().group
    const actions = mangoStore.getState().actions
    const mangoAccount = mangoStore.getState().mangoAccount
    console.log('hi', mangoAccount, group)

    if (!mangoAccount || !group) return

    try {
      setSubmitting(true)
      const tx = await client.tokenDeposit(
        group,
        mangoAccount,
        selectedToken,
        parseFloat(inputAmount)
      )
      notify({
        title: 'Transaction confirmed',
        type: 'success',
        txid: tx,
      })

      await actions.reloadAccount()
      setSubmitting(false)
    } catch (e: any) {
      notify({
        title: 'Transaction failed',
        description: e.message,
        txid: e?.txid,
        type: 'error',
      })
      console.log('Error depositing:', e)
    }

    onClose()
  }

  const handleTokenSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedToken(e.target.value)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Transition
        appear={true}
        className="absolute bottom-0 left-0 z-20 h-full w-full overflow-auto bg-th-bkg-1 p-6 pb-0"
        show={showTokenList}
        enter="transition-all ease-in duration-500"
        enterFrom="max-h-0"
        enterTo="max-h-full"
        leave="transition-all ease-out duration-500"
        leaveFrom="max-h-full"
        leaveTo="max-h-0"
      >
        <h2 className="mb-4 text-center">Select Token</h2>
        <DepositTokenList onSelect={handleSelectToken} />
      </Transition>
      <Transition
        appear={true}
        className="flex h-80 flex-col justify-between"
        show={isOpen}
        enter="transition-all ease-in duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div>
          <h2 className="mb-4 text-center">{t('deposit')}</h2>
          <div className="mb-3 grid grid-cols-2">
            <div className="col-span-2 flex justify-between">
              <Label text={t('token')} />
              <LinkButton
                className="mb-2 no-underline"
                onClick={() => console.log('Set max input amount')}
              >
                <span className="mr-1 font-normal text-th-fgd-3">
                  {t('wallet-balance')}
                </span>
                <span className="text-th-fgd-1">0</span>
              </LinkButton>
            </div>
            <div className="col-span-1 rounded-lg rounded-r-none border border-r-0 border-th-bkg-3 bg-th-bkg-1">
              <button
                onClick={() => setShowTokenList(true)}
                className="default-transition flex h-full w-full items-center rounded-lg rounded-r-none py-2 px-3 text-th-fgd-2 hover:cursor-pointer hover:bg-th-bkg-2 hover:text-th-fgd-1"
              >
                <div className="mr-2.5 flex min-w-[24px] items-center">
                  <Image
                    alt=""
                    width="24"
                    height="24"
                    src={`/icons/${selectedToken.toLowerCase()}.svg`}
                  />
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="text-xl font-bold">{selectedToken}</div>
                  <ChevronDownIcon className="h-6 w-6" />
                </div>
              </button>
            </div>
            <div className="col-span-1">
              <Input
                type="text"
                name="deposit"
                id="deposit"
                className="w-full rounded-lg rounded-l-none border border-th-bkg-3 bg-th-bkg-1 p-3 text-right text-xl font-bold tracking-wider text-th-fgd-1 focus:outline-none"
                placeholder="0.00"
                value={inputAmount}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputAmount(e.target.value)
                }
              />
            </div>
          </div>
          <div className="space-y-2 pt-2">
            <div className="flex justify-between">
              <p>{t('health-impact')}</p>
              <p className="font-bold text-th-green">+X%</p>
            </div>
            <div className="flex justify-between">
              <p>{t('collateral-value')}</p>
              <p className="font-bold text-th-fgd-1">$X,XXX.xx</p>
            </div>
          </div>
        </div>
        <Button
          onClick={handleDeposit}
          className="flex w-full items-center justify-center"
          disabled={!inputAmount}
          size="large"
        >
          {submitting ? <Loading className="mr-2 h-5 w-5" /> : t('deposit')}
        </Button>
      </Transition>
    </Modal>
  )
}

export default DepositModal
