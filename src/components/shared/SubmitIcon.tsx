interface ISubmitIconProps {
  size: number;
  color: string;
}

const SubmitIcon: React.FC<ISubmitIconProps> = ({ size, color }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          fill={color}
          d="M4 0v6h-3v10h14v-16h-11zM12 11h-5v2l-3-2.5 3-2.5v2h4v-3h1v4z"
        ></path>
      </svg>
    </>
  );
};
export default SubmitIcon;
