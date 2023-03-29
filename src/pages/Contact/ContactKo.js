import { useNavigate } from 'react-router-dom'

export const ContactKo = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    console.log('-------')
    return navigate('/')
  }
  return (
    <>
      <div className='component'>한국</div>
    </>
  )
}
