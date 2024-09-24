import { FC } from "react";

type ContactLayoutProps = {
  children: React.ReactNode;
};

const ContactLayout: FC<ContactLayoutProps> = ({ children }) => {
  return (
    <div>
      <hr />
      Contact layout
      <hr />
      {children}
    </div>
  );
};

export default ContactLayout;
