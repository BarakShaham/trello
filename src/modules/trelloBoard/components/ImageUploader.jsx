import styled from 'styled-components';
import { Colors } from '../../../ui/Colors';
import { Button, Input } from '../../../ui/Layouts';

const AddImgBtn = styled(Button)`
  border: none;
  background-color: ${Colors.white};
  margin-right: 20px;
  color: ${Colors.darkGrey};
`;
const ImgInput = styled.input`
  display: none;
`;

export const ImageUploader = ({ onChange, columnId, index }) => {
  return (
    <>
      <AddImgBtn
        onClick={() =>
          document.getElementById(`imageUploader-${columnId}-${index}`).click()
        }>
        + Add image
      </AddImgBtn>
      <ImgInput
        type='file'
        name='myImage'
        id={'imageUploader' + '-' + columnId + '-' + index}
        onChange={e => onChange('changeImage', columnId, index, e.target.files)}
      />
    </>
  );
};
