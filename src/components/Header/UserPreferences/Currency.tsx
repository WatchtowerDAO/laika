import React, { ReactElement, ChangeEvent } from 'react'
import { useSiteMetadata } from '@hooks/useSiteMetadata'
import { useUserPreferences } from '@context/UserPreferences'
import Input from '@shared/FormInput'

export default function Currency(): ReactElement {
  const { currency, setCurrency } = useUserPreferences()
  const { appConfig } = useSiteMetadata()

  return (
    <li>
      <Input
        name="currency"
        label="Currency"
        help="Your conversion display currency."
        type="select"
        options={appConfig.currencies}
        value={currency}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setCurrency(e.target.value)
        }
        size="small"
      />
    </li>
  )
}
