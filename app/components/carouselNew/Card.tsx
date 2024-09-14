import React from 'react'

interface CardProps {
  title: string
  content: string
}

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-2 h-full">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}