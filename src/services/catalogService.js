import axios from 'axios'
import mockCatalog from '../../tests/mocks/catalog.json'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export async function fetchCatalog() {
  try {
    // 👇 Uncomment this to start making the actual request
    // const response = await axios.get(`${API_BASE_URL}/catalog`)
    // return response.data

    // ✅ Return mock data for now
    return mockCatalog //remove this line when stop using mock
  } catch (error) {
    console.error('Failed to fetch catalog:', error)
    throw error
  }
}
