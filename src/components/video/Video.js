import React from 'react'
import "./_video.scss"
const Video = () => {
  return (
    <div className='video' onClick={handleVideoClick}>
       <div className='video__top'>
          {/* <img src={medium.url} alt='' /> */}
          <LazyLoadImage src={medium.url} effect='blur' />
          <span className='video__top__duration'>{_duration}</span>
       </div>
       <div className='video__title'>{title}</div>
       <div className='video__details'>
          <span>
             <AiFillEye /> {numeral(views).format('0.a')} Views •{' '}
          </span>{' '}
          <span> {moment(publishedAt).fromNow()} </span>
       </div>
       {!channelScreen && (
          <div className='video__channel'>
             <LazyLoadImage src={channelIcon?.url} effect='blur' />

             <p>{channelTitle}</p>
          </div>
       )}
    </div>
 )
}
}

export default Video
