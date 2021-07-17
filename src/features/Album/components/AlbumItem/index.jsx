import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

AlbumItem.propTypes = {
    album: PropTypes.object.isRequired,
};

function AlbumItem({ album }) {
    return (
        <div className="album-item">
            <div className="album-item_thumbnail">
                <img src={album.thumbnailUrl} alt={album.name} />

                {/* Other controll */}
            </div>

            <p className="album-item_name">{album.name}</p>
        </div>
    );
}

export default AlbumItem;