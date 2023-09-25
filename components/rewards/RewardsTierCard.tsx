import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'react-i18next'
import { ReactNode } from 'react'
import Badge from './Badge'

const RewardsTierCard = ({
  desc,
  icon,
  name,
  setShowLeaderboards,
  status,
}: {
  desc: string
  icon: ReactNode
  name: string
  setShowLeaderboards: (x: string) => void
  status?: string
}) => {
  const { t } = useTranslation('rewards')
  return (
    <button
      className="w-full rounded-lg bg-th-bkg-2 p-4 text-left focus:outline-none md:hover:bg-th-bkg-3"
      onClick={() => setShowLeaderboards(name)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-th-bkg-1">
            {icon}
          </div>
          <div>
            <h3>{t(name)}</h3>
            <p>{desc}</p>
          </div>
        </div>
        <div className="flex items-center pl-4">
          {status ? (
            <Badge
              label={status}
              borderColor="var(--success)"
              shadowColor="var(--success)"
            />
          ) : null}
          <ChevronRightIcon className="ml-4 h-6 w-6 text-th-fgd-3" />
        </div>
      </div>
    </button>
  )
}

export default RewardsTierCard
