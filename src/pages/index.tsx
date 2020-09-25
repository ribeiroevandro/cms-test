import { attributes, html } from '../content/home.md'

export default function Home() {
  return (
    <>
      <h1>{attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

