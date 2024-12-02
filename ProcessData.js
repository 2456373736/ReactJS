import React from 'react'

export default function ProcessData() {
    const ProcessData = (users) => {
        return users.map(({ name, age, location, ...rest }) => 
          `Name: ${name} Age: ${age} Location: ${location}`
        );
      };
      
      
      const users = [
        { name: "Alice", age: 25, location: "New York" },
        { name: "Bob", age: 30, location: "Los Angeles" },
        { name: "Charlie", age: 22, location: "Chicago" },
      ];
      
      const result = ProcessData(users);

  return (
    <>
   { console.log(result)}
    </>
  )
}

