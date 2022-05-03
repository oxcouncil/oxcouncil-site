import React from 'react';
import Slider from 'react-slick';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Flex,
  Spacer,
  IconButton, 
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { BrandButton } from '../components/Buttons'
import PostPreview from './PostPreview'
import Post from '../types/post'

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 8000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type Props = {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  
  
  return (
    <>
      <Flex>
        <Heading as="h1"> 
          <Text as={'span'} color='brand.100' mr="2">
            Latest
          </Text>
          <Text as={'span'}>
            Blog
          </Text>
        </Heading>
        <Spacer />
        <Box>
          <IconButton
            aria-label="left-arrow"
            borderRadius="full"
            mr="5"
            zIndex={2}
            bg={useColorModeValue('white.100', 'gray.900')}
            onClick={() => slider?.slickPrev()}>
            <BiLeftArrowAlt />
          </IconButton>
          <IconButton
            aria-label="right-arrow"
            borderRadius="full"
            zIndex={2}
            bg={useColorModeValue('white.100', 'gray.900')}
            onClick={() => slider?.slickNext()}>
            <BiRightArrowAlt />
          </IconButton>
        </Box>
      </Flex>
      <Box my="12" borderRadius="30px" overflow="hidden" bg={useColorModeValue('white.100', 'gray.900')}>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </Slider>
      </Box>
    </>
  )
}

export default PostList