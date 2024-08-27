import React, { PropsWithChildren, useRef } from 'react'

interface EnterToTabFormProps
  extends React.FormHTMLAttributes<HTMLFormElement> {}

export const EnterToTabForm: React.FC<
  PropsWithChildren<EnterToTabFormProps>
> = ({ children, ...rest }) => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const formElements = Array.from(
        formRef.current?.elements || [],
      ) as HTMLElement[]
      const index = formElements.indexOf(document.activeElement as HTMLElement)
      if (index !== -1) {
        const nextElement = formElements[index + 1]
        if (nextElement) {
          nextElement.focus()
        }
      }
    }
  }

  return (
    <form ref={formRef} onKeyDown={handleKeyDown} {...rest}>
      {children}
    </form>
  )
}
