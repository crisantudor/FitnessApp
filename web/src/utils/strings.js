const daysAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    
    // Calculate the difference in time (in milliseconds)
    const differenceInTime = now - date;
    
    // Convert the time difference from milliseconds to days
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    
    return `${differenceInDays} days ago`;
  };


  export {
    daysAgo
  }