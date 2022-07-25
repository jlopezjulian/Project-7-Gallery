//A NotFound component for displaying a user-friendly message when the search returns no results.

import React from 'react';

const PageNotFound = () => {
    return (
        <div className="not-found">
            <h3>No Results Found</h3>
                <p>That search did not return any results. Please try again.</p>
        </div>
    )
}

export default PageNotFound