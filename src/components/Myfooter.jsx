

function CustomFooter(){
    return (
      <footer className="d-flex bg-dark">
        <span className="text-white m-auto">
          <strong>EPICODE</strong> - Copyright {new Date().getFullYear()}
        </span>
      </footer>
    );
  };
  
export default CustomFooter