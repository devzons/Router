import { useNavigate } from 'react-router-dom'

export const ContactEu = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    console.log('-------')
    return navigate('/')
  }
  return (
    <>
      <div className='component'>EU</div>
    </>
  )
}
