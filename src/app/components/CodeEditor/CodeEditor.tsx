'use client'
import { useClipboard } from '@/app/hooks'
import React, { useState } from 'react'

import { Alert, Button, CustomSVG, DotsCodeEditor } from '../ui'
import CustomSelect from '../ui/CustomSelect'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'

interface Props {
  code: string
  inLine: boolean
  // component?: any
}

const CodeBlock = ({ code, inLine }: Props) => {
  const scope = {
    ...React,
    CustomSVG,
    Button,
  }
  const { copyToClipboard, handleChange, codeUpdated, copy } =
    useClipboard(code)

  // Patch to hide warning about defaultProps, discussion on github:https://github.com/recharts/recharts/issues/3615
  const error = console.error
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return
    error(...args)
  }
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      {copy && <Alert content={'Copied in clipboard!'} />}

      <LiveProvider code={codeUpdated} scope={scope} noInline={inLine}>
        <LivePreview />
        <div className="relative rounded-xl p-3 bg-[#1D1F21] my-10 md:w-full pr-10">
          <Button
            customStyles="absolute right-10 top-5"
            label="Copy"
            onClick={copyToClipboard}
          />
          <DotsCodeEditor padding="5" />
          <LiveEditor onChange={handleChange} language="jsx" />
        </div>
        <LiveError className=" bg-gray-800 rounded-md  md:w-1/2 text-center px-3 py-5 shadow-xl text-white" />
      </LiveProvider>
    </div>
  )
}

export default CodeBlock
