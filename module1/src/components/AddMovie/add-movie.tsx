export interface IAddMovieProps {
  onAddMovie: Function;
}

export default function AddMovie({ onAddMovie }: IAddMovieProps) {
  let handleAddMovie = () => {
    onAddMovie();
  };
  return (
    <>
      <button onClick={handleAddMovie}>SEARCH</button>
    </>
  );
}
