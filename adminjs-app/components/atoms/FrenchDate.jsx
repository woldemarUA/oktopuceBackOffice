import React from 'react';

const FrenchDate = ({ date }) => {
  // Create a new date object if the date is a string or use the date object directly
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  // Format the date using the French locale
  const formattedDate = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(dateObj);

  // Output the formatted date in the desired structure "jour - mois - année"
  const [day, month, year] = formattedDate.split(' ');
  const displayDate = `${day} - ${month} - ${year}`;

  return <span>{displayDate}</span>;
};

export default FrenchDate;
