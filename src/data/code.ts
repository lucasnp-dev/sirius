import axios from 'axios'

export async function getCode({ path }: { path: string }): Promise<string> {
  try {
    console.log(path)
    const response = await axios.get('http://localhost:3000/api/code', {
      params: { path },
    })

    console.log(response.data)
    return response.data as string
  } catch (error) {
    console.log(error)
    throw new Error('Failed to get code')
  }
}
