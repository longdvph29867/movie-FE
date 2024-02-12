
type Props = {
  contentButton?: string;
}
const CustomButton = ({ contentButton }: Props) => {
  return (
    <button className="font-semibold text-sm text-white uppercase py-2.5 px-6 rounded-full bg-[#F27221] ml-3">{contentButton}</button>
  )
}

export default CustomButton;