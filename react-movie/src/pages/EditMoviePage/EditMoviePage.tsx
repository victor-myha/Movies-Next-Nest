import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { IconDownload } from '../../assets/icons';
import { AppInput, Header } from '../../commons';
import { MAX_FILE_SIZE, STORAGE } from '../../utils/constants';
import { storage } from '../../utils/firebase';
import { Content, Error, UploadButton } from './_components';
import { getSafeFileName } from './helpers';

type PropsType = {
  isNew: boolean;
};

const EditMoviePage: FC<PropsType> = ({ isNew }) => {
  const hiddenFileInput = useRef<HTMLElement | null>(null) as MutableRefObject<HTMLInputElement>;
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isFileToLarge = (uploadedFile?.size || 0) > MAX_FILE_SIZE;
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const onUpload = (fileUrl: string) => {
      setFileUrl(fileUrl);
      console.log(fileUrl);
    };

    const onSubmit = () => {
      if (!uploadedFile) return;
      setIsLoading(true);

      const safeFileName = getSafeFileName(uploadedFile.name);
      const storageRef = ref(storage, `${STORAGE.MOVIES}/${safeFileName}`);

      const uploadTask = uploadBytesResumable(storageRef, uploadedFile);

      uploadTask.on(
        'state_changed',
        () => {},
        error => setError(error.message),
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then(downloadURL => onUpload(downloadURL))
            .finally(() => setIsLoading(false));
        },
      );
    };
  }, [uploadedFile]);

  const handleUploadClick = () => {
    if (!isLoading) {
      hiddenFileInput.current && hiddenFileInput.current.click();
    }
  };

  return (
    <>
      <Header>Create a new movie</Header>
      <UploadButton onClick={handleUploadClick}>
        {!fileUrl && <h6>Drop an image here</h6>}
        <IconDownload />
        {isFileToLarge && <Error>Max file size 5 Mb</Error>}
        {error && <Error>{error}</Error>}
      </UploadButton>
      <img alt='' src={fileUrl} style={{ width: '200px', aspectRatio: 1 }} />
      <input
        type='file'
        accept='image/*'
        ref={hiddenFileInput}
        style={{ display: 'none' }}
        onChange={file => !!file.target.files && setUploadedFile(file.target.files[0] || null)}
      />
      <Content>
        <AppInput />
        <AppInput />
      </Content>
    </>
  );
};

export default EditMoviePage;
