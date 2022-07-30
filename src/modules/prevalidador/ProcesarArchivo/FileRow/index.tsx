import React from 'react';
import Box from '@mui/material/Box';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {IconButton, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StateValidate from '../StateValidate';
import styles from './style';

interface FileRowProps {
  file?: any;
  onDeleteUploadFile: (file: any) => void;
  state;
  estadoRevision: {
    estadoArchivo: string;
    descEstadoEjecucion: string;
    descEstadoArchivo: string;
    idArchivo: string;
  };
  handleClose: () => void;
}

const FileRow: React.FC<FileRowProps> = ({
  file,
  state,
  onDeleteUploadFile,
  estadoRevision,
  handleClose,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: (theme) => `solid 1px ${theme.palette.divider}`,
        mb: 2.5,
        borderRadius: 2.5,
        p: 2.5,
      }}
    >
      <Box sx={{mr: 3}}>
        <InsertDriveFileIcon />
      </Box>
      <Box sx={{flex: 1}}>
        <Typography>{file.path}</Typography>
        <Box
          component='span'
          sx={{
            color: 'text.secondary',
          }}
        >
          {file.size} bytes
        </Box>
      </Box>
      <Box>
        <StateValidate
          state={state}
          onDeleteUploadFile={onDeleteUploadFile}
          file={file}
        />
      </Box>
      {estadoRevision.estadoArchivo === '' ? null : (
        <>
          <Box sx={{width: '400px', mr: '12%', ml: '10px'}}>
            <div className='cabeceraDetalleRevisionArchivo'>
              <Typography
                id='modal-modal-title'
                variant='h6'
                component='h2'
                sx={{
                  fontWeight: 'bold',
                  fontSize: '15px',
                }}
              >
                {estadoRevision.estadoArchivo}
              </Typography>
              <Typography
                id='modal-modal-description'
                className='cabeceraDetalleRevisionArchivo__estadoEjecucion'
                sx={{
                  borderRadius: '3px',
                  background: '#0a8fdc',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  padding: '0 5px',
                }}
              >
                {estadoRevision.descEstadoEjecucion}
              </Typography>
            </div>
            <Typography id='modal-modal-description' sx={{color: 'gray'}}>
              {estadoRevision.descEstadoArchivo}
            </Typography>
            <Typography
              id='modal-modal-description'
              sx={{textAlign: 'end', fontWeight: 'bold'}}
            >
              {estadoRevision.idArchivo}
            </Typography>
          </Box>
        </>
      )}
      <IconButton
        sx={{
          padding: 1.5,
          fontSize: 16,
        }}
        onClick={() => {
          handleClose();
          onDeleteUploadFile(file);
        }}
      >
        <CloseIcon sx={{fontSize: 18}} />
      </IconButton>
      <style jsx>{styles}</style>
    </Box>
  );
};

export default FileRow;
