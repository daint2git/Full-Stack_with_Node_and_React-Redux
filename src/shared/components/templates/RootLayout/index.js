import Loading from 'shared/components/molecules/Loading'

export default function(props) {
  return (
    <>
      {props.children}
      <Loading />
    </>
  )
}