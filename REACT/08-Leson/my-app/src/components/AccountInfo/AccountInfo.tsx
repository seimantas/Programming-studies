export const AccountInfo = ({ children, className }: any) => {
  const { account } = children.props;
  console.log({ account });

  return (
    <div className={className}>
      <p>{account.name}</p>
      <p>{account.birthdate.toLocaleString()}</p>
    </div>
  );
};
