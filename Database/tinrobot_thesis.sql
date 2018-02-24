-- phpMyAdmin SQL Dump
-- version 3.5.8.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 24, 2015 at 06:39 PM
-- Server version: 5.5.42-37.1-log
-- PHP Version: 5.4.23

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tinrobot_thesis`
--

-- --------------------------------------------------------

--
-- Table structure for table `artifacts`
--

DROP TABLE IF EXISTS `artifacts`;
CREATE TABLE IF NOT EXISTS `artifacts` (
  `MuseumNumber` int(11) NOT NULL,
  `ExhibitNumber` int(11) NOT NULL,
  `ArtifactNumber` int(11) NOT NULL,
  `Info` text NOT NULL,
  `Image` text NOT NULL,
  `TotalArtifactNumber` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`TotalArtifactNumber`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=53 ;

--
-- Dumping data for table `artifacts`
--

INSERT INTO `artifacts` (`MuseumNumber`, `ExhibitNumber`, `ArtifactNumber`, `Info`, `Image`, `TotalArtifactNumber`) VALUES
(1, 1, 0, 'Birds that have adapted to living most of their lives on the open ocean are known as seabirds. Shorebirds, on the other hand, find food and shelter along the coastline. Still other birds migrate between summer and winter habitats, spending only part of the year in a marine environment. All these birds return periodically to land in order to nest.', 'Media/museum1/exhibits/WaterGallery/exhibit1/artifact0.JPG', 1),
(1, 2, 1, 'These animals are among the most-developed invertebrates. They have more specialized layers, such as digestive and nervous systems. They may not look like our relatives, but the salp and lancelet groups show the evolutionary origins of a central nerve cord.', 'Media/museum1/exhibits/WaterGallery/exhibit2/artifact1.JPG', 4),
(1, 1, 1, 'All mammals have evolved from marine ancestors, but most of them now live in terrestrial habitats. A few mammals, however, have returned to a marine environment, and show an interesting diversity of shapes, sizes and lifestyles. They include cetaceans such as whales and dolphins, and carnivores such as polar bears, sea otters, seals, seas lions and walruses.', 'Media/museum1/exhibits/WaterGallery/exhibit1/artifact1.JPG', 2),
(1, 2, 0, 'From tiny snails to giant squids, mollusks display a wide range of body forms and lifestyles. Although they live in all parts of the ocean, they share certain traits: a soft, boneless unsegmented body; a hard shell (there are a few shell-less exceptions); and a large, muscular foot.', 'Media/museum1/exhibits/WaterGallery/exhibit2/artifact0.JPG', 3),
(1, 3, 0, 'Raccoon: An omnivorous raccoon finds a good vantage point to spot a bite to eat. There is lots to eat in a marsh: fish, frogs, crayfish, snails, insects, bird eggs.', 'Media/museum1/exhibits/WaterGallery/exhibit3/artifact0.JPG', 5),
(1, 3, 1, 'Ruddy Duck: An amorous ritual unfolds. Both the male and female use courtship displays to communicate with their potential mate. ', 'Media/museum1/exhibits/WaterGallery/exhibit3/artifact1.JPG', 6),
(1, 3, 2, 'An American Bittern, with it&#39s tall thin build and neutral colouring, easily blends in with the abundant wetland vegetation.', 'Media/museum1/exhibits/WaterGallery/exhibit3/artifact2.JPG', 7),
(1, 3, 3, 'Wilson&#39s Snipe: Despite being one of the most abundant and widespread shorebirds in North America, it&#39s neutral plumage and secretive habits make it difficult to see.', 'Media/museum1/exhibits/WaterGallery/exhibit3/artifact3.JPG', 8),
(1, 3, 4, 'Least Bittern and Dragonfly: A pair of bitterns use their agile legs to cling to reedy plant stalks. Nutritious insects are picked off with quick jabs of their bill.', 'Media/museum1/exhibits/WaterGallery/exhibit3/artifact4.JPG', 9),
(1, 3, 5, 'Red-sided garter snake and wood frog: A garter snake eyes a potential meal. Dense vegetation can offer good cover for both predator and prey.', 'Media/museum1/exhibits/WaterGallery/exhibit3/artifact5.JPG', 10),
(1, 3, 6, 'Sora: A Sora makes good use of the abundant building materials in the marsh. It has loosely woven dead cattails and grasses into a protective basket for its young. \n', 'Media/museum1/exhibits/WaterGallery/exhibit3/artifact6.JPG', 11),
(1, 3, 7, 'Tree Swallow: A Tree Swallow takes a little breather from the hunt for insects. Marshes not only offer an abundance of food, but also safety, as there are very few swallow predators there.', 'Media/museum1/exhibits/WaterGallery/exhibit3/artifact7.JPG', 12),
(1, 3, 8, 'Northern Shoveler: a pair of ducks takes flight above the cattails. The male stays close to the female, from courtship to the incubation period. ', 'Media/museum1/exhibits/WaterGallery/exhibit3/artifact8.JPG', 13),
(1, 3, 9, 'Eastern Kingbird: An Eastern Kingbird surveys the open marsh from its high perch. It flies out to catch any insect that flits by.', 'Media/museum1/exhibits/WaterGallery/exhibit3/artifact9.JPG', 14),
(1, 3, 10, 'Marsh Wren: A male Marsh Wren perches near its handiwork. Males are very territorial, often destroying other birds&#39 nests. ', 'Media/museum1/exhibits/WaterGallery/exhibit3/artifact10.JPG', 15),
(1, 4, 0, 'Images taken by NASA in recent years suggest the presence of water on Mars. But the red planet&#39s atmosphere is too thin and the temperature too cold for water at the surface to remain liquid for long.  ', 'Media/museum1/exhibits/WaterGallery/exhibit4/artifact0.JPG', 16),
(1, 4, 1, 'Water is a very common substance in our solar system. Many planets, moons, and comets are thought to contain water, mostly as ice and vapour. But as far as we know, Earth is the only planet with large quantities of liquid water.', 'Media/museum1/exhibits/WaterGallery/exhibit4/artifact1.JPG', 17),
(1, 4, 2, 'There is evidence of frozen water at our moon&#39s poles. This water probably came from comets that hit the moon during the last two or three billion years. Ice has remained in areas that are shaded by crater rims, where the cold has prevented it from melting or evaporating.', 'Media/museum1/exhibits/WaterGallery/exhibit4/artifact2.JPG', 18),
(1, 4, 3, 'Comets are essentially big dirty snowballs. The center of a comet is made up of ice and dust. The ice is mostly frozen water, but it can also include ammonia, carbon dioxide, carbon monoxide and methane. ', 'Media/museum1/exhibits/WaterGallery/exhibit4/artifact3.JPG', 19),
(1, 4, 4, 'Viewed from space, our planet&#39s most valuable substance shines bright blue. The Earth&#39s richness in water is the main reason why our home is teeming with life.', 'Media/museum1/exhibits/WaterGallery/exhibit4/artifact4.JPG', 20),
(1, 5, 0, 'Did you notice the spots on the baby cougars? Spotted fur makes it harder for the kittens to be seen in their surroundings. Surprisingly, they need to hide most from male cougars, who often attack a female&#39s offspring. \r\nIt&#39s easy to determine a cougar kitten&#39s age by looking at its fur. A baby cougar looses it&#39s spots at around six months. \r\n', 'Media/museum1/exhibits/MammalGallery/exhibit5/artifact0.JPG', 21),
(1, 5, 1, 'Baby cougars begin to eat meat caught by their mother at about six weeks. They&#39re weaned by three months but stay with their mother for at least another year. Growing big and learning survival skills.\r\nKittens play with each other to develop their muscles and to practice the movements they&#39ll need for hunting and for defending themselves. ', 'Media/museum1/exhibits/MammalGallery/exhibit5/artifact1.JPG', 22),
(1, 6, 0, 'Beavers need to keep their front teeth sharp because they use them to cut down trees for shelter and food. The front part of their incisors is covered with hard enamel, while the back is softer and wears down more quickly, leaving a chisel-sharp edge.', 'Media/museum1/exhibits/MammalGallery/exhibit6/artifact0.JPG', 23),
(1, 6, 1, 'Beavers can gnaw through tree trunks up to 85cm in diameter, that&#39s even wider then a large garbage can. ', 'Media/museum1/exhibits/MammalGallery/exhibit6/artifact1.JPG', 24),
(1, 6, 2, 'With their webbed feet and paddle-like tails, beavers can easily out swim land predators such as coyotes, lynx, foxes, and bears. ', 'Media/museum1/exhibits/MammalGallery/exhibit6/artifact2.JPG', 25),
(1, 7, 0, 'Usus arctos is the grizzly&#39s scientific name. Ursus means &#39bear&#39 in Latin and arctos means &#39bear&#39 in Greek.\r\n\r\nThroughout the summer, grizzles eat rodents, though it can take hours to dig them out of the ground. In the fall, their most important food are berries, nuts, and vegetation.\r\n\r\nOnce they&#39ve built up enough fat reserves, grizzlies look for a winter den. They may use a natural cave, a hollow fallen tree, or a hole dug in a well drained slope.\r\n', 'Media/museum1/exhibits/MammalGallery/exhibit7/artifact0.JPG', 26),
(1, 8, 0, 'It&#39s September, and this group of males has spent most of the year in a bachelor band. They&#39ll only associate with females in a few months&#39 time, when breeding season starts.\r\n\r\nHow can you tell how old a thinhorn sheep is? Count the rings on its horns! Over the years, thinhorn sheep accumulate rings, which are a good indicator of age, just like tree trunks. But don&#39t count every ripple, just the deepest ones. ', 'Media/museum1/exhibits/MammalGallery/exhibit8/artifact0.JPG', 27),
(1, 8, 1, 'The dominant male is usually the one with the biggest and curliest horns. He&#39s often also one of the oldest, since horns grow larger with age. Can you tell which of these males is the oldest?\n\nSmall horned males usually recognize the superiority of those with larger horns and choose not to challenge them, but rams of similar size will butt heads to decide who dominates. The champion wins the right to mate.\n\nFemale thinhorn sheep are thought to be receptive to mating for only one day each year. No wonder males engage in such tough competition to get a date with a willing female.\n', 'Media/museum1/exhibits/MammalGallery/exhibit8/artifact1.JPG', 28),
(1, 9, 0, 'How many moose can you spot in the diorama? Although they prefer to be alone, moose sometimes gather in a good feeding spot like this one.\n\nThe name &#39moose&#39 comes from the Algonquian word that means twig eater. Amazingly, these huge animals manage to survive the cold months on a meager diet of twigs and conifer needles.\n \nDoes pondweed sound appetizing to you? Sodium rich water plants are a favourite food for moose, who will even dunk their whole heads underwater to reach them.\nHaving long legs has many advantages, moose can reach tall branches to nibble twigs, wade in water to gobble up \naquatic plants, and walk in deep snow to find better feeding grounds.\n\nDid you notice how large the moose&#39s lips are? Strong and flexible, they&#39re used to strip leaves from shrugs and trees.\n\nPlants are generally low in calories and nutrients. So how does a moose keep its huge body running on such a diet? Quantity! Moose spend most of their time filling up their bellies, taking in up to 20 kilograms of food everyday.', 'Media/museum1/exhibits/MammalGallery/exhibit9/artifact0.JPG', 29),
(1, 10, 0, 'Muskox may look very much like wild cattle such as bison, but they&#39re more closely related to mountain goats and bighorn sheep.\n\nBoth male and female muskox have horns, but those of the male are larger. Horns are an important social tool: they&#39re used for intimidation during herd disputes and they also communicate sexual maturity.\n\n\n', 'Media/museum1/exhibits/MammalGallery/exhibit10/artifact0.JPG', 30),
(1, 10, 1, 'With few predators, besides wolves, able to crack their defenses, muskox can live a very long time, up to 25 years.\r\n\r\n\r\n', 'Media/museum1/exhibits/MammalGallery/exhibit10/artifact1.JPG', 31),
(1, 11, 0, 'This enormous bison boldly stands its ground against the hungry wolves. Healthy adult bison are intimidating to wolves, who prefer to attack young sick or older animals.\r\n\r\nA bison can move surprisingly fast, and may charge a wolf that is approaching a vulnerable member of the herd. Because of this, wolves often target individuals that have been separated from the group.\r\n\r\n\r\n\r\n', 'Media/museum1/exhibits/MammalGallery/exhibit11/artifact0.JPG', 32),
(1, 11, 1, 'These wolves shouldn&#39t get to close to the bison. It could fight back, using it&#39s horns, hooves, and tremendous strength. A bison is capable of badly injuring or even killing a wolf with one swift kick to the head. Ouch!\r\n\r\nIn a pack, wolves work as a group to catch large animals. When hoofed mammals are hard to find, wolves sometimes target smaller animals, such as beavers and hares.\r\n\r\nHunting is hard work, so wolves revisit a carcass until it&#39s complete devoured. Scavenging animals such as foxes, wolverines and ravens also benefit, stealing unattended leftovers. \r\n\r\n', 'Media/museum1/exhibits/MammalGallery/exhibit11/artifact1.JPG', 33),
(1, 12, 0, 'It&#39s hard to hide in such a side open landscape, but that&#39s not a problem for pronghorns. They can not only see great distances, but they also run extremely fast. Predators rarely stand a chance.\n\nHow fast can pronghorns run? As the fastest land mammal in North America, the pronghorn can reach a top speed of 95 kilometers an hour. That&#39s almost fast enough to keep up with cars on the highway!\n\nThere is only one land mammal on the planet that can run faster than the pronghorn: the African cheetah. But pronghorns have the advantage over long distances, as they have more stamina and can easily maintain their rapid pace over several kilometers.', 'Media/museum1/exhibits/MammalGallery/exhibit12/artifact0.JPG', 34),
(1, 12, 1, 'When you walk, you roll on your feet from heel to ball. But pronghorns lengthen their stride by walking on the tips of their toes, reaching farther with each step.\n\nIf a pronghorn entered a long jump competition it would probably win. At high speed, pronghorns can jump over gaps up to 8 meters wide. That&#39s twice the width of this diorama. \n', 'Media/museum1/exhibits/MammalGallery/exhibit12/artifact2.JPG', 35),
(1, 12, 2, 'Not as proficient at high jump, a pronghorn would rather crawl under a fence than jump over it. Unfortunately, high fences often keep migrating pronghorn herds from reaching crucial feeding grounds.', 'Media/museum1/exhibits/MammalGallery/exhibit12/artifact1.JPG', 36),
(1, 13, 0, 'Notice the wide hooves of the caribou. Their toes spread out to act like snowshoes, distributing their weight so they don&#39t sink in deep snow or soft boggy terrain.\n\nNo need for shovels: caribou use their broad hooves to scoop up the snow that covers the ground lichen they like to eat in winter.\n\nThe name &#39caribou&#39 is believed to have come from the Mi&#39kmaq word xalibu, &#39meaning the animal who digs&#39.\nCaribou are covered in a thick coat of hollow guard hairs. Air pockets inside these hairs create an insulating layer that retains body heat. Caribou often have to cross wide rushing rivers that block their path. Luckily, they&#39re excellent swimmers. Their wide hooves act like paddles, and their dense coat of hollow hairs helps them to stay afloat.\n\n\nIn winter, stiff hairs between the toes of the caribou grow into thick tufts that protect their fleshy footpads from the icy ground. \n', 'Media/museum1/exhibits/MammalGallery/exhibit13/artifact0.JPG', 37),
(1, 14, 0, 'This slab of rock is sedimentary, one of the three main types of rock types. It formed when rock particles were compacted and cemented into a new rock.', 'Media/museum1/exhibits/EarthGallery/exhibit14/artifact0.JPG', 38),
(1, 14, 1, 'This slab of rock is metamorphic, one of the three main rock types. It formed when a pre-existing rock was transformed by the Earth&#39s heat and pressure into a new rock.', 'Media/museum1/exhibits/EarthGallery/exhibit14/artifact1.JPG', 39),
(1, 14, 2, 'This slab of rock is magmatic, one of the three main rock types. It formed when liquid rock, magma, cooled and solidified into new rock.', 'Media/museum1/exhibits/EarthGallery/exhibit14/artifact2.JPG', 40),
(1, 15, 0, 'The planets take shape: as dust and gasses circled the early sun, electrostatic forces stuck these cosmic grains together. As more particles merged, they formed larger masses with increased gravity. Soon, chunks were colliding with each other and growing with every impact. These circling bodies eventually swept their orbital path clear of debris and formed the planets in their present orbits. \n\n\n\n\n', 'Media/museum1/exhibits/EarthGallery/exhibit15/artifact0.JPG', 41),
(1, 15, 1, 'Birth of a star: our solar system began as a cloud of gasses and dust called the pre-solar nebula. When a nearby supernova exploded, shock waves ripped through the cloud and collapsed the nebula. Most of the collapsing mass collected at the center to become the sun. The rest formed a swirling disk around the newly ignited star.\n', 'Media/museum1/exhibits/EarthGallery/exhibit15/artifact1.JPG', 42),
(1, 16, 0, 'Earth-born of a spinning cloud of dust within a boundless universe. From its beginnings as a sea of molten rock, Earth has unceasingly transformed itself into the vast expanse of water dotted with continents that makes up our planet today.\n', 'Media/museum1/exhibits/EarthGallery/exhibit16/artifact0.JPG', 43),
(1, 17, 0, 'Moonrise: Earth&#39s moon formed when an asteroid the size of Mars struck the young planet. The enormous force of the impact re-melted much of the rocky mantle and sent a spray of liquid rock into orbit around the Earth. The rock solidified and coalesced into a single body that is now our moon.\n\nThe same huge impact that created the moon also likely changed Earth&#39s axis. The resulting 23.5 degree tilt gives Earth its seasons.', 'Media/museum1/exhibits/EarthGallery/exhibit17/artifact0.JPG', 44),
(1, 17, 1, 'Earth and Life: Life appeared on Earth 3.8 billion years ago, out of seemingly uninhabitable environment. Since then life has flourished and transformed our planet.\n\nEarth provides for life. Its particular chemical and physical conditions allowed life to appear and continue to allow it to thrive.\n\nThe appearance of life in the universe requires a specific mix of favorable conditions. Earth has just the right combination of qualities. It is close enough to the sun to keep water liquid, and far enough to prevent the water from evaporating away.\n', 'Media/museum1/exhibits/EarthGallery/exhibit17/artifact0.JPG', 45),
(1, 18, 0, 'Dating the Solar System: The surface of the Earth has been continuously recycled, so we&#39re not able to date our planet from surface rocks. Meteorites, however, are relics from the long-ago brith of our solar system. They contain the same materials that formed the planets. Dating these meteorites can give us a date for the information of the solar system: 4.56 to 4.57 billion years ago.', 'Media/museum1/exhibits/EarthGallery/exhibit18/artifact0.JPG', 46),
(1, 18, 1, 'We can&#39t directly observe the compositions of Earth all the way to its core, but meteorites can give us clues. Stony meteorites are the most common types that land on Earth. Because they formed at the same time and from the same material as the inner rocky planets of our solar system, including Earth, we would expect that these meteorites and Earth would have the same composition. The meteorites, however, typically contain more iron than we find in rocks from the Earth&#39s crust and mantle. The rest of the Earth&#39s iron must therefore be deep under the surface.\r\n\r\nEarth&#39s gravity supports this idea. Based on materials that we find near the surface and in the mantle, Earth&#39s gravity should be weaker. But if heavier materials such as iron are hidden at the core, then Earth&#39s gravity makes sense.\r\n', 'Media/museum1/exhibits/EarthGallery/exhibit18/artifact1.JPG', 47),
(1, 18, 2, 'Studying different types of meteorites gave scientists ideas about the processes that formed Earth&#39s layers. In some meteorites, the rock and metals are evenly distributed. Others, however have very different compositions. Gravitational differentiation causes light materials to rise and heavy ones to sink. This process accounts for the different kinds of meteorites.', 'Media/museum1/exhibits/EarthGallery/exhibit18/artifact2.JPG', 48),
(1, 18, 3, 'The planets, including Earth, formed from many smaller particles crashing and sticking together to form asteroids. Through collisional and radioactive heating, some of the larger asteroids became hot and plastic enough to separate into layers. The iron and other dense elements sank to their core. ', 'Media/museum1/exhibits/EarthGallery/exhibit18/artifact3.JPG', 49),
(1, 19, 0, 'Extreme Makeover! Our planet continuously gets a facelift thanks to plate tectonics. Two hundred million years ago, all the continents were stuck together in a super-continent called Pangaea. But now our world looks very different!\r\n\r\nIn another 100 million years, the Atlantic Ocean will widen and the Mediterranean Sea will disappear as Africa collides with Europe. Australia and Southeast Asia will join together, and California will move in the direction of Alaska. Eventually, in about 250 million years, another supercontinent, Pangaea Ultima, will appear. \r\n', 'Media/museum1/exhibits/EarthGallery/exhibit19/artifact0.JPG', 50),
(1, 20, 0, 'Non-silicate minerals: nonsilicate minerals do not contain the silicate tetrahedron as their main building block. Instead they are made up of non-silicate elements such as carbon, oxygen, hydrogen, sulphur, phosphorous, fluorine and chlorine.\r\n', 'Media/museum1/exhibits/EarthGallery/exhibit20/artifact0.JPG', 51),
(1, 20, 1, 'The non-silicate minerals are a far smaller group than the silicates, but they include several economically important mineral classes. Among these are sulphates, halides, carbonates and phosphates. \r\n', 'Media/museum1/exhibits/EarthGallery/exhibit20/artifact1.JPG', 52);

-- --------------------------------------------------------

--
-- Table structure for table `catagorical`
--

DROP TABLE IF EXISTS `catagorical`;
CREATE TABLE IF NOT EXISTS `catagorical` (
  `ExhibitNumber` int(11) NOT NULL,
  `AdditionalInformation` text NOT NULL,
  `Weblink` text NOT NULL,
  PRIMARY KEY (`ExhibitNumber`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `catagorical`
--

INSERT INTO `catagorical` (`ExhibitNumber`, `AdditionalInformation`, `Weblink`) VALUES
(1, 'Wetlands, whether they be swamps, marshes, bogs, or flood plains, are home to many interesting animals. Some have unusual adaptations that enable them to survive even when the wetland dries up during drought.', 'http://www.mbgnet.net/fresh/wetlands/animals/'),
(2, 'The molluscs or mollusks compose the large phylum of invertebrate animals known as the Mollusca. Around 85,000 extant species of molluscs are recognized. Molluscs are the largest marine phylum, comprising about 23% of all the named marine organisms. Numerous molluscs also live in freshwater and terrestrial habitats. They are highly diverse, not just in size and in anatomical structure, but also in behaviour and in habitat. ', 'http://en.wikipedia.org/wiki/Mollusca'),
(5, 'The cougar (Puma concolor), also known as the mountain lion, puma, panther, painter, mountain cat, or catamount, is a large cat of the family Felidae native to the Americas. Its range, from the Canadian Yukon to the southern Andes of South America, is the greatest of any large wild terrestrial mammal in the Western Hemisphere. An adaptable, generalist species, the cougar is found in most American habitat types. ', 'http://en.wikipedia.org/wiki/Cougar'),
(6, 'Beavers are famously busy, and they turn their talents to reengineering the landscape as few other animals can. When sites are available, beavers burrow in the banks of rivers and lakes. But they also transform less suitable habitats by building dams. Felling and gnawing trees with their strong teeth and powerful jaws, they create massive log, branch, and mud structures to block streams and turn fields and forests into the large ponds that beavers love.\r\n\r\nDomelike beaver homes, called lodges, are also constructed of branches and mud. They are often strategically located in the middle of ponds and can only be reached by underwater entrances. These dwellings are home to extended families of monogamous parents, young kits, and the yearlings born the previous spring.', 'http://animals.nationalgeographic.com/animals/mammals/beaver/'),
(7, 'Bears are mammals of the family Ursidae. Bears are classified as caniforms, or doglike carnivorans, with the pinnipeds being their closest living relatives. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout the Northern Hemisphere and partially in the Southern Hemisphere. Bears are found on the continents of North America, South America, Europe, and Asia.\r\n\r\nCommon characteristics of modern bears include large bodies with stocky legs, long snouts, shaggy hair, plantigrade paws with five nonretractile claws, and short tails. While the polar bear is mostly carnivorous, and the giant panda feeds almost entirely on bamboo, the remaining six species are omnivorous with varied diets.', 'http://en.wikipedia.org/wiki/Bear'),
(8, 'Thinhorn Sheep spend the summer grazing in alpine meadows atop the peaks.  In the fall the sheep move to their winter range a few kilometers away where the wind keeps the snow shallow and the sun warms south-facing slopes.  They will use the same migration routes for generations and return to the same protective cliffs to give birth to their lambs every year.\r\n\r\nDall''s Sheep have long been prized for their delicious meat. First Nations would traditionally hunt sheep with bow and arrows or set snares along frequented travel routes. Sheep fleece was used to make blankets, jackets, and winter pants and horns used for ladles and dishes.', 'http://www.env.gov.yk.ca/animals-habitat/mammals/sheep.php'),
(14, 'The three main types, or classes, of rock are sedimentary, metamorphic, and igneous and the differences among them have to do with how they are formed.\r\n\r\nSedimentary rocks are formed from particles of sand, shells, pebbles, and other fragments of material. Together, all these particles are called sediment. Gradually, the sediment accumulates in layers and over a long period of time hardens into rock. Generally, sedimentary rock is fairly soft and may break apart or crumble easily. You can often see sand, pebbles, or stones in the rock, and it is usually the only type that contains fossils.\r\n\r\nMetamorphic rocks are formed under the surface of the earth from the metamorphosis (change) that occurs due to intense heat and pressure (squeezing). The rocks that result from these processes often have ribbonlike layers and may have shiny crystals, formed by minerals growing slowly over time, on their surface.\r\n\r\nIgneous rocks are formed when magma (molten rock deep within the earth) cools and hardens. Sometimes the magma cools inside the earth, and other times it erupts onto the surface from volcanoes (in this case, it is called lava). When lava cools very quickly, no crystals form and the rock looks shiny and glasslike. Sometimes gas bubbles are trapped in the rock during the cooling process, leaving tiny holes and spaces in the rock.\r\n\r\n', 'http://www.learner.org/interactives/rockcycle/types.html'),
(15, 'Our solar neighborhood is an exciting place. The Solar System is full of planets, moons, asteroids, comets, minor planets, and many other exciting objects. Learn about Io, the explosive moon that orbits the planet Jupiter, or explore the gigantic canyons and deserts on Mars.', 'http://www.kidsastronomy.com/solar_system.htm'),
(18, 'A meteorite is a solid piece of debris, from such sources as asteroids or comets, that originates in outer space and survives its impact with the Earth''s surface. It is called a meteoroid before its impact. A meteorite''s size can range from small to extremely large. When a meteoroid enters the atmosphere, friction, pressure, and chemical interactions with the atmospheric gases cause it to heat up and radiate that energy, thus forming a fireball, also known as a meteor or shooting/falling star. A bolide is either an extraterrestrial body that collides with the Earth, or an exceptionally bright, fireball-like meteor regardless of whether it ultimately impacts the surface.', 'http://en.wikipedia.org/wiki/Meteorite'),
(19, 'There are a few handfuls of major plates and dozens of smaller, or minor, plates. Six of the majors are named for the continents embedded within them, such as the North American, African, and Antarctic plates. Though smaller in size, the minors are no less important when it comes to shaping the Earth. The tiny Juan de Fuca plate is largely responsible for the volcanoes that dot the Pacific Northwest of the United States.', 'http://science.nationalgeographic.com/science/earth/the-dynamic-earth/plate-tectonics-article/');

-- --------------------------------------------------------

--
-- Table structure for table `dramatic`
--

DROP TABLE IF EXISTS `dramatic`;
CREATE TABLE IF NOT EXISTS `dramatic` (
  `ExhibitNumber` int(11) NOT NULL,
  `Background` text NOT NULL,
  `Tear` text NOT NULL,
  `Splash` text NOT NULL,
  `FavouredArtifactThere` text NOT NULL,
  `FavouredArtifactAbsent` text NOT NULL,
  `FavouredArtifactNumber` int(11) NOT NULL,
  `AverageTime` text NOT NULL,
  PRIMARY KEY (`ExhibitNumber`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dramatic`
--

INSERT INTO `dramatic` (`ExhibitNumber`, `Background`, `Tear`, `Splash`, `FavouredArtifactThere`, `FavouredArtifactAbsent`, `FavouredArtifactNumber`, `AverageTime`) VALUES
(1, 'Dramatic/assets/blue.jpg', 'Dramatic/assets/topBlue.png', 'Dramatic/assets/splashRed.png', 'You found the whale! Did you look up? There was also a whale skeleton above the exhibit.', 'You missed the whale! Did you look up? There was a whale skeleton above the exhibit.', 1, '10'),
(2, 'Dramatic/assets/darkOrange.jpg', 'Dramatic/assets/topDarkOrange.png', 'Dramatic/assets/splashGray.png', 'You found the black sea mouse! It''s really a worm but called a mouse because it has short hairs on it''s back and likes to hide half-buried in the sandy ocean floor.', 'You missed taking a photo of the black sea mouse! Look for it next time, it''s not what it sounds like.', 1, '67'),
(5, 'Dramatic/assets/forestGreen.jpg', 'Dramatic/assets/topForestGreen.png', 'Dramatic/assets/splashRed.png', 'You found the baby cougar. Can you remember how many there were in this exhibit? ', 'You missed taking a photo of the baby cougar! Take a photo of it next time to learn more about it.', 1, '16'),
(6, 'Dramatic/assets/lavander.jpg', 'Dramatic/assets/topLavander.png', 'Dramatic/assets/splashBlue.png', 'Next time you are in the woods, look for tree stumps similar to the ones you saw in the display. You maybe able to catch a glimpse of a beaver.', 'Did you look closely at the tree stump in this display? It had been chewed upon by beavers and bore their distinctive marks. Try to find it next time you visit the exhibit.  ', 1, '21'),
(7, 'Dramatic/assets/lighterGreen.jpg', 'Dramatic/assets/topLighterGreen.png', 'Dramatic/assets/splashRed.png', 'You found the Grizzly bear! Can you name all the other types of bears?', 'What is your favourite type of bear? ', 0, '14'),
(8, 'Dramatic/assets/orange2.jpg', 'Dramatic/assets/topOrange.png', 'Dramatic/assets/splashGray.png', 'You found the thinhorn sheep siblings, Donald and Daisy.', 'The two thinhorn sheep in this display had names. Take a picture of them next time to find out what they were called.', 0, '25'),
(14, 'Dramatic/assets/purple.jpg', 'Dramatic/assets/topPurple.png', 'Dramatic/assets/splashBlue.png', 'Magmatic rock is one of the three types of rocks and comes from deep underground. The type of magmatic rock featured in the display is a type of Biotite rock.', 'You missed a picture of a very fine specimen of Biotite rock!', 2, '54'),
(15, 'Dramatic/assets/slate.jpg', 'Dramatic/assets/topSlate.png', 'Dramatic/assets/splashGray.png', 'Can you spot our home, the earth, in the picture you took?', 'Can you name all the planets in the solar system? ', 0, '45'),
(18, 'Dramatic/assets/turquoise.jpg', 'Dramatic/assets/topTurquoise.png', 'Dramatic/assets/splashRed.png', 'You found the largest meteor on display at the museum!', 'Next time try to find the largest meteor on display. It''s bigger than you think.', 3, '134'),
(19, 'Dramatic/assets/wine.jpg', 'Dramatic/assets/topWine.png', 'Dramatic/assets/splashBlue.png', 'Did you find the tectonic plate of our continent? Next time try to spot it on the globe.', 'Did you know that you can interact with the globe to view how the tectonic plates shift? Try it next time.', 0, '43');

-- --------------------------------------------------------

--
-- Table structure for table `exhibits`
--

DROP TABLE IF EXISTS `exhibits`;
CREATE TABLE IF NOT EXISTS `exhibits` (
  `MuseumNumber` int(11) NOT NULL,
  `ExhibitNumber` int(11) NOT NULL,
  `ImageMap` text NOT NULL,
  `Area` text NOT NULL,
  PRIMARY KEY (`ExhibitNumber`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exhibits`
--

INSERT INTO `exhibits` (`MuseumNumber`, `ExhibitNumber`, `ImageMap`, `Area`) VALUES
(1, 1, '<div class="map" >\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/WaterGallery/exhibit1/exhibit1.JPG" usemap="#exhibit_1" />\n</div>', '<map name="exhibit_1">\n<area id="0" href="javascript:void(0);" data-maphilight=''{"strokeColor":"616161","strokeWidth":2,"fillColor":"d1d1d1","fillOpacity":0.6}'' shape="poly" coords="121,390,269,380,472,422,476,531,387,610,231,565,166,532,141,509,133,496" />\n<area id="1" href="javascript:void(0);" data-maphilight=''{"strokeColor":"616161","strokeWidth":2,"fillColor":"d1d1d1","fillOpacity":0.6}'' shape="poly" coords="558,425,951,421,1023,440,1022,488,1022,636,488,630,488,477" />\n</map>'),
(1, 2, '<div class="map" >\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/WaterGallery/exhibit2/exhibit2.JPG" usemap="#exhibit_2" />\n</div>', '<map name="exhibit_2">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="525,485,637,470,986,506,1019,526,1020,720,808,688,670,654,575,624,521,591" />\r\n<area id="1" href="javascript:void(0);"  shape="poly" coords="322,517,323,444,382,433,543,455,510,474,507,563,482,573,402,547,353,530" />\r\n</map>'),
(1, 3, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/WaterGallery/exhibit3/exhibit3.JPG" usemap="#exhibit_3" />\r\n</div>', '<map name="exhibit_3">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="762,512,799,503,860,543,859,595,805,611,751,582" />\r\n\r\n<area id="1" href="javascript:void(0);"  shape="poly" coords="142,598,149,579,206,559,271,563,304,536,364,542,396,550,395,581,255,600,191,611" />\r\n\r\n<area id="2" href="javascript:void(0);"  shape="poly" coords="197,299,248,252,346,283,369,381,365,476,305,499,241,490,204,480,192,429" />\r\n\r\n<area id="3" href="javascript:void(0);"  shape="poly" coords="370,605,426,585,466,566,497,582,492,617,425,626,387,628" />\r\n\r\n<area id="4" href="javascript:void(0);"  shape="poly" coords="707,404,801,403,815,364,805,305,789,256,767,249,730,260,705,342" />\r\n\r\n<area id="5" href="javascript:void(0);"  shape="poly" coords="410,503,456,491,519,493,569,506,593,532,548,549,485,544,427,535,397,530" />\r\n\r\n<area id="6" href="javascript:void(0);"  shape="poly" coords="597,570,624,506,641,456,725,466,730,534,718,589,702,608,672,611,637,607" />\r\n\r\n<area id="7" href="javascript:void(0);"  shape="poly" coords="550,207,498,201,481,238,510,259,546,244" />\r\n\r\n<area id="8" href="javascript:void(0);"  shape="poly" coords="389,258,386,197,398,177,372,164,355,155,369,131,416,147,449,137,493,170,485,208,425,203" />\r\n\r\n<area id="9" href="javascript:void(0);"  shape="poly" coords="687,127,669,214,719,221,764,218,777,193,776,169,762,143,724,126" />\r\n\r\n<area id="10" href="javascript:void(0);"  shape="poly" coords="434,308,481,290,512,333,518,386,473,404,449,418" />\r\n\r\n</map>'),
(1, 4, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/WaterGallery/exhibit4/exhibit4.JPG" usemap="#exhibit_4" />\r\n</div>', '<map name="exhibit_4">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="231,394,303,413,323,449,318,501,261,542,188,536,151,485,149,443,180,412" />\r\n\r\n<area id="1" href="javascript:void(0);"  shape="poly" coords="500,384,461,392,427,414,405,448,397,487,405,526,427,560,461,582,500,590,539,582,573,560,595,526,603,487,595,448,573,414,539,392" />\r\n\r\n<area id="2" href="javascript:void(0);"  shape="poly" coords="299,548,268,554,242,571,225,597,219,628,225,659,242,685,268,702,299,708,330,702,356,685,373,659,379,628,373,597,356,571,330,554" />\r\n\r\n<area id="3" href="javascript:void(0);"  shape="poly" coords="62,516,33,522,8,538,-8,563,-14,592,-8,621,8,646,33,662,62,668,91,662,116,646,132,621,138,592,132,563,116,538,91,522" />\r\n\r\n<area id="4" href="javascript:void(0);"  shape="poly" coords="919,493,878,501,844,524,821,558,813,599,821,640,844,674,878,697,919,705,960,697,994,674,1017,640,1025,599,1017,558,994,524,960,501" />\r\n\r\n\r\n\r\n</map>'),
(1, 5, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/MammalGallery/exhibit5/exhibit5.JPG" usemap="#exhibit_5" />\r\n</div>', '<map name="exhibit_5">\n<area id="0" href="javascript:void(0);"  shape="poly" coords="140,250,189,236,225,233,235,214,244,187,251,174,271,176,287,180,294,169,298,186,298,211,300,228,284,235,288,250,309,265,323,278,357,286,382,303,378,315,352,312,314,303,338,320,363,335,359,347,329,344,323,357,277,373,241,369,198,357,148,377,202,411,240,388,266,380,289,396,240,438,131,423,66,377,51,323,81,279" />\n\n<area id="1" href="javascript:void(0);"  shape="poly" coords="746,471,773,459,814,429,856,408,882,428,895,423,891,446,855,471,805,514,783,520,756,516,744,502" />\n\n\n\n\n</map>'),
(1, 6, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/MammalGallery/exhibit6/exhibit6.JPG" usemap="#exhibit_6" />\r\n</div>', '<map name="exhibit_6">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="229,489,263,488,280,495,324,481,376,502,398,550,398,596,427,613,466,612,455,635,406,636,367,654,307,653,289,639,297,601,288,571,254,554,221,542,211,518,207,512" />\r\n\r\n<area id="1" href="javascript:void(0);"  shape="poly" coords="470,580,477,555,490,535,494,526,502,555,518,577,535,600,558,667,548,707,525,712,490,679,423,664,459,641,471,624" />\r\n\r\n\r\n<area id="2" href="javascript:void(0);"  shape="poly" coords="674,496,619,498,593,512,632,590,691,629,738,654,760,658,770,534,740,511,733,443,741,421,713,411,689,425,673,455,670,480" />\r\n\r\n\r\n\r\n</map>'),
(1, 7, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/MammalGallery/exhibit7/exhibit7.JPG" usemap="#exhibit_7" />\r\n</div>', '<map name="exhibit_7">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="459,525,472,504,467,487,482,434,483,418,494,415,535,378,574,348,619,346,655,334,708,353,730,390,723,469,716,525,701,552,668,559,591,609,554,615,533,602,547,580,561,556,572,550,579,532,549,500,533,523,519,526,494,549,475,546,468,544" />\r\n\r\n\r\n</map>'),
(1, 8, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/MammalGallery/exhibit8/exhibit8.JPG" usemap="#exhibit_8" />\r\n</div>', '<map name="exhibit_8">\n<area id="0" href="javascript:void(0);"  shape="poly" coords="302,346,318,306,321,293,269,238,255,230,250,222,237,230,218,217,220,210,235,216,254,177,261,174,271,184,297,168,323,176,334,192,349,208,384,207,433,201,456,214,466,223,460,245,494,252,506,262,532,246,556,282,573,300,618,298,652,320,647,352,657,378,634,408,638,426,594,448,552,446,544,433,528,436,500,445,484,441,503,417,493,402,504,372,479,316,462,327,436,322,401,327,374,349,346,356,317,360" />\n\n<area id="1" href="javascript:void(0);"  shape="poly" coords="789,593,811,509,792,466,784,415,767,394,739,387,744,370,774,339,788,322,821,312,862,326,870,357,856,380,892,386,933,388,958,403,957,442,952,478,948,524,949,575,945,591,903,572,866,612,808,609,793,608" />\n\n\n</map>'),
(1, 9, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/MammalGallery/exhibit9/exhibit9.JPG" usemap="#exhibit_9" />\r\n</div>', '<map name="exhibit_9">\n<area id="0" href="javascript:void(0);"  shape="poly" coords="157,579,160,478,169,454,175,425,167,386,172,362,134,365,137,326,186,292,218,294,247,285,327,294,363,294,386,276,453,266,494,260,534,243,503,218,467,192,484,190,482,166,502,177,504,170,520,182,521,173,540,198,543,164,569,218,610,182,593,229,619,218,628,232,642,217,605,254,619,271,647,280,671,319,671,345,652,348,634,355,623,345,620,335,598,349,582,351,568,367,553,359,540,379,501,397,480,423,472,448,450,464,447,506,456,532,458,565,470,618,450,616,413,599,307,582" />\n\n\n\n</map>'),
(1, 10, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/MammalGallery/exhibit10/exhibit10.JPG" usemap="#exhibit_10" />\r\n</div>', '<map name="exhibit_10">\n<area id="0" href="javascript:void(0);"  shape="poly" coords="49,340,89,328,137,316,181,317,237,329,269,343,292,333,327,333,364,343,395,331,438,338,462,359,487,398,501,415,510,433,516,457,521,475,509,487,489,493,459,504,418,495,397,493,381,501,387,515,365,526,338,527,328,554,292,552,262,546,261,569,241,581,196,567,134,569,115,595,87,587,43,570" />\n\n<area id="1" href="javascript:void(0);"  shape="poly" coords="832,458,845,451,859,439,865,432,881,442,910,463,923,487,928,514,935,501,951,488,962,505,961,532,936,557,933,575,928,591,913,594,900,587,877,603,868,607,870,579,871,565,856,563,844,560,842,544,852,530,859,508,865,489,860,474,849,471" />\n\n\n\n\n</map>'),
(1, 11, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/MammalGallery/exhibit11/exhibit11.JPG" usemap="#exhibit_11" />\r\n</div>', '<map name="exhibit_11">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="4,329,104,310,207,297,255,299,298,320,352,380,374,384,379,399,401,419,405,444,418,442,405,465,376,502,345,510,321,527,300,546,171,577,12,581" />\r\n\r\n<area id="1" href="javascript:void(0);"  shape="poly" coords="728,473,755,451,829,467,879,474,907,486,911,479,924,478,944,460,948,452,960,457,1022,475,1022,631,986,619,957,605,856,566,765,555,754,548,787,519,760,505,736,500,723,494,723,483" />\r\n\r\n\r\n\r\n\r\n</map>'),
(1, 12, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/MammalGallery/exhibit12/exhibit12.JPG" usemap="#exhibit_12" />\r\n</div>', '<map name="exhibit_12">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="31,449,47,440,109,448,132,445,140,454,156,427,150,411,157,403,167,418,183,416,194,398,190,391,202,402,194,420,210,435,209,448,186,448,165,488,136,520,122,523,118,552,132,597,113,596,40,588,27,588,22,528,26,458" />\r\n\r\n<area id="1" href="javascript:void(0);"  shape="poly" coords="816,574,828,533,795,501,773,466,771,444,749,446,744,436,768,412,757,391,765,391,766,366,776,406,786,405,783,391,792,387,788,369,795,366,795,407,806,401,810,421,823,456,839,460,868,468,953,457,995,478,1005,499,1006,535,995,546,1003,569,1005,612,996,634,984,644,955,625,949,617,957,593,930,557,891,553,853,550,832,580" />\r\n\r\n<area id="2" href="javascript:void(0);"  shape="poly" coords="573,567,592,511,573,475,568,444,566,427,579,436,588,435,598,426,593,454,607,454,627,459,614,450,617,441,625,426,621,417,635,430,646,415,645,436,654,450,670,457,719,454,758,466,768,495,780,519,780,532,751,525,727,523,709,538,686,545,680,563,659,573,638,564,612,563" />\r\n\r\n\r\n\r\n</map>'),
(1, 13, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/MammalGallery/exhibit13/exhibit13.JPG" usemap="#exhibit_13" />\r\n</div>', '<map name="exhibit_13">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="355,555,359,540,363,525,364,501,366,475,345,468,327,483,301,466,298,429,289,428,278,419,280,399,285,387,275,375,280,362,303,368,322,367,333,372,344,383,382,381,417,389,461,384,487,383,525,401,559,405,610,396,651,396,681,415,682,448,674,471,672,498,671,534,667,564,662,573,603,585,548,609,513,591,488,556" />\r\n\r\n</map>'),
(1, 14, '<div class="map" >\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/EarthGallery/exhibit14/exhibit14.JPG" usemap="#exhibit_14" />\n</div>', '<map name="exhibit_14">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="5,343,191,335,198,538,18,578" />\r\n\r\n<area id="1" href="javascript:void(0);"  shape="poly" coords="579,323,670,321,670,454,577,462" />\r\n\r\n<area id="2" href="javascript:void(0);"  shape="poly" coords="915,315,992,317,988,430,904,433" />\r\n\r\n</map>'),
(1, 15, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/EarthGallery/exhibit15/exhibit15.JPG" usemap="#exhibit_15" />\r\n</div>', '<map name="exhibit_15">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="27,189,124,125,147,116,219,127,368,199,391,243,410,294,387,340,355,354,286,331,196,330,163,376,112,441,84,499,38,470,15,413,17,300,10,228" />\r\n\r\n<area id="1" href="javascript:void(0);"  shape="poly" coords="435,166,485,148,545,137,621,158,617,213,642,231,700,230,703,262,770,265,764,324,625,332,534,351,474,346,434,310,425,266,428,207" />\r\n\r\n\r\n</map>'),
(1, 16, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/EarthGallery/exhibit16/exhibit16.JPG" usemap="#exhibit_16" />\r\n</div>', '<map name="exhibit_16">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="100,341,434,349,439,714,116,727" />\r\n\r\n</map>'),
(1, 17, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/EarthGallery/exhibit17/exhibit17.JPG" usemap="#exhibit_17" />\r\n</div>', '<map name="exhibit_17">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="87,144,259,142,263,185,427,195,426,240,440,309,507,315,510,536,267,546,177,579,89,579,35,542,9,496,2,268" />\r\n\r\n<area id="1" href="javascript:void(0);"  shape="poly" coords="516,137,521,625,958,640,974,324,1019,274,1020,167,933,103,838,136" />\r\n\r\n</map>'),
(1, 18, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/EarthGallery/exhibit18/exhibit18.JPG" usemap="#exhibit_18" />\r\n</div>', '<map name="exhibit_18">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="68,244,107,239,162,252,199,276,221,305,238,338,245,374,233,414,211,440,197,467,161,484,110,492,51,477,11,450,0,435,0,287,32,258" />\r\n\r\n<area id="1" href="javascript:void(0);"  shape="poly" coords="255,261,253,441,273,476,423,476,426,267" />\r\n\r\n<area id="2" href="javascript:void(0);"  shape="poly" coords="532,203,621,183,689,204,737,252,764,310,766,377,756,431,716,484,668,518,594,530,512,505,463,461,440,403,438,344,457,284,485,242" />\r\n\r\n<area id="3" href="javascript:void(0);"  shape="poly" coords="784,316,778,427,950,426,963,265,918,248,877,241,858,299,851,314" />\r\n\r\n</map>'),
(1, 19, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/EarthGallery/exhibit19/exhibit19.JPG" usemap="#exhibit_19" />\r\n</div>', '<map name="exhibit_19">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="643,694,574,667,509,626,455,573,410,489,391,399,410,298,458,209,535,140,637,96,710,86,791,99,875,136,957,206,990,267,1011,329,1018,387,1010,452,993,507,956,574,900,629,820,677,741,688" />\r\n</map>'),
(1, 20, '<div class="map" >\r\n<img id="imageMap" class="map maphilighted" src="Media/museum1/exhibits/EarthGallery/exhibit20/exhibit20.JPG" usemap="#exhibit_20" />\r\n</div>', '<map name="exhibit_20">\r\n<area id="0" href="javascript:void(0);"  shape="poly" coords="691,242,725,223,747,193,776,182,798,199,819,214,836,229,825,261,830,286,854,314,853,336,828,349,801,343,769,348,731,344,719,333,732,295,716,285,697,271" />\r\n\r\n<area id="1" href="javascript:void(0);"  shape="poly" coords="467,509,477,502,501,524,511,541,519,556,529,575,512,584,490,585,474,580,461,576,448,582,451,568,448,557,444,544,451,528" />\r\n</map>');

-- --------------------------------------------------------

--
-- Table structure for table `exhibitVisits`
--

DROP TABLE IF EXISTS `exhibitVisits`;
CREATE TABLE IF NOT EXISTS `exhibitVisits` (
  `MuseumNumber` int(11) NOT NULL,
  `ExhibitNumber` int(11) NOT NULL,
  `VisitNumber` int(11) NOT NULL AUTO_INCREMENT,
  `ExhibitType` text NOT NULL,
  `NumberOfArtifacts` int(11) NOT NULL,
  `ExhibitTitle` text NOT NULL,
  `Image` text NOT NULL,
  `VisitStart` datetime NOT NULL,
  `VisitEnd` datetime NOT NULL,
  PRIMARY KEY (`VisitNumber`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `exhibitVisits`
--

INSERT INTO `exhibitVisits` (`MuseumNumber`, `ExhibitNumber`, `VisitNumber`, `ExhibitType`, `NumberOfArtifacts`, `ExhibitTitle`, `Image`, `VisitStart`, `VisitEnd`) VALUES
(1, 19, 6, 'Rocks and Space', 1, 'Tectonic Plates', 'Media/museum1/exhibits/EarthGallery/exhibit19/exhibit19.JPG', '2015-05-20 09:45:57', '2015-05-20 09:46:12');

-- --------------------------------------------------------

--
-- Table structure for table `itinerary`
--

DROP TABLE IF EXISTS `itinerary`;
CREATE TABLE IF NOT EXISTS `itinerary` (
  `MuseumNumber` int(11) NOT NULL,
  `ExhibitNumber` int(11) NOT NULL,
  `VisitationNumber` int(11) NOT NULL,
  `ExhibitTitle` text NOT NULL,
  `Image` text NOT NULL,
  PRIMARY KEY (`ExhibitNumber`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itinerary`
--

INSERT INTO `itinerary` (`MuseumNumber`, `ExhibitNumber`, `VisitationNumber`, `ExhibitTitle`, `Image`) VALUES
(1, 19, 1, 'Tectonic Plates', 'Media/museum1/exhibits/EarthGallery/exhibit19/exhibit19.JPG');

-- --------------------------------------------------------

--
-- Table structure for table `museum`
--

DROP TABLE IF EXISTS `museum`;
CREATE TABLE IF NOT EXISTS `museum` (
  `MuseumNumber` int(11) NOT NULL,
  `ExhibitNumber` int(11) NOT NULL,
  `PositionX` int(11) NOT NULL,
  `PositionY` int(11) NOT NULL,
  `Title` text NOT NULL,
  `Picture` text NOT NULL,
  `Text` text NOT NULL,
  `Icon` text NOT NULL,
  `ActiveIcon` text NOT NULL,
  PRIMARY KEY (`ExhibitNumber`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `museum`
--

INSERT INTO `museum` (`MuseumNumber`, `ExhibitNumber`, `PositionX`, `PositionY`, `Title`, `Picture`, `Text`, `Icon`, `ActiveIcon`) VALUES
(1, 1, -45, 125, 'Marine Mammals and Birds', 'Media/museum1/exhibits/WaterGallery/exhibit1/exhibit1.JPG', 'Learn about marine mammals, such as whales and how they have adapted to their habitat and about marine birds who live along the coast. ', 'MuseumGen/icons/iconBlue.png', 'MuseumGen/icons/iconBlueActive.png'),
(1, 2, -45, 115, 'Molusks and Invertabrates', 'Media/museum1/exhibits/WaterGallery/exhibit2/exhibit2.JPG', 'Molusks and Invertabrates are some of the earliest forms of complex oceanic life. Learn how they evolved and survived. See specimens and learn how strange they can be.', 'MuseumGen/icons/iconBlue.png', 'MuseumGen/icons/iconBlueActive.png'),
(1, 5, -40, 145, 'Cougar', 'Media/museum1/exhibits/MammalGallery/exhibit5/exhibit5.JPG', 'Learn about the cougar and it''s baby cubs. See a diorama of it in it''s natural habitat and learn how it hunts. ', 'MuseumGen/icons/iconYellow.png', 'MuseumGen/icons/iconYellowActive.png'),
(1, 6, -40, 155, 'Beaver', 'Media/museum1/exhibits/MammalGallery/exhibit6/exhibit6.JPG', 'See a diorama of Canada''s national animal in it''s natural habitat. Learn what makes the beaver such a busy animal and see tree stumps that it has chewed. ', 'MuseumGen/icons/iconYellow.png', 'MuseumGen/icons/iconYellowActive.png'),
(1, 7, -50, 145, 'Bear', 'Media/museum1/exhibits/MammalGallery/exhibit7/exhibit7.JPG', 'Learn all about the Grizzly Bear! Rawr!', 'MuseumGen/icons/iconYellow.png', 'MuseumGen/icons/iconYellowActive.png'),
(1, 8, -50, 155, 'Thinhorn Sheep', 'Media/museum1/exhibits/MammalGallery/exhibit8/exhibit8.JPG', 'See Thinhorn sheep up top high mountain peaks in this diorama. Learn about how they make their home in their mountains and why they grow such big horns. ', 'MuseumGen/icons/iconYellow.png', 'MuseumGen/icons/iconYellowActive.png'),
(1, 15, -40, 40, 'The Solar System', 'Media/museum1/exhibits/EarthGallery/exhibit15/exhibit15.JPG', 'Learn about how it all began; the birth of the universe and how stars are formed. ', 'MuseumGen/icons/iconGreen.png', 'MuseumGen/icons/iconGreenActive.png'),
(1, 14, -40, 30, 'The Three Types of Rock', 'Media/museum1/exhibits/EarthGallery/exhibit14/exhibit14.JPG', 'Learn about the three different types of rock that compose the earths crust. Learn about how they are formed and where they are found. ', 'MuseumGen/icons/iconGreen.png', 'MuseumGen/icons/iconGreenActive.png'),
(1, 18, -45, 10, 'Meteorites', 'Media/museum1/exhibits/EarthGallery/exhibit18/exhibit18.JPG', 'Not all rocks come from Earth! Some come from outer space! Learn all about meteorites in this exhibit, how they are formed, what they can tell us about how old the Earth is, and see some examples of them. ', 'MuseumGen/icons/iconGreen.png', 'MuseumGen/icons/iconGreenActive.png'),
(1, 19, -33, 10, 'Tectonic Plates', 'Media/museum1/exhibits/EarthGallery/exhibit19/exhibit19.JPG', 'The Earth''s mantle is not a uniform thing. It contains many cracks and fault lines in which different tectonic plates shift against each other from the pressures below. Learn about how the Earth undergoes geologic change. ', 'MuseumGen/icons/iconGreen.png', 'MuseumGen/icons/iconGreenActive.png');

-- --------------------------------------------------------

--
-- Table structure for table `sequential`
--

DROP TABLE IF EXISTS `sequential`;
CREATE TABLE IF NOT EXISTS `sequential` (
  `ExhibitNumber` int(11) NOT NULL,
  `PositionX` int(11) NOT NULL,
  `PositionY` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sequential`
--

INSERT INTO `sequential` (`ExhibitNumber`, `PositionX`, `PositionY`) VALUES
(0, 3006, 3175),
(1, 4327, 1075),
(2, 4904, 885),
(5, 2213, 1382),
(6, 2601, 1382),
(7, 2974, 1382),
(8, 3349, 1382),
(14, 1000, 900),
(15, 1000, 1300),
(18, 1778, 1081),
(19, 4617, 2037);

-- --------------------------------------------------------

--
-- Table structure for table `userdata0`
--

DROP TABLE IF EXISTS `userdata0`;
CREATE TABLE IF NOT EXISTS `userdata0` (
  `order` int(11) NOT NULL AUTO_INCREMENT,
  `MuseumNumber` int(11) NOT NULL,
  `ExhibitNumber` int(11) NOT NULL,
  `ArtifactNumber` int(11) NOT NULL,
  `Image` text NOT NULL,
  `Description` text NOT NULL,
  `Info` text NOT NULL,
  `Time` datetime NOT NULL,
  PRIMARY KEY (`order`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
