export const getCodeSnippets = async () => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL!, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
