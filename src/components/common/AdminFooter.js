const AdminFooter = () => {
  return (
    <div className='main-footer pt-3'>
      <div className='container'>
        <hr />
        {/* All right reserved / copy rights */}
        <div className='row d-flex justify-content-center'>
          <p>
            &copy;Konbini {new Date().getFullYear()} || All Rights Reserved ||
            Terms of service || Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminFooter;
