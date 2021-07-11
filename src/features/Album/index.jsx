import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Chất Đến Từng Bài Hát',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/e/f/0/bef0285713b3c8c70cc425b6f7df671d.jpg',
        },
        {
            id: 2,
            name: 'RapCaviar',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/2/7/9/e2797d9e39fc6843d9bf8e346a1e81ac.jpg',
        },
        {
            id: 3,
            name: 'Nhạc Hoa Chất Nhất',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/3/9/4/3394e271595083a11325764a9c5a5605.jpg',
        },
        {
            id: 4,
            name: 'Rap Việt Chất Nhất',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/4/5/d/e45d8d05c062bd8f827fd0646af75313.jpg',
        },
        {
            id: 5,
            name: 'Ruột Truyền Thống, Vỏ Hiện Đại!',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/9/7/8/e9789f3aafc3a52f077c12cb3453d1d7.jpg',
        },
    ]
    return (
        <div>
            <h2>NGHE GÌ HÔM NAY?</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;