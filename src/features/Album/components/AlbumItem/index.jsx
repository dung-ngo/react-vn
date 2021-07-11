import React from 'react';
import PropTypes from 'prop-types';

AlbumItem.propTypes = {
    album: PropTypes.object.isRequired,
};

function AlbumItem({ album }) {
    return (
        <div className="album-item">
            <p>{album.name}</p>
        </div>
    );
}

export default AlbumItem;