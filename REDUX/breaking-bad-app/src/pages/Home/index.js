import { useEffect } from "react";
import "./styles.css";
import Masonry from "react-masonry-css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const page = useSelector((state) => state.characters.page);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <Link to={`/character/${character.char_id}`}>
              <img
                src={character.img}
                alt={character.name}
                className="character"
              />
              <h3 className="character_name">{character.name}</h3>
            </Link>
          </div>
        ))}
      </Masonry>
      {status === "loading" && <Loading />}
      {hasNextPage && status === "succeeded" && (
        <button
          onClick={() => dispatch(fetchCharacters(page))}
          className="button"
        >
          Load More ({page})
        </button>
      )}

      {!hasNextPage && <p>There is nothing to be shown</p>}
    </div>
  );
}

export default Home;
