import { NextRequest, NextResponse } from 'next/server'

import findFunctionEndIndex from '@/app/utils/readFile'
import fs from 'fs/promises'
import getConfig from 'next/config'
import path from 'path'
const { serverRuntimeConfig } = getConfig()

export async function POST(request: NextRequest): Promise<string[] | any> {
  try {
    const filePath = await request.json()
    const file = await fs.readFile(
      path.join(serverRuntimeConfig.PROJECT_ROOT, filePath),
    )
    const fileContent = file.toString('utf-8')

    const functionDeclarations =
      fileContent.match(
        /(?:function|const|let|var)\s+([a-zA-Z_]\w*)\s*\(|\b([a-zA-Z_]\w*)\s*=\s*\(/g,
      ) || []

    const functionCodes = functionDeclarations
      .map((declaration) => {
        const match = declaration.match(
          /(?:function|const|let|var)\s+([a-zA-Z_]\w*)\s*\(|\b([a-zA-Z_]\w*)\s*=\s*\(/,
        )
        const functionName = match ? match[1] || match[2] : null
        if (functionName) {
          const startIndex = fileContent.indexOf(declaration)
          const endIndex = findFunctionEndIndex(fileContent, startIndex)
          return fileContent.substring(startIndex, endIndex)
        }
        return ''
      })
      .filter(Boolean)

    return NextResponse.json(functionCodes)
  } catch (error: any) {
    console.error('Error reading file:', error.message)
    return NextResponse.json(error)
  }
}
