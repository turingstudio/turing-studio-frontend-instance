import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AppStyled from './app_styles'
import { action } from '../state/actions'
import * as Constants from '../constants/constants'
import * as Components from '../components_runtime'
import { GET_SCREEN } from '../state/action_types'

const App = function () {
  const dispatch = useDispatch()
  const [content, setContent] = useState([])

  const DEFAULT_SCREEN_ID = 1

  const app = useSelector((state) => state.app)
  const { screen } = app

  const reviver = (key, value) => {
    if (typeof value === 'string' && value.startsWith('constants.')) {
      const constantKey = value.substring('constants.'.length)
      return Constants[constantKey]
    }
    if (key === 'ScreenComponent') {
      console.log('REVIVING', value)
      return Components[value]
    }
    if (value === 'undefined') {
      return undefined
    }
    return value
  }

  const deserialize = (json) => {
    const parsed = JSON.parse(json, reviver)
    return parsed
  }

  useEffect(() => {
    dispatch(action({ type: GET_SCREEN, data: DEFAULT_SCREEN_ID }))
  }, [])

  useEffect(() => {
    if (screen && screen.content) {
      console.log('=================== CURRENT SCREEN ID', screen.id)
      const contentDeserialized = deserialize(screen.content).content
      const contentSorted = contentDeserialized.sort((a, b) => (b.orderId < a.orderId ? 1 : -1))
      console.log('CONTENT SORTED', contentSorted)
      setContent(contentSorted)
    }
  }, [screen])

  const renderApp = () => {
    if (content.length) {
      return content.map((item) => {
        const { ScreenComponent, orderId, name, id, height } = item
        return <ScreenComponent key={orderId} orderId={orderId} name={name} id={id} height={height} />
      })
    }
    return <div />
  }

  return <AppStyled.app>{renderApp()}</AppStyled.app>
}

export default App
