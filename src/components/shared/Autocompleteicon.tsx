interface AutocompleteIcon {
  size: number;
}

const AutocompleteIcon: React.FC<AutocompleteIcon> = ({ size }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <path d="M4.38 5h1V4h1V3h-1V2h-1v1h-1v1h1v1zm8 4h-1v1h-1v1h1v1h1v-1h1v-1h-1V9zM14 2V1h-1v1h-1v1h1v1h1V3h1V2h-1zm-2.947 2.442a1.49 1.49 0 0 0-2.12 0l-7.49 7.49a1.49 1.49 0 0 0 0 2.12c.59.59 1.54.59 2.12 0l7.49-7.49c.58-.58.58-1.53 0-2.12zm-8.2 8.9c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l6.46-6.46.71.71-6.46 6.46zm7.49-7.49l-.32.32-.71-.71.32-.32c.2-.2.51-.2.71 0 .19.2.19.52 0 .71z" />
      </svg>
    </>
  );
};
export default AutocompleteIcon;
