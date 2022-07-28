import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

function QuoteDetail() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const { quote_id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes/${quote_id}`)
      .then((res) => res.data)
      .then((data) => setQuote(data[0]))
      .then(() => setLoading(false));
  }, [quote_id]);
  return (
    <div>
      {loading && <Loading />}
      {quote && (
        <div>
          <h3>{quote.author}</h3>
          {quote.quote}
          <h4>{quote.series}</h4>
        </div>
      )}
    </div>
  );
}

export default QuoteDetail;
