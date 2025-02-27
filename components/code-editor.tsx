"use client"

import { useEffect, useState } from "react"
import Editor from "@monaco-editor/react"

interface CodeEditorProps {
  language: string
  value: string
  onChange: (value: string | undefined) => void
}

export default function CodeEditor({ language, value, onChange }: CodeEditorProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Editor
      height="100%"
      defaultLanguage={language}
      defaultValue={value}
      onChange={onChange}
      theme="vs-dark"
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        lineNumbers: "on",
        wordWrap: "on",
        automaticLayout: true,
      }}
    />
  )
}

