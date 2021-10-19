import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import TextField from './TextField'
import { FIELDS, localStorageId } from '../constants'
import { validator } from '../utils'

const Edit = () => {
  const history = useHistory()
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    year: '',
    portfolio: ''
  })
  const [isCreatedUser, setIsCreatedUser] = useState(false)

  const validatorConfig = {
    name: {
      isRequired: {
        message: `Поле 'Имя' обязательно для заполнения`
      }
    },
    surname: {
      isRequired: {
        message: `Поле 'Фамилия' обязательно для заполнения`
      }
    },
    year: {
      isRequired: {
        message: `Поле 'Год рождения' обязательно для заполнения`
      },
      isBirthDate: {
        message: `Поле 'Год рождения' не корректно`
      }
    },
    portfolio: {
      isRequired: {
        message: `Поле 'Портфолио' обязательно для заполнения`
      },
      isUrl: {
        message: `Поле 'Портфолио' должно быть ссылкой`
      }
    }
  }

  useEffect(() => {
    const data = localStorage.getItem(localStorageId)
    if (data) {
      setFormData(JSON.parse(data))
      setIsCreatedUser(true)
    }
  }, [])

  useEffect(() => {
    validate()
  }, [formData])

  const validate = () => {
    const errors = validator(formData, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = ({ target }) => {
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    localStorage.setItem(localStorageId, JSON.stringify(formData))
   alert('обновлено')
    history.push('/')
  }

  const isValid = Object.keys(errors).length === 0

  return (
    <div className='col-md-6 offset-md-3'>
      <h1>{ isCreatedUser ? 'Редактировать' : 'Создать' }</h1>
      <form onSubmit={handleSubmit}>
        {
          Object.keys(formData).map(type => (
            <TextField
              key={type}
              label={FIELDS[type].label}
              type={FIELDS[type].type}
              name={type}
              value={formData[type]}
              error={errors[type]}
              onChange={handleChange}
            />
          ))
        }
        { isCreatedUser && (
          <Link
            to='/'
            className='btn btn-secondary me-2'
          >
            Назад
          </Link>
        ) }
        <button
          type='submit'
          disabled={!isValid}
          className='btn btn-primary'
        >
          { isCreatedUser ? 'Обновить' : 'Создать' }
        </button>
      </form>
    </div>
  )
}

export default Edit
