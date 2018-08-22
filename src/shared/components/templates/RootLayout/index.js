import Loading from 'shared/components/molecules/Loading'

const RootLayout = ({ children }) => (
  <>
    {children}
    <Loading />
  </>
)

export default RootLayout