/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { fetchDataFromApi } from '../utils/api'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setData(null)
    setError(null)
    setLoading('loading....')

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false)
        setData(res)
      })
      .catch((err) => {
        setLoading(false)
        setError('Something went wrong')
      })
  }, [url])
  return { data, error, loading }
}

export default useFetch
