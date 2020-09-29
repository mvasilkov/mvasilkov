import {Box, Flex, Link, StyledOcticon, Sticky} from '@primer/components'
import {
  SearchIcon,
  ThreeBarsIcon,
} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import {ThemeContext} from 'styled-components'
import primerNavItems from '@primer/gatsby-theme-doctocat/src/primer-nav.yml'
import useSiteMetadata from '@primer/gatsby-theme-doctocat/src/use-site-metadata'
import DarkButton from '@primer/gatsby-theme-doctocat/src/components/dark-button'
import MobileSearch from '@primer/gatsby-theme-doctocat/src/components/mobile-search'
import NavDrawer, {useNavDrawerState} from '@primer/gatsby-theme-doctocat/src/components/nav-drawer'
import NavDropdown, {NavDropdownItem} from '@primer/gatsby-theme-doctocat/src/components/nav-dropdown'
import Search from '@primer/gatsby-theme-doctocat/src/components/search'
import {Favicon} from '../../../components/icons'

export const HEADER_HEIGHT = 66

function Header({isSearchEnabled}) {
  const theme = React.useContext(ThemeContext)
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useNavDrawerState(
    theme.breakpoints[2],
  )
  const [isMobileSearchOpen, setIsMobileSearchOpen] = React.useState(false)
  const siteMetadata = useSiteMetadata()
  return (
    <Sticky>
      <Flex
        height={HEADER_HEIGHT}
        px={[3, null, null, 4]}
        alignItems="center"
        justifyContent="space-between"
        bg="black"
      >
        <Flex alignItems="center">
          <Link
            as={GatsbyLink}
            to="/"
            color="rei.pink"
            mr={3}
            lineHeight="condensedUltra"
          >
            <StyledOcticon icon={Favicon} size="medium" />
          </Link>

          {siteMetadata.shortName ? (
            <>
              <Link as={GatsbyLink} to="/" color="rei.pink" fontFamily="mono">
                {siteMetadata.shortName}
              </Link>
            </>
          ) : null}

          {isSearchEnabled ? (
            <Box display={['none', null, null, 'block']} ml={4}>
              <Search />
            </Box>
          ) : null}
        </Flex>
        <Flex>
          <Box display={['none', null, null, 'block']}>
            <PrimerNavItems items={primerNavItems} />
          </Box>
          <Flex display={['flex', null, null, 'none']}>
            {isSearchEnabled ? (
              <>
                <DarkButton
                  aria-label="Search"
                  aria-expanded={isMobileSearchOpen}
                  onClick={() => setIsMobileSearchOpen(true)}
                >
                  <SearchIcon />
                </DarkButton>
                <MobileSearch
                  isOpen={isMobileSearchOpen}
                  onDismiss={() => setIsMobileSearchOpen(false)}
                />
              </>
            ) : null}
            <DarkButton
              aria-label="Menu"
              aria-expanded={isNavDrawerOpen}
              onClick={() => setIsNavDrawerOpen(true)}
              ml={3}
            >
              <ThreeBarsIcon />
            </DarkButton>
            <NavDrawer
              isOpen={isNavDrawerOpen}
              onDismiss={() => setIsNavDrawerOpen(false)}
            />
          </Flex>
        </Flex>
      </Flex>
    </Sticky>
  )
}

Header.defaultProps = {
  isSearchEnabled: true,
}

function PrimerNavItems({items}) {
  return (
    <Flex alignItems="center" color="blue.2">
      {items.map((item, index) => {
        if (item.children) {
          return (
            <Box ml={4} key={index}>
              <NavDropdown title={item.title}>
                {item.children.map((child) => (
                  <NavDropdownItem key={child.title} href={child.url}>
                    {child.title}
                  </NavDropdownItem>
                ))}
              </NavDropdown>
            </Box>
          )
        }

        return (
          <Link
            key={index}
            href={item.url}
            display="block"
            color="inherit"
            ml={4}
          >
            {item.title}
          </Link>
        )
      })}
    </Flex>
  )
}

export default Header
