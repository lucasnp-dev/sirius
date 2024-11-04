import { promises as fs } from 'fs'
import { NextRequest } from 'next/server'
import path from 'path'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const query = searchParams.get('path')

  try {
    // Caminho absoluto para o arquivo que você quer ler
    const filePath = path.join(
      process.cwd(),
      'src',
      'components',
      'ui',
      `${query}.tsx`,
    )

    // Lendo o arquivo com fs.promises.readFile
    const fileContents = await fs.readFile(filePath, 'utf8')

    // Respondendo com o conteúdo do arquivo
    return new Response(fileContents, {
      status: 200,
    })
  } catch (error) {
    // Se ocorrer um erro, responder com o código 500
    return new Response('ain', {
      status: 500,
    })
  }
}
