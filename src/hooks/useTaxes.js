import { useState, useEffect } from 'react'
import { getTaxes, updateTax } from '../api/taxesApi'

export const useTaxes = () => {
  const [taxes, setTaxes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTaxes = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await getTaxes()
        setTaxes(response.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTaxes()
  }, [])

  const saveTax = async (id, payload) => {
    try {
      const response = await updateTax(id, payload)
      setTaxes(prevTaxes =>
        prevTaxes.map(tax => tax.id === id ? response.data : tax)
      )
      return response.data
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  return { taxes, loading, error, saveTax }
}
