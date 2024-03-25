import Header from "../Header/Header";

const ErrorPage = () => {
  return (
    <div className="text-center mt-10 max-w-6xl mx-auto lg:my-8">
      <Header></Header>
      <div className="my-12">
        <h2 className="text-5xl font-bold my-5">404! Page not found</h2>
        <p className="text-2xl font-semibold">This page is not available</p>
      </div>
    </div>
  );
};
export default ErrorPage;
