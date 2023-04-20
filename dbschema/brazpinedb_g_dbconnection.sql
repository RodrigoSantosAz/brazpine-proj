CREATE DATABASE  IF NOT EXISTS `brazpinedb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `brazpinedb`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: brazpinedb
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `g_dbconnection`
--

DROP TABLE IF EXISTS `g_dbconnection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `g_dbconnection` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdBy` varchar(45) NOT NULL,
  `createdOn` date NOT NULL,
  `updateBy` varchar(45) NOT NULL,
  `updateOn` date NOT NULL,
  `isActive` char(1) NOT NULL,
  `name` varchar(45) NOT NULL,
  `client` varchar(45) NOT NULL,
  `host` varchar(45) NOT NULL,
  `port` int NOT NULL,
  `user` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `database` varchar(45) NOT NULL,
  `poolMin` int NOT NULL,
  `poolMax` int NOT NULL,
  `filename` varchar(45) DEFAULT NULL,
  `connectionString` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tabela base de acordo com PDF de orientação';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `g_dbconnection`
--

LOCK TABLES `g_dbconnection` WRITE;
/*!40000 ALTER TABLE `g_dbconnection` DISABLE KEYS */;
INSERT INTO `g_dbconnection` VALUES (5,'admin','2013-04-18','admin','2013-04-18','1','BRA 2','b','c',1,'d','e','f',2,3,'g','h'),(6,'admin','2013-04-18','admin','2013-04-18','0','BRA 3','MySQLDB','Host',11111,'admin1','admin','XE',1,1,'Filename 01','Connection string'),(7,'admin','2013-04-18','admin','2013-04-18','1','BRA 4','MySQLDB','Host',11111,'admin1','admin','XE',1,1,'Filename 01','Connection string'),(8,'admin','2013-04-18','admin','2013-04-18','1','BRA 5','MySQLDB','Host',11111,'admin1','admin','XE',1,1,'Filename 01','Connection string'),(30,'testedb','2023-04-19','testedb','2023-04-19','1','teste444','r3','r3',30001,'r3','blank','r3',13,13,'r3','r3'),(31,'testedb','2023-04-19','testedb','2023-04-19','1','teste444','r3','r3',30001,'r3','blank','r3',13,13,'r3','r3'),(32,'testedb','2023-04-19','testedb','2023-04-19','1','teste4442','r3','r3',30001,'r3','blank','r3',13,13,'r3','r3'),(38,'testedb','2023-04-20','testedb','2023-04-20','','BRA 1','wqeqweeqe','meudeusdoceu3',3000,'dasd','blank','qweq',1,1,'awda','adw');
/*!40000 ALTER TABLE `g_dbconnection` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-20 11:00:18
