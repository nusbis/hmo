-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: hmo
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city_name` varchar(22) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'tel_aviv'),(2,'jerusalem'),(3,'beer sheva'),(7,'jjj');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `corona_patient`
--

DROP TABLE IF EXISTS `corona_patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `corona_patient` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date_of_illness` date DEFAULT NULL,
  `recovery_date` date DEFAULT NULL,
  `hmo_member_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hmo_member_id` (`hmo_member_id`),
  CONSTRAINT `corona_patient_ibfk_1` FOREIGN KEY (`hmo_member_id`) REFERENCES `hmo_member` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corona_patient`
--

LOCK TABLES `corona_patient` WRITE;
/*!40000 ALTER TABLE `corona_patient` DISABLE KEYS */;
INSERT INTO `corona_patient` VALUES (1,'2022-05-10','2022-06-01',1),(22,'2022-05-09','2022-05-31',3);
/*!40000 ALTER TABLE `corona_patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hmo_member`
--

DROP TABLE IF EXISTS `hmo_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hmo_member` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tz` varchar(9) NOT NULL,
  `first_name` varchar(22) DEFAULT NULL,
  `last_name` varchar(22) DEFAULT NULL,
  `phone_number` varchar(10) DEFAULT NULL,
  `email` varchar(22) DEFAULT NULL,
  `street` varchar(22) DEFAULT NULL,
  `building_number` int DEFAULT NULL,
  `birth_day` date DEFAULT NULL,
  `city_id` int DEFAULT NULL,
  `password` varchar(9) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `city_id` (`city_id`),
  CONSTRAINT `hmo_member_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hmo_member`
--

LOCK TABLES `hmo_member` WRITE;
/*!40000 ALTER TABLE `hmo_member` DISABLE KEYS */;
INSERT INTO `hmo_member` VALUES (1,'213673114','shira','nussbacher','0548536557','shira@gmail.com','baal atania',20,'2003-03-25',1,'123456'),(2,'40119208','rachel','rosof','0545400053','rachel00053@gmail.com','kazanelson',12,'1980-04-15',2,'147258'),(3,'037590700','israel','nussbacher','0545400054','israell@gmail.com','baal atania',20,'1975-04-24',1,'789456'),(4,'212129050','avigail','valess','0533128623','avigailvv@gmail.com','baal atania',20,'1975-04-24',1,'124578'),(7,'215896221','chaya','fogel','054548585','c.y@gmail.com','vvv',215896221,'2023-05-24',1,NULL),(8,'','naama','nussbacher','0543659812','naama6@gmail.com','baall',45,'2023-05-30',1,NULL),(9,'1245895','hhhhh','fogel','054548585','cjiji.y@gmail.com','vvv',215896221,'2023-05-23',1,NULL),(10,'484848','jijijiji','rosof','0545400053','mmm@gmail.com','kazanelson',12,'1980-04-14',2,NULL),(11,'787878','qqqq','qq','0504104103','qqqq@gmail.com','qwqwq',1,'2023-05-24',1,NULL),(15,'787878','qqqq','qq','0504104103','qq89@gmail.com','qwqwq',1,'2023-05-24',1,NULL),(16,'78895645','mor','qq','0504104105','mordechay@gmail.com','qwqwq',1,'2023-05-24',1,NULL),(17,'78895645','op','qq','0504104105','op@gmail.com','op',1,'2023-05-24',1,'14141414');
/*!40000 ALTER TABLE `hmo_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturer`
--

DROP TABLE IF EXISTS `manufacturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manufacturer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `manufacturer_name` varchar(22) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
INSERT INTO `manufacturer` VALUES (1,'moderna'),(2,'biontech');
/*!40000 ALTER TABLE `manufacturer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_of_vaccine`
--

DROP TABLE IF EXISTS `type_of_vaccine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_of_vaccine` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_type_of_vaccine` varchar(22) DEFAULT NULL,
  `manufacturer_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `manufacturer_id` (`manufacturer_id`),
  CONSTRAINT `type_of_vaccine_ibfk_1` FOREIGN KEY (`manufacturer_id`) REFERENCES `manufacturer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_of_vaccine`
--

LOCK TABLES `type_of_vaccine` WRITE;
/*!40000 ALTER TABLE `type_of_vaccine` DISABLE KEYS */;
INSERT INTO `type_of_vaccine` VALUES (1,'mRNA',1),(2,'viral_vector',1),(3,'inactivated_virus',2),(4,'protein_subunit',2);
/*!40000 ALTER TABLE `type_of_vaccine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vaccination_for_patient`
--

DROP TABLE IF EXISTS `vaccination_for_patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vaccination_for_patient` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vaccination_date` date DEFAULT NULL,
  `hmo_member_id` int DEFAULT NULL,
  `type_of_vaccine_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hmo_member_id` (`hmo_member_id`),
  KEY `type_of_vaccine_id` (`type_of_vaccine_id`),
  CONSTRAINT `vaccination_for_patient_ibfk_1` FOREIGN KEY (`hmo_member_id`) REFERENCES `hmo_member` (`id`),
  CONSTRAINT `vaccination_for_patient_ibfk_2` FOREIGN KEY (`type_of_vaccine_id`) REFERENCES `type_of_vaccine` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaccination_for_patient`
--

LOCK TABLES `vaccination_for_patient` WRITE;
/*!40000 ALTER TABLE `vaccination_for_patient` DISABLE KEYS */;
INSERT INTO `vaccination_for_patient` VALUES (3,'2021-05-22',1,1),(4,'2021-05-21',2,1),(5,'2021-05-21',2,1),(6,'2021-05-21',2,1),(7,'2021-05-21',1,1),(8,'2021-05-21',1,1),(9,'2021-05-21',1,1),(10,'2021-05-21',1,1),(11,'2021-05-21',1,1),(12,'2021-05-21',4,1);
/*!40000 ALTER TABLE `vaccination_for_patient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-11 17:06:07
