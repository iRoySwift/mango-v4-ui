import { ChevronDownIcon } from '@heroicons/react/solid'
import { Wallet } from '@project-serum/anchor'
import { useWallet } from '@solana/wallet-adapter-react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import mangoStore from '../../store/state'
import { ModalProps } from '../../types/modal'
import { notify } from '../../utils/notifications'
import { floorToDecimal } from '../../utils/numbers'
import { TokenAccount } from '../../utils/tokens'
import ButtonGroup from '../forms/ButtonGroup'
import Input from '../forms/Input'
import Label from '../forms/Label'
import Button, { LinkButton } from '../shared/Button'
import DepositTokenList from '../shared/DepositTokenList'
import Loading from '../shared/Loading'
import Modal from '../shared/Modal'
import { EnterBottomExitBottom, FadeInFadeOut } from '../shared/Transitions'

interface DepositModalProps {
  token?: string
}

type ModalCombinedProps = DepositModalProps & ModalProps

export const walletBalanceForToken = (
  walletTokens: TokenAccount[],
  token: string
): { maxAmount: number; maxDecimals: number } => {
  const group = mangoStore.getState().group
  const bank = group?.banksMap.get(token)

  let walletToken
  if (bank) {
    const tokenMint = bank?.mint
    walletToken = tokenMint
      ? walletTokens.find((t) => t.mint.toString() === tokenMint.toString())
      : null
  }

  return {
    maxAmount: walletToken ? walletToken.uiAmount : 0,
    maxDecimals: bank?.mintDecimals || 6,
  }
}

function DepositModal({ isOpen, onClose, token }: ModalCombinedProps) {
  const { t } = useTranslation('common')
  const [inputAmount, setInputAmount] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [selectedToken, setSelectedToken] = useState(token || 'USDC')
  const [showTokenList, setShowTokenList] = useState(false)
  const [sizePercentage, setSizePercentage] = useState('')

  const { wallet } = useWallet()
  const walletTokens = mangoStore((s) => s.wallet.tokens)

  const tokenMax = useMemo(() => {
    return walletBalanceForToken(walletTokens, selectedToken)
  }, [walletTokens, selectedToken])

  const setMax = useCallback(() => {
    setInputAmount(tokenMax.maxAmount.toString())
  }, [tokenMax])

  const handleSizePercentage = useCallback(
    (percentage: string) => {
      setSizePercentage(percentage)

      let amount = (Number(percentage) / 100) * tokenMax.maxAmount
      if (percentage !== '100') {
        amount = floorToDecimal(amount, tokenMax.maxDecimals)
      }

      setInputAmount(amount.toString())
    },
    [tokenMax]
  )

  const handleSelectToken = (token: string) => {
    setSelectedToken(token)
    setShowTokenList(false)
  }

  const handleDeposit = async () => {
    const client = mangoStore.getState().client
    const group = mangoStore.getState().group
    const actions = mangoStore.getState().actions
    const mangoAccount = mangoStore.getState().mangoAccount.current

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
      actions.fetchWalletTokens(wallet!.adapter as unknown as Wallet)
      setSubmitting(false)
    } catch (e: any) {
      notify({
        title: 'Transaction failed',
        description: e.message,
        txid: e?.signature,
        type: 'error',
      })
      console.error('Error depositing:', e)
    }

    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="h-96">
        <EnterBottomExitBottom
          className="absolute bottom-0 left-0 z-20 h-full w-full overflow-auto bg-th-bkg-1 p-6"
          show={showTokenList}
        >
          <h2 className="mb-4 text-center">{t('select-token')}</h2>
          <DepositTokenList onSelect={handleSelectToken} />
        </EnterBottomExitBottom>
        <FadeInFadeOut
          className="flex h-full flex-col justify-between"
          show={isOpen}
        >
          <div>
            <h2 className="mb-4 text-center">{t('deposit')}</h2>
            <div className="grid grid-cols-2 pb-6">
              <div className="col-span-2 flex justify-between">
                <Label text={t('token')} />
                <LinkButton className="mb-2 no-underline" onClick={setMax}>
                  <span className="mr-1 text-sm font-normal text-th-fgd-4">
                    {t('wallet-balance')}
                  </span>
                  <span className="text-th-fgd-1 underline">
                    {floorToDecimal(tokenMax.maxAmount, tokenMax.maxDecimals)}
                  </span>
                </LinkButton>
              </div>
              <div className="col-span-1 rounded-lg rounded-r-none border border-r-0 border-th-bkg-4 bg-th-bkg-1">
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
                  className="w-full rounded-lg rounded-l-none border border-th-bkg-4 bg-th-bkg-1 p-3 text-right text-xl font-bold tracking-wider text-th-fgd-1 focus:outline-none"
                  placeholder="0.00"
                  value={inputAmount}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setInputAmount(e.target.value)
                  }
                />
              </div>
              <div className="col-span-2 mt-2">
                <ButtonGroup
                  activeValue={sizePercentage}
                  onChange={(p) => handleSizePercentage(p)}
                  values={['10', '25', '50', '75', '100']}
                  unit="%"
                />
              </div>
            </div>
            {/* <div className="space-y-2 border-y border-th-bkg-3 py-4">
            <div className="flex justify-between">
              <p>{t('health-impact')}</p>
              <p className="text-th-green">+12%</p>
            </div>
            <div className="flex justify-between">
              <p>{t('deposit-value')}</p>
              <p className="text-th-fgd-1">$1,000.00</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <p>
                  {t('token-collateral-multiplier', { token: selectedToken })}
                </p>
                <InfoTooltip content={t('collateral-multiplier-desc')} />
              </div>
              <p className="text-th-fgd-1">0.8x</p>
            </div>
            <div className="flex justify-between">
              <p>{t('collateral-value')}</p>
              <p className="text-th-fgd-1">$800.00</p>
            </div>
          </div> */}
          </div>
          <Button
            onClick={handleDeposit}
            className="flex w-full items-center justify-center"
            disabled={!inputAmount}
            size="large"
          >
            {submitting ? <Loading className="mr-2 h-5 w-5" /> : t('deposit')}
          </Button>
        </FadeInFadeOut>
      </div>
    </Modal>
  )
}

export default DepositModal
