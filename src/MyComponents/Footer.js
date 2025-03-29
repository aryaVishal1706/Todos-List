import React from 'react';

const Footer = React.memo(() => {
  const footerStyle = {
    position: 'relative',
    bottom: '0',
    width: '100%',
    backgroundColor: '#212529', // Dark theme color
    color: 'white',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 'bold'
  };
  return (
    <div className='text-center bg-dark text-light py-3' style={footerStyle}>
      {/* footer works! */}
      Copyright &copy; MyTodosList.com
    </div>
  )
})

export default Footer
