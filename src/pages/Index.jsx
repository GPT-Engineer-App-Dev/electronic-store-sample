import { Box, Button, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: 699,
    category: "smartphone",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: 999,
    category: "laptop",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    price: 199,
    category: "smartwatch",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProducts(
      sampleProducts.filter(product =>
        (product.name.toLowerCase().includes(query) ||
         product.description.toLowerCase().includes(query)) &&
        (category === "" || product.category === category) &&
        (product.price >= priceRange[0] && product.price <= priceRange[1])
      )
    );
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    const value = event.target.value.split("-");
    setPriceRange([parseInt(value[0]), parseInt(value[1])]);
  };

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            bg="white"
            color="black"
            maxW="300px"
          />
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.600" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Filter Section */}
      <Box py={4}>
        <Heading size="md" mb={4}>Filter Products</Heading>
        <HStack spacing={4}>
          <Select placeholder="Select category" onChange={handleCategoryChange}>
            <option value="smartphone">Smartphone</option>
            <option value="laptop">Laptop</option>
            <option value="smartwatch">Smartwatch</option>
          </Select>
          <Select placeholder="Select price range" onChange={handlePriceRangeChange}>
            <option value="0-200">$0 - $200</option>
            <option value="200-500">$200 - $500</option>
            <option value="500-1000">$500 - $1000</option>
          </Select>
        </HStack>
      </Box>

      {/* Products Section */}
      <Box py={10}>
        <Heading textAlign="center" mb={8}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} mb={4} />
              <Heading size="md" mb={2}>{product.name}</Heading>
              <Text mb={2}>{product.description}</Text>
              <Text fontWeight="bold">${product.price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10}>
        <Flex justifyContent="space-between" alignItems="center" px={10}>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;