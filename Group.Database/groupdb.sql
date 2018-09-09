-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 09 sep. 2018 à 13:30
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `groupdb`
--
CREATE DATABASE IF NOT EXISTS `groupdb` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `groupdb`;

-- --------------------------------------------------------

--
-- Structure de la table `albums`
--

DROP TABLE IF EXISTS `albums`;
CREATE TABLE IF NOT EXISTS `albums` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `id_group` bigint(20) UNSIGNED NOT NULL,
  `photo_count` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_group_album` (`id_group`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `creation_date` datetime NOT NULL,
  `type` smallint(6) NOT NULL,
  `location` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `id_group` bigint(20) UNSIGNED NOT NULL,
  `id_author` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_group_event` (`id_group`),
  KEY `id_author` (`id_author`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `event_state`
--

DROP TABLE IF EXISTS `event_state`;
CREATE TABLE IF NOT EXISTS `event_state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `state` (`state`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `groups`
--

DROP TABLE IF EXISTS `groups`;
CREATE TABLE IF NOT EXISTS `groups` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `creation_date` datetime NOT NULL,
  `type` int(11) NOT NULL DEFAULT '1',
  `profil_picture` varchar(535) DEFAULT NULL,
  `cover_picture` varchar(535) NOT NULL,
  `member_count` int(11) NOT NULL DEFAULT '0',
  `follower_count` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `groups`
--

INSERT INTO `groups` (`id`, `name`, `creation_date`, `type`, `profil_picture`, `cover_picture`, `member_count`, `follower_count`) VALUES
(3, 'ghdngfh', '2017-09-07 00:00:00', 1, NULL, '', 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `lt_user_event`
--

DROP TABLE IF EXISTS `lt_user_event`;
CREATE TABLE IF NOT EXISTS `lt_user_event` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `creation_date` datetime NOT NULL,
  `id_user` bigint(20) UNSIGNED NOT NULL,
  `id_event` bigint(20) UNSIGNED NOT NULL,
  `state` smallint(6) NOT NULL,
  `last_change_date` datetime NOT NULL,
  `params` json NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_event_lt` (`id_event`),
  KEY `fk_id_user_lt` (`id_user`),
  KEY `fk_id_state_lt` (`state`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `lt_user_group`
--

DROP TABLE IF EXISTS `lt_user_group`;
CREATE TABLE IF NOT EXISTS `lt_user_group` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `creation_date` datetime NOT NULL,
  `id_user` bigint(20) UNSIGNED NOT NULL,
  `id_group` bigint(20) UNSIGNED NOT NULL,
  `state` smallint(6) NOT NULL,
  `last_change_date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_group_user` (`id_user`,`id_group`),
  KEY `fk_id_group` (`id_group`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `photos`
--

DROP TABLE IF EXISTS `photos`;
CREATE TABLE IF NOT EXISTS `photos` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `url` varchar(1000) NOT NULL,
  `creation_date` datetime NOT NULL,
  `id_author` bigint(20) NOT NULL,
  `id_album` bigint(11) NOT NULL,
  `comment_count` int(11) NOT NULL,
  `like_count` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `photo_comments`
--

DROP TABLE IF EXISTS `photo_comments`;
CREATE TABLE IF NOT EXISTS `photo_comments` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `comment` text NOT NULL,
  `creation_date` datetime NOT NULL,
  `id_user` bigint(20) UNSIGNED NOT NULL,
  `id_photo` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_photo` (`id_photo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `photo_likes`
--

DROP TABLE IF EXISTS `photo_likes`;
CREATE TABLE IF NOT EXISTS `photo_likes` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `creation_date` datetime NOT NULL,
  `id_user` bigint(20) UNSIGNED NOT NULL,
  `id_photo` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_like_id_photo_lt` (`id_photo`),
  KEY `fk_like_id_user_lt` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `facebook_id` bigint(20) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `profil_picture` varchar(535) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `creation_date` datetime NOT NULL,
  `last_connection` datetime NOT NULL,
  `last_connection_ip` varchar(255) NOT NULL,
  `home_adress` varchar(255) NOT NULL,
  `last_gps_location` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_facebook_id` (`facebook_id`),
  UNIQUE KEY `unique_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `user_state`
--

DROP TABLE IF EXISTS `user_state`;
CREATE TABLE IF NOT EXISTS `user_state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `state` (`state`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user_state`
--

INSERT INTO `user_state` (`id`, `state`) VALUES
(1, 'Follower'),
(2, 'Member'),
(3, 'None');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `fk_id_group_album` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id`);

--
-- Contraintes pour la table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `fk_id_author_lt` FOREIGN KEY (`id_author`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `fk_id_group_event` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id`);

--
-- Contraintes pour la table `lt_user_event`
--
ALTER TABLE `lt_user_event`
  ADD CONSTRAINT `fk_id_event_lt` FOREIGN KEY (`id_event`) REFERENCES `events` (`id`),
  ADD CONSTRAINT `fk_id_user_lt` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `lt_user_group`
--
ALTER TABLE `lt_user_group`
  ADD CONSTRAINT `fk_id_group` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id`),
  ADD CONSTRAINT `fk_id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `photo_comments`
--
ALTER TABLE `photo_comments`
  ADD CONSTRAINT `fk_id_photo_lt` FOREIGN KEY (`id_photo`) REFERENCES `photos` (`id`),
  ADD CONSTRAINT `fk_photo_id_user_lt` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `photo_likes`
--
ALTER TABLE `photo_likes`
  ADD CONSTRAINT `fk_like_id_photo_lt` FOREIGN KEY (`id_photo`) REFERENCES `photos` (`id`),
  ADD CONSTRAINT `fk_like_id_user_lt` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
