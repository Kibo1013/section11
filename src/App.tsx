import { UserCard } from "./components/UserCard";
import "./styles.css";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>Get User Date</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>Error!!!!</p>
      ) : loading ? (
        <p>Loading......</p>
      ) : (
        <>
          {userProfiles.map((userProfilea) => (
            <UserCard key={userProfilea.id} userProfile={userProfilea} />
          ))}
        </>
      )}
    </div>
  );
}
