import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModel({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened = {modalOpened}
      onClose = {()=> setModalOpened(false)}
      size="55%"
    >
     <form className='infoform'>
        <h3>Your info</h3>

        <div>
        <input type="text" className='infoInput' name="firstname" placeholder='First Name' />
        <input type="text" className='infoInput' name="lastname" placeholder='Last Name' />
        </div>

        <div>
        <input type="text" className='infoInput' name="worksat" placeholder='Works at' />
        </div>

        <div>
        <input type="text" className='infoInput' name="livesin" placeholder='Lives in' />
        <input type="text" className='infoInput' name="country" placeholder='Country' />
        </div>

        <div>
        <input type="text" className='infoInput' name="relStatus" placeholder='RelationShip Status' />
        </div>

        <div>
            Profile Image
            <input type="file" name='profileImage' />
            Cover Image
            <input type="file" name='coverImage' />
        </div>

<button  className='button info-button'>Update</button>
     </form>
    
    </Modal>
  );
}

export default ProfileModel