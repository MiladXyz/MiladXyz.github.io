'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { Settings } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'

export const LogoutPage: React.FC<{
  settings: Settings
}> = props => {
  const { settings } = props
  const { productsPage } = settings || {}
  const { logout } = useAuth()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout()
        setSuccess('با موفقیت از سیستم خارج شدید.')
      } catch (_) {
        setError('در حال حاضر از سیستم خارج شده اید.')
      }
    }

    performLogout()
  }, [logout])

  return (
    <Fragment>
      {(error || success) && (
        <div>
          <h1>{error || success}</h1>
          <p>
            {'دوست داری بعدش چیکار کنی؟'}
            {typeof productsPage === 'object' && productsPage?.slug && (
              <Fragment>
                {' '}
                <Link href={`/${productsPage.slug}`}>جهت خرید کلیک کنید</Link>
              </Fragment>
            )}
            {` برای ورود مجدد, `}
            <Link href="/login">کلیک کن</Link>
            {'.'}
          </p>
        </div>
      )}
    </Fragment>
  )
}
