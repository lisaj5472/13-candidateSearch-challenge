import RemoveButton  from '../components/RemoveButton';
import { useEffect, useState } from 'react';
import { Candidates } from '../interfaces/Candidates';


const SavedCandidates = () => {
    const [candidates, setCandidates] = useState<Candidates[]>([]);

    useEffect(() => {
      const saved = localStorage.getItem('savedCandidates');
      if (saved) {
        setCandidates(JSON.parse(saved));
      }
    }, []);

  function handleRemove(): void {
    localStorage.removeItem('potentialCandidates');
  }
   
  return (
    <>
      <h1>Potential Candidates</h1>
      {candidates.length === 0 ? (
        <p>No candidates saved</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>GitHub Profile</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td><img src={candidate.avatar_url} alt={candidate.login} /></td>
                <td>{candidate.name ?? candidate.login}</td>
                <td>{candidate.location ?? 'N/A'}</td>
                <td>{candidate.email ?? 'N/A'}</td>                
                <td>{candidate.company ?? 'N/A'}</td>
                <a href={candidate.html_url} target="_blank">GitHub Profile</a>
              </tr>
            ))}
          </tbody>
        </table>)}
      <RemoveButton onClick={handleRemove} />
    </>
  );
}



export default SavedCandidates;
