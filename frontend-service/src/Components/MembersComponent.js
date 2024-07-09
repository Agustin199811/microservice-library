import React, { useEffect, useState } from "react";
import libraryServiceInstance from "../Service/LibraryService";

export default function MembersComponent() {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await libraryServiceInstance.getAllMembers();
      console.log(response.data);
      setMembers(response.data); // Actualiza el estado con los datos recibidos
    } catch (error) {
      setError(error.message); // Maneja el error estableciendo el estado de error
      console.error("Error fetching members:", error);
    }
  };

  return (
    <div>
      {error && <p>Error fetching customers: {error}</p>}
      <ul>
        {members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
}
