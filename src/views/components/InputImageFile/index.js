/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './style.scss';

const InputImageFile = (props) => {
  const {
    id,
    placeholder,
    setState,
    value,
    width,
    styleContainer,
    styleLabel,
  } = props;
  const [image, setImage] = useState(value);

  const imagePreview = (param) => {
    return (
      <div className={`addEdit_imagePreview ${width}`}>
        <img src={image} alt='preview' className='w-full' />
      </div>
    );
  };


  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result)
      setState(reader.result)
    };
  };

  const handleOnChange = (e) => {
    const file = e.currentTarget.files[0];
    previewFile(file);
  };

  return (
    <div className={`text-white flex items-center ${styleContainer}`}>
      {image ? imagePreview(image) : null}
      <div className={`flex flex-col items-center ${styleLabel}`}>
        <label
          htmlFor={id}
          className='relative font-bold text-16 bg-red-primary py-4 px-8 rounded-md cursor-pointer hover:bg-red-primary-d'
        >
          {placeholder}
          <input
            id={id}
            type='file'
            className='absolute left-0 z-negative1 opacity-0'
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </label>
      </div>
    </div>
  );
};

InputImageFile.propTypes = {
  id: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  styleContainer: PropTypes.string,
  styleLabel: PropTypes.string,
};

InputImageFile.defaultProps = {
  styleContainer: '',
  styleLabel: '',
};

export default InputImageFile;
