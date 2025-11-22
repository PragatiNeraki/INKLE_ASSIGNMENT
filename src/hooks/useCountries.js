import { useState, useEffect } from 'react'
import { getCountries } from '../api/countriesApi'

export const useCountries = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await getCountries()
        const mappedCountries = response.data.map(country => ({
          label: country.name || country.label || country,
          value: country.id || country.value || country
        }))
        setCountries(mappedCountries)
      } catch (err) {
      }
    }

    fetchCountries()
  }, [])

  return countries
}
