'use client'

import React, { Fragment, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

import { Button } from '../../../_components/Button'
import { Input } from '../../../_components/Input'
import { Message } from '../../../_components/Message'

import classes from './index.module.scss'

type FormData = {
  email: string
}

export const RecoverPasswordForm: React.FC = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = useCallback(async (data: FormData) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/forgot-password`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (response.ok) {
      setSuccess(true)
      setError('')
    } else {
      setError(
        'هنگام تلاش برای ارسال ایمیل بازنشانی رمز عبور برای شما مشکلی وجود داشت. لطفا دوباره امتحان کنید.',
      )
    }
  }, [])

  return (
    <Fragment>
      {!success && (
        <React.Fragment>
          <p>ایمیل ثبت شده خود را وارد کنید. کد بازیابی حساب کاربری برای شما ارسال خواهد شد.</p>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <Message error={error} className={classes.message} />
            <Input
              name="ایمیل"
              label="ایمیل"
              required
              register={register}
              error={errors.email}
              type="email"
            />
            <Button
              type="submit"
              appearance="primary"
              label="بازیابی رمز ورود"
              className={classes.submit}
            />
          </form>
        </React.Fragment>
      )}
      {success && (
        <React.Fragment>
          <h1>درخواست ثبت شد</h1>
          <p>
            ایمیل خود را برای یافتن پیوندی بررسی کنید که به شما امکان می دهد رمز عبور خود را به طور
            ایمن بازنشانی کنید.
          </p>
        </React.Fragment>
      )}
    </Fragment>
  )
}
