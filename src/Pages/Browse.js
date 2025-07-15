import React, { useState, useEffect, useRef } from 'react';
import './Styles/Browse.css';
import { useLocation } from 'react-router-dom';
import ProfilePicker from '../Components/ProfilePicker';
import BrowserNav from '../Components/BrowserNav';
import VideoCard from '../Components/VideoCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Addtolist from '../Components/Addtolist';
import Removefromlist from '../Components/Removefromlist';
import MyList from '../Components/MyList';

export default function Browse() {
  const [profilePick, setProfilePick] = useState(true);
  const [selectedProfile, setSelectedProfile] = useState('');
  const [selectedProfileName, setSelectedProfileName] = useState('');
  const [profilesNavBar, setProfilesNavBar] = useState([]);
  const [myList, setMyList] = useState(false);
  const [isInList, setIsInList] = useState(false);

  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (profilePick) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, [profilePick]);

  function showProfilePick() {
    setProfilePick(true);
  }

  function hideProfilePick() {
    setProfilePick(false);
  }

  function showMyList() {
    setMyList(true);
  }

  function hideMyList() {
    setMyList(false);
  }

  const [nowPlayingData, setNowPlayingData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const [newReleasesData, setNewReleasesData] = useState([]);
  const [originalsData, setOriginalsData] = useState([]);

  useEffect(() => {
    fetchNowPlaying();
    fetchTopRated();
    fetchNewRelease();
    fetchOrginals();
  }, []);

  function checkInList() {
    return fetch(`http://localhost:8080/api/list/check/${email}/${selectedProfileName}/Saw X`)
      .then(response => response.json())
      .then(data => {
        setIsInList(data);
      });
  }

  const fetchNowPlaying = () => { //Retrive suggestions for NowPlaying
    fetch(`http://localhost:8080/api/videoSuggestions/Now Playing`)
      .then(response => response.json())
      .then(data => {
        setNowPlayingData(data);
      });
  };

  const fetchTopRated = () => { //Retrive suggestions for TopRated
    fetch(`http://localhost:8080/api/videoSuggestions/Top Rated Movies`)
      .then(response => response.json())
      .then(data => {
        setTopRatedData(data);
      });
  };

  const fetchNewRelease = () => { //Retrive suggestions for NewRelease
    fetch(`http://localhost:8080/api/videoSuggestions/New Releases`)
      .then(response => response.json())
      .then(data => {
        setNewReleasesData(data);
      });
  };

  const fetchOrginals = () => { //Retrive suggestions for Originals
    fetch(`http://localhost:8080/api/videoSuggestions/Originals`)
      .then(response => response.json())
      .then(data => {
        setOriginalsData(data);
      });
  };

  return (
    <div className="browse">
      {profilePick && (
        <ProfilePicker
          hideProfilePick={hideProfilePick}
          setSelectedProfile={setSelectedProfile}
          email={email}
          setProfilesNavBar={setProfilesNavBar}
          setSelectedProfileName={setSelectedProfileName}
        />
      )}
      <div className="browse-container">
        <BrowserNav
          selectedProfile={selectedProfile}
          showProfilePick={showProfilePick}
          profilesNavBar={profilesNavBar}
          setSelectedProfile={setSelectedProfile}
          showMyList={showMyList}
          hideMyList={hideMyList}
          setSelectedProfileName={setSelectedProfileName}
        />
        {myList && <MyList email={email} selectedProfileName={selectedProfileName} />}
        <div className="main-hero-playback">
          <video
            src="./Assets/video-preview.mp4"
            autoPlay
            loop
            muted
            controls={false}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          ></video>
          <div className="info-area">
            <img className="playback-title" src="./Assets/sawX.png" alt="Saw X"></img>
            <p className="cancel-bottom playback-info">
              Hoping for a miraculous cure, John Kramer travels to Mexico for a risky and experimental medical procedure, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer uses deranged and ingenious traps to turn the tables on the con artists.
            </p>
            <br></br>
            <div className="playback-info-btn">
              <div className="play-btn">
                <i className="bi bi-play-fill info-btn-icon info-btn-icon2"></i>Play
              </div>
              <div className="info-btn">
                <i className="bi bi-info-circle info-btn-icon"></i>More Info
              </div>

              {isInList ? (
                <Removefromlist email={email} selectedProfileName={selectedProfileName} videoTitle={"Saw X"} />
              ) : (
                <Addtolist
                  email={email}
                  selectedProfileName={selectedProfileName}
                  videoTitle={"Saw X"}
                  videoCategory={"Horror - Crime"}
                  releaseYear={"2023"}
                  thumbnail={"saw_x_thumbnail"}
                />
              )}

              <div className="circle-btn">
                <i className="bi bi-hand-thumbs-up"></i>
              </div>
            </div>
          </div>
          {!myList &&
            <div className="main-hero">
              <div className="carouse-net">
                <div className="carouse-bar">
                  <p className="cancel-bottom carouse-title">Now Playing</p></div>
                <Swiper
                  slidesPerView={8}
                  spaceBetween={18}
                  slidesPerGroup={1}
                  navigation
                  modules={[Navigation]}
                  className="carouse-netflix"
                >
                  {nowPlayingData.map((item, index) => (
                    <SwiperSlide key={index} className="video-card-slide">
                      <VideoCard
                        videoTitle={item.videoTitle}
                        videoCategory={item.videoCategory}
                        videoRating={item.videoRating}
                        releaseYear={item.releaseYear}
                        thumbnail={item.thumbnail}
                        email={email}
                        selectedProfileName={selectedProfileName}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="carouse-net">
                <div className="carouse-bar">
                  <p className="cancel-bottom carouse-title">Top Rated Movies</p></div>
                <Swiper
                  slidesPerView={8}
                  spaceBetween={18}
                  slidesPerGroup={1}
                  navigation
                  modules={[Navigation]}
                  className="carouse-netflix"
                >
                  {topRatedData.map((item, index) => (
                    <SwiperSlide key={index} className="video-card-slide">
                      <VideoCard
                        videoTitle={item.videoTitle}
                        videoCategory={item.videoCategory}
                        videoRating={item.videoRating}
                        releaseYear={item.releaseYear}
                        thumbnail={item.thumbnail}
                        email={email}
                        selectedProfileName={selectedProfileName}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="carouse-net">
                <div className="carouse-bar">
                  <p className="cancel-bottom carouse-title">New Releases</p></div>
                <Swiper
                  slidesPerView={8}
                  spaceBetween={18}
                  slidesPerGroup={1}
                  navigation
                  modules={[Navigation]}
                  className="carouse-netflix"
                >
                  {newReleasesData.map((item, index) => (
                    <SwiperSlide key={index} className="video-card-slide">
                      <VideoCard
                        videoTitle={item.videoTitle}
                        videoCategory={item.videoCategory}
                        videoRating={item.videoRating}
                        releaseYear={item.releaseYear}
                        thumbnail={item.thumbnail}
                        email={email}
                        selectedProfileName={selectedProfileName}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="carouse-net carouse-net2">
                <div className="carouse-bar">
                  <p className="cancel-bottom carouse-title">Originals</p></div>
                <Swiper
                  slidesPerView={8}
                  spaceBetween={18}
                  slidesPerGroup={1}
                  navigation
                  modules={[Navigation]}
                  className="carouse-netflix"
                >
                  {originalsData.map((item, index) => (
                    <SwiperSlide key={index} className="video-card-slide">
                      <VideoCard
                        videoTitle={item.videoTitle}
                        videoCategory={item.videoCategory}
                        videoRating={item.videoRating}
                        releaseYear={item.releaseYear}
                        thumbnail={item.thumbnail}
                        email={email}
                        selectedProfileName={selectedProfileName}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="home-footer2 text-light">
                <h6>© 2024 NetflixClone. All rights reserved.&nbsp;By Group 20 - COSC 31093</h6>
                <h7>This is a demo project and is not affiliated with or endorsed by Netflix. All content, logos, and trademarks are property of their respective owners.</h7>
              </div>
            </div>}
        </div>
      </div>
    </div>
  );
}
