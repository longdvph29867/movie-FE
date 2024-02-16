type Props={
  content ?:string
}
const SpanContent = ({content}:Props) => {

  return (
    <li className="flex items-center sm:ml-4">
    <span className="w-1 h-1 rounded-full bg-[#ABB7C4] mr-1.5" />
    <span>{content}</span>
  </li>
  )
}

export default SpanContent
