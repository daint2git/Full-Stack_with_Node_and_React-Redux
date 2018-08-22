import Details from 'shared/components/atoms/Details'
import Figure from 'shared/components/atoms/Figure'
import reactDiffusioner from 'shared/components/utils/reactDiffusioner'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const ITEMS_1 = [
  { label: 1 },
  { label: 2 },
  { label: 3 },
  { label: 4 },
  { label: 5 },
]

const ITEMS_2 = [
  { label: 1 },
  { label: 2 },
  { label: 3 },
  { label: 4 },
  { label: 5 },
  { label: 6 },
  { label: 7 },
  { label: 8 },
  { label: 9 },
  { label: 10 },
  { label: 11 },
  { label: 12 },
  { label: 13 },
  { label: 14 },
  { label: 15 },
]

const FlexItem = ({ label, children, style }) => (
  <div className={loadClass`item`} style={style}>{`Flex item ${children || label}`}</div>
)

const FlexItems = reactDiffusioner(FlexItem)

const FlexContainer = ({ caption, children, list = ITEMS_1, style }) => (
  <Figure caption={caption}>
    <div className={loadClass`root`} style={style}>
      {children || <FlexItems list={list} />}
    </div>
  </Figure>
)

const Flexbox = props => (
  <Details summary="Flexbox">
    <Details summary="The flex container properties are:">
      <Details summary="flex">
        <FlexContainer caption="display: flex" />
        <FlexContainer style={{ justifyContent: 'center', alignItems: 'center' }} caption="justify-content: center, align-items: center" />
      </Details>
      <Details summary="flex-direction">
        <FlexContainer style={{ flexDirection: 'row' }} caption="flex-direction: row (this is default)" />
        <FlexContainer style={{ flexDirection: 'row-reverse' }} caption="flex-direction: row-reverse" />
        <FlexContainer style={{ height: '100%', flexDirection: 'column' }} caption="flex-direction: column" />
        <FlexContainer style={{ height: '100%', flexDirection: 'column-reverse' }} caption="flex-direction: column-reverse" />
      </Details>
      <Details summary="flex-wrap">
        <FlexContainer style={{ height: '100%', flexWrap: 'wrap' }} caption="flex-wrap: wrap" list={ITEMS_2} />
        <FlexContainer style={{ height: '100%', flexWrap: 'nowrap' }} caption="flex-wrap: nowrap (this is default)" list={ITEMS_2} />
        <FlexContainer style={{ height: '100%', flexWrap: 'wrap-reverse' }} caption="flex-wrap: wrap-reverse" list={ITEMS_2} />
      </Details>
      <Details summary="flex-flow">
        <FlexContainer style={{ flexFlow: 'row wrap' }} caption="flex-flow: row wrap" list={ITEMS_2} />
        <FlexContainer style={{ flexFlow: 'column wrap' }} caption="flex-flow: column wrap" list={ITEMS_2} />
      </Details>
      <Details summary="justify-content">
        <FlexContainer style={{ justifyContent: 'center' }} caption="justify-content: center" />
        <FlexContainer style={{ justifyContent: 'flex-start' }} caption="justify-content: flex-start (this is default)" />
        <FlexContainer style={{ justifyContent: 'flex-end' }} caption="justify-content: flex-end" />
        <FlexContainer style={{ justifyContent: 'space-around' }} caption="justify-content: space-around" />
        <FlexContainer style={{ justifyContent: 'space-between' }} caption="justify-content: space-between" />
      </Details>
      <Details summary="align-items">
        <FlexContainer style={{ alignItems: 'center' }} caption="align-items: center" />
        <FlexContainer style={{ alignItems: 'flex-start' }} caption="align-items: flex-start" />
        <FlexContainer style={{ alignItems: 'flex-end' }} caption="align-items: flex-end" />
        <FlexContainer style={{ alignItems: 'stretch' }} caption="align-items: stretch (this is default)" />
        <FlexContainer style={{ alignItems: 'baseline' }} caption="align-items: baseline">
          <FlexItem style={{ height: '100px' }}>1</FlexItem>
          <FlexItem style={{ height: '150px' }}>2</FlexItem>
          <FlexItem style={{ height: '50px' }}>3</FlexItem>
          <FlexItem style={{ height: '10px' }}>4</FlexItem>
          <FlexItem style={{ height: '200px' }}>5</FlexItem>
        </FlexContainer>
      </Details>
      <Details summary="align-content">
        <FlexContainer style={{ flexWrap: 'wrap', alignContent: 'center' }} caption="align-content: center, flex-wrap: wrap" list={ITEMS_2} />
        <FlexContainer style={{ flexWrap: 'wrap', alignContent: 'flex-start' }} caption="align-content: flex-start, flex-wrap: wrap" list={ITEMS_2} />
        <FlexContainer style={{ flexWrap: 'wrap', alignContent: 'flex-end' }} caption="align-content: flex-end, flex-wrap: wrap" list={ITEMS_2} />
        <FlexContainer style={{ flexWrap: 'wrap', alignContent: 'space-around' }} caption="align-content: space-around, flex-wrap: wrap" list={ITEMS_2} />
        <FlexContainer style={{ flexWrap: 'wrap', alignContent: 'space-between' }} caption="align-content: space-between, flex-wrap: wrap" list={ITEMS_2} />
        <FlexContainer style={{ flexWrap: 'wrap', alignContent: 'stretch' }} caption="align-content: stretch (this is default), flex-wrap: wrap" list={ITEMS_2} />
      </Details>
    </Details>
    <Details summary="The flex item properties are:">
      <Details summary="order">
        <FlexContainer>
          <FlexItem style={{ order: 3 }}>1 (order: 3)</FlexItem>
          <FlexItem style={{ order: 5 }}>2 (order: 5)</FlexItem>
          <FlexItem style={{ order: 1 }}>3 (order: 1)</FlexItem>
          <FlexItem style={{ order: 2 }}>4 (order: 2)</FlexItem>
          <FlexItem style={{ order: 4 }}>5 (order: 4)</FlexItem>
        </FlexContainer>
      </Details>
      <Details summary="flex-grow">
        <FlexContainer>
          <FlexItem style={{ flexGrow: 1 }}>1 (flex-grow: 1)</FlexItem>
          <FlexItem style={{ flexGrow: 1 }}>2 (flex-grow: 1)</FlexItem>
          <FlexItem style={{ flexGrow: 5 }}>3 (flex-grow: 5)</FlexItem>
          <FlexItem style={{ flexGrow: 2 }}>4 (flex-grow: 2)</FlexItem>
          <FlexItem style={{ flexGrow: 0 }}>5 (flex-grow: 0)</FlexItem>
        </FlexContainer>
      </Details>
      <Details summary="flex-shrink">
        <FlexContainer>
          <FlexItem>1</FlexItem>
          <FlexItem style={{ flexShrink: 0 }}>2 (flex-shrink: 0)</FlexItem>
          <FlexItem>3</FlexItem>
          <FlexItem>4</FlexItem>
          <FlexItem>5</FlexItem>
        </FlexContainer>
      </Details>
      <Details summary="flex-basis">
        <FlexContainer>
          <FlexItem style={{ flexBasis: '10%' }}>1 (flex-basis: 10%)</FlexItem>
          <FlexItem style={{ flexBasis: '50%' }}>2 (flex-basis: 50%)</FlexItem>
          <FlexItem style={{ flexBasis: '10%' }}>3 (flex-basis: 10%)</FlexItem>
          <FlexItem style={{ flexBasis: '10%' }}>4 (flex-basis: 10%)</FlexItem>
          <FlexItem style={{ flexBasis: '20%' }}>5 (flex-basis: 20%)</FlexItem>
        </FlexContainer>
      </Details>
      <Details summary="flex ">
        <FlexContainer caption="shorthand property for the flex-grow, flex-shrink, and flex-basis properties">
          <FlexItem>1</FlexItem>
          <FlexItem style={{ flex: '0 0 200px' }}>2 (flex: 0 0 200px)</FlexItem>
          <FlexItem>3</FlexItem>
          <FlexItem>4</FlexItem>
          <FlexItem>5</FlexItem>
        </FlexContainer>
      </Details>
      <Details summary="align-self ">
        <FlexContainer caption="align-self: flex-start, align-self: flex-end">
          <FlexItem>1</FlexItem>
          <FlexItem style={{ alignSelf: 'flex-end' }}>2 (align-self: flex-start)</FlexItem>
          <FlexItem>3</FlexItem>
          <FlexItem>4</FlexItem>
          <FlexItem style={{ alignSelf: 'flex-start' }}>5 (align-self: flex-end)</FlexItem>
        </FlexContainer>
        <FlexContainer caption="align-self: center">
          <FlexItem>1</FlexItem>
          <FlexItem style={{ alignSelf: 'center' }}>2 (align-self: center)</FlexItem>
          <FlexItem>3</FlexItem>
          <FlexItem>4</FlexItem>
          <FlexItem>5</FlexItem>
        </FlexContainer>
      </Details>
    </Details>
  </Details>
)

export default Flexbox