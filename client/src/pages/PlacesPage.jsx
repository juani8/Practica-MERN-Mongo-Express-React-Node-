import React, { useState, useEffect } from 'react'
import sum from '../assets/plus-solid.svg'
import { useNavigate, Link, useParams } from 'react-router-dom'
import AddPhoto from '../components/AddPhoto'
import CustomButton from '../components/CustomButton'

const PlacesPage = () => {
  const {action} = useParams();
  const [content, setContent] = useState([]);

  // useState for data upload
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState(0);

  const checkbox_options = [
    'Wifi',
    'Parking spot',
    'Pets',
    'TV',
    'Pool',
    'BBQ'
  ]

  const navigate = useNavigate();

  const preInput = (first_text, second_text) => {
    return (
      <>
        <p className='text-xl'>{first_text}</p>
        <p className='text-gray-500'>{second_text}</p>
      </>
    )
  }

  useEffect(() => {
    setContent(content);
  }, [content])

  const addMorePhotos = (event) => {
    event.preventDefault()
    setContent([...content, <AddPhoto key={content.length} />])
  }

  const addLessPhotos = (event) => {
    event.preventDefault()
    setContent(content.slice(0,-1))
  }

  const handlePerksChange = (option) => {
    perks.includes(option) 
    ? setPerks(perks.filter(item => item != option))
    : setPerks([ ...perks, option ])
  }

  async function handleSubmit (event) {
    event.preventDefault();

    try {
      const response = await axios.post('/',
      {
        owner, 
        title, 
        address, 
        photos, 
        description, 
        extraInfo, 
        checkin, 
        checkout, 
        guests
      },
      {withCredentials: true});
      if (response.status == 200) {
				alert('Place created successfully.');
        navigate(0);
			}
    } catch (err) {
      toast.error('Error uploading the place. ' + err);
    }
  }

  return (
    <div>
      {action !== 'new' && (
        <>
          <div className='flex mx-auto mt-9'>
            <p className='mx-auto'>Currently, you have no uploaded places</p>
          </div>
          
          <div className='flex flex-col items-center justify-center mx-auto mt-4 w-2/6' onClick={() => navigate('/account/bookings/new')}>
            <CustomButton text = {'Add a new place'} width={'100%'} img = {sum}  />
          </div>
        </>
      )}
      
      {action === 'new' && (
        <div className='animate__animated animate__zoomIn'>
          <form action="" className='flex flex-col gap-5 m-8 mt-20' onSubmit={handleSubmit}>
            <div className='flex flex-col p-4 gap-3'>
              {preInput('Title','Add a descriptive title')}
              <input 
                className='input__default' 
                type="text" value={title} 
                onChange={(event) => {setTitle(event.target.value)}} 
                placeholder='My lovely place...' 
                required
              />
            </div>

            <div className='flex flex-col p-4 gap-3'>
              {preInput('Address','Add an address to this place')}
              <input 
                className='input__default' 
                type="text" value={address} 
                onChange={(event) => {setAddress(event.target.value)}} 
                placeholder='Address of the place' 
                required
              />
            </div>

            <div className='flex flex-col p-4 gap-3'>
              {preInput('Photos','The more, the best!')}
              <AddPhoto photos = {photos} setPhotos = {setPhotos} />
              {content}
              <div className='flex gap-6'>
                <button onClick={addMorePhotos} className='p-4 border border-gray-500 rounded-2xl w-16 hover:bg-zinc-200'>+</button>
                <button onClick={addLessPhotos} className='p-4 border border-gray-500 rounded-2xl w-16 hover:bg-zinc-200'>-</button>
              </div>
            </div>

            <div className='flex flex-col p-4 gap-3'>
              {preInput('Description','Add a description that fits this plac')}
              <textarea 
                className='input__default' 
                value={description} 
                onChange={(event) => {setDescription(event.target.value)}} 
                cols="30" 
                rows="6"
                required
              >
              </textarea>
            </div>

            <div className='flex flex-col p-4 gap-3'>
              {preInput('Perks','Select all the perks that this place has')}
              <div className='grid grid-cols-3 grid-rows-2 gap-y-5
                              max-[700px]:grid-cols-2 max-[700px]:grid-rows-3'>  
                {checkbox_options.map((option, index) => (
                  <label htmlFor={index} className='flex items-center gap-6 hover:cursor-pointer'>
                    <input 
                      type="checkbox" 
                      id={index} 
                      className='rounded-full'
                      checked={perks.includes(option)}
                      onChange={() => handlePerksChange(option)}
                      required
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className='flex flex-col p-4 gap-3'>
              {preInput('Check in / Check out','Add the date')}
              <div className='grid grid-cols-2 gap-3 justify-items-center
              max-[820px]:flex max-[820px]:flex-col'>
                <label className='flex w-full gap-3 items-center max-[820px]:justify-between' htmlFor="checkin"> 
                  <span>Check-in date</span>
                  <input 
                    className='input__default' 
                    value={checkin} 
                    onChange={(event) => {setCheckin(event.target.value)}} 
                    type="date" 
                    id='checkin' 
                    placeholder='My lovely place...' 
                    required
                  />
                </label>
                <label className='flex w-full gap-3 items-center max-[820px]:justify-between' htmlFor="checkout"> 
                  <span>Check-out date</span>
                  <input 
                    className='input__default' 
                    value={checkout} 
                    onChange={(event) => {setCheckout(event.target.value)}} 
                    type="date" 
                    id='checkout' 
                    placeholder='My lovely place...' 
                    required
                  />
                </label>
              </div>
            </div>
            
            <div className='flex flex-col p-4 gap-3'>
              {preInput('Guests','Add the maximum number of guests')}
              <input 
                className='input__default max-w-[70px]' 
                value={guests} 
                onChange={(event) => {setGuests(event.target.value)}} 
                type="number" 
                min="1" 
                max="25" 
                required
              />
            </div>
            <CustomButton className='m-4 py-4 text-white border font-normal rounded-lg bg_default' type='submit' text={'Submit'}/>
          </form>
        </div>
      )}
    </div>
  )
};

export default PlacesPage;