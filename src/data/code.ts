import axios from 'axios'

export async function getCode({ path }: { path: string }): Promise<string> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/api/code`,
      {
        params: { path },
      },
    )

    return response.data as string
  } catch (error) {
    throw new Error('Failed to get code')
  }
}
