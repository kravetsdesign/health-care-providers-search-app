import classes from './SearchResults.module.css';
import ProviderListing from './ProviderListing';

const SearchResults = ({ searchResults }) => {
  const allResults = searchResults.results;

  console.log('SearchResults results: ', allResults);

  return (
    <div className={classes.resultsContainer}>
      <h2>Results</h2>
      <div className={classes.resultsWrapper}>
        {allResults.map((result) => (
          <ProviderListing key={result.number} providerInfo={result} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
