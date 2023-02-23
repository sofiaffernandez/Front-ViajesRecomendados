-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: proyectoviajes
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `recomendaciones`
--

DROP TABLE IF EXISTS `recomendaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recomendaciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `lugar` varchar(50) NOT NULL,
  `entradilla` varchar(255) NOT NULL,
  `texto` text NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `autor_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `autor_id` (`autor_id`),
  CONSTRAINT `recomendaciones_ibfk_1` FOREIGN KEY (`autor_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recomendaciones`
--

LOCK TABLES `recomendaciones` WRITE;
/*!40000 ALTER TABLE `recomendaciones` DISABLE KEYS */;
INSERT INTO `recomendaciones` VALUES (1,'Aventura en el bosque de la felicidad','Actividades al aire libre','Bosque de la felicidad','Una aventura para toda la familia','Aprovecha esta oportunidad para pasar un día inolvidable con tu familia en el Bosque de la Felicidad. Puedes realizar todo tipo de actividades al aire libre como senderismo, pesca y fotografía.','2023-02-01 00:04:36',1),(2,'Visita al Museo de la Historia Natural','Cultura','Museo de la Historia Natural','Una visita educativa para todos','Visita el Museo de la Historia Natural para conocer la vida de los animales y la evolución de la tierra. Hay exposiciones interactivas que te ayudarán a comprender mejor cada una de las salas. ¡No te lo puedes perder!','2023-02-01 00:05:03',2),(3,'Senderismo en la Sierra de Guadarrama','Actividades al aire libre','Sierra de Guadarrama','Un sendero para descubrir la naturaleza','Descubre la Sierra de Guadarrama a través de un sendero señalizado de 8Km de longitud. Disfruta de la naturaleza y del paisaje mientras realizas esta actividad. ¡No te arrepentirás!','2023-02-01 00:05:03',3),(4,'Visita al Parque de Atracciones','Entretenimiento','Parque de Atracciones','Una experiencia divertida para todos','¿Buscas un lugar para divertirte con tu familia? Entonces no puedes perderte la visita al Parque de Atracciones. Disfruta de todas sus atracciones y haz de este un día inolvidable. ¡No te lo puedes perder!','2023-02-01 00:05:03',4),(5,'Visita a la Catedral de la Almudena','Cultura','Catedral de la Almudena','Un recorrido por la historia','Visita la Catedral de la Almudena para conocer la historia de Madrid. Entre sus muros encontrarás una mezcla de estilos arquitectónicos que te dejarán maravillado. ¡No te lo puedes perder!','2023-02-01 00:05:03',5),(6,'Senderismo en la Sierra de Gredos','Actividades al aire libre','Sierra de Gredos','Un sendero para conocer la montaña','Descubre la Sierra de Gredos a través de un sendero señalizado de 12Km de longitud. Disfruta de la naturaleza y del paisaje de la montaña mientras realizas esta actividad. ¡No te arrepentirás!','2023-02-01 00:05:03',6),(7,'Visita al Museo del Prado','Cultura','Museo del Prado','Una experiencia única para todos','Visita el Museo del Prado para disfrutar de las obras de los grandes maestros de la pintura. Hay una variedad de obras desde el Renacimiento hasta el Barroco para que puedas disfrutar de la cultura. ¡No te lo puedes perder!','2023-02-01 00:05:03',7),(8,'Visita al Parque Warner','Entretenimiento','Parque Warner','Una experiencia única para todos','Visita el Parque Warner para divertirte con todas sus atracciones. Hay atracciones para todos los gustos para que tengas un día inolvidable. ¡No te lo puedes perder!','2023-02-01 00:05:03',8),(9,'Visita al Palacio Real','Cultura','Palacio Real','Un recorrido por la historia','Visita el Palacio Real para conocer la historia de la monarquía española. Entre sus muros encontrarás una mezcla de estilos arquitectónicos que te dejarán maravillado. ¡No te lo puedes perder!','2023-02-01 00:05:03',9),(10,'Visita al Parque de Atracciones de Madrid','Entretenimiento','Parque de Atracciones de Madrid','Una experiencia divertida para todos','¿Buscas un lugar para divertirte con tu familia? Entonces no puedes perderte la visita al Parque de Atracciones de Madrid. Disfruta de todas sus atracciones y haz de este un día inolvidable. ¡No te lo puedes perder!','2023-02-01 00:05:03',10),(11,'Visita al Parque del Retiro','Actividades al aire libre','Parque del Retiro','Un lugar para disfrutar de la naturaleza','Visita el Parque del Retiro para disfrutar de la naturaleza y de sus actividades al aire libre. Puedes pasear en barco por el lago, hacer picnic y disfrutar de todo lo que este parque tiene para ofrecerte. ¡No te lo puedes perder!','2023-02-01 00:05:03',11),(12,'Rutas en coche por Galicia','Rutas','Galicia','Descubre Galicia a través de un coche de alquiler','Galicia es una región de España que destaca por la belleza de sus paisajes, sus playas, sus montañas y por la riqueza de sus tradiciones y cultura. Una de las mejores formas de descubrir todo lo que tiene que ofrecer es a través de un coche de alquiler.  Haz tu reserva y descubre los mejores sitios de Galicia','2023-02-01 00:05:57',1),(13,'Senda do Río Eo','Senderismo','Galicia','Una de las mejores rutas de Galicia para disfrutar de la naturaleza','La Senda do Río Eo es una de las mejores rutas senderistas para descubrir los encantos de Galicia. Esta ruta de 16 kilómetros de longitud nos llevará a través de los preciosos cañones de los ríos Eo y Eume. Disfruta de la naturaleza a lo largo de la ruta, descubre sus fauna y flora y disfruta de los mejores paisajes que Galicia ofrece','2023-02-01 00:05:57',2),(14,'Río Miño','Rutas','Galicia','Descubre el río más importante de Galicia','El Río Miño es el río más importante de Galicia, con una longitud de 437 kilómetros. El Río Miño atraviesa toda la región desde el norte hasta el sur, pasando por ciudades como Ourense, Ribadavia, Verín, Pontevedra y Tui. Disfruta de sus preciosos paisajes y descubre la riqueza natural de Galicia','2023-02-01 00:05:57',3),(15,'La riqueza natural de Cantabria','Naturaleza','Cantabria','Cantabria es un destino ideal para los amantes de la naturaleza, sus paisajes son de lo más variados y ofrecen muchos planes interesantes para todos los gustos','Cantabria es un destino ideal para los amantes de la naturaleza. Sus paisajes son variados y ofrecen muchos planes interesantes para todos los gustos. Desde el Parque Natural de Oyambre, con sus playas y acantilados, hasta el Parque Natural de Cabárceno, con sus animales en libertad, pasando por la montaña con los Picos de Europa, hay mucho donde elegir. Las playas de Cantabria son también una de sus mayores atracciones, con sus arenas finas y blancas, sus aguas azules y sus vistas panorámicas. Los pueblos de Cantabria también están llenos de encanto y ofrecen una gran variedad de actividades para todos los gustos. Desde el surf y la pesca en las playas hasta las visitas a las cuevas prehistóricas, pasando por el senderismo y la bicicleta de montaña, hay muchísimo para hacer. Cantabria también ofrece una gran variedad de actividades gastronómicas, con una amplia oferta de productos típicos de la región como el queso de cabrales, los piquillos o el marisco. Hay mucho que descubrir en Cantabria y que no te puedes perder!','2023-02-01 00:06:45',1),(16,'Las mejores playas de Cataluña','Ocio','Cataluña','No te pierdas las mejores playas que ofrece Cataluña','¿Estás buscando playas para disfrutar de unas vacaciones en familia? Cataluña es una excelente opción, ya que ofrece una gran variedad de playas, desde las más señoriales hasta las más salvajes. La Costa Brava, con sus más de 200 kilómetros de extensión, es uno de los destinos favoritos de los turistas, ya que cuenta con unas aguas limpias y cristalinas, y con unas playas preciosas. También destacan las playas de la Costa Dorada, con la Playa de L’Estartit, la Playa de Calafell o la Playa de Pineda de Mar. Por su parte, las playas de la Costa del Maresme cuentan con unas aguas tranquilas, ya que están protegidas por una línea de arrecifes. Entre ellas, destacan la Playa de Sant Pol, la Playa de Badalona o la Playa de Mataró. Por último, no nos podemos olvidar de las playas de la Costa del Garraf, como la Playa de Garraf, la Playa de Castelldefels o la Playa de Sitges, que cuentan con unas aguas más tranquilas y con una arena más fina. ¡A disfrutar de las mejores playas de Cataluña!','2023-02-01 00:10:43',1),(17,'Descubre la gastronomía catalana','Gastronomía','Cataluña','No te pierdas la mejor gastronomía de Cataluña','Cataluña es famosa en todo el mundo por su gastronomía. La amplia variedad y calidad de los productos locales unido al talento de sus cocineros, hacen que esta región sea un destino ideal para los amantes de la buena comida. Como platos típicos podemos destacar los famosos calçots, una variedad de cebollas tiernas que se asan a la parrilla, y que se acompañan con la salsa calçotada. También hay que mencionar la paella, un plato que se prepara con arroz, carne, verduras y especias, que se sirve en toda España, pero que en Cataluña adquiere una personalidad propia. Otros platos tradicionales son el suquet de peix, los canelones de carne o el bacallà a la llauna. Entre los postres típicos, destacan los panellets, unos bizcochitos elaborados con almendras, azúcar y canela, que se suelen comer en las fiestas de Sant Jordi. Y por supuesto, no nos podemos olvidar de los célebres turrones de calidad, uno de los productos más típicos de la región.','2023-02-01 00:10:55',2),(18,'Conoce el patrimonio monumental de Cataluña','Cultura','Cataluña','No te pierdas los mejores monumentos de Cataluña','Cataluña es una región con un gran patrimonio monumental, que incluye desde edificios antiguos a obras de arquitectura moderna. La Sagrada Familia es el monumento más conocido de la región. Esta iglesia, diseñada por el arquitecto Antoni Gaudí, es una de las obras más importantes de la arquitectura modernista y una de las principales atracciones turísticas de la ciudad de Barcelona. Otros monumentos imprescindibles son el monasterio de Montserrat, el castillo de Montjuïc, el Palau de la Música Catalana o el Parque Güell. También hay que mencionar los numerosos yacimientos arqueológicos de la región, como el yacimiento de Ullastret, la necrópolis de Ampurias o el yacimiento de Tossa de Mar. Finalmente, no nos podemos olvidar del patrimonio moderno de la región, como la Torre Agbar o el Fórum de las Culturas.','2023-02-01 00:11:10',1),(19,'Explora los parques naturales de Cataluña','Naturaleza','Cataluña','No te pierdas los increíbles parques naturales de Cataluña','Cataluña cuenta con una gran cantidad de parques naturales, que ofrecen una amplia variedad de paisajes y entornos. El Parque Natural de Montserrat es uno de los más populares de la región, un lugar místico rodeado de montañas y con unas vistas impresionantes. También destacan el Parque Natural de la Albufera de Valencia, el Parque Natural del Delta del Ebro, el Parque Natural del Montseny o el Parque Natural del Garraf. Estos parques ofrecen la oportunidad de explorar la naturaleza y ver una gran variedad de animales y plantas. Además, hay muchas actividades para disfrutar de la naturaleza, como senderismo, escalada, birdwatching, ciclismo de montaña o kayak. ¡No te pierdas la oportunidad de explorar los maravillosos parques naturales de Cataluña!','2023-02-01 00:11:23',4),(20,'Visita los pueblos más bonitos de Cataluña','Turismo','Cataluña','No te pierdas los mejores pueblos de Cataluña','Cataluña es una región con una gran variedad de pueblos que ofrecen una gran cantidad de actividades para disfrutar en familia. Entre los pueblos más bonitos de la región destacan el pueblo de Cadaqués, en la Costa Brava, un hermoso pueblo de pescadores con un encanto único. Otros pueblos famosos son el pueblo de Pals, en la Costa Brava, el pueblo de Besalú, en la Garrotxa, el pueblo de Sant Feliu de Guíxols, en la Costa Brava, y el pueblo de Banyoles, en la Garrotxa. Estos pueblos ofrecen una gran variedad de actividades para disfrutar en familia, como visitar los monumentos históricos, ir de compras, degustar los productos típicos de la región o disfrutar de sus cafés y restaurantes. ¡No te pierdas la oportunidad de descubrir los mejores pueblos de Cataluña!','2023-02-01 00:11:37',7),(21,'Descubre los mejores museos de Cataluña','Cultura','Cataluña','No te pierdas los mejores museos de Cataluña','Cataluña es una región con una gran variedad de museos que ofrecen una amplia variedad de exposiciones para todos los gustos. El Museo Nacional de Arte de Cataluña es uno de los museos más importantes de la región, y ofrece una amplia colección de obras de arte de los siglos XII al XX. Otros museos famosos son el Museo de Cultura Contemporánea de Barcelona, el Museo Dalí de Figueres, el Museo de Ciencias Naturales de Barcelona o el Museo de la Ciutat de Barcelona. Estos museos ofrecen una gran cantidad de exposiciones para descubrir la historia, la cultura, las ciencias y las artes de Cataluña. ¡No te pierdas la oportunidad de descubrir los mejores museos de la región!','2023-02-01 00:11:52',6),(22,'Descubre los mejores festivales de Cataluña','Ocio','Cataluña','No te pierdas los mejores festivales de Cataluña','Cataluña ofrece una gran variedad de festivales para disfrutar en familia. Entre los festivales más populares destacan el Festival de Primavera de Barcelona, el Festival Internacional de Jazz de Barcelona, el Festival Internacional de Música y Danza de Sant Cugat o el Festival Internacional de Teatro de Barcelona. Estos festivales suelen contar con una gran variedad de actuaciones musicales, teatrales, de danza y de circo, además de numerosas actividades para toda la familia. ¡No te pierdas la oportunidad de disfrutar de los mejores festivales de Cataluña!','2023-02-01 00:12:09',15),(23,'Explora los monumentos de Barcelona','Turismo','Barcelona','No te pierdas los mejores monumentos de Barcelona','Barcelona es una de las ciudades más visitadas de España, y es famosa por su gran cantidad de monumentos. Entre los monumentos más conocidos destacan la Sagrada Familia, una de las obras más importantes de la arquitectura modernista; el Parque Güell, un parque de estilo modernista diseñado por Antoni Gaudí; el Palau de la Música Catalana, una obra maestra de la arquitectura modernista; el Museo Picasso, un museo dedicado al famoso pintor español; y la Casa Batlló, una de las obras más importantes de Antoni Gaudí. Estos monumentos son una excelente manera de descubrir la historia y la cultura de Barcelona. ¡No te pierdas la oportunidad de explorar los mejores monumentos de la ciudad!','2023-02-01 00:12:33',1),(24,'Descubre las rutas de senderismo de Cataluña','Naturaleza','Cataluña','No te pierdas las  rutas de senderismo de Cataluña','Cataluña es una región con una gran variedad de senderos para explorar, desde los más fáciles para principiantes hasta los más exigentes para los más expertos. Entre los senderos más populares destacan el sendero de los Volcanes, un sendero que recorre los volcanes de la Garrotxa; el sendero de la Costa Brava, un sendero de unos 70 kilómetros a lo largo de la costa catalana; el sendero de la Serra de Montserrat, un sendero de unos 20 kilómetros en la sierra de Montserrat; el sendero de la Vall de Núria, un sendero de unos 20 kilómetros en la Vall de Núria; y el sendero de la Costa del Maresme, un sendero de unos 40 kilómetros a lo largo de la costa del Maresme. Estas rutas son una excelente manera de descubrir la naturaleza de Cataluña. ¡Aprovecha al máximo estas rutas y explora los mejores senderos de la región!','2023-02-01 00:13:52',1),(31,'Playa de las catedrales','Ocio al aire libre ','Galicia','Un espectáculo natural ','<p><span>La Playa de las Catedrales es una playa en Galicia, España, famosa por sus impresionantes formaciones naturales de roca caliza. Esta playa se encuentra en el área protegida de la Ría de Arousa, al norte de la provincia de Lugo, y es uno de los destinos de playa más impresionantes de la región. La Playa de las Catedrales se caracteriza por sus formaciones rocosas únicas, que se han formado a lo largo de miles de años por la erosión de las aguas del mar. Estas formaciones rocosas se asemejan a las catedrales de piedra, por lo que se le da el nombre de la Playa de las Catedrales. Las formaciones rocosas de la Playa de las Catedrales son impresionantes y variadas. Hay estructuras de grandes rocas de hasta treinta metros de alto, con formas curvilíneas, cuevas y pasadizos. Esto crea un entorno único que ofrece una experiencia única para los visitantes. La Playa de las Catedrales es una de las más famosas de la región, y es un destino muy visitado por los turistas. La playa es un lugar mágico y lleno de encanto, y es un lugar ideal para pasar el día disfrutando del sol, el mar y la arena. La Playa de las Catedrales también cuenta con una amplia variedad de actividades para los visitantes. Se puede hacer buceo, nadar, surfear, tomar el sol o simplemente pasear por la playa y disfrutar de la naturaleza. Además, la Playa de las Catedrales cuenta con una gran cantidad de restaurantes cercanos, donde se pueden encontrar platos típicos de la región. Estos restaurantes ofrecen comida fresca, deliciosa y con precios muy económicos. La Playa de las Catedrales es un lugar ideal para pasar unas vacaciones en Galicia. Ofrece un entorno único, con formaciones rocosas impresionantes, una playa hermosa y una gran variedad de actividades para hacer. Esto hace que la Playa de las Catedrales sea un lugar perfecto para los amantes de la playa y la naturaleza.﻿</span></p>','2023-02-23 14:52:48',1002),(32,'Parque del Retiro, Madrid','Ocio al aire libre','Madrid','Espacio natural en mitad de la ciudad','<p><br /></p><p>El retiro de Madrid es un lugar mágico y encantador. Ubicado en el corazón de la capital española, el Retiro es un lugar de encuentro para todos los madrileños y visitantes de la ciudad. Se trata de un parque de 125 hectáreas que rodean un espejo de agua, el Estanque del Retiro. Los madrileños lo visitan para disfrutar de su tranquilidad y su belleza, así como para practicar deportes y actividades al aire libre. El Retiro es un lugar ideal para pasar el día, con sus jardines y árboles frondosos, sus instalaciones culturales y deportivas, sus cafeterías y restaurantes, sus juegos infantiles y sus pequeños puestos de comida. El parque es el hogar de la famosa estatua de Felipe IV, la Fuente de Cibeles y el Monumento a Alfonso XII. Durante el día, es común ver a las familias disfrutando de un día de campo, a los amantes disfrutando de un paseo romántico en barca, a los amigos jugando al fútbol o al baloncesto, a los niños jugando en los columpios o practicando patinaje. También hay muchas personas que van al Retiro para practicar yoga o tai chi, o para escuchar música en directo. En la noche, el Retiro se transforma en un lugar mágico; las luces de los edificios se reflejan en el agua, los faroles se encienden, y la música flota en el aire. Durante los fines de semana, el Retiro se llena de artistas callejeros y músicos que ofrecen sus actuaciones. El Retiro es uno de los mejores lugares de Madrid para pasar un rato relajado y disfrutar de la tranquilidad de la naturaleza. Es un lugar donde las personas de todas las edades pueden encontrar algo para entretenerse. Los madrileños lo visitan para disfrutar de su paisaje, su tranquilidad, su cultura y sus actividades.</p>','2023-02-23 14:59:12',NULL),(33,'La Casa de Campo','Ocio al aire libre ','Madrid','Gran parque natural en plena capital','<p><span>La Casa de Campo de Madrid, también conocida como el Parque Regional de la Cuenca Alta del Manzanares, es un gran parque regional de más de 5.500 hectáreas de superficie, ubicado en la zona suroeste de Madrid. Es uno de los parques metropolitanos más grandes y más antiguos de Europa y se encuentra entre los dos ríos Guadarrama y Manzanares, a los pies del Cerro de San Juan.  La Casa de Campo ofrece una amplia variedad de actividades para todas las edades. Uno de los principales atractivos de la Casa de Campo es el Parque de Atracciones, un lugar ideal para pasar un día lleno de diversión. El parque cuenta con una amplia variedad de juegos mecánicos, como montañas rusas, carruseles, tiovivos, y mucho más. También hay un sinfín de parques infantiles para los más pequeños.  Otra de las principales actividades en la Casa de Campo es el senderismo. El parque ofrece numerosos senderos para todos los niveles de experiencia, desde paseos fáciles hasta excursiones de varios días. Además, hay muchas oportunidades de disfrutar de la naturaleza, ya sea observando aves, caminando por los bosques, subiendo a las montañas o descubriendo los secretos de la flora y la fauna local.  También hay muchas actividades deportivas para los visitantes. Entre ellas se incluyen ciclismo, senderismo, equitación, tenis, golf, y mucho más. La Casa de Campo también cuenta con un estanque artificial para practicar deportes náuticos. Además, hay numerosos campos de golf y Academias de Tenis donde los entusiastas del deporte pueden mejorar su juego.  La Casa de Campo también alberga algunos de los mejores restaurantes de la capital, muchos de los cuales ofrecen vistas espectaculares sobre el parque. Además, también hay numerosos bares y cafeterías para disfrutar de una buena cerveza o un café caliente.  En definitiva, la Casa de Campo de Madrid es un destino ideal para escapadas de fin de semana o para los que quieran disfrutar de la naturaleza. Ofrece una variedad de actividades para todos los gustos y edades, desde senderismo hasta deportes de aventura, pasando por restaurantes, bares y cafeterías. La Casa de Campo de Madrid es un lugar ideal para visitar.</span><span>﻿</span></p>','2023-02-23 19:40:54',1002);
/*!40000 ALTER TABLE `recomendaciones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-23 22:52:45
