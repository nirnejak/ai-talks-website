import * as React from "react"

interface Props {
  title: string
  subtitle: string
  imageUrl: string
}

const TalkCard: React.FC<Props> = ({ title, subtitle, imageUrl }) => {
  return (
    <div>
      <div
        className="mb-3 flex min-h-[300px] rounded-xl"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      >
        <h3 className="mt-auto font-heading">{title}</h3>
      </div>
      <p>{subtitle}</p>
    </div>
  )
}

export default TalkCard
