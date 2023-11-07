import data from "../data/songs.json";
export  const Home =  () => {

  const songs = data.songs
  console.log(songs)

    const renderSongs = () => {
      return songs.map(({ id, title }) => (
        <li key={id}><a href="">{title}</a></li>
      ));
    }
  return (
    <>
      <div>
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        {renderSongs()}
      </div>
    </>
  );
}


