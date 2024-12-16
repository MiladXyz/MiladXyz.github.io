import React from 'react'
import { Metadata } from 'next'

import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { ResetPasswordForm } from './ResetPasswordForm'

import classes from './index.module.scss'

export default async function ResetPassword() {
  return (
    <div className={classes.resetPassword}>
      <h1>بازیابی رمز ورود</h1>
      <p>لطفا رمز ورود جدیدی وارد کنید</p>
      <ResetPasswordForm />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'بازیابی رمزعبور',
  description: 'رمزعبور جدید وارد کنید',
  openGraph: mergeOpenGraph({
    title: 'بازیابی رمز ورود',
    url: '/reset-password',
  }),
}
