import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import QuoteItem from "../../components/QuoteItem";
import { fetchQuotes } from "../../redux/quotesSlice";

function Quotes() {
  const quotes = useSelector((state) => state.quotes.items);
  const status = useSelector((state) => state.quotes.status);
  const error = useSelector((state) => state.quotes.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuotes());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <div>
      <h1>Quotes ({quotes.length})</h1>
      {status === "loading" && <Loading />}
      {status === "succeeded" &&
        quotes.map((item) => <QuoteItem key={item.quote_id} item={item} />)}
    </div>
  );
}

export default Quotes;
