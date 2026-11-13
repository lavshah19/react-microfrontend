import type { ButtonHTMLAttributes } from 'react'

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      style={{ padding: '8px 16px', borderRadius: 6, border: 0, background: '#4f46e5', color: '#fff', cursor: 'pointer', ...props.style }}
    />
  )
}
