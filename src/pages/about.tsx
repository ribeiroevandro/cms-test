import { attributes, html } from '../content/about.md'

export default function About() {
  return (
    <>
      <h1>{attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

