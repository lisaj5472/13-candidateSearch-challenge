import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidates }  from '../interfaces/Candidates';
import AddButton from '../components/AddButton';
import SkipButton from '../components/SkipButton';



const CandidateSearch = () => {

  const [candidates, setCandidates] = useState<Candidates[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidates[]>([]);

  useEffect(() => {
    searchGithub().then((data) => {
      const usernames = data.map((user: {login: string}) => user.login);
      Promise.all(usernames.map(searchGithubUser)).then((details) => {
        setCandidates(details);
      });
    });

    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  function handleAdd(): void {
    const candidate = candidates[currentIndex];
    const updatedSaved = [...savedCandidates, candidate];
    setSavedCandidates(updatedSaved);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedSaved));
    setCurrentIndex((prev) => prev + 1);
  }

  function handleSkip(): void {
    setCurrentIndex((prev) => prev + 1);
  }

  const currentCandidate = candidates[currentIndex];

  if (!currentCandidate) {
    return <div>No more candidates</div>;
  } 

  return(
    <div>
      <h1>Candidate Search</h1>
      <h2>{currentCandidate.name ?? currentCandidate.login}</h2>
      <div>
        <img src={currentCandidate.avatar_url} alt={currentCandidate.login} />
        <p>Username: {currentCandidate.login}</p>
        <p>Location: {currentCandidate.location}</p>
        <p>Email: {currentCandidate.email ?? 'N/A'}</p>
        <p>Company: {currentCandidate.company ?? 'N/A'}</p>
        <a href={currentCandidate.html_url} target="_blank">GitHub Profile</a>
        </div>
        <AddButton onClick={handleAdd} />
        <SkipButton onClick={handleSkip} />

    </div>
  )
}





export default CandidateSearch;
