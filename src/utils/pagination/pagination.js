// default page number and page limit should non is provided in the query params
// All documents on the db are returned defaultly should page number and limits are not provided
const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 0;

function getPagination(query) {
  // Math.abs method ensures no negative number is passed in the query params
  // by converting all negative numbers passed to a positive number
  // and also converts all string of numbers to real numbers
  const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
  const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;

  // the skip value calculates the numbers of data to skip on the database collection, depending on the page number provided.
  // it ensures that not only the first sets of data in relations to the limits provided are sent back to the user as the pages changes
  const skip = (page - 1) * limit;

  return {
    skip,
    limit,
  };
}

module.exports = {
  getPagination,
};
