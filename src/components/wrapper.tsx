interface WrapperProps {
  children: React.ReactNode;
  customStyling?: string;
}

const Wrapper = ({ children, customStyling }: WrapperProps) => {
  return (
    <div className={`mx-auto w-11/12 max-w-screen-2xl ${customStyling}`}>
      {children}
    </div>
  );
};

export default Wrapper;
