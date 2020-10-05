import {Box, Heading, Text} from '@primer/components'
import React from 'react'
import useSiteMetadata from '@primer/gatsby-theme-doctocat/src/use-site-metadata'
import Container from '@primer/gatsby-theme-doctocat/src/components/container'

function Hero() {
  const {title, description} = useSiteMetadata()

  return (
    <Box bg="black" py={6}>
      <Container>
        <Heading as="h1" color="blue.4" fontSize={7} m={0}>
          {title}
        </Heading>
        <Text as="p" m={0} color="blue.2" fontSize={4}>
          {description}
        </Text>
      </Container>
    </Box>
  )
}

export default Hero
