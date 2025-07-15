-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2024 at 05:13 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `netflix`
--

-- --------------------------------------------------------

--
-- Table structure for table `video_meta_data`
--

CREATE TABLE `video_meta_data` (
  `videoid` bigint(20) NOT NULL,
  `video_thumbnail` varchar(255) NOT NULL,
  `release_year` varchar(255) NOT NULL,
  `suggestion_category` varchar(255) NOT NULL,
  `video_category` varchar(255) NOT NULL,
  `video_rating` double NOT NULL,
  `video_title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `video_meta_data`
--

INSERT INTO `video_meta_data` (`videoid`, `video_thumbnail`, `release_year`, `suggestion_category`, `video_category`, `video_rating`, `video_title`) VALUES
(1, 'witcher_thumbnail', '2019', 'Now Playing', 'Fantasy - Action', 8.2, 'The Witcher'),
(2, 'lincoln_lawyer_thumbnail', '2022', 'Now Playing', 'Crime - Drama', 7.9, 'The Lincoln Lawyer'),
(3, 'queens_gambit_thumbnail', '2020', 'Now Playing', 'Drama - Chess', 8.6, 'The Queen\'s Gambit'),
(4, 'bridgerton_thumbnail', '2020', 'Now Playing', 'Romance - Drama', 7.3, 'Bridgerton'),
(5, 'ozark_thumbnail', '2017', 'Now Playing', 'Crime - Thriller', 8.4, 'Ozark'),
(6, 'heartstopper_thumbnail', '2022', 'Now Playing', 'Romance - Drama', 8.4, 'Heartstopper'),
(7, 'you_thumbnail', '2018', 'Now Playing', 'Thriller - Drama', 7.7, 'You'),
(8, 'dead_to_me_thumbnail', '2019', 'Now Playing', 'Comedy - Drama', 8, 'Dead to Me'),
(9, 'umbrella_academy_thumbnail', '2019', 'Now Playing', 'Fantasy - Action', 7.9, 'The Umbrella Academy'),
(10, 'cobra_kai_thumbnail', '2018', 'Now Playing', 'Action - Drama', 8.6, 'Cobra Kai'),
(11, 'narcos_thumbnail', '2015', 'Now Playing', 'Crime - Drama', 8.8, 'Narcos'),
(12, 'sandman_thumbnail', '2022', 'Now Playing', 'Fantasy - Drama', 7.8, 'The Sandman'),
(13, 'irishman_thumbnail', '2019', 'Top Rated Movies', 'Crime - Drama', 7.8, 'The Irishman'),
(14, 'roma_thumbnail', '2018', 'Top Rated Movies', 'Drama', 7.7, 'Roma'),
(15, 'chicago_7_thumbnail', '2020', 'Top Rated Movies', 'Drama - History', 7.8, 'The Trial of the Chicago 7'),
(16, 'marriage_story_thumbnail', '2019', 'Top Rated Movies', 'Drama - Romance', 7.9, 'Marriage Story'),
(17, 'platform_thumbnail', '2019', 'Top Rated Movies', 'Sci-Fi - Thriller', 7, 'The Platform'),
(18, 'devil_all_the_time_thumbnail', '2020', 'Top Rated Movies', 'Drama - Thriller', 7.1, 'The Devil All the Time'),
(19, 'enola_holmes_thumbnail', '2020', 'Top Rated Movies', 'Mystery - Adventure', 6.6, 'Enola Holmes'),
(20, 'old_guard_thumbnail', '2020', 'Top Rated Movies', 'Action - Fantasy', 6.7, 'The Old Guard'),
(21, 'to_all_the_boys_thumbnail', '2018', 'Top Rated Movies', 'Romance - Comedy', 7.1, 'To All the Boys I\'ve Loved Before'),
(22, 'extraction_thumbnail', '2020', 'Top Rated Movies', 'Action - Thriller', 6.7, 'Extraction'),
(23, 'bird_box_thumbnail', '2018', 'Top Rated Movies', 'Thriller - Drama', 6.6, 'Bird Box'),
(24, 'midnight_sky_thumbnail', '2020', 'Top Rated Movies', 'Sci-Fi - Drama', 5.6, 'The Midnight Sky'),
(25, 'mother_thumbnail', '2023', 'New Releases', 'Action - Drama', 6.1, 'The Mother'),
(26, 'extraction_2_thumbnail', '2023', 'New Releases', 'Action - Thriller', 7.2, 'Extraction 2'),
(27, 'heart_of_stone_thumbnail', '2023', 'New Releases', 'Action - Thriller', 5.9, 'Heart of Stone'),
(28, 'killer_thumbnail', '2023', 'New Releases', 'Crime - Thriller', 7.5, 'The Killer'),
(29, 'nimona_thumbnail', '2023', 'New Releases', 'Animation - Fantasy', 7.7, 'Nimona'),
(30, 'fall_of_usher_thumbnail', '2023', 'New Releases', 'Horror - Drama', 7.8, 'The Fall of the House of Usher'),
(31, 'killers_flower_moon_thumbnail', '2023', 'New Releases', 'Crime - Drama', 8, 'Killers of the Flower Moon'),
(32, 'dumb_money_thumbnail', '2023', 'New Releases', 'Comedy - Drama', 7.2, 'Dumb Money'),
(33, 'love_at_first_sight_thumbnail', '2023', 'New Releases', 'Romance - Drama', 6.8, 'Love at First Sight'),
(34, 'good_nurse_thumbnail', '2023', 'New Releases', 'Crime - Drama', 6.9, 'The Good Nurse'),
(35, 'murder_mystery_2_thumbnail', '2023', 'New Releases', 'Comedy - Mystery', 6, 'Murder Mystery 2'),
(36, 'spaceman_thumbnail', '2023', 'New Releases', 'Drama - Sci-Fi', 5.8, 'Spaceman'),
(37, 'stranger_things_thumbnail', '2016', 'Originals', 'Sci-Fi - Thriller', 8.7, 'Stranger Things'),
(38, 'money_heist_thumbnail', '2017', 'Originals', 'Crime - Drama', 8.3, 'Money Heist'),
(39, 'black_mirror_thumbnail', '2011', 'Originals', 'Sci-Fi - Drama', 8.8, 'Black Mirror'),
(40, 'dark_thumbnail', '2017', 'Originals', 'Sci-Fi - Thriller', 8.8, 'Dark'),
(41, 'bojack_horseman_thumbnail', '2014', 'Originals', 'Animation - Comedy', 8.7, 'BoJack Horseman'),
(42, 'crown_thumbnail', '2016', 'Originals', 'Drama - History', 8.7, 'The Crown'),
(43, 'ozark_thumbnail', '2017', 'Originals', 'Crime - Drama', 8.4, 'Ozark'),
(44, 'bridgerton_thumbnail', '2020', 'Originals', 'Romance - Drama', 7.3, 'Bridgerton'),
(45, 'umbrella_academy_thumbnail', '2019', 'Originals', 'Fantasy - Action', 7.9, 'The Umbrella Academy'),
(46, 'lucifer_thumbnail', '2016', 'Originals', 'Crime - Drama', 8.1, 'Lucifer'),
(47, 'narcos_thumbnail', '2015', 'Originals', 'Crime - Drama', 8.8, 'Narcos'),
(48, 'witcher_thumbnail', '2019', 'Originals', 'Fantasy - Action', 8.2, 'The Witcher'),
(49, 'sweet_tooth_thumbnail', '2021', 'Now Playing', 'Fantasy - Drama', 7.8, 'Sweet Tooth'),
(50, 'outer_banks_thumbnail', '2020', 'Now Playing', 'Action - Adventure', 7.6, 'Outer Banks'),
(51, 'firefly_lane_thumbnail', '2021', 'Now Playing', 'Drama - Romance', 7.4, 'Firefly Lane'),
(52, 'ginny_georgia_thumbnail', '2021', 'Now Playing', 'Comedy - Drama', 7.5, 'Ginny & Georgia'),
(53, 'shadow_bone_thumbnail', '2021', 'Now Playing', 'Fantasy - Action', 7.6, 'Shadow and Bone'),
(54, 'sweet_magnolias_thumbnail', '2020', 'Now Playing', 'Drama - Romance', 7.4, 'Sweet Magnolias'),
(55, 'locke_key_thumbnail', '2020', 'Now Playing', 'Fantasy - Horror', 7.4, 'Locke & Key'),
(56, 'jupiters_legacy_thumbnail', '2021', 'Now Playing', 'Action - Adventure', 6.7, 'Jupiter\'s Legacy'),
(57, 'two_popes_thumbnail', '2019', 'Top Rated Movies', 'Drama', 7.6, 'The Two Popes'),
(58, 'klaus_thumbnail', '2019', 'Top Rated Movies', 'Animation - Family', 8.2, 'Klaus'),
(59, 'mitchells_machines_thumbnail', '2021', 'Top Rated Movies', 'Animation - Comedy', 7.7, 'The Mitchells vs. The Machines'),
(60, 'el_camino_thumbnail', '2019', 'Top Rated Movies', 'Crime - Drama', 7.3, 'El Camino: A Breaking Bad Movie'),
(61, 'da_5_bloods_thumbnail', '2020', 'Top Rated Movies', 'Drama - War', 6.5, 'Da 5 Bloods'),
(62, 'half_of_it_thumbnail', '2020', 'Top Rated Movies', 'Romance - Comedy', 6.9, 'The Half of It'),
(63, 'ma_rainey_thumbnail', '2020', 'Top Rated Movies', 'Drama - Music', 7, 'Ma Rainey\'s Black Bottom'),
(64, 'i_care_a_lot_thumbnail', '2020', 'Top Rated Movies', 'Thriller - Comedy', 6.3, 'I Care a Lot'),
(65, 'red_notice_thumbnail', '2023', 'New Releases', 'Action - Comedy', 6.3, 'Red Notice'),
(66, 'harder_they_fall_thumbnail', '2023', 'New Releases', 'Western - Drama', 6.5, 'The Harder They Fall'),
(67, 'army_of_the_dead_thumbnail', '2023', 'New Releases', 'Action - Horror', 5.9, 'Army of the Dead'),
(68, 'gray_man_thumbnail', '2023', 'New Releases', 'Action - Thriller', 6.7, 'The Gray Man'),
(69, 'dont_look_up_thumbnail', '2023', 'New Releases', 'Comedy - Sci-Fi', 7.2, 'Don\'t Look Up'),
(70, 'tick_tick_boom_thumbnail', '2023', 'New Releases', 'Drama - Musical', 7.5, 'Tick, Tick... Boom!'),
(71, 'adam_project_thumbnail', '2023', 'New Releases', 'Sci-Fi - Adventure', 6.6, 'The Adam Project'),
(72, 'sea_beast_thumbnail', '2023', 'New Releases', 'Animation - Adventure', 7, 'The Sea Beast'),
(73, 'haunting_hill_house_thumbnail', '2018', 'Originals', 'Horror - Drama', 8.6, 'The Haunting of Hill House'),
(74, 'oa_thumbnail', '2016', 'Originals', 'Sci-Fi - Drama', 7.9, 'The OA'),
(75, 'russian_doll_thumbnail', '2019', 'Originals', 'Comedy - Drama', 7.8, 'Russian Doll'),
(76, 'big_mouth_thumbnail', '2017', 'Originals', 'Animation - Comedy', 7.9, 'Big Mouth'),
(77, 'unbreakable_kimmy_thumbnail', '2015', 'Originals', 'Comedy', 7.6, 'Unbreakable Kimmy Schmidt'),
(78, 'glow_thumbnail', '2017', 'Originals', 'Comedy - Drama', 8, 'Glow'),
(79, 'dark_crystal_thumbnail', '2019', 'Originals', 'Fantasy - Adventure', 8.4, 'The Dark Crystal: Age of Resistance'),
(80, 'sense8_thumbnail', '2015', 'Originals', 'Sci-Fi - Drama', 8.3, 'Sense8');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `video_meta_data`
--
ALTER TABLE `video_meta_data`
  ADD PRIMARY KEY (`videoid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `video_meta_data`
--
ALTER TABLE `video_meta_data`
  MODIFY `videoid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
